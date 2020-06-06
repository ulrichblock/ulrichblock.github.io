---
title: "Neues Tool: Steam + VAC Secured?"
tags: ["steam", "game-server"]
published: true
date: "2012-08-11"
---

Basierend auf dem Code vom Blogpost [Ist mein Server Steam Secured?](/ist-mein-server-steam-secured/ "Ist mein Server Steam Secured?") habe ich ein kleines Tool zusammengeschraubt, mit dem man mehrere Dinge herausfinden kann.

Es kann folgende Fragen beantworten:

- Ist der Server bei Steam bekannt und gelistet?
- Ist der Server mit VAC gesichert?
- Wie viele Server sind Steam für diese IP bekannt, bzw. wie viele Server laufen auf diesem Host

Man kann bis zu 10 Anfragen in der Minute stellen. Das Ergebnis wird dann für eine Minute gespeichert und keine weitere Anfrage an die API gestellt.

Wer Angst hat, dass seine UserIP gesichert wird, den kann ich beruhigen. UserIPs werden in der Form md5($_SERVER\[‚REMOTE_ADDR‘\]) verwaltet und nach Zeitablauf sofort wieder gelöscht.

Das Tool richtet sich zum Einen an Serveradmins, die ihren Serverstatus nachschauen möchten, ohne sich dabei bei Steam einzuloggen. Zum Anderen ist es für User gedacht, die etwas mehr über die Belegung des Hosts herausfinden möchten, auf dem ihr Gameserver läuft.

Zu finden ist das Tool in der Menüleiste und unter dem Link [Steam + VAC Secured?](/steam-vac-secured/ "Steam + VAC Secured?")

Ich hoffe, dass das Tool dem ein oder anderen nützlich sein wird.

