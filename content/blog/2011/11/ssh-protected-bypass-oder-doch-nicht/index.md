---
title: "SSH protected Bypass, oder doch nicht?"
tags: ["steam", "game-server", "security"]
published: true
date: "2011-11-07"
---

Ich bin vorhin über ein [Youtube Video](http://www.youtube.com/watch?v=wks2QLiIOuc) gestolpert. In ihm wird aufgezeigt, wie man das Blockieren des "plugin_load" Befehls bei Half-Life 2 basierenden Servern wie Counter-Strike: Source aushebeln kann. Die Methode ist denkbar simpel und geht auch bei den Linux \*.so Binarys.

Der Autor verschweigt aber eine wesentliche Sache. Bei den allermeisten protected Systemen wird der Server unter einem separatem User erstellt, bei dem man bestenfalls Leserechte bei den \*.so Dateien hat. Es ist in diesem Fall nicht möglich, eine modifizierte engine.so hochzuladen.

In einem anderen Zusammenhang könnte man damit aber Schaden anrichten. Man denke einmal an Slots, SourceTV und dergleichen, deren Einstellungen vom Benutzer eigentlich nicht änderbar sein sollen. Es ist deswegen eine Überlegung Wert, die \*.so Dateien in den bin/ Ordnern gesondert vor dem Benutzerzugriff zu schützen.

Man muss wohl nicht extra erwähnen, dass das Vornehmen dieser Modifikation auf einem Fremdsystem sehr wahrscheinlich eine Straftat ist. Falls man die Methode nachvollziehen möchte, dann bitte nur auf einem eignen Rootserver, oder lokalem Testsystem.

