---
title: "Kostenlose Gameserver Kernel"
tags: ["Gameserver Kernel"]
published: true
date: "2010-07-03"
---

Ich biete neuerdings einen fertigen [Gameserver Kernel](/?page_id=156)für Debian auf Basis der 2.6.33er Kernel Serie an.  
Es gibt sowohl für 32bit, als auch 64bit eine 100Hz und eine 1000Hz Variante. Beide erlauben 1000 FPS und mit dem [kleinen Hack](http://wiki.fragaholics.de/index.php/BEpingboost.c) von Behartes Etwas auch 5000, 10000, oder noch mehr FPS.  
In meinen Augen ist alles über 500 FPS aber eh nur ein Marketingag der Gameserververmieter, um euch mehr Geld aus der Tasche zu ziehen.

Ich habe bei meinem Kernel die Treiberunterstützung vom Debian Stabel 2.6.26 Kernel als Basis genommen, um die Lauffähigkeit auf den meisten Systemen zu garantieren.  
Da aber jedes System anderes ist, wird der Kernel zwangsläufig nicht auf allen Systemen laufen. Als Richlinie kann man sagen, dass wenn der Debian 2.6.26er bei euch läuft, es sehr wahrscheinlich ist, dass auch mein Kernel bei euch läuft.

Wenn ihr ihn einsetzt, bitte ich euch eure Erfahrungen als Kommentar auf der Gameserverkernel Seite zu schreiben. Dabei ist es vor allem interesant, auf welchem System/Rootanbieter er problemlos läuft, so dass andere vorgewarnt sind, bzw. schon vorher wissen, dass er auf ihrem Root laufen wird.  
Falls er nicht booten sollte, schickt mir das Bootlog und ich werde sehen, was ich machen kann, damit mein Kernel auch eure Hardware unterstützt.

Hier noch ein paar Messungen mit dem [fpsmeter](http://www.fpsmeter.org)von Servern, die mit meinem Kernel auf billiger Desktop Hardware laufen:  
[CS 1.6](http://www.fpsmeter.org/p,view;53884.html)  
[CSS](http://www.fpsmeter.org/p,view;77702.html)  
[DODS](http://www.fpsmeter.org/p,view;60401.html)

