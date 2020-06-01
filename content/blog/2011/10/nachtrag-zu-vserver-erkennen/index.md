---
title: "Nachtrag zu Vserver erkennen"
tags: []
published: true
date: "2011-10-01"
---

[Hier](/vserver-rootserver-dedizierte-server-und-schwarze-schafe/) hatte ich bereits versucht den Unterschied zwischen, Root, Virtuellem und dedizierten Server aufzuzeigen.

Auch bin ich darauf eingegangen, welche Anzeichen es auf dem System für eine Virtualisierung geben kann. Etwas, was mir auch schon ab und zu auf meinem Vserver begegnet ist, hatte ich nicht als Indikator aufgezählt, weil ich es nicht als Vserver typisch eingeordnet hatte.

Das Programm Htop zeigt, **nan%** an, wenn ein Core von dem virtualisiertem System deaktiviert wird, weil er nicht gebraucht wird.  
Über diese Funktionsbeschreibung bin ich gestolpert, als ich im [serversupportforum.de](http://serversupportforum.de/forum/virtuelle-server/47041-vmware-und-htop.html) Forum am Lesen war.

