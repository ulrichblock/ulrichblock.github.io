---
title: "Ständige Timeouts bei HL1 und HL2 Spielen"
tags: ["game-server", "Counter-Strike", "Counter-Strike Source"]
published: true
date: "2011-03-15"
---

Derzeit kommt es bei sehr vielen Servern zu Lags, Rucklern und Timeouts.

Betroffen sind weltweit alle HL1 und HL2 basierende Server, die auf Linuxsystemen gehostet werden.  
[Auf der HLDS Mailingliste wird das Thema auch schon heiß diskutiert](http://www.mail-archive.com/hlds_linux@list.valvesoftware.com/msg60463.html).

Valve hat sich leider noch nicht geäußert und so weiß man nicht, woran es liegt.  
Es bleibt nur zu hoffen, dass die Probleme möglichst schnell behoben werden, so dass ein reibungsloser Spielbetrieb wieder möglich ist.

**Nachtrag:**  
Laut Milton Ngan von Valve gibt es wohl Probleme mit einem Server, der für Fehlermeldungen zuständig ist, die synchron ablaufen. Valve ist wohl dabei diese zu beheben. Darüber hinaus wird der Aufruf wohl entfernt werden. Seine beiden Mails aus der öffentlichen HLDS Mailliste:

> We have identified the problem. The server at fault should be fixed.

> There is a synchronous call to Steam to locate the error reporting server. The error reporting server went AWOL so the call to Steam got blocked. We are looking into how we can avoid this in future. This call may not even be necessary any more since we have moved to breakpad for crash reporting.

