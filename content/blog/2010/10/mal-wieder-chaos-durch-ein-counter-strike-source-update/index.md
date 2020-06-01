---
title: "Mal wieder Chaos durch ein Counter-Strike: Source Update"
tags: ["steam", "Counter-Strike: Source", "Orangebox"]
published: true
date: "2010-10-01"
---

Es gab gestern (30.09.2010) am Abend mal wieder ein Update für alle Orangebox basierenden Spiele, Counter-Strike: Source inbegriffen.  
Der wesentliche Teil dieses Updates war die Portierung von HL2DM zur Orangebox und eine Erweiterung für Team Fortress 2.

Es war (mal wieder) ungeschickt von Valve das Update ohne Vorankündigung und zur Hauptspielzeit in Europa zu fahren. Das Ergebnis waren hoffnungslos überlastete Updateserver.

Hatte man es dann geschafft, den Server zu updaten mussten viele feststellen, dass der Server crasht, wenn ein Spieler conneted.

Der Crash wird dadurch verursacht, dass Servertools wie Sourcemod, Mani und Eventscripts benutzt werden. Um ihre Funktionen bereitstellen zu können benötigen sie sog. Offsets. Diese haben sich aber beim Update geändert.  
Sind die Offsets veraltet crasht der Server, wenn ein Spieler verbindet.

Wenn man eines dieser Servertools benutzt, muss man also die Offsets auf den neuesten Stand bringen, um einen Serverabsturz zu verhindern.

Sourcemod Nutzer sind, wie in so vielen Fällen, den Nutzern von Mani gegenüber im Vorteil. Wenn man bei Sourcemod in der "sourcemod/config/core.cfg" das Autoupdate aktiviert hat:  
```
"DisableAutoUpdate" "no"
"ForceRestartAfterUpdate" "yes"
```

aktualisiert Sourcemod die Offsets von selber. Einfach mal den Server 1-2 mal neu starten, dann sollte die Sache wieder laufen, wenn es nicht schon wärend des Betriebs passiert ist. Ein Update von Sourcemod selber ist nicht erforderlich.  
Werden zu Sourcemod noch Extensions wie SDK Hooks eingesetzt, muss man die dazugehörigen Dateien im "sourcemod/gamedata/" manuell updaten, wenn es denn schon ein Update gibt. Auch hier sind es die Offsets, die nicht mehr stimmen.

Bei Mani und Eventscripts muss es ebenfalls manuell machen. [Bei Mani wurden schon die neuen Offsets nachgelegt](http://www.mani-admin-plugin.com/joomla/index.php?option=com_content&view=article&id=90&Itemid=73). Wie es bei Eventscripts aussieht, weiß ich nicht.

Sich wegen der Abstürze über Valve aufzuregen ist dennoch nicht angebracht.  
Die neue Version läuft für sich genommen absolut problemlos. Die Probleme machen Erweiterungen von DRITTANBIETERN. Das hat nicht Valve verschuldet, sondern liegt an der Programmierweise der Drittanbieter. zBlock z.B. hat keine Probleme gemacht.  
Wenn ihr also schimpfen wollt, dann schimpft nicht auf Valve, sondern darüber, dass die Servertools so unflexibel programmiet worden sind.

