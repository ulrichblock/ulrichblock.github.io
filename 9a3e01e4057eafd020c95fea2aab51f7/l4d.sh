#!/bin/bash 

############################################################################
#                                                                          #
#  Server Startscript                                                      #
#                                                                          #
#  Author: Ulrich Block                                                    #
#                                                                          #
#  Kontakt: ich@ulrich-block.de                                            #
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
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.   #
#                                                                          #
#  Gebrauch: ./l4d.sh {start|stop|restart|update|console|check}            #
#                                                                          #
#  start/restart/stop: Server An und aus schalten                          #
#                                                                          #
#  update: Mit dem Steam Updatetool den Server aktualisieren               #
#                                                                          #
#  console: Wechselt auf die Counter-Strike Serverkonsole                  #
#           Mit strg+a -> d die Konsole wieder in den Hintergrund schicken #
#                                                                          #
############################################################################



function init {

DEAMON="srcds_run"
IP="Deine IP hier eintragen"
PORT="Deinen IP hier eintragen"

# Die Unterschiedlichen Startvarianten. Je nach Spiel bitte anpassen.
# Eine Raute (#) am Anfang der Zeile, bedeutet, dass sie auskommentiert ist.
# In diesem Fall wird sie vom Server nicht beachtet und ist nur f�r den menschlichen Leser bestimmt.
# Standartm��ig ist Left 4 Dead aktiviert.

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
  echo "Der Server l�uft bereits unter dem Screentab $SCREENNAME"
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
