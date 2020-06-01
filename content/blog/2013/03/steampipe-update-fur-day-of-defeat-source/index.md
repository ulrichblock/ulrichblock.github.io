---
title: "SteamPipe Update für Day of Defeat Source"
tags: ["game-server", "steam"]
published: true
date: "2013-03-29"
---

Heute war es dann soweit. Valve hat, wie angekündigt, Day of Defeat Source zu dem SteamPipe System umgestellt.

Die Ordnerstruktur ist umgestellt und an Stelle von vielen einzelnen Dateien hat man nun wenige, große .vpk Dateien. Es wird nun das gleiche System und die gleiche Struktur verwendet, wie bei Counter-Strike Global Offensive.

Diese Änderung ist bereits im Vorfeld angekündigt worden, so dass man ausreichend Zeit zum testen mit der Beta hatte.

Z.B. findet man an der Stelle von `serverorder/orangebox/dod/cfg/server.cfg` die Configs nun unter `serverorder/dod/cfg/server.cfg`

Wenn man für jeden Server eine volle Installation gewählt hat, dann hat man nun viel Arbeit vor sich. Bei einem Symlink System hält sich der Arbeitsaufwand in Grenzen, weil man sich nur um den Master kümmern muss.

___
**Nachtrag**:  
Sourcemod und Metamod laufen, aber Sourcemod erfordert etwas Arbeit. Man sollten die aktuellsten Snapshots benutzen. Metamod startet problemlos. Sourcemod hingegen nicht.

Die *sourcemod.vdf* im *addons/metamod/* Ordner scheint nicht mehr zu reichen.

Der Workaround ist einfach. Man trägt Sourcemod in die addons/metamod/metaplugins.ini ein:

> ;If your plugin came with a .vdf file, you do not need to use this file.  
> ;  
> ;List one plugin per line. Each line should contain the path to the plugin’s binary.  
> ;Any line starting with a ‚;‘ character is a comment line, and is ignored.  
> ;  
> ;You do not need to include the _i486.so or .dll part of the file name. Example:  
> ; addons/sourcemod/bin/sourcemod_mm  
> ;You may also put an alias in front of the file, for example:  
> ; sm addons/sourcemod/bin/sourcemod_mm  
> ;Will allow you to use "meta load sm" from the console.  
> ;  
> ;\*\*\*\*\*\*\*\*\* LIST PLUGINS BELOW \*\*\*\*\*\*\*\*\*\*\*  
> sm addons/sourcemod/bin/sourcemod_mm

