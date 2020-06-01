---
title: "Killingfloor Defence Alliance 2 Linux HowTo"
tags: ["steam", "Killingfloor", "Defence Alliance 2"]
published: true
date: "2010-07-12"
---

## Firewall

Dieses Tutorial beschreibt, wie man einen Killing Floor Server mit Linux installiert, zum laufen bringt.  
Wenn der Rechner zu Hause und/oder hinter einer Firewall steht müssen folgende Ports geforwarded werden:

7707 UDP/IP (Game Port)  
7708 UDP/IP (Query Port)  
7717 UDP/IP (GameSpy Query Port)  
28852 TCP/IP und UDP (Benötigt der Server um sich mit dem Master Server Browser zu verbinden)  
8075 TCP/IP (Port auf dem das WebAdmin erreichbar sein soll)  
20560 UDP/IP (Steam Port)

Wenn du mehr als einen Server laufen lassen willst, musst du weitere Ports freischalten. Dabei ist darauf zu achten, dass eine Änderung des Game Ports in gleicher Höhe auch bei den anderen Ports erfolgen muss. Erhöht man den Gameport um 20 auf 7727 muss der Master Server Port auch um 20 auf 28872, der Steamport auf 20580, der WebAdmin auf 8095 etc. erhöht werden.  
Hier die Information von Yoshiro dazu:  
http://forums.tripwireinteractive.com/showthread.php?t30634

## Installation des Servers

Am besten legt ihr einen eigenen User für den Server an. Dies macht ihr indem ihr als root

```bash
adduser killingfloor
```

eingebt und im folgenden Dialog ein Password für den User eingebt. Mit diesem User logt ihr euch nun ein und erstellt erst einmal das zukünftige Serververzeichnis. Der Name ist egal ich benutze kfserver:

```bash
mkdir kfserver
```

Nun in das erstellte Verzeichnis wechseln, das Steamupdatetool herunterladen und ausführbar machen:

```bash
cd kfserver
wget http://storefront.steampowered.com/download/hldsupdatetool.bin
chmod +x hldsupdatetool.bin
```

  
Als nächstes das Tool starten und den Lizensbedingungen zustimmen:

```bash
./hldsupdatetool.bin
```

Es wird die Datei "steam" erstellt, die wir für das Downloaden und Updaten des Servers benötigen. Mit ihr installieren wir jetzt den KFServer (Dies ist der selbe Befehl mit dem ihr Updates installiert) :

```bash
./steam -command update -game killingfloor -dir /home/killingfloor/kfserver -verify_all -retry
```

Je nachdem wie schnell eure Anbindung ist kann es jetzt etwas dauern. In manchen Fällen wird erst der Updater geupdatet. Dann müsst ihr diesen Befehl so oft ausführen, bis ihr die Nachricht "the server is running in the latest version" erhaltet.

## Den Server starten und konfigurieren

Um zu testen. Ob der Server funktioniert, und damit die KillingFloor.ini geschrieben wird starten wir den Server mit folgenden Parametern aus dem /kfserver/system Verzeichnis:

```bash
./ucc-bin server KF-BioticsLab.rom?gameKFmod.KFGameType?VACSecuredtrue?MaxPlayers6?AdminNameADMIN?AdminPasswordPASSWORD?multihomeYOURIPHERE -nohomedir iniKillingFloor.ini
```

ADMIN, PASSWORD und YOURIPHERE musst du natürlich anpassen. Dies sind die Zugangsdaten zu dem Webinterface, mit dem du den Server bequem administrieren kannst. Du findest das Interface indem du http://deineiphier:8075 im Browser eingibst. Hier kannst du dann den Server Namen, Passwort, die Schwierigkeit usw. einstellen. Wenn du alles eingestellt hast, beendest du den Server, indem du ctrl+c in der Konsole drückst.

Für die Feineinstellung würde ich empfehlen im Anschluss die Killingfloor.ini direkt zu editieren, da es hier mehr Möglichkeiten, als im Interface gibt.

High quality Voice Codec

