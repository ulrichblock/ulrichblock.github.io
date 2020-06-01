---
title: "Farbige Schrift in der Bash bzw. Bashskripten"
tags: ["bash"]
published: true
date: "2010-12-05"
---

In der Bash kann Text farbig widergegeben werden. Dafür muss die Farbe der Textausgabe geändert werden. Der Haken dabei ist, dass dies so lange gilt, bis man sie wieder umstellt.  
Will man also wieder weiße Schrift, muss nach der farbigen Ausgabe die Farbe wieder auf weiß zurückgesetz werden.  
Wenn man in einem Skript nun öfters die Farbe wechseln will, ist dies ziemlich umständlich.  
Die folgenden Funktionen stellen die gewünschte Farbe ein, geben den Text aus und stellen danach die Farbe wieder auf die Standardfarbe weiß. Man fügt sie am Anfang seines bash Skriptes ein und benutzt sie dann im Anschluß an Stelle vom echo Befehl.

```bash
function red_msg() {
    echo -e "\\033[31;1m${@}\033[0m"
}

function green_msg() {
    echo -e "\\033[32;1m${@}\033[0m"
}

function yellow_msg() {
    echo -e "\\033[33;1m${@}\033[0m"
}

function blue_msg() {
    echo -e "\\033[34;1m${@}\033[0m"
}

function magenta_msg() {
    echo -e "\\033[35;1m${@}\033[0m"
}

function cyan_msg() {
    echo -e "\\033[36;1m${@}\033[0m"
}﻿
```

Aufgerufen werden können die Funktionen dann so:

```bash
red_msg "Hier wird roter Text ausgegeben"
green_msg "Hier wird grüner Text ausgegeben"
yellow_msg "Hier wird gelber Text ausgegeben"
blue_msg "Hier wird blauer Text ausgegeben"
magenta_msg "Hier wird lila Text ausgegeben"
cyan_msg "Hier wird türkiser Text ausgegeben"
```

