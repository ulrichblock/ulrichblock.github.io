---
title: "Tickrate 100 bei Counter-Strike: Source"
tags: ["steam", "Counter-Strike: Source", "game-server"]
published: true
date: "2011-04-20"
---

Ich lese immer wieder, dass Spieler auch nach dem Orangebox Update fordern, dass ihr Counter-Strike: Source Server mit einer Tickrate von 100 läuft. Hier herrscht wohl, wie bei den Server FPS auch, der Irrglaube, dass eine höhere Zahl bedeutet, dass der Server besser läuft.

Mit dem Orangeboxupdate wurde der Startbefehl -tickrate entfernt. Es ist von Haus aus also nicht mehr möglich etwas anderes als Tickrate 66 zu nutzen. Als Grund führt Valve folgendes an:

> – Removed -tickrate command line option and defaulted tick rate to 66 rather than 33. This addressed a number of issues, including:  
>  – Tick rate affecting how fast doors open / close  
>  – Tick rate causing players hitting the ground to stutter  
>  – Tick rate affecting the firing mechanisms of certain guns

Kurz nach dem Update nach dem Update hat der Programmierer Didrole seinen [Tickrate enabler](http://didrole.com/tickrate_enabler/) veröffentlicht, mit dem man die Tickrate wieder einstellen kann.

Es kam, was kommen musste:  
Manche Anbieter raten ihren Kunden den Tickrate Enabler zu nutzen, damit man wieder Tickrate 100 hat.  
Was sie aber nicht weitersagten, sei es aus Unkenntnis, oder weil es ihnen egal ist, ist, dass der Server dadurch merkbar schlechter wird.  
Stellt man eine Tickrate von 100 ein, bedeutet dies Folgendes:

- Türen schließen zu schnell
- Es kommt zu Stotter Effekten, wenn Spielermodels auf den Boden fallen
- Der Feuermechanismus wird beeinträchtigt

Es gibt also keinen einzigen guten Grund, den Tickrate enabler auf einem normalen Server einzusetzen.

Die Ausnahme von der Regel sind aber wohl Surf Server, bei denen man ohne eine Tickrate von 100 wohl nicht anständig surfen kann. Hier geht es ja eh primär um das Surfen und nicht um das Schießen, so dass man die negativen Effekte verkraften kann.

