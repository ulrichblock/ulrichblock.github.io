---
title: "Nginx: Denial Of Service Abwehr"
tags: ["security", "nginx"]
published: true
date: "2014-06-14"
---

Vor ein paar Tagen gab es ein Problem durch einen Denial Of Service (DOS). Einer der unzähligen SEO Agenturen crawlte die betroffene Seite mehr aggressiv. Die robots.txt wurde dabei natürlich ignoriert.

Der Unterschied eines DOS zu einem DDOS liegt darin, dass hier die CPU, Ram bzw. Festplatte überlastet werden, während man bei einem DDOS die Bandbreite der Server überlastet. So kann bei einem DOS schon eine kleine 1000er DSL Leitung reichen, wenn man eine Unterseite auf dem Server identifizieren kann, die die Hardware des Servers an seine Grenzen bringt.

Im konkreten Fall war ein etwas größeres Setup betroffen, das mit Hardware Load Balancer, mehreren App Servern, die auf ein DB Cluster und spezielle Suchserver zugreifen, arbeitet. Auf den App Servern läuft dabei der Nginx als Webserver. Im Grunde also ein recht Leistungsstarkes System.

Damit der Traffik gar nicht erst bei den App Servern ankommt, wäre hier die beste Lösung die aggressive IP direkt am Load Balancer zu sperren. Im konkreten Fall war das aber auf Grund zwingender Prozesse, Zuständigkeiten und der Urlaubszeit leider nicht auf die Schnelle möglich.

Ein schneller Workaround musste also her. Da zu dem Zeitpunkt noch nicht ganz klar war, wie viele IPs beteiligt sind bzw. sein werden und die SEO Agentur ihren Bot klar über den User Agent erkennbar machte, wurde eine Sperre über den User Agent implementiert. Recht weit oben im Server Block wurde folgendes eingetragen:

```
if ($http_user_agent ~* (BadBot) ) { return 403;}
```

Nach dem Eintragen, wurde die Config getestet und, da der Syntax akzeptiert wurde, der Server neu geladen:

```
/etc/init.d/nginx configtest
/etc/init.d/nginx reload
```

Nachdem die Änderung ging der Load sofort zurück. Da man die Logs nicht mit hundert tausenden Logeinträgen des Bots voll haben wollte, noch das Logging deaktivieren:

```
if ($http_user_agent ~* (BadBot) ) {
 access_log /dev/null;
 error_log /dev/null crit;
 return 403;
}
```

Eine Lösung über die IP empfiehlt es sich eine extra Datei mit der Liste an bösen IPs anzulegen und diese dann zu includen. In der Liste sehen Einträge dann so aus:

```

# Blocke einzelne IP
deny 1.2.3.4;

# Blocke ein ganzes Subnetz
deny 1.2.3.0/24;
```

Der Include im server Block:

```
include /etc/nginx/bad_ips.conf;
```

Wenn Nginx hinter einem Load Balancer ist, muss man noch auf den X-Forwarded-For Header zugreifen:

```
// Hier die Load Balancer IP angeben
set_real_ip_from 1.1.1.1;
real_ip_header X-Forwarded-For;
// Die Liste includen
include /etc/nginx/bad_ips.conf;
```

Mit dieser Lösung kann man aber immer nur reagieren, wenn es bereits zu spät, und der Service beeinträchtigt ist. Um einen Denial Of Service von vornherein zu erschweren, kann man bei Nginx mit Rate Limiting arbeiten. Dabei sollte man zwischen Location für statische und dynamisch Inhalte unterscheiden. Ein zu strenges Limit auf JS, Bilder etc. kann den Seitenaufbau verzögern, oder sogar verhindern.

Zuerst erstellen wir im http block in der */etc/nginx/nginx.conf* die Limit Zonen *static* und *dynamic*

```
limit_req_zone $binary_remote_addr zone=static:20m rate=20r/s;
limit_req_zone $binary_remote_addr zone=dynamic:20m rate=10r/s;
```

In der Location für die Zugriffe, auf Rails, PHP, NodeJS, oder wie man dynamische Inhalte auch immer ansprechen möchte, aktiviert man dann die vorher definierte Zone. Dabei habe ich hier einen Burst von 20 Zugriffen erlaubt. Der Zusatz *nodelay* hat zur Folge, dass bei Erreichen des Limits mit 403 geantwortet wird, wenn das Limit erreicht wurde. Ohne den Zusatz wird mit der Antwort geantwortet, bis eine Antwort wieder erlaubt wäre. Wenn man mit Anfragen bombadiert wird, kann es zu hunderten, wenn nicht gar tausenden offenen Verbindungen kommen, wenn man *nodelay* weg lässt. Das folgende Beispiel wäre für PHP:

```

location ~ \.php$ {
   limit_req zone=dynamic burst=20 nodelay;
   include /etc/nginx/fastcgi_params;
   fastcgi_pass unix:/tmp/php5-fpm.sock;
}
```

Wenn Nginx hinter einem Load Balancer steht, muss man auch hier mit *real_ip_header* arbeiten. Ansonsten werden sehr schnell, sämtliche Anfragen blockiert.

