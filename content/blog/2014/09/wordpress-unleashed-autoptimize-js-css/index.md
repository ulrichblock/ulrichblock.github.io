---
title: "WordPress unleashed: Autoptimize JS + CSS"
tags: ["wordpress"]
published: true
date: "2014-09-09"
---

Auch wenn man ein aufgeräumtes Design benutzt, so wird man doch spätestens durch den Einsatz von Addons zusätzliche Stylesheets und Javascripte in seinen WordPress Blog einschleppen.  
Wenn man schon alles getan hat, um zusätzliche Scripten zu vermeiden, kann man sich daran machen, diese zusammenzufassen und zu komprimieren.  
Zu diesem Zweck gibt es verschiedene Plugins. Vernünftig im Zusammenspiel mit Cachify funktioniert bei mir [Autoptimize](http://wordpress.org/plugins/autoptimize/).

Nach der Installation kann man das Plugin unter "Einstellungen" &gt; "Autoptimize" konfigurieren. Am besten blendet ihr gleich die erweiterten Einstellungen mit einem Klick auf den entsprechenden Button ein.

Bei meinem eigenen Blog und auch auf dem Testsystem wurden folgende Optionen aktiviert:

- JavaScript Code optimieren?
- CSS Code optimieren?
- data: URIs für Bilder generieren?
- Optimierte CSS / Skript-Dateien als statische Dateien speichern?

Wenn der WordPress Blog ein One-Pager bzw. nur sehr wenige Seiten mit einer hohen Bounce Rate (Besucher verlässt nach einer Anschauen einer Seite den Blog) hat, so sollte man noch die Option "CSS Inlining aktivieren?" aktivieren. Ist sie Aktiv, wird das komprimierte CSS im HTML Code eingebettet. Die Seite lässt sich dann mit nur 2 HTTP Requests (HTML + JS) ausliefern

Die HTML Optionen lässt man besser in Ruhe, da für diese Arbeit das Addon Cachify zuständig ist.

Im Anschluss sollte man seinen Memcached Server durchstarten, damit etwaig gecachte Seiten mit alten CSS bzw. JS Verweisen neu aufgebaut und in den Cache geladen werden.

```bash
service memcached restart
```

___
Weiter geht es mit [WordPress unleashed: Elasticsearch](/wordpress-unleashed-elasticsearch/ "Wordpress unleashed: Elasticsearch")

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

