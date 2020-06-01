---
title: "Etwas schwacher Support bei Server4You"
tags: []
published: true
date: "2014-07-01"
---

Eigentlich habe ich keine großen Ansprüche an den recht günstigen Server4You VServer. Auch vom Support erwarte ich mir nicht viel. Die derzeitige Situation mit meinem Vserver finde ich jedoch mehr als bedenklich. Er ist paravirtualisiert, wobei die Kernel Version 2.6.18-028stab094.3 zum Einsatz kommt. Da Debian 7 mindestens 2.32 braucht, ist immer noch Debian 6 installiert.  
Das Problem hier dran ist, dass Debian 6 End of Live ist, also keine Sicherheitspatche mehr erhält. Mit anderen Worten ist der Vserver grundsätzlich eine tickende Zeitbombe.

Mir ist durchaus bewusst, dass sich einige Debian Maintainer dazu entschlossen haben, Debian 6 eingeschränkt als LTS zu supporten. Deswegen besteht bei mir nicht die Gefahr, dass über eine bekannte und ungepatchte Lücke eingebrochen wird. Ich würde aber mal unterstellen, dass eine Vielzahl der Admins, dieses Wissen nicht haben.  
Eine Anleitung, wie man Debian 6 zu Debian 6 Upgraded kann man in der [Debian Wiki](https://wiki.debian.org/LTS/Using "Debian LTS") finden.

Klar ist es Aufgabe des Admins sich über solche Entwicklungen selbst auf dem Laufenden zu halten und zu reagieren. Wenn es zu einem juristischen Streit kommt, wird sich wohl kein Kunde darauf berufen können, dass ein etwaiger Hack nur durch das fehlende Upgrade am Kernel möglich war.

Schwach finde ich, dass Server4You keine aktive Aufklärung betreibt. Damit wird meiner Ansicht nach billigend in Kauf genommen, dass alle Vserver mit Debian 6, die gezwungener Maßen mit dem alten Kernel laufen, über kurz oder lang gehackt werden. Ich frage mich, ob hier jemand die Rechnung aufgemacht hat, wie viel (Arbeits)Zeit bezahlt werden muss, um die Support Fälle der gehackten Server abzuarbeiten.

Deswegen habe ich einmal deren Support getestet. Meine Nachricht, eingereicht am 28.06.2014 10:28 über das Ticket System:

> Sehr geehrte Damen und Herren,
> 
> da Debian 6 End of Live ist und keine Sicherheitsupdates mehr enthält, würde ich nun gerne auf Debian 7 Upgraden. Dies ist aber immer noch nicht möglich, da ein extrem alter Kernel mit der Version 2.6.18-028stab094.3 von ihnen eingesetzt wird.
> 
> Mitte letzten Jahres hieß es, dass sie spätestens Weihnachten ein Upgrade durchführen würden. Wo ist dieses?
> 
> Grüße,  
> Ulrich Block

Bis zum Zeitpunkt der Veröffentlichung dieses Tickets am 01.07.2014 21:01 hat es keine Anmerkung im Ticket gegeben, außer, dass man es weiter leite. Ich habe deswegen eine Anmerkung zum Ticket hinzugefügt, in der Hoffnung, dass man seitens des Supports vielleicht doch noch reagiert:

> Noch ein kleiner Nachtrag:  
> Wie sieht es eigentlich aus, wenn ein Debian 6 Server bei ihnen über eine Lücke gehackt wird, die bei Debian 7 gefixt ist. Das Abwälzen der Haftung auf den Kunden dürfte nur noch bedingt möglich sein, zumal seitens Server4You die Notwendigen Voraussetzungen zum Patchen nicht geschaffen werden.
> 
> Viele Grüße,  
> Ulrich Block

- - - - - -

Nachtrag:  
Am 02.07.2014 14:14 gab es dann doch eine Antwort, bei der ich auf einen [Heise Artikel](http://www.heise.de/open/meldung/Verlaengerter-Support-fuer-Debian-6-2173688.html) verwiesen wurde, der den LTS Support beschreibt. Ein Hinweis, dass man APT neu konfigurieren muss, fehlt. Auch enthält der Heise Beitrag keinen Link zum von mir oben verlinkten Debian Wiki Eintrag.

Übrigens war laut Eintrag im Ticket es bereits an die zuständige Fachabteilung weitergeleitet worden.

