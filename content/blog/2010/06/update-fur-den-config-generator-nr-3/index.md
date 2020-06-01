---
title: "Counter-Strike Source Orangebox Update Nr.3"
tags: ["steam", "Counter-Strike: Source", "Orangebox"]
published: true
date: "2010-06-27"
---

Da mich immer wieder Leute kontaktieren, wie sie ihre Counter-Strike Source Server mit dem Orangebox Update wieder zum laufen bekommen, hier mal die Schritte die man durchführen muss:

1. Im Serververzeichnis den Ordner orangebox erstellen, wenn er noch nicht vorhanden ist.
2. den Ordner cstrike in den orangebox Ordner verschieben.
3. alle srcds_ Dateien löschen (srcds_run, srcds_i686, usw)
4. Den Server mit dem steam Updatetool aktualisieren: "./steam -command update -game "Counter-Strike Source" -dir . -verify_all -retry
5. Das Startscript oder das Webinterface anpassen, weil die neue srcds_run sich im orangebox Ordner befindet. Je nachdem, was ihr verwendet wird das ganze unter den Namen Binarydir, Scriptverzeichnis, Executable Path, usw. zu finden sein.

