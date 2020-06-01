---
title: "Gameserver Kernel Updates und Tutorial"
tags: ["game-server"]
published: true
date: "2014-04-19"
---

Ich stelle schon länger fertig kompilierte Gameserver Kernel zur Verfügung. Zu finden sind sie [hier](/gameserverkernel/ "Gameserver Kernel").

Zwischen dem bereits angebotenen 3.0 Branch (21 Juli, 2011), aktuellen Debian Stable 3.2 Branch (4 Januar, 2012) und dem neusten 3.14 Branch (30 März 2014) liegen mehr als zwei Jahre Entwicklungszeit. Seitdem hat sich sehr viel getan in Bereichen Netzwerk, IO und Scheduling. Ganz neu mit dem Release 3.14 ist der Deadline Scheduler.  
Von all den Änderungen profitiert man nun natürlich auch beim Gameserver Hosting.

Es war also höchste Zeit, die neuen Kernel Sourcecodes von [kernel.org](http://kernel.org "http://kernel.org") zu beziehen und neue Kernel zu kompilieren. In erstens Test laufen die Server deutlich runder. Ebenso ist der Ping im Schnitt 10-20ms niedriger, als mit dem 3.2.

Ich habe die fertigen Kernel **3.14.1-ub-100hz** und **3.14.1-ub-1000hz** zu der bereits oben genannten Seite [Gameserver Kernel](/gameserverkernel/ "Gameserver Kernel") hinzugefügt.

Ebenso habe ich das ausführliche Tutorial [Der optimale Gameroot und Gameserver Kernel](/tutorials/der-optimale-gameroot-und-gameserver-kernel/ "Der optimale Gameroot und Gameserver Kernel") geschrieben, das erklärt, wie man einen solchen Kernel kompiliert und wie man sonst noch an der Performance seines Rootservers schrauben kann.

