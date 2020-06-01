---
title: "Counter-Strike Source Orangebox Update Nr.4"
tags: ["steam", "Counter-Strike Source", "Orangebox", "Metamod Source", "SourceMod"]
published: true
date: "2010-06-29"
---

Wie ihr sicher bemerkt habt, gingen nach dem Orangebox Update viele Servertools wie ZBlock, Mani Admin Mod, Eventscripts, usw. nicht mehr. Dies liegt daran, dass die Orangebox sich stark von der alten Version unterscheidet.

[Wie ihr Counter-Strike: Source installiert und updated könnt ihr hier nachlesen.](/tutorials/counter-strike-source-global-offensive-und-tf-2-linux-server/)

Nach und Nach legten die Entwickler Updates nach, damit die Tools wieder funktionieren. Es hieß also warten, bis alle Updates rausgebracht haben.

Nutzer von Sourcemod hatten dieses Problem nicht. Am Tag des Updates funktionierte es bereits wieder. Unter allen Servertools halte ich es auch für das Leistungsstärkste und sicherste. Ich kann nur allen raten, es ausschließlich einzusetzen. Auch für Gungame usw. gibt es Plugins für dieses Servertool, so dass ihr durch das Installieren von Plugins alle Funktionen von Mani etc. auch hinbekommen könnt.

Von dem Funktionsumfang kann man sagen, dass Mani+Eventscripts=Sourcemod ist. Ich sehe es immer wieder, dass auf einem Server Mani+Eventscripts+Sourcemod installiert sind. Für die Performance des Servers ist das schonmal sehr schlecht, das jedes Servertool und jedes zusätzliche Plugin natürlich Rechenleistung und Ram verbraucht. Dazu kommt noch, dass es häufig Probleme gibt, wenn man mehrere Tools gleichzeitig einsetzt. Der oben beschriebene Funktionsumfang macht auch klar, dass sich Funktionen überschneiden. Es ist deshalb absolut **sinnlos** Mani mit Sourcemod gleichzeitig zu betreiben. Entscheidet euch. Entweder Mani, oder Sourcemod. Alles andere ist Käse.

Weil ich schon lange überzeugter Sourcemod Anhänger bin, werde ich auch nur auf dessen Installation eingehen. Im Folgenden erkläre ich nun, wie ihr es auf eurem Server wieder zum laufen bekommt:

Als erstes braucht ihr [Metamod Source 1.8.3](http://www.metamodsource.net) und [Sourcmod 1.3.4](http://www.sourcemod.net). Achtet beim Downloaden darauf, dass ihr die Version für das Betriebsystem eures Servers downloaded. Von dem Einsatz der -dev Versionen würde ich abraten, weil es täglich erstellte Entwicklerversionen sind, die oft Fehler enthalten. Es ist generell sinnvoll immer stable Releases zu benutzen, und nur im äußerten Notfall auf Beta, oder Developer Versionen zurück zugreifen.

Dann nutzt noch dieses [Formular](http://www.metamodsource.net/vdf), um eine metamod.vdf zu erstellen.  
  
Jetzt entpackt alles und laded es in den Ordner orangebox/cstrike/addons hoch. Falls der addons Ordner noch nicht vorhanden ist, erstellt diesen.  
Nach dem Upload sollten im addons Ordner die metamod.vdf, sourcemod und metamod Ordner sein.  
Dann noch den Server neu starten und mit folgenden Befehlen überprüfen, ob Metamod und Sourcemod geladen wurde:  
`meta version`  
`sm version`

Auf der Homepage von Sourcemod gibt es sehr viele Plugins mit Erklärung, so dass ihr euren Server jetzt individuell einrichten könnt.

  
Alternativ könnt ihr auch mein Packet benutzen, in dem MM:S, SM und die metamod.vdf bereits enthalten sind.

Dazu habe ich habe ein Downloadpacket mit den gängigen Plugins zusammengestellt, damit der Umstieg auf MM:S und SM von Mani leichter fällt. Es beinhaltet die bereits oben verlinkten Dateien. Dazu habe ich zahlreiche Plugins hinzugefügt, die standartmäßig deaktiviert sind und das Ingame Menu um die Funktion der Nextmap Auswahl und der Bot Steuerung erweitert.

Die komplette Liste:

- Advertisements
- Anti rejoin
- Noblock
- Quake Sounds
- Say Sounds + Recource Manager
- Simple TK
- SoD Stats
- Weapon Restrict

