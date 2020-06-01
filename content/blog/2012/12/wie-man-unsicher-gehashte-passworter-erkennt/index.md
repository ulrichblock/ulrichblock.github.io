---
title: "Wie man unsicher gehashte Passwörter erkennt"
tags: ["security"]
published: true
date: "2012-12-08"
---

Das man Passwörter nicht ungesichert in die Datenbank schreiben sollte, hat sich sicher mittlerweile herumgesprochen. Falls eine Webseite einem das aktuelle Passwort zuschicken kann, würde ich meine Daten dort sofort löschen lassen. Der Grund ist, dass hier keine, oder eine absolut ungenügende Sicherung der Passwörter erfolgt.

Um Datendieben die Passwörter nicht auf dem Silbertablett zu servieren, ist es deswegen üblich geworden, Passwörter zu hashen. Die mittlerweile zu bevorzugende Methode ist das Hashen mittels Bcrypt wobei zusätzlich ein Salt und Iteration zum Einsatz kommt.

Vor einigen Jahren, war es normal, Passwörter lediglich mit MD5, oder SHA1 zu hashen und auf die Verwendung von Salts und Iteration zu verzichten. Mit wachsender Rechenleistung von CPUs und Grafikkarten ist es immer einfacher geworden Millionen, wenn nicht sogar Milliarden von Hashes je Sekunde durchzuprobieren.  
So schafft zum Beispiel [dieses GPU Cluster](http://www.heise.de/security/meldung/Rekorde-im-Passwort-Knacken-durch-Riesen-GPU-Cluster-1762654.html) 180 Milliarden MD5 und 63 Milliarden SHA1 Hashes in der Sekunde zu erstellen. Fällt erst einmal die Userdatenbank in falsche Hände, sind auch sichere Passwörter schnell gecrackt.  
Aus diesem Grund werden MD5 und SHA1 als kaputte Sicherheitsmaßnahmen angesehen.

Wenn man kein Programmierer ist und herausfinden möchte, ob das eingesetzte CMS, Interface, Forum, usw. die Passwörter unsicher speichert, braucht man lediglich Zugriff zur Datenbank.

Man öffnet die Benutzer Tabelle und sucht nach der Spalte für das Passwort. MD5 Hashes sind 32 und SHA1 40 Stellen lang. Beide enthalten nur Zahlen und klein geschriebene Buchstaben.

Man hat nun zwei Möglichkeiten, um zu testen, ob lediglich ein einfacher Hash zum Einsatz kommt.  
Die einfachste Version ist es, den Hash zu seinem aktuellen Passwort mit einem [Online Generator](http://www.hashgenerator.de/) zu erstellen und den generierten mit dem hinterlegten zu vergleichen.  
Die andere wäre es, den Hash zu einem bekannten Passwort einzutragen und den Login zu versuchen.

Ist das Passwort unsicher gespeichert, sollte man die Benutzung der Software einstellen und auf eine andere ausweichen, weil ein seit Jahren bekanntes Sicherheitsproblem ignoriert wurde.

