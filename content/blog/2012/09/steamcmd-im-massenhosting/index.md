---
title: "steamCmd im Massenhosting"
tags: ["game-server", "steam"]
published: true
date: "2012-09-29"
---

In letzter Zeit bin ich leider nicht mehr sehr oft zum Bloggen gekommen, auch wenn es sicher viele Interessante Themen wie z.B. Counter-Strike Global Offensive und den damit neu eingeführten Updater gegeben hat.

Das neue Tool [ist ausreichend dokumentiert](https://developer.valvesoftware.com/wiki/SteamCMD), so dass ich die Bedienung hier nicht noch einmal aufgreifen werde.

Der neue Updater soll laut Valve deutlich effizienter sein, als sein Vorgänger das hldasupdatetool. Es bringt jedoch gleichzeitig Einschränkungen mit:

- Account Zwang
- Es kann nur einmal je User gleichzeitig aufgerufen werden
- Ein Account kann nicht für das gleichzeitige Benutzen mit verschiedenen Usern verwendet werden

Zum Glück muss der verwendete Account das zu aktualisierende Spiel nicht gekauft haben. Deswegen kann man sich mittels trashmail Addressen von z.B. trash-mail.com, wegwerfemail.de und schafmail.de Accounts beliebig viele Steam Accounts erstellen und mit diesen Updaten.

Wenn man je Server eine volle Installation hat, kann man diesen Account samt Startscript mit dem Serverstart übergeben, so dass der Server sich von selber aktuell hält.  
Benutzt man eine Masterinstallation und Symlinks reduziert sich der Wartungsaufwand auf eine Installation je Rootserver. Wer Symlinks nutzt, wird auch sicher so clever sein, vor dem Updatestart die [Steam Web API](/die-steam-web-api-und-updates/ "Die Steam Web API und Updates") anzufragen, ob es überhaupt nötig ist.

So lange man nur wenige Server zu betreuen hat, ist es auch mit vollen Installationen noch halbwegs gangbar. Was ist aber, wenn man ein Hoster ist und hunderte Server vermietet?

Man hat nun die Wahl, für jeden installierten Gameserver einen Account zu erstellen. Dadurch ist es dann jedem Gameserver möglich, zeitnah ein Update zu beziehen. Kundenbeschwerden sollten wenige auftreten.  
Durch die bei Updates normalen Peaks wird es hier aber auch zu Verzögerungen kommen, bis alle Server aktuell sind.

Benutzt man Steam Accounts mehrfach, kann man zwar Zeit beim Anlegen der Gameserver sparen, diese Zeit wird man aber wieder verlieren, wenn die Kundenbeschwerden kommen, dass ihre Server noch nicht aktuell sind.

Welche Lösung man auch immer wählt, es wird aufwendig und Zeitintensiv. Die verwendete Zeit kann man natürlich nicht so einfach wieder in Geld umsetzen, weil es vom Kunden einfach erwartet wird.

Auch ohne Modifikationen für steamCmd und Counter-Strike: Global Offensive ist der Arbeitsaufwand bei meinem Interface Easy-Wi deutlich geringer.  
Durch die Symlinkstruktur bei der nur eine komplette Masterinstallation besteht und die Kundenserver Ordner, Links und Configs besitzen muss eh nur eine Installation aktuell gehalten werden.

Das Interface arbeitet beim Updaten in zwei Schritten. Im ersten wird geschaut, ob ein Image Server eingestellt wurde und es dort etwas neues gibt. Wenn es neue Dateien gibt, werden nur diese, nicht aber ein komplettes Image neu gezogen. Alles andere wäre auch nicht performant. Im zweiten Schritt wird dann das hldsupdatetool gestartet, um ggf. Dateien von Valve nachzuladen.

Dieses Tool unterstützt leider kein CS:GO. Deswegen musste man bisher sich ein eigenes Skript auf dem Imageserver anlegen, dass seinen Masterserver aktuell hält. Optional hat man es auch auf allen anderen Rootservern mit jeweils eigenem Account angelegt. Man muss hierbei nur einmalig Arbeitszeit aufwenden und alle Kundenserver können automatisiert zeitnah auf den neuesten Stand gebracht werden.

Für mich war diese Lösung aber nicht zufrieden stellend. Ziel eines Interfaces soll es sein, dass man nur noch in Notfällen auf der Konsole arbeiten muss. In den letzten Wochen habe ich deswegen nach einer zufriedenstellenden Lösung für Easy-Wi gesucht, um den Arbeitsaufwand für die Admins weiter zu reduzieren.

Der Updateteil wurde überarbeitet und SteamCmd wird nun direkt unterstützt. Mittels der Steam Web API wird regelmäßig geschaut, ob Updates überhaupt notwendig sind und sie entsprechend bei den Masterservern getriggert. Um zeitnahe Updates fahren zu können muss man nur noch im Interface selber je Rootserver einen Steam Account hinterlegen.  
Wenn man das nicht möchte, kann man, wie bisher auch, ausschließlich auf eine zentralisierte Updateverteilung über einen Imageserver setzen.

Auch die Server- und Imageverwaltung selber wurde erweitert. So können nun die Startbefehle zu den einzelnen Gamemod wie Armsrace und Demolition frei vom Admin definiert und vom User dann ausgewählt werden. Auch ein zusätzliches Eingabefeld für die Mapgroup ist nun vorhanden.

Einmal eingestellt, läuft dann alles vollautomatisch. Die Gesamtanzahl an notwendigen Steam Accounts hält sich auch sehr in Grenzen. Entweder je Rootserver einen, oder aber nur einen einzigen für den Imageserver.

