---
title: "Die größte Sicherheitslücke eines Systems ist der Mensch"
tags: ["security"]
published: true
date: "2011-02-17"
---

[Ich hatte mich vor einiger Zeit darüber ausgelassen](/md5-hashes-fur-passworter-sind-unsicherer-als-man-denkt/), dass das Abspeichern von Passwörtern als reiner MD5 Hash zu einem Sicherheitsproblem werden kann, wenn die Datenbank in die falschen Hände gelangt.

Vor kurzem machte eine US Sicherheitsfirma Jagt auf eine Hackergruppe und wurde dann von dieser erfolgreich attackiert. Man könnte jetzt denken, dass die Gruppe schwere Geschütze aufgefahren hat, um ihr Ziel zu erreichen.  
Anscheinend ist man aber durch eine einfache SQL Injection an eine Datenbank gekommen, in der Passwörter als ungesalzene MD5 Hashes abgelegt waren. Mittels Rainbow Tabellen, konnten diese Passwörter relativ einfach herausgefunden werden.  
Da Hauptverantwortliche ihre Passwörter auf verschiedenen Systemen eingesetzt haben, war es dann wohl ein leichtes, den Zugriff auf andere System auszuweiten und hier abermals an Datenbanken mit ungesalzenen MD5 Passwörtern zu gelangen.

Zusammenfassend kann man sagen, das ich es ziemlich schwach finde als "Sicherheitsexperte":  

– Passwörter als ungesalzenen MD5 Hash zu speichern  
– Ein Passwort für alles einzusetzen  
– Passwörter für SSH zu nutzen

Genaueres kann man hier nachlesen:  
[heise.de](http://www.heise.de/newsticker/meldung/Hintergruende-zum-Einbruch-bei-US-Sicherheitsfirma-1191238.html)  
[arstechnica.com](http://arstechnica.com/tech-policy/news/2011/02/anonymous-speaks-the-inside-story-of-the-hbgary-hack.ars/)

