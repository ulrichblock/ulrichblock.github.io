---
title: "Left 4 Dead 1 + 2 Linux Server Tutorial"
tags: ["steam"]
published: true
date: "2010-11-08"
attachments:
  - "l4d.cfg"
  - "l4d.sh"
  - "l4d2.cfg"
---

Dieses Tutorial beschreibt, wie man Left 4 Dead und Left 4 Dead 2 Server unter Linux installiert, zum laufen bringt, und im Betrieb hält. Ich habe keine zwei einzelnen Tutorials geschrieben, weil Left 4 Dead und Left 4 Dead 2 im Serverbetrieb weitestgehend identisch sind und sich nur an sehr wenigen Punkten unterscheiden.

### Portforwarding

Wenn der Rechner zu Hause und, oder hinter einer Firewall steht müssen folgende Ports geforwarded werden:

- UDP 27000 bis 27015 (Game client traffic)
- UDP 27015 bis 27030 (Normalerweise Matchmaking und STV)
- TCP 27014 bis 27050 (Steam Downloads)
- UDP 4380
- TCP 27015 (SRCDS Rcon Port)

### System vorbereiten

Als erstes sollte der Server auf den neuesten Stand gebracht werden.  
Bei Debian macht man dies mit:

```bash
apt-get update && apt-get upgrade
```

Damit der Server weiterläuft, auch wenn du dich ausloggst, benötigst du das Programm Screen. Installiere es also mit dem user root.  
Der Debian Befehl:

```bash
apt-get install screen
```

Wenn du über eine 64bit System verfügst, dann benötigst du noch die Unterstützung für 32bit Programme, damit du den Counter-Strike Source Server starten kannst.  
Für Debian geht dies mit:

```bash
apt-get install ia32-libs
```

Ab Debian 7 (Wheezy) muss man vorher noch die i386 Architektur hinzufügen:

```bash
dpkg --add-architecture i386
apt-get update
apt-get install ia32-libs
```

### Installation des Servers

Am besten legt ihr einen eigenen User für den Server an. Dies macht ihr indem ihr als root

```bash
adduser left4dead
```

eingebt und im folgenden Dialog ein Password für den User eingebt. Es ist eine extrem schlechte Idee Programme mit dem user Root auszuführen. Also verwerft den Gedanken gleich wieder.  
Mit dem neuen User logt ihr euch nun ein und erstellt erst einmal das zukünftige Serververzeichnis. Der Name ist egal ich benutze beispielhaft l4d für Left 4 Dead und l4d2 für Left 4 Dead 2:

```bash
mkdir l4d
```

Zum Dowloaden der Server brauchen wir das SteamCMD Updatetool:

```bash
http://media.steampowered.com/client/steamcmd_linux.tar.gz
tar xfvz steamcmd_linux.tar.gz
```

Als nächstes starten wird das SteamCMD Tool zum ersten mal und updaten es dadurch:

```bash
./steamcmd.sh +quit
```

Neben dem Download aktueller SteamCMD Dateien, werden zusätzliche Ordner erstellt. Etwaige Fehler können ignoriert werden.

Mit dem aktuellen Tool können wir nun Counter-Strike Source, Global Offensive bzw. Team Fortress 2 Server downloaden. (Dies ist der selbe Befehl mit dem ihr Updates installiert):

**Left 4 Dead:**

```bash
./steamcmd.sh +login anonymous +app_update 510 +force_install_dir l4d validate +quit
```

**Left 4 Dead 2:**

```bash
./steamcmd.sh +login anonymous +app_update 222860 +force_install_dir l4d2 validate +quit
```

Je nachdem wie schnell eure Anbindung ist kann es jetzt etwas dauern.

### Den Server starten und konfigurieren

Um zu testen, ob der Server funktioniert, starten wir den Server aus dem l4d/l4d bzw. l4d2/left4dead2 Verzeichnis. Dafür wechseln wir als erstes in das Verzeichnis:

```bash
cd l4d/l4d
```

bzw.:

```bash
cd l4d2/left4dead2
```

und geben diesen Startbefehl ein:

```bash
./srcds_run -game left4dead +map l4d_airport01_greenhouse
```

```bash
./srcds_run -game left4dead2 +map c2m1_highway
```

```bash
./srcds_run
```

Nun wird der Server gestartet. Beenden kannst du den Server, indem du ctrl+c in der Konsole drückst.

### Starscript mit screen

Mit dem neuen User erstellst du nun folgendes Startscript, indem du mit dem Editor deiner Wahl (Ich nutze nano) die neue Datei öffnest, das Script einfügst, anpasst und den Editor schließt ( bei nano ctrl+x) und dabei speicherst.

