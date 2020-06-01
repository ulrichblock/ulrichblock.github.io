---
title: "Counter-Strike Source Global Offensive und TF 2 Linux Server"
tags: ["steam"]
published: true
date: "2010-10-20"
---

Dieses Tutorial beschreibt, wie man einen Counter-Strike: Source und Team Fortress 2 Server unter Linux installiert, zum laufen bringt, und im Betrieb hält. Das Counter-Strike: Source Orangebox Update vom 14.10.2011 wurde beim erstellen des Howtos berücksichtigt.

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

Wenn du über eine 64bit System verfügst, dann benötigst du noch die Systemlibs für 32bit, damit du den Counter-Strike Source Server starten kannst.  
Für Debian 6 geht dies mit:

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
adduser euerneuerusername
```

eingebt und im folgenden Dialog ein Password für den User eingebt. Es ist eine extrem schlechte Idee Programme mit dem user Root auszuführen. Also verwerft den Gedanken gleich wieder.  
Mit dem neuen User logt ihr euch nun ein und erstellt erst einmal das zukünftige Serververzeichnis. Der Name ist egal ich benutze **css** für Counter-Strike: Source, **csgo** für Counter-Strike Global Offensive und **tf** für Team Fortress 2:

```bash
mkdir css
mkdir csgo
mkdir tf
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

#### Counter-Strike Global Offensive

```bash
./steamcmd.sh +login anonymous +app_update 740 +force_install_dir csgo validate +quit
```

#### Counter-Strike Source

```bash
./steamcmd.sh +login anonymous +app_update 232330 +force_install_dir css validate +quit
```

#### Team Fortress 2

```bash
./steamcmd.sh +login anonymous +app_update 232250 +force_install_dir tf validate +quit
```

Je nachdem wie schnell eure Anbindung ist kann es jetzt etwas dauern.

### Den Server starten und konfigurieren

Um zu testen. Ob der Server funktioniert, starten wir den Server mit folgenden Parametern aus dem **/css** bzw. **/tf** Verzeichnis:

```bash
./srcds_run
```

Nun wird der Server gestartet. Beenden kannst du den Server, indem du ctrl+c in der Konsole drückst.

### Starscript mit screen

Mit dem neuen User erstellst du nun folgendes Startscript, indem du mit dem Editor deiner Wahl (Ich nutze nano) die neue Datei öffnest, das Script einfügst, anpasst und den Editor schließt ( bei nano ctrl+x) und dabei speicherst.

```bash
nano css.sh
```

