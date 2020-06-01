---
title: "Orangebox Update angekündigt, das Probleme bereiten wird"
tags: ["game-server", "Orangebox", "Counter-Strike: Source"]
published: true
date: "2012-10-24"
---

Unter dem Topic "**\[hlds_linux\] Next TF update may break linux plugins**" hat Fletcher Dunn heute auf der HLDS Mailingliste gepostet.

Der Inhalt lautet kurz zusammengefasst, dass mit dem kommenden Orangebox Update Dateien ungenannt und innerhalb der Programmierung Änderungen eingeführt werden. Betroffene Spiele sind unter anderem Team Fortress und Day of Defeat.  
Im Ergebnis werden zahlreiche Plugins wie Metamod, Sourcemod, zBlock etc. in ihrer derzeitigen Form nicht mehr funktionieren. Spricht die allermeisten, insbesondere die Public Server, werden Probleme bekommen.  
Von ‚Your Client is running a newer version than the server‘ Meldungen, über Abstürzen bis hin zu Servern, die gar nicht mehr starten wollen, wird alles dabei sein.

In letzter Zeit hat Valve seine Updates häufig am Freitag Nachmittag bzw. Abend unserer Zeit veröffentlicht. Wenn dieser Zeitpunkt wieder gewählt wird, steht ein chaotisches Wochenende mit viel Frust für die Serverbetreiber und Spieler an.

Im zweiten Schritt wird dieses Update sicher auch für Counter-Strike: Source erfolgen. Die Folgen dürften hier die selben sein. Eine Vorwarnung bezüglich CSS gab es noch nicht.

Der frei ins Deutsche übersetzte Inhalt lautete:

> Eine Vorwarnung bezüglich des nächsten Team Fortress und Orangebox Updates. Viele der Linux Binarys (\*.so Dateien) des dedizierten Servers werden umbenannt.
> 
> Einige Beispiele:  
> *bin/datacache_srv.so  
> bin/dedicated_srv.so  
> bin/engine_srv.so  
> bin/libtier0_srv.so  
> bin/libvstdlib_srv.so  
> bin/materialsystem_srv.so  
> bin/replay_srv.so  
> bin/scenefilecache_srv.so  
> bin/shaderapiempty_srv.so  
> bin/soundemittersystem_srv.so  
> bin/studiorender_srv.so  
> bin/vphysics_srv.so  
> tf/bin/server_srv.so*
> 
> Es kann sein, dass Skripten und Plugins, die von bestimmten Dateinamen abhängig sind, nicht mehr funktionieren.
> 
> Ebenso wird das Update eine große Anzahl an Änderungen an den low Level Binarys, wie tier0_srv.so mit sich bringen.
> 
> Die letzte veröffentlichte TF Beta enthält bereits alle Änderungen und kann zum Test von Skripten und Plugins eingesetzt werden.
> 
> Wir empfehlen ausdrücklich, dass Plugin Entwickler ihre Plugins mit der aktuellen Team Fortress Beta testen.

Der originale Text:

> A word of warning concerning the next TF update. Many of the Linux binaries for the dedicated server will be renamed.
> 
> For example:
> 
> bin/datacache_srv.so  
> bin/dedicated_srv.so  
> bin/engine_srv.so  
> bin/libtier0_srv.so  
> bin/libvstdlib_srv.so  
> bin/materialsystem_srv.so  
> bin/replay_srv.so  
> bin/scenefilecache_srv.so  
> bin/shaderapiempty_srv.so  
> bin/soundemittersystem_srv.so  
> bin/studiorender_srv.so  
> bin/vphysics_srv.so  
> tf/bin/server_srv.so
> 
> If you have any scripts or plugins that depend on particular filenames, this could break them.
> 
> Also, the update will contain a large number of changes to low level libraries such as tier0_srv.so.
> 
> The most recent TF beta was shipped with the renamed binaries and with these changes and can be used to test any scripts or plugins.
> 
> We highly recommend that plugin developers test their plugins against the current TF beta.
> 
> Thank you,  
> Fletch

