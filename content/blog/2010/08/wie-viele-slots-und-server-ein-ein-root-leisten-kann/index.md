---
title: "Wie viele Slots und Server ein ein Root leisten kann."
tags: ["game-server"]
published: true
date: "2010-08-09"
---

Bevor es mit dem eigentlichen Beitrag weiter geht, möchte ich darau hinweisen, dass die angeführten Werte grobe Richtwerte und keine absoluten Zahlen sind.

Am Anfang steht die Frage, wie viel CPU man pro Slot verbraucht:  
Die Source Server sind sehr CPU lastig und haben einen hohen Verbrauch. Vor dem Orangeboxupdate brauchte man bei Counter-Strike Source eine moderne CPU mit ca 2,2-2,4, um einen 32 Slot Server mit Tickrate 100 und fps_max 1000 stabil zu betreiben. Der Orangebox Server ist viel CPU hungriger, als sein Vorgänger und verbraucht mit Tickrate 66 genau so viel, wie er vorher mit Tickrate 100 gebraucht hat. Benutzt man z.B. einen Intel Core i5 750 mit 2,66Ghz pro Core, kann man ca. 32-40 Slots pro CPU Kern berechnen lassen, also insgesamt ungefähr 130 – 160 Slots.

An zweiter Stelle steht die Frage, wie viele Prozesse die CPU gleichzeitig berechnen kann:  
Man könnte jetzt denken super, ich kann 16 1000 FPS Server starten und bekomme keine Probleme. Stimmt aber leider nicht. Ein Core i5 kann mit seinen 4 Kernen 4 Berechnungen gleichzeitig machen, also 4 Server in der selben ms berechnen. Durch seine hohe Taktung schafft er es aber dennoch mehr als 4 Server rechtzeitig zu berechnen, so dass die Spieler nichts davon mitbekommen. Die Grenze der maximalen Serveranzahl liegt also höher, als die Anzahl der Cores. Ich habe die Erfahrung gemacht, dass man deutliche Performanceeinbußen spürt, wenn man mehr als 2 Server pro Core startet. Für den Core i5 750 bedeutet das damit 8 Server maximal. Man kann die 130 – 160 Slots also nur ausschöpfen, wenn man wenige größere und große Server laufen lässt.

Benutzt man jetzt eine CPU mit Hyperthreading, wie z.B. einen Xeon, oder Core i7 von Intel, werden die CPU Kerne durch das Hyperthreading in jeweils zwei virtuelle Kerne geteilt.  
Auf diese Weise kann eine CPU mit 4 Kernen 8 Berechnungen gleichzeitig ausführen. Wir haben also 8 CPUs, auch wenn sie virtuell sind. Nimmt man wieder die Formel Maximalserverzahl=CPU Kerne x 2, kommen wir auf unsere 16 Server mit 10 Slots, die der Root maximal gleichzeitig berechnen kann, ohne dass die Spieler etwas bemerken sollten.

Wenn man jetzt mehr als 1000 FPS in den Server hackt, steigt der Verbrauch natürlich an und man kann weniger Slots auf dem System betreiben. Warum hohe Server FPS keine Verbesserung des Trefferverhaltens bringen, also nur dazu dienen, den Hostern die Taschen zu füllen, habe ich in diesem Artikel erklärt: [Was FPS und Tickrate ist, und was dahinter steckt](/fps-tickrate-und-was-dahinter-steckt/)