```bash
nano l4d.sh
```

[Alternativ kannst du es hier Downloaden](l4d.sh)

Hier das Script:

```bash
#!/bin/bash

function init {

DEAMON="srcds_run"
IP="Deine IP hier eintragen"
PORT="Deinen IP hier eintragen"

# Die Unterschiedlichen Startvarianten. Je nach Spiel bitte anpassen.
# Eine Raute (#) am Anfang der Zeile, bedeutet, dass sie auskommentiert ist.
# In diesem Fall wird sie vom Server nicht beachtet und ist nur für den menschlichen Leser bestimmt.
# Standartmäßig ist Left 4 Dead aktiviert.

# Bei Left Dead 1:
DIR="/home/left4dead/l4d1/l4d"
SCREENNAME="left4dead.eins"
PARAMS"-game left4dead -ip $IP -port $PORT -autoupdate -retry"
PARAMS2"+map l4d_airport01_greenhouse"
# Beim Forking:
#PARAMS="-game left4dead -ip $IP -port $PORT+## -fork 8 -autoupdate -retry"
#PARAMS2="+map l4d_airport01_greenhouse +exec server_fork_##.cfg"

# Bei Left Dead 2:
#DIR="/home/left4dead/l4d2/left4dead2"
#SCREENNAME="left4dead2.eins"
#PARAMS"-game left4dead2 -ip $IP -port $PORT -autoupdate -retry"
#PARAMS2="+map c2m1_highway"
# Beim Forking:
#PARAMS="-game left4dead2 -ip $IP -port $PORT+## -fork 8 -autoupdate -retry"
#PARAMS2="+map c2m1_highway +exec server_fork_##.cfg"

if [ "`whoami`" = "root" ]; then
 echo "Verantwortungsvolle Admins starten Gameserver nicht mit root! Allen anderen ist es untersagt!"
 exit 0
fi
if [ -z "$DIR" ]; then
 echo "Es wurde nichts bei der Variable DIR angegeben."
 exit 0
fi
if [ -z "$DEAMON" ]; then
 echo "Es wurde nichts bei der Variable DEAMON angegeben."
 exit 0
fi
if [ -z "$PARAMS" ]; then
 echo "Es wurde nichts bei der Variable PARAMS angegeben."
 exit 0
fi
if [ -z "$PARAMS2" ]; then
 echo "Es wurde nichts bei der Variable PARAMS2 angegeben."
 exit 0
fi
if [ -z "$SCREENNAME" ]; then
 echo "Es wurde nichts bei der Variable SCREENNAME angegeben."
 exit 0
fi
if [ -z "$IP" ]; then
 echo "Es wurde nichts bei der Variable IP angegeben."
 exit 0
fi
if [ -z "$PORT" ]; then
 echo "Es wurde nichts bei der Variable PORT angegeben."
 exit 0
fi
}

function start_server {
 if [[ `screen -ls | grep $SCREENNAME` ]]; then
  echo "Der Server läuft bereits unter dem Screentab $SCREENNAME"
 else
  echo "Starte $SCREENNAME"
  if [ -d $DIR ]; then
   cd $DIR
   screen -d -m -S $SCREENNAME ./$DEAMON $PARAMS $PARAMS2
  else 
   echo "Das Serververzeichnis wurde nicht angegeben"
  fi
 fi
} 

function stop_server {
 if [[ `screen -ls | grep $SCREENNAME` ]]; then
  echo -n "Stoppe $SCREENNAME"
  kill `screen -ls | grep $SCREENNAME | awk -F . '{print $1}'| awk '{print $1}'`
  echo " ... done."
 else
  echo "Konnte den Screentab $SCREENNAME nicht finden"
 fi
}

function update_server {
 stop_server
 echo "Update"
 cd $DIR
 cd ..
 # Left4 Dead
 ./steam -command update -game "left4dead" -dir . -verify_all -retry
 # Left 4 Dead 2
 #./steam -command update -game "left4dead" -dir . -verify_all -retry
 echo " ... done."
 start_server
}

function wrong_input {
 echo "Usage: $0 {start|stop|restart|update|console|check}"
 exit 1
}

function get_screen {
 screen -r $SCREENNAME
}

function check_ping {
 if [ "`/usr/bin/quakestat -a2s $IP:$PORT | grep -v ADDRESS | awk '{ print $2 }' | awk -F/ ' { print $1}'`" = "DOWN" ]; then
  sleep 10
  if [ "`/usr/bin/quakestat -a2s $IP:$PORT | grep -v ADDRESS | awk '{ print $2 }' | awk -F/ ' { print $1}'`" = "DOWN" ]; then
   stop_server
   start_server
  fi
 fi
}

init

case "$1" in
 start)
  start_server
 ;;

 stop)
  stop_server
 ;;

 restart)
  stop_server
  start_server
 ;;

 update)
  update_server
 ;;

 console)
  get_screen
 ;;

 check)
  check_ping
 ;; 
 
 *)
  wrong_input
 ;;
esac
exit 0
```

