---
title: "Fastdownload Programm"
tags: ["game-server", "Fast Download"]
published: true
date: "2011-01-11"
---

Ich schreibe gerade an meinem Fastdownload Programm, dass man mit Tekbase von Teklab.de und wollte fragen, ob ihr noch Ideen und Anregungen habt.  
Bisher unterstützt es HL1 und HL2 basierende Server.

Neben dem automatischem Upload der Dateien, sind bereits folgende Features fertig:
 
– sämtliche relevanten Aktionen werden geloggt  
– Das Programm updatet sich bei Bedarf von selber  
– die Dateilisten werden bei Bedarf auch automatisch geupdatet  
– Es gibt 3 Funktionsmodi:
  1. Der User hat die FTP Config bei sich im Programmordner und kann den Pfad selber anpassen  
  2. Ist die vom User einstellbare Datei nicht vorhanden, wird auf eine andere Config zurückgegriffen, auf die nur der Masteruser Zugriff hat. So kann man das Programm nutzen, ohne dem User Zugangsdaten zum FastDL FTP geben zu müssen.  
  3. In Fall 1. und 2. Kann der User das Programm selber starten. Man kann aber auch mit den Abgleich und Uploadvorgang für alle User auf einmal starten.  
– Bei Spielen, die komprimierte Dateien auf dem FastDL zulassen, werden die Dateien in einem zentralen Ordner gespeichert und eine Datei mit gleichen Namen angelegt, die das Erstelldatum und die Dateigröße enthält. Hat nun User A die Datei hoch geladen, wird sie für User B nicht noch einmal komprimiert, sondern gleich die komprimierte Datei genutzt, wenn die Dateien übereinstimmen. Im Falle einer Abweichung wird die Datei und die Informationsdatei ersetzt und die neue hoch geladen.  
  
Hat der User mehr als einen Server, kann man sowohl black- als auch whitelisting nutzen, um nur für bestimmt Server den Abgleich vorzunehmen.

Was geplant, aber noch nicht fertig ist, ist die Unterstützung für UT und COD Server.  
Über Ideen, und Anregungen, was vielleicht noch integriert werden sollte, würde ich mich freuen.

