---
title: "Team Fortress 2 stürzt regelmäßig ab"
tags: ["steam", "Team Fortress 2", "game-server"]
published: true
date: "2011-07-23"
---

Es gab in den letzten Tagen und Wochen mehrere Updates für Team Fortress 2, die alle damit im Zusammenhang stehen, dass es nun [Free to Play](/team-fortress-2-kostenlos/) ist.

In den zahlreichen Updates für die Orangebox haben sich Fehler eingeschlichen. Die Folge ist, dass mit Linux gehostete Team Fortress 2 Server oft abstürzen.

Bis jetzt hat Valve das Problem nicht beheben können.

In der Mailingliste wird angedeutet, dass die neu eingeführten Waffen vom Star Wars Update mit ursächlich für die Abstürze sind.  
Es bietet sich deswegen an, alle neuen zu deaktivieren.

Im Tournament Modus kann man das mit der **item_whitelist.txt**

Im **orangebox/tf/** Ordner befindet sich die Datei **item_whitelist_example.txt**, in der erklärt wird, wie man einzelne Waffen deaktivieren kann.

Legt man im selben Ordner die **item_whitelist.txt** an, verbietet man alles mit:

> "item_whitelist"  
> {
> 
> }

Welche Waffen die ursächlichen sind, kann ich leider noch nicht sagen und müsste durch Try und Error herausgefunden werden

Wer Sourcemod einsetzt, könnte dieses Plugin anpassen und damit die Waffen verbieten:  
http://forums.alliedmods.net/showthread.php?t=162798

---
**Nachtrag:**
Laut HLDS Mailingliste kann man mit folgenden Sourcemod Plugin gezielt einzelne Waffen deaktivieren:  
http://forums.alliedmods.net/showthread.php?p=771534
Nachdem man es installiert hat, soll man noch folgende Einträge in der server.cfg benötigen:

> sm_wpnblock 1  
> sm_wpnblock_clear  
> sm_wpnblock_add "tf_weapon_particle_cannon"  
> sm_wpnblock_add "tf_weapon_raygun"

Ich habe das Plugin selber **nicht** getestet, laut Kommentaren in der Mailingliste, soll es aber funktionieren und helfen.

