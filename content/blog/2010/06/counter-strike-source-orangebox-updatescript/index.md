---
title: "Counter-Strike Source Orangebox Updatescript"
tags: ["steam", "Counter-Strike Source", "Orangebox", "bash"]
published: true
date: "2010-06-24"
---

Das letzte Update von Counter-Strike Source brachte viele Änderungen mit sich. Unter anderen ist die Ordnerstruktur nun eine andere.  
Das ganze Manuell zu ändern kostet bei meheren Installationen viel Zeit.  
Ich habe deswegen ein kleines Bash Script geschrieben, dass man nur einmal aufrufen muss. Es updated dann alle Installationen auf dem Server.

Wer nur wissen will, wie man den CSS Server updated ist [bei meinem How To](/tutorials/counter-strike-source-global-offensive-und-tf-2-linux-server/) besser aufgehoben.

```bash
#/bin/bash
#
# This program is free software: you can redistribute it andor modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# at your option) any later version.
# 
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of 
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
# GNU General Public License for more details. 
# 
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <www.gnu.orglicenses>.  


# Root, oder du kommst ned rein!
if [ ! `id -u` = 0 ]; then
 echo "Du musst root sein, um das Script auszufuehren"
 exit 0
fi

INSTALLATION=`find /home/ -name cstrike -type d | grep -v cstrike/`

for p in $INSTALLATION; do
 USER=`ls -la $p | grep maps | awk '{print $3}'`
 cd $p
 cd ..
 if [[ `ls $p | grep cs_office.wad` ]]; then
 echo "In $p wurde CS 1.6 gefunden. Kein Update ausgefuehrt"
 elif [ -d cspromod ]; then
 echo "In $p wurde cspromod gefunden. Kein Update ausgefuehrt"
 elif [ -d orangebox ]; then
 rm srcds_amd  srcds_i486  srcds_i686  srcds_run
 mv cstrike orangebox
 su -c "screen -A -m -d -L -S cssupdate ./steam -command update -game 'Counter-Strike Source' -dir . -verify_all -retry" $USER
 sleep 60
 if [[ `grep 'Getting version 39 of Steam HLDS Update Tool' screenlog.0` ]]; then
 su -c "screen -A -m -d -L -S cssupdate ./steam -command update -game 'Counter-Strike Source' -dir . -verify_all -retry" $USER
 echo "In $p wurde eine CSS obox Installation gefunden. Update wurde gestartet"
 else
 echo "In $p wurde eine CSS obox Installation gefunden. Update wurde gestartet"
 fi
 elif [ -d ../orangebox ]; then
 cd ..
 su -c "screen -A -m -d -L -S cssupdate ./steam -command update -game 'Counter-Strike Source' -dir . -verify_all -retry" $USER
 sleep 60
 if [[ `grep 'Getting version 39 of Steam HLDS Update Tool' screenlog.0` ]]; then
 su -c "screen -A -m -d -L -S cssupdate ./steam -command update -game 'Counter-Strike Source' -dir . -verify_all -retry" $USER
 echo "In $p wurde ein abgebrochenes Update gefunden. Das Update wurde wieder aufgenommen."
 else
 echo "In $p wurde ein abgebrochenes Update gefunden. Das Update wurde wieder aufgenommen."
 fi
 else
 su -c 'mkdir orangebox' $USER
 rm srcds_amd  srcds_i486  srcds_i686  srcds_run
 mv cstrike orangebox
 su -c "screen -A -m -d -L -S cssupdate ./steam -command update -game 'Counter-Strike Source' -dir . -verify_all -retry" $USER
 sleep 60
 if [[ `grep 'Getting version 39 of Steam HLDS Update Tool' screenlog.0` ]]; then
 su -c "screen -A -m -d -L -S cssupdate ./steam -command update -game 'Counter-Strike Source' -dir . -verify_all -retry" $USER
 echo "In $p wurde eine alte CSS Installation gefunden. Der Ordner orangebox wurde angelegt und das Update gestartet."
 else
 echo "In $p wurde eine alte CSS Installation gefunden. Der Ordner orangebox wurde angelegt und das Update gestartet."
 fi
 fi
done
```

