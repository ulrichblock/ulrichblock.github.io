---
title: "Update für den Image Manager"
tags: ["Image Manager", "Tekbase"]
published: true
date: "2010-11-05"
---

Ich habe meinen [Image Manager](/image-manager-fur-tekbase-von-teklab-de/) erweitert und geupdated. Er kann jetzt neben den eigentlich vorgesehen Symlinksystem auch Images erstellen, die Dateien anstelle von Symlinks beinhalten.  
Aus zahlreichen Gründen ziehe ich selber Symlinks vor. Manche Leute haben eine andere Ansicht. Diese Leute will ich mit der Erweiterung ansprechen.

Deswegen habe ich jetzt Funktionen bzw. Startparameter eingebaut, die den Zwischenschritt über Symlinks nicht machen und Images direkt aus dem Masterverzeichnis erstellen.

Das Update bringt eine weitere Neuerung mit sich:  
Verfügt der Server, für den ein Image erstellt wird, über das Anticheatprogramm Punkbuster, wird für diesen automatisch ein Update angestoßen. Läd dieses Update neue Dateien heruntergeladen, wird das Image neu erstellt. Dies ist bei Spielen wie z.B. der Call of Duty Reihe sehr nützlich und verringert den Arbeitsaufwand.

