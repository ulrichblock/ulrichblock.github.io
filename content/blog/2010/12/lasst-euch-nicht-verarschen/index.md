---
title: "Gamerserverkernel, 15000, 10000, 5000 FPS, oder gleich noch mehr?"
tags: ["steam", "game-server", "Kernel"]
published: true
date: "2010-12-11"
---

Man findet doch einige Seiten im Netz, die Gameserverkernel kostenpflichtig anbieten. Ebenso welche, die es euch ermöglichen wollen dass ihr X tausend FPS bei Gameserver selber einstellen zu können. Man sollte von solchen Anbietern Abstand nehmen, denn sie wollen nur eins: Geld schinden für etwas, dass man erstens nicht braucht und zweitens eigentlich kostenlos ist, bzw. sein sollte.

Angebote, die es euch ermöglichen sollen, dass ihr X tausend FPS bei Gameserver selber einstellen und betreiben könnt, bringen nur dem Verkäufer etwas.  
[FPS, die höher als die Tickrate sind, bringen laut Valve nichts](/server-fps-die-hoher-als-die-tickrate-sind-bringen-es-nicht/), außer mehr Abwärme an der CPU. Dementsprechend laufen Gameserver mit stabilen 70 FPS genausogut, wie welche die 1000 oder mehr haben. Dennoch wird von Anbietern versprochen, dass das Gameplay verbessert wird.  
Die Angebote kamen größtenteils auf, nachdem ein Programmierer eine Preload Lib unter der GNU veröffentlicht hat, die eben dies möglich macht. Der Entwickler weißt aber auch gleich darauf hin, dass die erhöhung der FPS keinen spielerischen Vorteil bringen. GNU bedeutet, dass man mit dem Code so ziemlich alles machen kann, außer verkaufen.  
Glaubt ihr an Zufälle? Ich zumindestens nicht. Manche mögen vielleicht was eigenes geschrieben haben, es gibt aber auch sicher schwarze Schafe, die hier die GNU lizensierte Lib verkaufen, aus der sie den eigentlichen Urheber entfernt haben.  
Der größte Witz ist es dann, wenn sie für 15000, 10000 und 5000 FPS gestaffelte Preise haben. Spricht je mehr Geld verlangen, desto mehr FPS die Lib ermöglichen soll. Der Code bleibt der gleiche, nur der maximal zulässige Wert ist geändert.  
  
Bei Kerneln wird auch nicht besser vorgegangen.  
Gameserverkernel bedeutet nur, dass man den Kernel so konfiguriert, dass unter bestimmten Umständen Gameserver etwas besser laufen. Als Grundstock werden zwangsläufig die Sourcecodes von kernel.org genutzt. Diese sind unter der GNU veröffentlicht. Spricht man kann die Daten nehmen und verändern wie man lustig ist. man hat aber folgende wesentliche Einschränkung:  
Benutzt man einen Teil des Codes, muss seinen Code auch unter die GNU stellen. Dies bedeutet, dass man **KEIN** Geld nehmen darf und zum kompilierten Packet den Sourcecode herausgeben muss.  
Bietet euch nun jemand einen Kernel an, dann muss er also den Sourcecode inklusive seiner eventuell selber geschriebenen Patche geben. Dafür darf er auch kein Geld verlangen. Jeder der anderes handelt bricht die GNU Lizenz und kann somit verklagt werden.

Wofür jedoch Geld genommen werden kann, ist das Anpassen des Kernels an euer System. Das genaue Anpassen an die Hardware und das Entfernen unnötiger Kernelpackete ist eine Wissenschaft für sich, bei der man zwar einen Grundstock nehmen kann, aber bei jedem System aufpassen muss. Ein angepasster Kernel ist dann sehr winzig.  
Nur mal als Beispiel: Meine angepassten Kernel sind ca 2MB groß. Die hier zum Download angebotenen Kernel sollen auf möglichst vielen Rechnern laufen und haben deswegen ca 20MB. Der Performancevorteil ist hier eigentlich gleich null. Der Server bootet halt etwas schneller, weil er keine unnötigen Module laden muss. Des Weiteren ist die Kompilierzeit deutlich kürzer, weil wesentlich wenige zu kompilieren muss.

Es kann also nur für das Werk des Anpassens Geld verlangt werden. Hier bezahlt ihr dann das Anpassen, nicht aber den Kernel. Dieser muss dann weiterhin samt Sourcecodes ausgeliefert werden.