Um im Spiel eine gute Klangqualität bei den Stimmübertragung der Spieler zu erzielen, müsst ihr diese noch in der KillingFloor.ini aktivieren, indem er den Codec von 48NB auf 96WB umstellt:

>[Engine.VoiceChatReplicationInfo]
>VoIPInternetCodecsCODEC_96WB

## Starscript mit screen

Startest du den Server in der Konsole, wie oben beschrieben, wird er mit der Konsole auch beendet. Damit der Server weiterläuft, auch wenn du dich ausloggst, benötigst du das Programm Screen. Installiere es also mit dem user root (Hier als Beispiel der Befehl bei Debian):

```bash
apt-get install screen
```

Mit dem killingfloor User erstellst du nun folgendes Startscript, indem du mit dem Editor deiner Wahl (Ich nutze nano) die neue Datei öffnest, das Script einfügst, anpasst und den Editor schließt ( bei nano ctrl+x) und dabei speicherst.

```bash
nano kfstart
```

Hier das Script:

```bash
#!/bin/sh 

DIR=/path/to/kfserver/system
UPDATEDIR=/path/to/kfserver
DAEMON=$DIR/ucc-bin
PARAMS="server KF-BioticsLab.rom?game=KFmod.KFGameType?VACSecured=true?MaxPlayers=6?AdminName=ADMIN?AdminPassword=PASSWORD?multihome=YOURIPHERE"
PARAMS2="-nohomedir ini=KillingFloor.ini"

NAME=killingfloor
DESC="killingfloor"

case "$1" in
 start)
   echo "Starting $DESC: $NAME"
   if [ -e $DIR ];
   then
    cd $DIR
    screen -d -m -S $NAME $DAEMON $PARAMS $PARAMS2
   else echo "No such directory: $DIR!"
   fi
   ;;

 stop)
   if [[ `screen -ls |grep $NAME` ]]
   then
       echo -n "Stopping $DESC: $NAME"
       kill `screen -ls |grep $NAME |awk -F . '{print $1}'|awk '{print $1}'`
       echo " ... done."
   else
       echo "Coulnd't find a running $DESC"
   fi
   ;;

 restart)
   if [[ `screen -ls |grep $NAME` ]]
   then
       echo -n "Stopping $DESC: $NAME"
       kill `screen -ls |grep $NAME |awk -F . '{print $1}'|awk '{print $1}'`
       echo " ... done."
   else
       echo "Coulnd't find a running $DESC"
   fi

   echo -n "Starting $DESC: $NAME"
   cd $DIR
   screen -d -m -S $NAME $DAEMON $PARAMS $PARAMS2
   echo " ... done."
   ;;

  status)
   if [[ `screen -ls |grep $NAME` ]]
   then
       echo "found running prozess: $DESC: $NAME"
   else
       echo "no running prozess: $DESC: $NAME"
   fi
  ;;

 check)
   if [[ `screen -ls |grep $NAME` ]]
   then
       echo "running"
   else
    echo -n "Starting $DESC: $NAME"
    cd $DIR
    screen -d -m -S $NAME $DAEMON $PARAMS $PARAMS2
    echo " ... done."
   fi
   ;;

  update)
     if [[ `screen -ls |grep $NAME` ]]
   then
       echo -n "Stopping $DESC: $NAME"
       kill `screen -ls |grep $NAME |awk -F . '{print $1}'|awk '{print $1}'`
       echo " ... done."
   else
       echo "Coulnd't find a running $DESC"
   fi

   echo "Updating Installation"
   cd
   cd $UPDATEDIR
   ./steam -command update -game killingfloor -verify_all

   echo -n "Starting $DESC: $NAME"
   cd $DIR
   screen -d -m -S $NAME $DAEMON $PARAMS $PARAMS2
   echo " ... done."
   ;;
 *)
   echo "Usage: $0 {start|stop|restart|update}"
   exit 1
   ;;
esac

exit 0
```

Mit diesem Script kannst du den Server einfach mittels

```bash
./kfstart start
```

