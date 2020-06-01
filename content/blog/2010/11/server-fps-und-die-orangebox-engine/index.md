---
title: "Server FPS und die Orangebox Engine"
tags: ["steam", "Counter-Strike Source", "game-server"]
published: true
date: "2010-11-15"
---

Da immer noch der weit verbreitete Irrglaube herrscht, dass man viele hohe Server FPS braucht, hier nochmal ein kleiner Beitrag dazu.

Das vorher gesammelte Wissen über FPS ist durch das Orangebox Update hinfällig geworden.

Spiele auf der Orangebox Engine interessieren die FPS eigentlich nicht mehr wirklich. Das einzige was zählt, ist dass sie größer als die Tickrate von 66 sind und relativ stabil bleiben. Und selbst Einbrüche unterhalb dieses Wertes werden mittlerweile sehr gut kompensiert. Das sieht man schön an den großen Servern mit mehr als 32 Slots. Bei denen kommt es oft zu Einbrüchen unterhalb von 66 und kein Zocker bekommt was mit, weil die Orangebox Engine in der Lage ist, dies auszugleichen und auszugleichen.

Werte oberhalb von 66 sind also verschwendete CPU Zeit. Aus diesem Grund reicht es auch aus, Server mit fps_max 70 zu starten und relativ stabile FPS zu haben. Wenn die Hardware stärkere Schwankungen verursacht dann vielleicht 80-100 einstellen.  
  
Je niedriger die eingestellten FPS sind, desto einfacher ist es für den Server diese stabil zu halte. Dazu kommt, dass der CPU Verbrauch sinkt, man bei Lastspitzen also mehr Spielraum hat. Man hat demnach nur Vorteile und keine Nachteile, wenn man die Server FPS reduziert.

[Ich hatte auch vor kurzem mal eine Email](/server-fps-die-hoher-als-die-tickrate-sind-bringen-es-nicht/) von dem Valve Linux Entwickler Alfred Reynolds in meinen Blog gestellt, der sich ähnlich geäußert hat.

Wie ich dort schon getitelt habe: Server FPS, die höher als die Tickrate sind bringen es nicht mehr.

Wenn ihr Server mietet, gebt kein Geld für überteuerte und unnötige FPS aus. Investiert es lieber in eine garantierte Kundenbelegung pro Host und einen Frankfurter Serverstandort.

Wenn ihr einen Root betreibt macht es ebenfalls Sinn die FPS herunterzufahren. Die Server verbrauchen weniger und laufen insgesamt runder. Ich habe es in letzter Zeit schon erlebt, dass Server mit eingestellt 1000 FPS aufgrund starker Schwankungen deutlich schlechter spielbar waren, als wenn sie auf 70-100 FPS eingestellt waren. Das liegt daran, dass auch die neue Engine starke Drops, die alle paar Sekunden auftreten, nicht vollständig ausgleichen kann.

