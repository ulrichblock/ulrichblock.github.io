---
title: "wp-cron.php?doing_wp_cron=1334444885"
tags: ["wordpress"]
published: true
date: "2012-04-20"
---

WordPress hat eine Standardeigenschaft, die man erst im Log des Webservers sieht. Alle X Seitenaufrufe wir die Datei *wp-cron.php* aufgerufen. Im Log des Webservers sieht es dann so aus:  
>1.1.1.1 - - [15/Apr/2012:01:08:05 +0200] "POST /wp-cron.php?doing_wp_cron=1334444885 HTTP/1.0" 200 - "-" "WordPress/3.3.1;"

Da das Intervall zwischen den einzelnen Zugriffen recht kurz ist, sind die Einträge im Log sehr zahlreich.

Die Datei ist meines Wissens für Dinge wie das versenden von E-Mails bei neuen Kommentaren zuständig.

Bei einem Blog der nur ein paar hundert Aufrufe in der Stunde hat und bei dem nur ab und zu Kommentare gepostet werden ist diese Funktion demnach eine Recourcenverschwendung.

Eine Alternative musste demnach her.

Als erstes habe ich die Funktion ganz deaktiviert, indem ich folgendes in die wp-config.php eingetragen habe:

```php
define('DISABLE_WP_CRON', true);
```

Im nächsten Schritt habe ich einen Cronjob angelegt, der die Datei auf der Console ausführt:

```
0 */1 * * * cd /homepages/domain.tld/httpd && timeout=120 php ./wp-cron.php
```

Der Cronjob ruft die Datei stündlich auf und ich kann weiterhin alle Funktionen wahrnehmen. Der wesentliche Unterschied liegt da drin, das der Webserver nicht alle X Aufrufe die Datei aufruft.

