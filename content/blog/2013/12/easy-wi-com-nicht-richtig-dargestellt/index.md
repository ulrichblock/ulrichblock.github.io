---
title: "easy-wi.com nicht richtig dargestellt"
tags: ["easy-wi"]
published: true
date: "2013-12-17"
---

Kaum auf dem Weg zur Arbeit, stellte ich gestern fest, dass easy-wi.com nicht korrekt dargestellt wurde. Die Ursache war sehr schnell gefunden. Ich hatte vergessen das SSL Zertifikat zu erneuern.

Peinlich, aber zum Glück kein wirtschaftlicher Schaden, da easy-wi.com Open Source Software ist.

Nach der Arbeit bei der CA meiner Wahl schnell ein Zertifikat beantragt. Gegen 23 Uhr realisiert, dass ich einen kaputten Private Key übermittelt hatte und das ganze noch einmal von vorne und danach ab ins Bett.  
Als das Zertifikat um ca. halb eins Nachts eingetroffen ist, wurde es einmal sicher auf dem Mailserver verwahrt.

Heute morgen dann schnell die **.pem** hochgeladen und Nginx neu gestartet. Läuft wieder.

Das Class 1 Zertifikat war kostenlos und wird von [startssl.com](http://startssl.com "startssl.com") ausgestellt.

Falls ihr eine Anleitung wollt, wie man ein solches erstellt und bei Nginx einrichtet, könnte ihr ja mal kommentieren. Dann würde ich auch gleich auf multiple Zertifikate auf einem Host mit nur einer IP eingehen.

Bezüglich multipler Zertifikate auf einer IP bei Nginx schon jetzt folgender Hinweis:

```bash
nginx -V
(...)
TLS SNI support enabled
```