[Alternativ kannst du es hier Downloaden](https://github.com/ulrichblock/bash-scripts-gameserver/blob/master/startscript.sh)

Hier das Script:

```bash
#!/bin/bash 

############################################################################
#                                                                          #
#  Counter-Strike Source/GO  and TF 2 (HL2) Server Script                  #
#                                                                          #
#  Author:                                                                 #
#  Ulrich Block                                                            #
#                                                                          #
#  Kontakt:                                                                #
#  ulblock at gmx.de                                                       #
#  www.ulrich-block.de                                                     #
#                                                                          #
#  This program is free software: you can redistribute it and/or modify    #
#  it under the terms of the GNU General Public License as published by    #
#  the Free Software Foundation, either version 3 of the License, or       #
#  (at your option) any later version.                                     #
#                                                                          #
#  This program is distributed in the hope that it will be useful,         #
#  but WITHOUT ANY WARRANTY; without even the implied warranty of          #
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           #
#  GNU General Public License for more details.                            #
#                                                                          #
#  You should have received a copy of the GNU General Public License       #
#  along with this program.  If not, see http://www.gnu.org/licenses/      #
#                                                                          #
#  Gebrauch: ./css.sh {start|stop|restart|update|console|check}            #
#                                                                          #
#  start/restart/stop: Server An und aus schalten                          #
#                                                                          #
#  update: Mit dem Steam Updatetool den Server aktualisieren               #
#                                                                          #
#  console: Wechselt auf die Counter-Strike Serverkonsole                  #
#        Mit strg+a + d die Konsole wieder in den Hintergrund schicken     #
#                                                                          #
############################################################################

function init {
# Absoluter Pfad zum Server
DIR="/Verzeichnis/zum/Server"

# Startscript des Servers
DEAMON="srcds_run"

# Externe IP unter der der Server erreichbar sein soll
IP="Die.IP.vom.Server"

# Port auf den der Server lauschen soll
PORT="PortvomServer"

# Client Port des Servers
CLIENTPORT="28000"

# Source TV aktivieren
SOURCETV=1

# Falls SourceTV genutzt wird, wird der SourceTV Server auf diesem Port gestartet
SOURCETVPORT="29000"

# Slot Anzahl
MPLAYERS="20"

# Startmap
MAP="de_dust2"

# Team Fortress 2 - tf, Counter-Strike: Source - cstrike, Counter-Strike: Global Offensive - csgo
GAME="csgo"
if [ "$GAME" == "csgo" ]; then
    # Dieser Teil ist nur fuer CS:GO
    GAMETYPE=0
    GAMEMODE=1
    MAPGROUP="mg_bomb"
    TICK=66
    CSGO="-tickrate $TICK +game_type $GAMETYPE +game_mode $GAMEMODE +mapgroup $MAPGROUP "
else
    CSGO=""
fi

PARAMS="-game $GAME -ip $IP -port $PORT +tv_port $SOURCETVPORT +clientport $CLIENTPORT +maxplayers $MPLAYERS +map $MAP +tv_enable $SOURCETV $CSGO"

SCREENNAME="css"

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
        echo "Der Server laeuft bereits unter dem Screentab $SCREENNAME"
    else
        echo "Starte $SCREENNAME"
        if [ -d $DIR ]; then
           cd $DIR
           screen -d -m -S $SCREENNAME ./$DEAMON $PARAMS
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
	if [ -f ~/steamcmd.sh ]; then
		stop_server
		echo "Update"
		cd
		if [ "$GAME" == "csgo" ]; then
			./steamcmd.sh +login anonymous +app_update 740 +force_install_dir $DIR validate +quit
		elif  [ "$GAME" == "cstrike" ]; then
			./steamcmd.sh +login anonymous +app_update 232330 +force_install_dir $DIR validate +quit
		elif  [ "$GAME" == "tf" ]; then
			./steamcmd.sh +login anonymous +app_update 232250 +force_install_dir $DIR validate +quit
		else
			echo "Falscher Wert fuer die Variable GAME!"
		fi
		start_server
	else
		echo "Konnte die Datei steamcmd.sh nicht im Homeverzeichnis finden!"
	fi
}

function wrong_input {
    echo "Usage: $0 {start|stop|restart|update|console|check}"
    exit 1
}

function get_screen {
    screen -r $SCREENNAME
}

# Veraltet:
#function check_ping {
#    if [ "`/usr/bin/quakestat -a2s $IP:$PORT | grep -v ADDRESS | awk '{ print $2 }' | awk -F/ ' { print $1}'`" = "DOWN" ]; then
#        sleep 10
#        if [ "`/usr/bin/quakestat -a2s $IP:$PORT | grep -v ADDRESS | awk '{ print $2 }' | awk -F/ ' { print $1}'`" = "DOWN" ]; then
#            stop_server
#            start_server
#        fi
#    fi
#}

function check_ping {
    if [[ "`printf '\xFF\xFF\xFF\xFF\x54\x53\x6F\x75\x72\x63\x65\x20\x45\x6E\x67\x69\x6E\x65\x20\x51\x75\x65\x72\x79\x00' | netcat -u -w 1 $IP $PORT`" == "" ]]; then
        sleep 10
        if [[ "`printf '\xFF\xFF\xFF\xFF\x54\x53\x6F\x75\x72\x63\x65\x20\x45\x6E\x67\x69\x6E\x65\x20\x51\x75\x65\x72\x79\x00' | netcat -u -w 1 $IP $PORT`" == "" ]]; then
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
./css.sh start
```

starten. Um in zu stoppen oder neu zu starten start durch stop bzw restart ersetzen.  
Um in der Linux Konsole auf die Server Konsole zu kommen gibst du folgendes ein. Um den Server wieder in den Hintergrund zu schicken drückt man dann „ctrl+a“ und dann „d“

```bash
./css.sh console
```

### Automatisches Updaten

Den Server kannst du manuell mit dem selben Befehl updaten, mit dem du ihn auch installiert hast. Also folgendes im Home Verzeichnis eingeben:

```bash
./steamcmd.sh +login anonymous +app_update 232330 +force_install_dir css validate +quit
```

Dies kann man es entweder manuell machen, oder die Funktion „update „des Scriptes nutzen:

```bash
./css.sh update
```

Man kann jetzt mit cron immer um 5:15 Uhr morgens automatisch auf Updates überprüfen und den Server neu starten. Dafür musst du einen neuen crontab anlegen und das Script eintragen:

```bash
crontab -e
```

Diese Zeile einfügen:

```
15 05 * * * cd /home/euerneueruser && ./css.sh update >/dev/null 2>&1
```

Um 5:15 Uhr morgens wird nun der Server geupdatet und anschließend neu gestartet

### Server Einstellungen

Nun müsst ihr noch den Server mit der server.cfg einstellen. Eine umfangreiche gut erklärte könnt ihr bei meinem [Config Generator](/?page_id=88) erstellen.