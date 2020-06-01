---
title: "FPS Meter und seine Nachahmer"
tags: ["game-server"]
published: true
date: "2011-02-03"
---

Ich denke mal, dass die meisten, die HL2 (Counter-Strike: Source) Servern zu tun haben, schon viel über Server FPS gehört und gelesen haben. Warum Server FPS, die höher als die Tickrate sind, keinen Performancegewinn bringen, hatte ich schon [hier](/server-fps-die-hoher-als-die-tickrate-sind-bringen-es-nicht/), [hier](/lasst-euch-nicht-verarschen/) und [hier](/server-fps-und-die-orangebox-engine/) erklärt.

Um die Stabilität der Server FPS zu messen hat ein findiger Programmierer das [FPS Meter](http://www.fpsmeter.org) geschrieben. Anfangs hatte es noch einen großen Bereich, indem es die Server FPS angezeigt hat. Die Skala war erst bei mehr als 10000 gesprengt. Die Anbieter griffen das gerne für ihre marketing Zwecke auf und so entstand ein Wettkampf um die beste Messung. Dabei wurde sicherlich auch von einigen nach allen Regeln der Kunst getrickst.  
Selbiger Programmierer hat auch eine Preload Lib veröffentlicht, mit der es so gut wie jedem Möglich ist, sehr hohe FPS Zahlen zu erreichen. Schon bei der Veröffentlichung schrieb er:

> Please note: This code is provided for testing purposes only. There is no good reason to run a game server with more than 1000 fps. The quality will not increase, it might even decrease.

Nach dem Orangebox Update und einer Testzeit, in der man viel über den Sinn von hohen Server FPS diskutierte, kam auch dieser Programmierer zu dem Schluss, dass jedes FPS oberhalb der Tickrate nur verschwendete Rechenzeit ist. Dementsprechend wurde das FPS Meter angepasst, so dass es nun wohl wirklich nur noch misst, wie stabil die FPS sind und ob ihr Wert größer als die Tickrate ist. Wenn man den genauen Algorithmus erfahren möchte, müsste man ihn mal fragen.  
Den Providern, die mit ihren tollen Messungen angegeben haben passt dies sicherlich gar nicht, da man ja so viel Zeit und Recourcen in das Projekt "tolle Messung" gesteckt hat. Der (potentielle) Kunde wird ja jetzt auch noch mit dem Vorschlaghammer darauf hingewiesen, dass hohe Werte nichts bringen. So etwas mag man ja gar nicht.

Da gefällt es einem solchen Hoster schon viel besser, wenn der Mythos, an dem er Geld verdient, weiter befeuert wird. Es mussten also Alternativen zum FPS Meter her, denn ein aufgeklärter Kunde scheint ja ein schlechter Kunde zu sein.  
So bietet das ein oder andere Vergleichs- und Bewertungsportal für Serverdienstleistungen, nun auch einen FPS Check an. Dabei wird anscheinend so vorgegangen, dass je mehr FPS erreicht werden und desto stabiler diese sind, das Ranking, bzw. die Bewertung sich verbessert.  
Stimmt meine Einschätzung, über ihre Bewertungsweise, stellt sich für mich folgende Frage: Wählte man das Bewertungsverfahren, weil man der Ansicht ist, dass je mehr FPS, desto besser der Server, oder weil man den Leuten nur geben will, was sie verlangen, oder vielleicht weil man den Hostern bei der Vermarktung ihrer Produkte helfen möchte?  
Falls letzteres zutreffend sein sollte, was man aber ohne ein Statement seitens des Betreibers einer solchen Seite nicht wissen kann, dann spricht es nicht gerade für das Portal. Denn in diesem Falle hat man anscheinend ein größeres Interesse daran, den Serveranbietern bei der Vermarktung zu helfen, als dem Kunden vernünftige Informationen zu bieten.

Bleibt nur noch abschließend zu sagen, dass ich es gut finde, dass das originale FPS Meter angepasst wurde und dass ich nur jedem davon abraten kann, sich auf Meter zu verlassen, die bei HL2 basierenden Servern nach dem Prinzip vorgehen, je mehr, desto besser.