starten. Um in zu stoppen oder neu zu starten start durch stop bzw restart ersetzen.  
Um in der Linux Konsole auf die Server Konsole zu kommen gibst du folgendes ein. Um den Server wieder in den Hintergrund zu schicken drückt man dann "ctrl+a" und dann "d"

```bash
screen -r killingfloor
```

## Autoupdate und Neustart

Mittels des Startscriptes kann man den Server im Falle eines Crashes automatisch wieder neu starten und in der Nacht den Server automatisch nach Updates checken lassen.  
Die erste Zeile überprüft jede Minute, ob der Serer noch läuft, mit der zweiten wird um 6:55 der Server geupdated, sofern ein Update vorhanden ist.

```bash
crontab -e
```

```
0-59 * * * * cd /home/username && ./kfstart check >/dev/null 2>&1
55 6 * * * cd /home/username && ./kfstart update >/dev/null 2>&1
```

## Server Konfigurieren

### Admin Kontrolle

Neben der oben schon beschriebenen Adminkontrolle über das Webinterface, kann man auch im Spiel selber Admin Rechte ausüben. Hierfür suche die Zeile  
AdminPassword  
in der KillingFloor.ini und gebt ein Passwort ein.  
Im Spiel selber musst du dann Folgendes in der Konsole eingeben um Admin zu werden:

```
admin login deinpasswort
```

Dies muss im Moment noch nach jedem Mapchange wiederholt werden und gibt euch dann folgende Möglichkeiten, die ihr in der Konsole eingeben müsst:

```
admin map
admin say
admin set engine.gameinfo gamedifficulty 1
admin set engine.gameinfo gamedifficulty 2
```

Eine andere Methode ist es, sich als Admin einzuloggen und die Votefunktion zu nutzen. Nutzt ein Admin diese, wird seine Eingabe sofort ausgeführt.

### Server Log

In seiner Grundeinstellung ist das Erstellen von Logdateien abgeschaltet. Man kann er einschalten indem man den Server mit zusätzlichen Startparametern startet. Das Kopieren ist wichtig für die Fehleranalyse, weil das Log bei jedem Serverneustart überschrieben wird. Das Log wird sehr schnell sehr groß. Überlege dir also vorher, ob ihr es wirklich benötigt. Ich schalte es nur hinzu, wenn ich eine Fehleranalyse machen will.

```
logserver.log cp server.log servercrash.log
```

Mit dieser Einstellung wird das Log im system Ordner erstellt. Wenn es woanders hin soll, gib den absoluten Pfad an. Z.B.:

```
log/home/killingfloor/kfserver/log/server.log cp server.log servercrash.log
```

In diesem Fall muss das Verzeichnis, in dem das Log gespeichert werden soll, vor dem Serverstart angelegt werden, weil der Server nicht in der Lage ist dieses eigenständig zu erschaffen.

### Mehr als 6 Slots

Wenn man mehr als 6 Slots haben möchte, ist zu beachten, das alle Methoden dazu führen, dass die Perks disabled werden. Eine Methode ist folgendes einzugeben:

```
set Engine.GameInfo MaxPlayers 20
```

Das Problem dabei ist, dass der Server nach dem Mapchange wieder auf 6 Slots zurück gesetzt wird. Dieses, von mir etwas angepasste Script hier liest die Zugangsdaten automatisch aus und ändert die Slotanzahl (im system Ordner den Ordner slots erstellen und in ihm nano 6slotsplus und folgendes pasten):

```bash
#!/bin/bash
#Written by DSAS for the good of all (http://steamcommunity.com/groups/DerekSmalls/)

#Setup server ip, port and .ini path
INI'/pfad/zum/server/system/KillingFloor.ini'
SERVER'DeineServerIP'
PORT'WebInterfacePort'

#Find username / pass and pump into variables
USERNAME`egrep '^AdminName' $INI | tr -d '\r' | sed 's/^AdminName//'`
PASSWORD`egrep '^AdminPassword' $INI | tr -d '\r' | sed 's/^AdminPassword//'`

#Send your update
wget -q --delete-after "http://$USERNAME:$PASSWORD@$SERVER:$PORT/ServerAdmin/current_console?SendTextset Engine.GameInfo MaxPlayers 20"
```

