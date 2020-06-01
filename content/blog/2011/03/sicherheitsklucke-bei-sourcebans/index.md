---
title: "Sicherheitsklücke bei Sourcebans"
tags: ["Sourcebans"]
published: true
date: "2011-03-06"
---

Es gibt derzeit eine schwerwiegende [Sicherheitslücke](http://www.1337day.com/exploits/15369)bei [Sourcebans](http://www.sourcebans.net/), bei der man mittels XSS Attacke Adminrechte erlangen kann. Die Lücke betrifft den Webteil.

Diejenigen unter euch, die für die Admin- und Banverwaltung Sourcebans einsetzten haben nun zwei Möglichkeiten:  
Entweder die Dateien vom Webserver löschen und nur die Funktionen im Spiel nutzen, oder den Zugang zu dem Webteil mit einer .htpasswd Datei schützen.

Man kann sich z.B. hier eine erstellen lassen:  
[php-space.info](http://www.php-space.info/php/space/htpasswd-generatoren.php)

Dazu sollte die htacces Datei Folgendes enthalten:

```
AuthUserFile /var/www/DeinUser/DeinOrdner/.htpasswd
AuthGroupFile /dev/null
AuthName "geschuetzter bereich"
AuthType Basic

<LIMIT GET POST>
    require user UserDerInDerHtpasswdAngegebenIst
</LIMIT>
```

