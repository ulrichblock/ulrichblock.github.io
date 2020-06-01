---
title: "Symlinks und CSS Update"
tags: ["Counter-Strike Source", "Orangebox"]
published: true
date: "2011-10-14"
---

Wer Symlinks einsetzt, war bei dem Chaos Update recht flott wieder mit all seinen Servern online. Der Hintergrund ist einfach. Man muss nur einen Server updaten an Stelle von einem Update für jeden einzelnen Server.

Nachdem man sein Hauptverzeichnis auf den neuesten Stand gebracht hat, muss man noch die Verlinkungen auf die neue Ordnerstruktur anpassen.

Ich hatte noch in der Nacht folgendes Bashscript an die User von [easy-wi.com](https://easy-wi.com) geschickt, dass hoffentlich, vorausgesetzt man modifiziert es für seine Zwecke, auch anderen bei der Bewältigung des Updates helfen wird:

```bash
#!/bin/bash

# Ulrich Block
# http://www.ulrich-block.de

# deinmasteruser muss auf den eigenen Masteruser angepasst werden
MASTERDIR="/home/deinmasteruser/masterserver/css"
MASTERUSER=`echo $MASTERDIR | awk -F '/' '{print $3}'`
if [ ! -d $MASTERDIR ]; then
    echo "Please enter your masterserverpath at the skript first"
    exit 0
fi
cd $MASTERDIR
if [ -d orangebox ]; then
    if [ -d css ]; then
    cd orangebox
    find . -type f | while read FILES; do
        FOLDER=`dirname "$FILES"`
        if [ ! -d "../css/$FOLDER" ]; then
            su -c "mkdir -p ../css/$FOLDER" $MASTERUSER
        fi
        if [ ! -f "../css/$FILES" ]; then
            echo "Moving $FILES"
            su -c "mv \"$FILES\" ../css/\"$FILES\"" $MASTERUSER
        fi
    done
    cd ..
    else
        su -c "mv orangebox css" $MASTERUSER
    fi
    if [ -d orangebox ]; then
        echo "removing old, not needed data from masterserverdir"
        rm -rf orangebox
    fi
    cd ..
    su -c "screen -dmS update.css ./steam -command update -game \"Counter-Strike Source\" -retry -verify_all -dir $MASTERDIR" $MASTERUSER
fi
find /home/*/server/*/*/orangebox/ -maxdepth 1 -type d -name "cstrike" | sed 's/orangebox\/cstrike//g' | while read DIR; do
    USER=`echo $DIR | awk -F '/' '{print $3}'`
    echo "Found old CSS Installation $DIR and moving it"
    cd $DIR
    if [ -d orangebox ]; then
        if [ -d css ]; then
            cd orangebox
            find . -type f | while read FILES; do
                FOLDER=`dirname "$FILES"`
                if [ ! -d "../css/$FOLDER" ]; then
                    su -c "mkdir -p ../css/$FOLDER" $USER
                fi
                if [ ! -f "../css/$FILES" ]; then
                    echo "Moving $FILES"
                    su -c "mv \"$FILES\" ../css/\"$FILES\"" $USER
                fi
            done
            cd ..
        else
            su -c "mv orangebox css" $USER
        fi
        if [ -d orangebox ]; then
            echo "removing old, not needed data from $DIR"
            rm -rf orangebox
        fi
    fi
    echo "removing outdated symlinks in $DIR"
    find -L $DIR/ -type l -delete
    echo "Creating new Symlinks in $DIR"
    su -c "cp -sr $MASTERDIR/* $DIR/ > /dev/null 2>&1" $USER
done
```

