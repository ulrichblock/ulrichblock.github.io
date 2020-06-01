---
title: "WordPress unleashed: Datenbank + WordPress"
tags: ["wordpress"]
published: true
date: "2014-09-09"
---

Nach der Installation des LEMP Stacks wechseln wir auf die SQL Konsole, auf der wir die notwendige Datenbank und Benutzer anlegen. Die Konsole wird aufgerufen mit

```bash
mysql -u root -p
```

Dann die Datenbank und Benutzer anlegen, so wie die Rechte einmal Flushen

```sql
CREATE DATABASE wordpress;

CREATE USER wordpress;

GRANT ALL ON wordpress.* TO 'wordpress'@'localhost' IDENTIFIED BY 'db_passwort';

FLUSH PRIVILEGES;
```

### WordPress installieren

Da die Installation von WordPress einfach und ausreichend dokumentiert ist, werde ich nicht weiter darauf eingehen. Der Upload der Dateien erfolgt, wie oben beschrieben mittels SFTP. Datenbank und User wurden einen Schritt weiter oben beschrieben.

### Test Daten einfügen

Damit wir aussagekräftige Tests fahren können, installiert man das Plugin [Demo Data Creator](https://wordpress.org/plugins/demo-data-creator/).

Nach der Installation kann man unter **Tools &gt; Demo Data Creator** die Test Daten generieren lassen.

___
Weiter geht es mit [WordPress unleashed: Memcached + Cachify](/wordpress-unleashed-memcached-cachify/ "Wordpress unleashed: Memcached + Cachify")

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

