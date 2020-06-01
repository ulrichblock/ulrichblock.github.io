---
title: "Neues Feature bei Server4lau.eu"
tags: ["steam", "Counter-Strike", "Counter-Strike Source"]
published: true
date: "2010-11-11"
---

Ich habe [Server4lau.eu](http://www.server4lau.eu) um ein neues Feature, welches noch in der Testphase ist, erweitert:  
SourceTV and HLTV Proxies können nun kostenlos geliehen werden.

Im Moment stehen nur 4 CSS SourceTV Server zur Verfügung, anhand derer wir den Code auf mögliche Schwächen testen.

Mittels eines Proxie Servers können euch andere beim Spielen zuschauen. Damit, man das nicht gegen euch verwenden kann, haben die Configs der Ligen alle eine Zeitverzögerung von ca 90 Sekunden eingebaut. Diese müssen bei euch auf dem gameserver geladen werden.

Wenn euer Gameserver es zulässt, könnt ihr die Server4lau.eu Proxie Server auf den SourceTV Port connecten lassen. Die Server4lau Gameserver sollten alle Proxie Server erlauben, sofern ihr sie als registrierter User angefordert habt.

Was noch zu beachten ist: Bei Source Games wie Counter Strike Source ist der TV Port ist niemals identisch mit dem Gameserverport!

Herausfinden könnt ihr ihn mit dem rcon Befehl "rcon tv_status".  
Ob ein Relaypassword gesetzt wurde und wie es heißt, könnt ihr mit dem Befehl "rcon tv_relaypassword" herausfinden.

