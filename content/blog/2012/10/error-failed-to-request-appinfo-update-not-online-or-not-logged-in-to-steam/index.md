---
title: "ERROR! Failed to request AppInfo update, not online or not logged in to Steam."
tags: ["game-server", "steam"]
published: true
date: "2012-10-28"
---

Dem ein oder anderen wird es schon begegnet sein:

> \[ 0%\] Checking for available updates…  
> \[ 0%\] Download complete. \[—-\]  
> Verifying installation… Steam Console Client (c) Valve Corporation — type ‚quit‘ to exit —  
> Loading Steam3…OK.  
> Loading Steam2…OK.  
> Logging in user ‚meinUser‘ to Steam Public…Success.  
> ERROR! Failed to request AppInfo update, not online or not logged in to Steam.

Man liest in vielen Foren diesen Fehler. Er wird vom steamCmd Updater ausgegeben. Die angegebene Lösung war dann immer den **Steam** Ordner bzw. in diesem die **ClientRegistry.blob** zu löschen und es erneut zu versuchen.

Wenn man mit automatisierten Skripten und oder vielen Servern hantiert, mag das Löschen recht umständlich werden.

Zusammen mit Michael Koeberl von giga-hosting.biz konnte ich zumindest eine Ursache finden, warum der Fehler überhaupt auftritt. Ebenso haben wir eine Lösung erarbeitet, mit der ein Löschen nicht mehr erforderlich sein sollte.

Sowohl das hldsupdatetool, als auch den steamCMD Updater erstellt im Home Verzeichnis des Users den **Steam** Ordner. In diesem wird von beiden die **ClientRegistry.blob** abgelegt und genutzt.

Startet man das hldsupdatetool, nachdem man den steamCMD Updater gestartet hat, wird die **ClientRegistry.blob** editiert und diese für den steamCMD Updater unbrauchbar. Im Folgenden wird dann der oben beschriebene Fehler ausgegeben.

Der elegante Workaround ist es getrennte Ordner für die Updater zu nutzen und vor jedem Aufruf, das HOME Verzeichnis des Users zur Laufzeit neu zu setzen:

```bash
#!/bin/bash
HOME='/home/username/steamCMD'
cd /home/username/steamCMD
STEAMEXE=steamcmd ./steam.sh +exit

HOME='/home/username/hlds'
cd /home/username/hlds
./steam.sh -command update
```

Der weniger elegante wäre es, vor jedem Aufruf die **ClientRegistry.blob** zu löschen:

```bash
#!/bin/bash
find /home/username/Steam -maxdepth 2 -name ClientRegistry.blob -delete
STEAMEXE=steamcmd ./steam.sh +exit

find /home/username/Steam -maxdepth 2 -name ClientRegistry.blob -delete
./steam.sh -command update
```

Um ganz sicher zu gehen, kann man die Workarounds auch kombinieren:

```bash
#!/bin/bash
HOME='/home/username/steamCMD'
cd /home/username/steamCMD
find /home/username/steamCMD/Steam -maxdepth 2 -name ClientRegistry.blob -delete
STEAMEXE=steamcmd ./steam.sh +exit

HOME='/home/username/hlds'
cd /home/username/hlds
find /home/username/hlds/Steam -maxdepth 2 -name ClientRegistry.blob -delete
./steam.sh -command update
```

