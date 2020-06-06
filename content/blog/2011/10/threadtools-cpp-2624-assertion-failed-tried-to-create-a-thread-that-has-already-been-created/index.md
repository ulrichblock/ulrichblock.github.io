---
title: "threadtools.cpp (2624) : Assertion Failed: Tried to create a thread that has already been created!"
tags: ["steam", "Counter-Strike"]
published: true
date: "2011-10-31"
---

Schon mal beim starten eines Counter-Strike 1.6 Server diesen Fehler gehabt:

> threadtools.cpp (2624) : Assertion Failed: Tried to create a thread that has already been created!

Bei mir ist er aufgetreten, als ich die Startmap im Startbefehl "+map de_dust" stehen hatte und darüber hinaus in der server.cfg noch der Aufruf "map de_dust" vorhanden war.  
Nachdem der Befehl aus der Config entfernt war, konnte man den Server problemlos starten.