Mit diesem Script kannst du den Server einfach mittels

```bash
./l4d.sh start
```

starten. Um in zu stoppen oder neu zu starten start durch stop bzw restart ersetzen.  
Um in der Linux Konsole auf die Server Konsole zu kommen gibst du folgendes ein. Um den Server wieder in den Hintergrund zu schicken drückt man dann „ctrl+a“ und dann „d“

```bash
./l4d.sh console
```

### Automatisches Updaten

Den Server kannst du manuell mit dem selben Befehl updaten, mit dem du ihn auch installiert hast. Also folgendes im Serververzeichnis eingeben:

```bash
./steam -command update -game "left4dead" -dir . -verify_all -retry
```

bzw.:

```bash
./steam -command update -game "left4dead2" -dir . -verify_all -retry
```

In meinem Startscript habe ich die Parameter „-autoupdate -retry -verify\_all“ reingeschrieben. Dadurch updated sich der Server in der Regel von selber im Betrieb, so dass ihr nichts machen müsst.

Wenn das einmal nicht funktionieren sollte, kann man es entweder manuell machen, oder die Funktion „update „des Scriptes nutzen. Achtet darauf, dass standartmäßig Left 4 Dead geupdated wird. Wenn ihr Left 4 Dead 2 updaten wollt, müsst ihr der function „update\_server“ erst die Left 4 Dead Zeile mit einer Raute aus- und die Left 4 Dead 2 Zeile einkommentieren.

```bash
./l4d.sh update
```

Man kann jetzt mit cron z.B. immer um 5:15 Uhr morgens automatisch die Update Funktion ausführen und den Server neu starten lassen. Dafür musst du einen neuen crontab anlegen und das Script eintragen:

```bash
crontab -e
```

Diese Zeile einfügen:

```
15 05 * * * cd /home/left4dead && ./l4d.sh update >/dev/null 2>&1
```

Um 5:15 Uhr morgens wird nun die Updatefunktion des Servers gestartet und dieser anschließend neu gestartet.

### Server Einstellungen

Nun müsst ihr noch den Server mit der server.cfg einstellen. Diese muss im im cfg Ordner angelgt werden. Eine rudimentäre CFG mit den wichtigsten Einstellungen gibt es hier:

[Left 4 Dead](l4d.cfg)
[Left 4 Dead 2](l4d2.cfg)

Denkt bitte daran die Datei in server.cfg umzubenennen.

### Forking

Um Ram zu sparen, ist es möglich, den Server mit mehreren Instanzen (Forks) starten zu lassen. Man erhält so mehrere Left 4 Dead bzw. Left 4 Dead 2 Server, muss nur einen Prozess starten. Die Forks teilen sich dann den Ram, so das insgesamt weniger verbraucht wird. Ebenso benötigt man nur eine Installation. Die Forks unterscheiden sich dann nur in ihrer Config.

Um das Forking zu aktivieren, müssen die Startparameter im Startskript angepasst werden. Um 8 Forks zu starten kommentiert folgende Zeilen bei Left 4 Dead ein:

```bash
PARAMS="-game left4dead -ip $IP -port $PORT+## -fork 8 -autoupdate -retry"
PARAMS2="+map l4d_airport01_greenhouse +exec server_fork_##.cfg"
```

und bei Left 4 Dead2:

```bash
PARAMS="-game left4dead2 -ip $IP -port $PORT+## -fork 8 -autoupdate -retry"
PARAMS2="+map c2m1_highway +exec server_fork_##.cfg"
```

Die bisher genutzen Startparameter bitte auskommentieren.

Dazu müssen im cfg Ordner 8 Configs angelegt werden und mit server\_fork\_01.cfg, server\_fork\_02.cfg, usw. benannt werden.

In diesen Configs tragt ihr dann den Servernamen, Passwort, Steamgroup, Gamemode usw ein. Alle Variablen, die bei allen Forks gleich sein sollen, kommen weiterhin in die server.cfg. Aus dieser müsst ihr dann auch die Variablen löschen, die sich bei den einzelnen Forks unterscheiden.

Wenn das erledigt ist, einfach den Server mit dem Startscript starten. Unter den Ports 27015-27023 müssten nun 8 Forks laufen. Wenn der Server hinter einer Firewall ist, denkt bitte daran, auch diese Ports freizugeben, bzw. zu forwarden.