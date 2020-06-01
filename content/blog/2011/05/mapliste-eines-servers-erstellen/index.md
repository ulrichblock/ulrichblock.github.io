---
title: "Mapliste eines Servers erstellen"
tags: ["bash", "Counter-Strike: Source"]
published: true
date: "2011-05-13"
---

Es kann vorkommen, dass man nach einiger Zeit den Überblick verliert, was man so alles an Maps hochgeladen hat. Insbesondere das Pflegen der Maplisten bzw. des Mapcycles kann recht umständlich werden.  
Hat man SSH2 Zugriff auf den Server kann man sich mit dem Programmen ls und awk relativ einfach die Mapliste erstellen lassen. Man lässt "ls" alle .bsp Dateien anzeigen, piped den Output in das Programm awk, welches dann den Output an den Stellen mit "." trennt und den ersten Wert ausgibt. Der Parameter "-F" ist mit[ "field seperator"](http://linux.die.net/man/1/awk) beschrieben.

```bash
ls *.bsp | awk -F '.' '{print $1}'
```

Benutzt man diesen Code, kann man die Mapliste aus der Konsole kopieren. Bei vielen Maps kann auch dieses recht umständlich werden. Aus diesem Grund sollte man den Output gleich in ein Dokument schreiben lassen. Dies macht man mit "&gt;". Wenn nur ein "&gt;" verwendet wird, dann wird eine eventuell bereits bestehende Datei überschrieben. Bei "&gt;&gt;" wird der Output am Ende der Datei hinzugefügt. In beiden Fällen wird die Datei erstellt, sollte es sie noch nicht geben.

```bash
ls *.bsp | awk -F '.' '{print $1}' > mapliste.txt
```

