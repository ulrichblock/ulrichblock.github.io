---
title: "WordPress unleashed: Memcached + Cachify"
tags: ["wordpress", "nginx"]
published: true
date: "2014-09-09"
---

Alle bisherigen Maßnahmen hatten das Ziel PHP, Datenbank usw. schneller zu machen. Jeden Request PHP, MariaDB/MySQL und Elasticsearch gehen zu lassen ist eine Verschwendung von Ressourcen. Deswegen werden wir nun den Key Value Store Memcached und das Plugin Cachify installieren. Im Anschluss wird Nginx umkonfiguriert, damit er gecachte Inhalte direkt aus dem Memcached Server beziehen kann.

### Memcached

Memcached wird, wie alles andere auch über APT installiert

```bash
apt-get install memcached
```

Je nach Anforderungen sollte man noch die Config **/etc/memcached.conf** anpassen. Mein Blog braucht keine 32MB Ram. Ein anderes Setup, könnte es jedoch brauchen. Dazu könnte die gleichzeitige Verbindungsanzahl von 1024 für manche zu gering sein

```
# memory
-m 32

# Limit the number of simultaneous incoming connections. The daemon default is 1024
-c 4096
```

Nach einer Änderung nicht vergessen den Memcached Server neu zu starten.

### Cachify

Das [Plugin Cachify](https://wordpress.org/plugins/cachify/) installiert man am besten über den Plugin Manager von WordPress.

Setzt man eine alte Version von Cachify ein, sollte man diese auf den aktuellsten Stand bringen. Hintergrund ist, dass der Chachify Autor [Sergej Müller](http://wpcoder.de/) die Kompatibilität mit HHVM nach meinem Hinweis schnell hergestellt hat.  
Alternativ muss man die Datei **"cachify_memcached.class.php"** von Cachify noch umschreiben, damit es unter HHVM läuft. Grund ist, dass dass die [Methode setOptions nicht unterstützt wird](http://docs.hhvm.com//manual/en/memcached.setoptions.php).

```php
		/* Options
		self::$_memcached->setOptions(
			array(
				Memcached::OPT_COMPRESSION => false,
				Memcached::OPT_BUFFER_WRITES => true,
				Memcached::OPT_BINARY_PROTOCOL => true
			)
		); */
		self::$_memcached->setOption(Memcached::OPT_COMPRESSION, false);
		self::$_memcached->setOption(Memcached::OPT_BUFFER_WRITES, true);
		self::$_memcached->setOption(Memcached::OPT_BINARY_PROTOCOL, true);
```

Bei der anschließenden Cachify Konfiguration ist es zwingend erforderlich die **Cache method** auf **"Memcached"** zu stellen:[![cachify](../../uploads/2014/09/cachify.png)](/wp-content/uploads/2014/09/cachify.png)

Die Gültigkeit stellen wir möglichst hoch ein, da ein Flush des Caches eigentlich kaum benötigt werden wird. Des Weiteren lassen wir den Cache bei neuen Kommentaren löschen.

In meinem System können sich nur Autoren und Administratoren einloggen. Deswegen werden wir diese von dem Cache ausnehmen. Wer eine größere Benutzerbasis hat, sollte diesen Haken lieber nicht setzen.

Um die Auslieferung von HTML zu beschleunigen aktivieren wir zu guter Letzt den HTML Minimierer. Javascript und CSS werden wir zu einem späteren Zeitpunkt mittels eines anderen Plugins komprimieren und zusammenfassen.

### Nginx

Der Nginx Vhost muss nun wie folgt angepasst werden

```
server {
    listen 192.168.178.48:80;

    root /var/www/wordpress/htdocs;
    index index.php index.html index.htm;

    access_log /var/www/wordpress/logs/access.log;
    error_log  /var/www/wordpress/logs/error.log;

    server_name "";

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

    location ~* \.(jpe?g|gif|png|ico|css|zip|tgz|gz|rar|bz2|doc|xls|exe|pdf|ppt|txt|tar|mid|midi|wav|bmp|rtf|js|swf|avi|mp3|mov|docx|pptx|xlsx|cfg)$ {
        expires max;
        access_log off;
        log_not_found off;
    }

	location ~ \.(hh|php)$ {
        fastcgi_keep_conn on;
        fastcgi_pass   unix:/var/run/hhvm/server.sock;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include        fastcgi_params;
    }
}
```

___
Weiter geht es mit [WordPress unleashed: WordPress unleashed: Autoptimize JS + CSS](/wordpress-unleashed-autoptimize-js-css/ "Wordpress unleashed: WordPress unleashed: Autoptimize JS + CSS")

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

