---
title: "ProFTP Packet von Plesk verwundbar"
tags: ["security", "Plesk", "ProFTP"]
published: true
date: "2010-11-16"
---

Plesk bringt Packete wie ProFTP selber mit. Das ist auch nichts schlimmes, man muss nur halt immer manuell alles updaten.

Was schlimmer ist, ist dass derzeit bei allen Pleskinstallationen eine schwere Sicherheitslücke im ProFTP Deamon befindet, über die sehr weitgehende Rechte erlangt werden können. Diese ist in den neueren ProFTP Versionen hinzugekommen, so dass Admins, die den Server aus den Debian Sources beziehen, nicht betroffen sind.

Wer passiv ist, bekommt es gar nicht mit, wer aktiv ist kann es [hier](http://psa.bi-co.net/) und [hier](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2010-3867) nachlesen. Bequeme Admins sind für sowas auf deren Mailingliste, damit sie die Nachricht frei Haus bekommen.

Bis man den Update bzw. Bugfix eingespielt hat, sollte man unbedingt den FTP Server zu deaktivieren.

Den FTP Server bis dahin laufen zu lassen ist grob fahrlässig, da die Lücke schon auf breiter Front aktiv ausgenutzt wird.  
In einschlägigen Foren laufen mitlerweile viele Leute auf, deren Systeme über diese Lücke kompromitiert wurden.

Dieser Vorfall zeigt mal wieder, dass Sicherheit ein laufender Prozess ist und die Sache nicht mit einmal einrichten getan ist.

