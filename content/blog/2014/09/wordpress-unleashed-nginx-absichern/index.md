---
title: "WordPress unleashed: Nginx absichern"
tags: ["wordpress", "nginx"]
published: true
date: "2014-09-09"
---

Im letzten Schritt sichern wir über den Nginx die Installation weiter ab.

### Header Sicherheit

Mit zusätzlichen Headern, die vom Nginx gesendet werden, kann man manche Angriffsvektoren schließen

```
# Falls SSL verwendet wird, sollte man diesen Header setzen, damit der Browser beim erneuten Eintippen automatisch auf die geischerte Variante springt.
#add_header Strict-Transport-Security "max-age=31536000;";

# https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options
# Verhindert Click Jacking Angriffe
add_header X-Frame-Options SAMEORIGIN;

# Verbietet Content Sniffing
add_header X-Content-Type-Options nosniff;

# Falls ein User aus Versehen, den Schutz bei sich deaktiviert hat, kann man ihn hiermit wieder erzwingen
add_header X-XSS-Protection "1; mode=block";
```

### Unstimmige Requests blocken

```
# Andere Request Methods machen bei WordPress keinen Sinn
if ( $request_method !~ ^(GET|HEAD|POST)$ ) {
    return 404;
}

# Zugriff auf bestimmte Dateien sperren
location ~ /(\.|wp-config.php|liesmich.html|readme.html) {
    return 404;
}

# Was nicht PHP ist, verwerfen
if ($request_filename ~* \.(aspx|jsp|cgi)$) {
    return 404;
}
```

### Limit Request

Um einen Denial of Service (DOS) zu verhindern, führen wir ein Rate Limiting ein, wie in dem Beitrag [Nginx: Denial Of Service Abwehr](/nginx-denial-service-abwehr/ "Nginx: Denial Of Service Abwehr") beschrieben.

### WAF NAXSI

Als erstes aktivieren wir den auskommentierten Naxsi Beitrag in der **/etc/nginx/nginx.conf**

```
include /etc/nginx/naxsi_core.rules;
```

Dann wird die PHP Loaction des Vhosts um folgende Include für die Datei **naxsi-wp.rules** erweitert, in welche nachher die Ausnahmen kommen.

```
include /etc/nginx/naxsi.rules;
include /etc/nginx/naxsi-wp.rules;
```

Angelegt wird die Datei mit

```bash
touch /etc/nginx/naxsi-wp.rules
```

Am Anfang sollte man die Naxsi nur im Learning Mode laufen lassen und so ziemlich alle Funktionen von WordPress einmal durchklicken. Nach einiger Zeit des Benutzens dürften ausreichend Informationen im Error Log gelandet sein. Damit wird es Zeit Nx_util zu installieren. Wir brauchen zuerst Python. Dann laden wir das aktuelle Repository auf den Server und installieren das Tool.

```bash
apt-get install python
cd /root
wget wget https://naxsi.googlecode.com/files/nx_util-1.1.tgz
tar xfvz nx_util-1.1.tgz
cd nx_util-1.1/nx_util/
chmod +x setup.py
./setup.py build
./setup.py install
```

Danach bestimmen wir unsere IP und machen einen Extrakt von **/var/www/wordpress/logs/error.log**, den wir im Folgenden untersuchen

```bash
grep '1.1.1.1' /var/www/wordpress/logs/error.log > /root/error.log
nx_util.py -d wordpress -l /root/error.log
nx_util.py -d wordpress -o > /etc/nginx/naxsi-wp.rules
```

### Kompletter Vhost

