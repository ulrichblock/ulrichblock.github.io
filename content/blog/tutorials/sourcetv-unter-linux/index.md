---
title: "SourceTV unter Linux"
tags: ["steam"]
published: true
date: "2010-11-17"
description: "Tutorial, wie man SourceTV unter Linux einrichtet"
---

SourceTV ist Bestandteil des SRCDS Servers und muss somit nicht extra installiert werden. Wie man z.B. einen Counter-Strike Source Server installiert kann man [hier](http://www.ulrich-block.de/?page_id=552) nachlesen.

Im Folgenden wende ich das Prinzip an, auf dem Gameserver nur einen SourceTV Slot zu starten und die Übertragung mittels eines Proxies an die User zu Broadcasten.

Hat man den Server installiert und nach seinen Wünschen eingerichtet, kann man SourceTV in der Config aktivieren. Ich schreibe dazu an das Ende meiner server.cfg:

```
exec sourcetv.cfg
```

In die neu angelegte sourctv.cfg kommt dann:

```
tv_port 27020
tv_delay 0
tv_maxrate 10000
tv_maxclients 1
tv_snapshotrate 24
tv_relayvoice 1
tv_transmitall 1
tv_allow_camera_man 0
tv_allow_static_shots 0
tv_delaymapchange 1
tv_dispatchmode 2
tv_relaypassword "mumpitz"
tv_name "SourceTV by Server4lau.eu"
tv_password "meinganzsicherespsw"
tv_autorecord 0
```

Startet man den Server jetzt neu, sollte der SourceTV Server auf dem Port 27020 mit einem aktiven Slot lauschen. Überprüfen könnt ihr das, indem ihr per rcon den Befehl „tv_status“ sendet. Hier sollte dann unter anderem eure serverip:sourcetvport angegeben werden.  
Wer Demos automatisch aufnehmen lassen möchte muss tv_autorecord auf 1 stellen. Aber Achtung, man hat sehr schnell viele GB an Daten damit angesammelt, so dass man regelmäßig löschen muss.

Ihr werdet euch jetzt sicher gefragt haben, warum ich den Server nur mit einem Slot starte. Der Grund ist einfach. SourceTV verbraucht viele Recourcen, die den Gameserver stark belasten. Je weniger Slots, desto weniger Belastung. Wenn man nur mal eben 10 Leute zugucken lassen möchte mag es noch gehen. Danach wird die Sache langsam eng.

Auf diesen einzelnen Slot lasse ich nun einen SourceTV Proxie verbinden, der dann das eigentliche Broadcasting an die User übernimmt. Durch einen Proxie wird die Hauptlast einer TV Übertragung auf den Proxie ausgelagert, und man kann weiterhin Problemlos auf dem Gameserver zocken. Wenn ihr keinen eigenen Proxie habt, könnt ihr z.B. bei [server4lau.eu](http://www.server4lau.eu) einen kostenlos leihen.

Als Proxie verwende ich eine eigene Installation, spricht ich habe Counter-Strike Source ein weiteres mal installiert. Custommaps usw müssen auf dieser Installation nicht vorhanden sein. Die Clienten laden sich die Daten von der, beim Gameserver angegeben Fast Download Url.  
Die Config des SourceTV Proxies ist bei mir kurz und einfach. Folgende Werte trage ich in die autoexec.cfg ein:

```
name "Kostenloser Server by Server4lau.eu"
hostname "Kostenloser TV Server by Server4lau.eu"
tv_title "Kostenloser TV Server by Server4lau.eu"
tv_maxclients "32"
tv_timeout "10"
```

Um den Proxie nun auf den Slot des Gameservers zu verbinden verwende ich folgenden Startbefehl, bei dem ihr natürlich eure IP, Port und ein eventuell gesetztes Relaypasswort eintragen müsst:

```bash
./srcds_run -game cstrike +tv_port PortDesProxies +ip IpDesProxies +tv_maxclients 32 +tv_relay Ip:TvPortDesGameserver +password mumpitz
```

Hat man beim Gameserver die Variable tv_relaypassword nicht gesetzt, kann man den Teil mit +password weglassen.

Wenn ihr alle Daten richtig angegben habt, müsste euer Proxie Server nun auf den einzelnen TV Slot des Gameservers connecten und dessen Übertragung auf der IP und dem Port broadcasten, den ihr beim Startbefehl eingegeben habt. Auch hier kann man tv_status verwenden, um dies zu überprüfen.

Eine Steuerung über Rcon ist bei einem SourceTV Proxie nicht möglich, ein Passwort dafür zu setzen ist somit überflüssig und bringt nichts.