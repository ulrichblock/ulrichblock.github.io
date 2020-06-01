---
title: "WordPress beschleunigen mit Wp Redis Cache"
tags: ["wordpress"]
published: true
date: "2013-09-08"
---

Es war mal wieder Bastelzeit. Diesmal bin ich über die WordPress Erweiterung [Wp Redis Cache](https://github.com/BenjaminAdams/wp-redis-cache) gestolpert. Das Plugin Wp Redis Cache nutzt den Key Value Store [Redis](http://redis.io/) als Cache.

Das Prinzip ist simpel. Ruft man eine Seite auf, wird sie in den Cache geschrieben. Dieser wird bei Redis im Ram vorgehalten, wodurch langsame Festplattenzugriffe entfallen. Rufe ich die Seite nun ein zweites Mal auf, wird der WordPress Core und die MYSQL/MariaDB im Hintergrund gar nicht erst angefragt, sondern gleich der Redis.

Die Vorher Nachher Werte sind recht eindeutig.

Vorher:

```
<!-- Cache system by Benjamin Adams. Page generated in 0.43773 seconds. -->
```

Nachher:

```
<!-- Cache system by Benjamin Adams. Page generated in 0.00935 seconds. -->
```

Das sind die Werte, die ich mit meinem kleinen Server4You Vserver erreichen konnte. Ein Bekannter war von der Idee recht angetan. So konnte ich wir gleich mal erforschen, was ein dedizierter Server an Vorsprung herausholen kann.

Vorher:

```
<!-- Cache system by Benjamin Adams. Page generated in 0.57966 seconds. -->
```

Nachher:

```
<!-- Cache system by Benjamin Adams. Page generated in 0.0019 seconds. -->
```

Die Installation ist nicht so ganz straight forward. Zum einen muss man etwas in den PHP Dateien schreiben, zum anderen muss in der Lage sein, Redis auf den Server zu installieren.

Bei Linux Debian bzw. Ubuntu geschieht das Installieren des Redis ganz normal über apt. Der Server sollte nach der Installation von selber gestartet werde.

```bash
apt-get install redis-server
```

Im zweiten Schritt laden wir die PHP Dateien hoch. Die index-wp-redis.php kommt in das Hauptverzeichnis, der Ordner wp-redis-cache samt Inhalt wandert nach /htdocs/wp-content/plugins.

Nun bearbeitet man die index-wp-redis.php. Die Werte müssen natürlich auf eure Bedingen angepasst werden.

```php
$seconds_cache_redis = 60 * 60 * 12; // 12 hours by default, you can change in this in wp-admin options page
$ip_of_your_website  = '127.0.0.1'; //You must set this to the IP of your website
$secret_string       = "ALSKdjgaklsgkhasdjhwASD";
```

Jetzt noch die index.php bearbeiten.

```
<?php
require('index-wp-redis.php');
//define('WP_USE_THEMES', true);
//require('./wp-blog-header.php');
?>
```

Im letzten Schritt logt man sich als Admin ein und aktiviert das Plugin in der Pluginübersicht.

