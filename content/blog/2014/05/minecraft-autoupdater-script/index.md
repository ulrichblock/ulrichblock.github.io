---
title: "Minecraft Autoupdater Script"
tags: ["game-server", "bash"]
published: true
date: "2014-05-03"
---

Der Minecraft Server ist in Java geschrieben und kommt von Haus aus ohne Autoupdater. Im Falle eines Updates muss man die Server händisch aktualisieren.

Ist man nun Hoster und installiert jedem Kunden seine eigene *minecraft_server.jar* hat man nun zwei Optionen.

Zum einen könnte man den Kunden erlauben, die JAR Datei selber zu updaten. Dadurch lagert man die Arbeit zwar auf den Kunden aus, man schafft sich aber einen Sicherheitsalptraum. In dem Moment, in dem der Kunde die Datei austauschen kann, kann er auch Dinge hochladen und ausführen, die mit Minecraft nichts zu tun haben. Im schlimmsten Fall wird mittels privilege escalation der ganze Root übernommen, oder aber die Konkurrenz spioniert die Infrastruktur aus.

Als Hoster bleibt einem deswegen eigentlich nur die zweite Option, die Server JAR ausschließlich selber zu aktualisieren.

In einem Symlink Setup, wie bei Easy-Wi kann man dies schnell und einfach über einen zentralen Imageserver regeln, so dass man schon deutlich weniger Arbeitsaufwand hat.

Es geht aber noch besser. Man kann die aktuelle Version automatisch mit der installierten abgleichen und ggf. das Update automatisch einspielen lassen.

Unter der URL [s3.amazonaws.com/Minecraft.Download/versions/versions.json](http://s3.amazonaws.com/Minecraft.Download/versions/versions.json) findet man einen JSON encodierten String, mit den Minecraft Server Versionen. Kombiniert mit dem Wissen, dass die JAR Versionen immer nach dem gleichen Muster auf dem Server gespeichert sind **http://s3.amazonaws.com/Minecraft.Download/versions/$minecraft_version/minecraft_server.$minecraft_version.jar**, kann man sich nach einem Aufruf des JSONs, den aktuellen Download Link generieren.

Genau dies macht Easy-WI bereits für die Masterserver Installation, so dass der Admin bei aktiviertem Autoaupdate nichts mehr machen muss.

Diese Technik kann man auch relativ einfach mit einem Shell Skript nachbauen. Kombiniert mit einem Wrapper Skript, dass an Stelle der *minecraft_server.jar* aufgerufen wird, kann man einen Autoupdater realisieren, der bei jedem Serverstart, nach Updates prüft und diese ggf. einspielt.

Dafür braucht es nicht einmal viele Zeilen:

```bash
#!/bin/bash

minecraft_version_old="$(cat mc_version.txt | head -n1)"
minecraft_version="$(wget -q http://s3.amazonaws.com/Minecraft.Download/versions/versions.json -O- | grep -m1 -B4 -A1 '"release"' | grep '"release"'| awk -F'"' '{print $4}')"
minecraft_download="http://s3.amazonaws.com/Minecraft.Download/versions/$minecraft_version/minecraft_server.$minecraft_version.jar"

if [ "$minecraft_version_old" != "$minecraft_version" -a "yes" = "$(echo | awk "($minecraft_version_old <= $minecraft_version) { print \"yes\"; }")" ]; then
        echo "Old: $minecraft_version_old; New: $minecraft_version"
        wget $minecraft_download
        if [ -f minecraft_server.$minecraft_version.jar ]; then
                mv minecraft_server.$minecraft_version.jar minecraft_server.jar
                echo $minecraft_version > mc_version.txt
                chmod 700 minecraft_server.jar
        fi
fi
```

Es ist dabei erforderlich, dass es im gleichen Ordner, wie die *minecraft_server.jar* liegt.

