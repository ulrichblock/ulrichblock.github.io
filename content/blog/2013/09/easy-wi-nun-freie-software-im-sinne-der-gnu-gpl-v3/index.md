---
title: "Easy-WI nun freie Software im Sinne der GNU GPL v3"
tags: ["easy-wi"]
published: true
date: "2013-09-07"
---

Easy-WI ist mit dem [Milestone 4.00](https://github.com/easy-wi/developer/issues?milestone=1&page=1&state=closed) freie Software im Sinne der GNU GPL v3 geworden. Darum möchte ich das Interface hier noch einmal vorstellen.

## Was ist Easy-WI?

Easy-Wi ist zu aller erst ein Webinterface für verschiedene Serverdienste. Darüber hinaus bietet es ein CMS, dass einen integrierten Game- und Voiceserver Verleih hat.  
Es wurde mit dem Ziel programmiert, die täglich anfallenden Aufgaben eines Administrators zu automatisieren und zu vereinfachen.

## Für wen ist Easy-WI gedacht?

Easy-Wi richtet sich an jedermann. Egal ob für den professionellen Einsatz als Hoster, Sponsoring Projekt, Lan Party, Clan, oder Privatperson, Easy-WI eignet sich für alle.

## Warum der Schritt zur GNU GPL v3?

Der Schritt wurde vollzogen, um die Entwicklung zu beschleunigen.  
Easy-WI ist seit einigen Jahren von einer Person gewerblich entwickelt worden. Durch das Gewerbe war die Nutzung zahlreicher Klassen aus Lizenzgründen nicht möglich, so dass alles selber entwickelt und das Rad neu erfunden werden musste.  
GNU GPL v3 lizenziert arbeiten nun mehrere Personen an Easy-WI. Ebenso kann nun eine Vielzahl ausgezeichneter Klassen wie Hybridauth eingesetzt werden.

## Welche Funktionen bzw. Module hat Easy-WI?

Maßgeblicher Punkt bei der Programmierung ist es, alle Prozesse zu automatisieren. Sämtliche Funktionen aufzulisten würde den Rahmen sprengen. Deswegen nur eine Zusammenfassung der wichtigsten Punkte:

- Mobile ready. Das Standardtemplate wurde mit Twitter Bootstrap umgesetzt und ist responsive. Dadurch wird das WI zu einer Web App, die leicht vom Handy bzw. Tablet gesteuert werden kann.
- Mehrsprachigkeit. Derzeit unterstützt sind Deutsch, Englisch und Dänisch. Die Texte liegen in XML Dateien vor.
- Die PHP Module sind von den HTML Templates getrennt. Sollte ein View eines Custom Templates nicht angelegt sein, wird automatisch das default verwendet.
- Die Gameserver Verwaltung ist überwiegend automatisiert. Lediglich Addons müssen von Zeit zu Zeit zentral aktualisiert werden. Das Verteilen auf die einzelnen Gameserver geschieht bereits wieder automatisch.
- Das gleiche gilt für Voiceserver auf TS3 Basis.
- Dabei kann für TS3 Server zusätzlich ein TSDNS als standalone, oder aber zusammen mit der TS3 Master Instanz verwaltet werden.
- Sowohl Game-, als auch Voiceserver werden automatisiert überwacht. Server offline? Zu viele Slots? Kein Passwort bei einem Private Server gesetzt? Branding im Servernamen vergessen? Es wird umgehend reagiert.
- Bestehende Voice- und Gameserver können ins WI importiert und Nutzern zugewiesen werden.
- Mittels PXE, DHCP und TFT ermöglichen die Installation von Images und das Verwalten von ESX(i) und Dedicated Servern.
- Es können Reseller angelegt und verwaltet werden.
- Sämtliche Module können über die REST API in bereits bestehende Prozesse wie z.B. einem WHMCS, oder Magento basierenden Shop eingebunden werden.

## Wie wird Easy-WI supported?

Open Source typisch gibt es:

- Wiki [wiki.easy-wi.com](http://wiki.easy-wi.com)
- Forum [forum.easy-wi.com](http://forum.easy-wi.com)
- Öffentlichen Bugtracker, bei dem auch Feature Request eingereicht werden können bei [github.com](https://github.com/easy-wi/developer/issues?state=open)

## Wo kann ich Easy-WI downloaden?

- Die Stable in unserem [Download Bereich](https://easy-wi.com/de/downloads/)
- Den aktuellen Entwicklungsstand im [Github Repository](https://github.com/easy-wi/developer)

## Wie kann ich Easy-WI unterstützen

Um Easy-WI zu unterstützen, kann dieser Text kann gerne kopiert und weiterverbreitet werden. Es gibt ihn auch vorformatiert in BBCode:

- [Deutsch](http://pastebin.com/dD0zk8u9)
- [Englisch](http://pastebin.com/nR0hz91w)

Des Weiteren freue ich mich über Pull Requests im Github.

