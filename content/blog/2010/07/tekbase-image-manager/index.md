---
title: "Image Manger für Tekbase von teklab.de"
tags: ["Tekbase", "Image Manager"]
published: true
date: "2010-07-12"
---

Einige Serveradmins und zahlreiche Gameserveranbieter setzen das Webinterface Tekbase von teklab.de ein. Teklab bietet zwar fertiges Images für das Anlegen von Servern an, aber es gibt gute Gründe, sich einen eigenen Imageserver anzulegen. Das alles von Hand aktuell zu halten ist recht aufwendig. Deswegen habe ich ein Bash Script geschrieben, dass dies stark vereinfacht. Mit ihm kann man bequem für alle Server, die über Steam bezogen werden Images angelegt werden:

```bash
./image_manager.sh update steamkürzel teklabkürzel
```

[Hier gibt es den Download](/download/image_manager.tar.bz2)

und hier ist ein kleiner Ausschnitt vom Script:

```bash
IMAGEDIR=/home/username/images
SCRIPTDIR=/home/username
SERVERDIR=/home/username/server
SERVERNAME="$2"
KUERZEL="$3"
INSTALLED=`cat $SCRIPTDIR/games_installed.list | awk -F: '{print $2}'`
AVAILABLE1=`cat $SCRIPTDIR/games_available.list | grep $SERVERNAME: | awk -F: '{print $1}'`
AVAILABLE2=`cat $SCRIPTDIR/games_available.list | grep $SERVERNAME: | awk -F: '{print $2}'`
PROTECTED=`echo "$KUERZEL" | awk -F- '{print $2}'`
PROTECTED2=`echo "$KUERZEL" | awk -F- '{print $1}'`

function server_update {
    cd $SERVERDIR

    if [ ! -d $SERVERDIR/$KUERZEL ]; then
        if [[ "$PROTECTED" = "p" && -d $SERVERDIR/$PROTECTED2 ]]; then
            cp -r $SERVERDIR/$PROTECTED2 $SERVERDIR/$KUERZEL
            image_update
        else
            mkdir -p $SERVERDIR/$KUERZEL
            cp steam test1.so test2.so test3.so $SERVERDIR/$KUERZEL/
        fi
    fi

    cd $SERVERDIR/$KUERZEL

    if [ "$SERVERNAME" = css ]; then
        ./steam -command update -game "Counter-Strike Source" -dir $SERVERDIR/$KUERZEL -verify_all -retry > update.log
    
        if [[ `cat update.log | grep downloading ` ]]; then
            rm update.log
            rm $IMAGEDIR/$KUERZEL.tar
            image_update
        else
            echo "Kein Image Update noetig"
        fi
    else
        ./steam -command update -game $SERVERNAME -dir $SERVERDIR/$KUERZEL -verify_all -retry > update.log

        if [[ `cat update.log | grep downloading ` ]]; then
            rm update.log
            rm $IMAGEDIR/$KUERZEL.tar
            image_update
        else
            echo "Kein Image Update noetig"
        fi
    fi
}
```

