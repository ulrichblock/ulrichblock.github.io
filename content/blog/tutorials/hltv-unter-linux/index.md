---
title: "HLTV unter Linux"
tags: ["steam"]
published: true
date: "2010-11-28"
description: "Tutorial, wie man HLTV unter Linux einrichtet"
---

Um HLTV zu betreiben braucht man einen HLTV Proxy Server, den man auf den Gameserver connecten lässt. Dies gilt für alle Half Life basierenden Spiele wie Counter-Strike, Counter-Strike Condition Zero, Day of Defeat, usw.  
Nach dem Connecten verbraucht der HLTV Proxy einen Spielerslot. Wenn ihr also ein 5vs5 mit einer HLTV Übertragung spielen wollt, braucht ihr einen Gameserver mit mindestens 11 Slots. 10 für die Spieler und einen für den HLTV Proxy.

Um einen HLTV Proxy zu betreiben, braucht ihr eine Serverinstallation von eurem Spiel. Ich trenne bei mir HLTV von den Gameservern und installiere für sie in einem exta Verzeichnis.  
Im Folgenden gehe ich davon aus, dass ihr bereits einen Server installiert habt.

Im Serververzeichnis sollte sich im Ordner der **hlds\_run** die Datei **hltv** befinden. Mit dieser wird der HLTV Proxy gestartet. Bevor man das macht, muss man den Libary Pfad exportieren. Ansonsten gibt es nur Fehlermeldungen und HLTV startet nicht. Man kann dies entweder jedes mal manuel machen, oder sich eine kleinen Wrapper anlegen, den man dann anstelle der **hltv** Datei aufruft. Mein Wrapper heißt hltv.sh und sein Inhalt sieht wie folgt aus:

```bash
#!/bin/bash
BINARYPATH="$(dirname "${0}")"
cd "${BINARYPATH}"
LIBRARYPATH="$(pwd)"
export LD_LIBRARY_PATH="${LIBRARYPATH}:${LD_LIBRARY_PATH}"
./hltv $@
```

Damit der Server im Hintergrund weiterläuft, wenn ich mich auslogge, starte ich ihn in einem Screen:

```bash
screen -m -d -S  hltv ./hltv.sh -game cstrike -port 27020 -ip 11.11.11.11 +maxclients 32 +exec hltv.cfg +connect gamserverip:port +serverpassword gameserverpasswort
```

Die hltv.cfg muss von euch angelegt werden, wenn ihr sie nutzen wollt. Die Parameter +connect und +serverpassword kann man auch weglassen und statt dessen in z.B. die angelegte hltv.cfg schreiben.

Startet man nun den Server und hat die Daten des Gameservers entweder beim Startbefehl, oder in der hltv.cfg richtig angegeben, sollte er auf euren Gameserver verbinden und euer Match unter der IP und dem Port übertragen, die ihr im Startbefehl angegeben habt.

Klappt das Verbinden, könnt ihr euch daran machen, den HLTV Proxy weiter einzustellen. Ich mach das in der hltv.cfg. Der Inhalt kann so aussehen:

> // Den Proxy auf diesen Gameserver verbinden  
> //connect gameserverip:port
> 
> // Wenn der Server passwortgeschützt ist sein Passwort angeben  
> serverpassword gameserverpasswort
> 
> publicgame 1
> 
> // Name des Proxys im Scoreboard  
> name „HLTV by xy.de“
> 
> // Maximale Bandbreits pro Zuschauer auf 10KB/sec beschränken  
> rate 10000
> 
> // X Updates pro Sekunde erlauben. 20 ist vollkommen ausreichend.  
> updaterate 20
> 
> // Im proxy.log die Ereignisse loggen  
> logfile 0
> 
> // HLTV Passwort  
> // password ServerPassword
> 
> // Das Chatten auf dem HLTV erlauben  
> chatmode 1
> 
> // Um den Server die Demos automatisch aufnehmen zu lassen, die „//“ entfernen  
> // record demoname
> 
> // Verzögerung der HLTV Übertragung  
> delay 120
> 
> // Password for relay Proxys, optional  
> // proxypassword xXx
> 
> // Password for spectators, optional  
> //spectatorpassword xXx
> 
> // Slots  
> maxclients 32
> 
> // Werbung  
> offlinetext „Game is delayed – waiting for transmission.“  
> loopcmd 1 180 localmsg „Nachricht 1“ 8 -1 0.85 FFA000FF  
> loopcmd 2 180 localmsg „Nachricht 2“ 8 -1 0.79 FF0000FF
> 
> // Netsettings  
> maxqueries 1500
> 
> // hltv.tga will be shown instead of the default HLTV logo in spectator GUI  
> // bannerfile „hltv.tga“
> 
> // these commands will be executed on connecting spectator client and may be used  
> // to adjust settings for HLTV (for example voice parameters)  
> signoncommands „voice\_scale 2; voice\_overdrive 16; volume 0.5; echo Voice adjusted for HLTV“