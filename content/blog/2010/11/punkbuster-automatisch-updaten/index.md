---
title: "Punkbuster automatisch updaten"
tags: ["Punkbuster"]
published: true
date: "2010-11-01"
---

Eines der problemträchtigsten Anti Cheating Tools ist der Punkbuster. Das Programm zu konfigurieren und einzurichten ist manchmal so erwünscht, wie eine Furunkel am Allerwertesten. Bei einigen Spielen kommt man aber leider nicht drum herum. Autoupdatefunktionen gibt es nicht, so dass man das Ganze von der Hand machen muss.  
Dafür ist mir meine Zeit zu schade. Meine Server restarten sich eh früh am Morgen. Deswegen habe ich ein kleines Bash Skript geschrieben, dass beim Restart an der Stelle des eigentlichen Startskriptes aufgerufen wird.  
Es richtet den Server ein, updated den Punkbuster und reicht dann die Startparameter an das eigentliche Startskript weiter. Den Teil mit dem Entfernen und Einrichten braucht man grundsätzlich nicht. Installiert man aber öfters Server mit einem Image, sind diese Zeilen ganz nützlich, weil man nur das Image kopieren und den Server starten muss. Eine Einrichung per Hand entfällt in diesem Fall.

```bash
#!/bin/bash

DEAMON="cod4_lnxded"
UPDATE="--i-accept-the-pb-eula --add-game=cod4 --add-game-path=`pwd`"
echo $UPDATE
./pbsetup.run --i-accept-the-pb-eula --remove=0
./pbsetup.run "$UPDATE"
./pbsetup.run --i-accept-the-pb-eula -u
./$DEAMON $@
```

Ausführen kann man das Skript dann z.B. so:

```bash
./cod4_lnxded_pb +set net_ip deineip +set net_port 28960 +exec server.cfg +set sv_punkbuster 1 +set sv_pure 1 +set g_gametype war +set fs_homepath ./ +set fs_basepath ./ +map_rotate +set loc_language 2
```

