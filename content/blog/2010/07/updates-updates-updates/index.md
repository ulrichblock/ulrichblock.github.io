---
title: "Updates, Updates, Updates"
tags: ["steam", "Counter-Strike: Source", "Orangebox", "zBlock"]
published: true
date: "2010-07-31"
---

Seitdem letzten Post ist mal wieder viel passiert. Es gab zahlreiche Updates für Counter-Strike:Source. Ihr solltet also überprüfen, ob euer Server auf dem neuesten Stand ist.  
Dies kann man mit dem Befehl "version" per rcon. Die aktuelle Version, Stand 31.07.2010, ist für Linuxserver:

```
version
Protocol version 15
Exe version 1.0.0.45 (cstrike)
Exe build: 20:23:44 Jul 23 2010 (4276) (240)
```

Falls euer Server diese Version nicht hat, dann solltet ihr euren Anbieter bitten den Server zu updaten. Hostet ihr den Server selber, dann könnt ihr den Counter-Strike: Source Server so, wie immer so updaten:

```bash
./steam -command update -game "Counter-Strike Source" -dir /pfad/zu/css -verify_all -retry
```

Des Weiteren ist zBlock 4.5 RC2 veröffentlicht worden. Mit dem RC2 wurde wohl das DXlevel Problem behoben und das Servertool in den meisten Ligen zugelassen. Mit der Zulassung wurden dann neue Serverconfigs für den Ligagebrauch veröffentlicht.  
Wenn ihr einen Warserver habt, solltet ihr also auch zBlock und die Configs updaten.