Dieses Script muss nun nach jedem Mapchange ausgeführt werden. Eine Möglichkeit hierfür ist es einen crontab einzurichten, der dieses Script jede Minute ausführt.

```bash
crontab -e
```

```bash
0-59 * * * * cd /home/username/kfserver/system/slots/ && ./6slotsplus >/dev/null 2>&1
```

Damit die Leute nicht vom Server fliegen, bis das Script die Slotzahl wieder hochgesetzt hat, solltet ihr auch noch im Interface die Spectatorzahl hochsetzten.

Da mit der oben beschriebenen Methode mitlerweile die Perks auch disabled bleiben ist es einfacher gleich einen [Mutator](http://thekillingcrew.com/download.php?view.2) zu nutzen. So bleiben die Playerslots auch nach dem Mapchange bei der eingestellten Zahl.

### Custom Maps und Fastdownload

Als erstes lädst du die Custom Map in das kfserver/maps Verzeichnis hoch.  
Dann geh in den system Ordner und komprimiere die Map:

```bash
./ucc-bin compress ../maps/mapname.rom  -nohomedir
```

Im maps Ordner sollte nun die komprimierte Map mit der Dateiendung .uz2 sein. Falls noch Texturen oder Sounds bei der Map waren wiederholst du den Vorgang mit diesen Dateien.  
Diese Datei(en) lade dann auf deinen Webspace hoch. Der Webspace hat dabei nicht die gleiche Ordnerstruktur, wie der kfserver. Alle Dateien kommen in ein und das selbe Verzeichnis!  
Nun musst du nur noch die KillingFloor.ini anpassen:

```
RedirectToURLhttp://www.deinhost.de/kf/
UseCompressionTrue
```

Anschließend die Map wechseln, oder den Server neu starten damit die Map in den mapcycle via Webinterface eingetragen werden kann. Im Webinterface dann:

Defaults > Maps  

1. "Load" klicken  
2. Die neuen Custom Maps in dem Feld "Maps Not in Cycle" auswählen und in das Feld "Maps in Cycle" verschieben.  
3. Nun kannst du ihre Position im Cycle einstellen. Die Maps werden in dieser Reihenfolge gespielt.  
4. Klicke "Save"  
5. Klicke "Use"  
6. "Restart Level" anklicken, um den Cycle sofort zu starten, oder auf den Mapwechsel warten, mit dem der neue Mapcycle ebenfalls geladen wird

### Slotreservierung

Damit man jederzeit auf den Server kann, auch dann wenn alle Slots belegt sind, kann man Slots reservieren lassen. Du brauchst http://ut2004.elmuerte.com/files/ServerExt-v110.zip  
Entpacke die Datei auf deine Festplatte und ändere die Namen Aller Ordner von Groß- in Kleinschreibung umbenennen (z.B. System zu system).  
Jetzt stoppst du den Server und lädst das Ganze in das kfserver Verzeichnis hoch. Im Anschluss musst du die KillingFloor.ini abändern. Wenn es nur einen Admin geben soll:

```
AccessControlClassServerExt.ReservedSlots
```

Bei mehreren Admins (xAdmin):

```
AccessControlClassServerExt.ReservedSlotsIni
```

Im Anschluss den Server wieder starten.  
Ist ein Spieler auf dem Server kannst du im WebAdmin seine ID im "default" Bereich und dort in der "Player List" sehen. Es ist nun eine zusätzliche Schaltfläche mit dem Namen Reserved Slots vorhanden. Hier trägst du die ID ein und wen du im Falle eines Connects kicken willst, wenn der Server voll ist. Ich würde die Variante denjenigen, der als letztes connected hat kicken wählen. Der Rest ist eigentlich selbsterklärend.

### Server ADs

Um im Spiel Werbung für deinen Clan, Homepage, oder Ähnliches zu machen, kannst du den Mutator "ServerAdsSE" installieren, der auf der White List steht, die Perks also weiterhin aktiv bleiben  
Als erstes musst du den Mutator runterladen:

[https://www.gamefront.com/ServerAdsSEzip/4630809/fileinfo.html](https://www.gamefront.com/ServerAdsSEzip/4630809/fileinfo.html)

Die Dateien in das kfserver Verzeichnis hochladen. Dabei werden keine der Serverdateien überschrieben.  
Dann den Server stoppen und danach die KillingFloor.ini öffnen.  
Unter der Überschrift "\[Engine.GameEngine\]" folgene Zeile hinzugefügen:

```
ServerActorsServerAdsSE.ServerAdsSE
```

Unter der Überschrift "\[Uweb.WebServer\]" dies hinzufügen und das X durch die nächst höhere Zahl ersetzen. Standartmäßig sind die Zahlen 0 und 1 bereits vergeben, so dass du 2 nutzen musst.:

```
Applications[X]ServerAdsSE.WebAdmin
ApplicationPaths[X]/ServerAdsSE
```

Nun den Server wieder starten. Die nötigen Einträge in der Config werden automatisch geschrieben. Unter http://deine.ip:WEBADMINPORT/ServerAdsSE/ findest du jetzt das Webinterface, für das du die gleichen Zugangsdaten nutzt, wie beim Webinterface. Man kann 2 Arten von Nachrichten mit diesem Mutator schicken. "#" vor der Zeile erscheint sie als Adminnachricht, was auf die Dauer sehr schnell nervig wird. Also lieber die normale Variante wählen.

### Zweiter Server:

Wenn ihr nun einen zweiten Server laufen lassen wollt, könnt ihr einfach den angelegten ersten und dessen Startscript kopieren. Ihr müsst dann nur noch das Startscript und die Killingfloor.ini anpassen, damit die Ports nicht doppelt verwendet werden.

```
cp -r kfserver kfserver2
cp kfstart.sh kfstart2.sh
nano kfstart2.sh
nano kfserver2/system/KillingFloor.ini
```

Die Alternative ist es mehrere Server aus einem Verzeichnis starten zu lassen. Dies sollte man nur machen, wenn man keine andere Möglichkeit hat. Kopiert das Startscript und die KillingFloor.ini. Im Startscript müsst ihr dann die zweite KillingFloor.ini angeben.

```
cp kfstart.sh kfstart2.sh
nano kfstart2.sh
cp kfserver1/system/KillingFloor.ini kfserver1/system/KillingFloor2.ini
```

```
PARAMS2"-nohomedir iniKillingFloor.ini" wird zu PARAMS2"-nohomedir iniKillingFloor2.ini"
```

### Defence Alliance 2:

Seit kurzem ist der kostenlose Mod Defence Alliance 2 zu Killing Floor veröffentlicht worden und kann auch über das hldsupdatetool bezogen werden und die Installation ist wie bei Killing Floor, mit dem Unterschied, dass ihr "killingfloor" gegen "defencealliance2" austauschen müsst:

```
./steam -command update -game defencealliance2 -dir /home/killingfloor/defencealliance/ -verify_all -retry
```

Gestartet wird ein Mod, in diesem Falle Defence Alliance 2 folgendermaßen:

```
./ucc-bin server DA2-BlackGold.rom?gameDA2.DefenceAlliance?VACSecuredtrue?AdminNameADMINNAME?AdminPasswordADMINPASSWORD?Mutatorda2.mutkf -nohomedir -multihomeEUREIP -modDA2 iniDA2.ini
```

### Credits:

Folgende Tutorials haben mir bei der Erstellung dieses Tutorials geholfen:  
http://forums.tripwireinteractive.com/showthread.php?t30579  
http://forums.tripwireinteractive.com/showthread.php?t30911  
http://forums.tripwireinteractive.com/showthread.php?t3583  
http://forums.tripwireinteractive.com/showthread.php?t31589  
http://forums.tripwireinteractive.com/showthread.php?t32009

Die Anmerkungen von usrsrc wurden ebenfalls in das Tutorial aufgenommen:  
http://www.linuxforen.de/forums/showpost.php?p=1730395&postcount=2

