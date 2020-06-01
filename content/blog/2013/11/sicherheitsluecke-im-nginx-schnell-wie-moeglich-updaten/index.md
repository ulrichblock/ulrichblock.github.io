---
title: "Sicherheitslücke im Nginx: so schnell wie möglich updaten"
tags: ["security", "nginx"]
published: true
date: "2013-11-23"
---

Diese Woche war auf so ziemlich jedem Newsportal, wie z.B. [heise.de](http://www.heise.de/security/meldung/Leerzeichen-tricksen-Nginx-aus-2050731.html) zu lesen, dass der Nginx Webserver eine Sicherheitslücke hat, durch die man Code einschleusen kann.

Zu dem Fix wurde gleichzeitig ein Workaround veröffentlicht, damit die Webserver geschützt sind, bis die Distributions Maintainer wie Debian, CentOS, usw. den Fix an ihre User weiterreichen.

Als Workaround wurde empfohlen folgenden Eintrag in den server Blöcken einzutragen:

```
if ($request_uri ~ " ") {
   return 444;
} 
```

Der Fix ist nun zumindest bei Debian und beim inoffiziell Dotdeb Repository angekommen. Es heißt also folgendes auszuführen:

```bash
apt-get update && apt-get upgrade
```

Es ist leider zu befürchten, dass in nächster Zeit die Anzahl der erfolgreichen Hacks ansteigen wird, zumal viele Serverbesitzer oft nicht zeitnah reagieren und Nginx mittlerweile auch bei Plesk dabei ist.