```
server {

    listen 192.168.178.48:80;

    root /var/www/wordpress/htdocs;
    index index.php index.html index.htm;

    access_log /var/www/wordpress/logs/access.log;
    error_log  /var/www/wordpress/logs/error.log;

    server_name "";

    # Falls SSL verwendet wird, sollte man diesen Header setzen, damit der Browser beim erneuten Eintippen automatisch auf die geischerte Variante springt.
    #add_header Strict-Transport-Security "max-age=31536000;";

    # https://developer.mozilla.org/en-US/docs/HTTP/X-Frame-Options
    # Verhindert Click Jacking Angriffe
    add_header X-Frame-Options SAMEORIGIN;

    # Verbietet Content Sniffing
    add_header X-Content-Type-Options nosniff;

    # Falls ein User aus Versehen, den Schutz bei sich deaktiviert hat, kann man ihn hiermit wieder erzwingen
    add_header X-XSS-Protection "1; mode=block";

    # Andere Header machen bei WordPress keinen Sinn
    if ( $request_method !~ ^(GET|HEAD|POST)$ ) {
        return 404;
    }

    # Zugriff auf bestimmte Dateien sperren
    location ~ /(\.|wp-config.php|liesmich.html|readme.html) {
        return 404;
    }

    # Was nicht PHP ist, verwerfen
    if ($request_filename ~* \.(aspx|jsp|cgi)$) {
        return 404;
    }

    location / {

        error_page 404 405 502 503 504 = @nocache;

        if ( $query_string ) {
        return 405;
        }

        if ( $request_method = POST ) {
        return 405;
        }

        if ( $request_uri ~ "/wp-" ) {
        return 405;
        }

        if ( $http_cookie ~ (wp-postpass|wordpress_logged_in|comment_author)_ ) {
        return 405;
        }

        default_type text/html;

        set $memcached_key $host$uri;
        memcached_pass 127.0.0.1:11211;

    }

    location @nocache {
        try_files $uri $uri/ /index.php?$args;
    }

    location /RequestDenied {
        return 404;
    }

    location ~* \.(jpe?g|gif|png|ico|css|zip|tgz|gz|rar|bz2|doc|xls|pdf|ppt|txt|tar|bmp|rtf|js|docx|pptx|xlsx|cfg)$ {
        expires max;
        access_log off;
        log_not_found off;
    }

    location ~ \.(hh|php)$ {

        include /etc/nginx/naxsi.rules;
        include /etc/nginx/naxsi-wp.rules;

        limit_req zone=dynamic burst=20 nodelay;

        fastcgi_keep_conn on;
        fastcgi_pass unix:/var/run/hhvm/server.sock;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```

___
### Alle Teile dieser Serie

- [WordPress unleashed: Konzept](/wordpress-unleashed-konzept/ "Wordpress unleashed: Konzept")
- [WordPress unleashed: Testsystem](/wordpress-unleashed-testsystem/ "Wordpress unleashed: Testsystem")
- [WordPress unleashed: LEMP Stack](/wordpress-unleashed-lemp-stack/ "Wordpress unleashed: LEMP Stack")
- [WordPress unleashed: Datenbank + WordPress](/wordpress-unleashed-datenbank-wordpress/ "Wordpress unleashed: Datenbank + WordPress")
- [WordPress unleashed: Memcached + Cachify](/wordpress-unleashed-memcached-cachify/ "Wordpress unleashed: Memcached + Cachify")
- [WordPress unleashed: WordPress unleashed: Autoptimize JS + CSS](/wordpress-unleashed-autoptimize-js-css/ "Wordpress unleashed: WordPress unleashed: Autoptimize JS + CSS")
- [WordPress unleashed: Elasticsearch](/wordpress-unleashed-elasticsearch/ "Wordpress unleashed: Elasticsearch")
- [WordPress unleashed: WordPress Plugins](/wordpress-unleashed-wordpress-plugins/ "Wordpress unleashed: WordPress Plugins")
- [WordPress unleashed: Performance Tests](/wordpress-unleashed-performance-tests/ "Wordpress unleashed: Performance Tests")
- [WordPress unleashed: Nginx absichern](/wordpress-unleashed-nginx-absichern/ "Wordpress unleashed: Nginx absichern")

