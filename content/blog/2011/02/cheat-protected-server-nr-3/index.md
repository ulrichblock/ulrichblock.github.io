---
title: "Cheat protected Server Nr.3"
tags: ["game-server", "security"]
published: true
date: "2011-02-27"
---

Ich habe noch einen kleinen Nachtrag zu dem Umgehen des Protection Modus.  
Wie man ihn leicht umgehen kann, hatte ich in [diesem Beitrag](/cheat-protected-server-oder-doch-nicht/) beschrieben.

Das man dieses Vorgehen durch das setzen eines Aliases verhindern kann hatte ich [dann hier nachgetragen](/cheat-protected-server-nr-2/).

Ich hätte vielleicht noch erwähnen sollen, wo man diesen Eintrag vornehmen und was man zusätzlich absichern muss. Wichtig ist zu wissen, welche und in welcher Reihenfolge Parameter beim Start geladen werden  
Der Ablauf wird in der Datei valve.rc festgelegt, die sich im Verzeichnis CFG befindet. Standardmäßig sieht deren Inhalt so aus:

```
// load the base configuration
//exec default.cfg
r_decal_cullsize 1

// Setup custom controller
exec joystick.cfg

// run a user script file if present
exec autoexec.cfg

//
// stuff command line statements
//
stuffcmds
```

Der Befehl "stuffcmds" sind die Startparameter, die in der Konsole angegeben werden. Diese werden, wie man sieht, erst nach 2 Configs geladen. Ebenso kann der User das Laden der Parameter beeinflussen, wenn er Zugriff auf die valve.rc bekommt. Er kann also den Befehl plugin_load in die valve.rc, oder in die Configs schreiben, die vor den Stuffcmds geladen werden und so den Alias aus dem Startbefehl aushebeln.

Damit der User dazu keine Chance hat, sollten der, oder die Aliase an erster Stelle in der valve.rc stehen. Darüber hinaus darf der User die valve.rc nicht editieren können.  
Mit dem Proftpd könnte man dies so lösen:

```
<Directory ~>
HideFiles (^\..+|\.ssh|srcds_run$|srcds_linux$|valve.rc$|\.sh$)
PathDenyFilter (.+?/\..+|srcds_run$|srcds_linux$|valve.rc|\.sh$)
HideNoAccess on
</Directory>
```

Der Filter blockiert darüber hinaus noch den Zugriff auf die srcds_\* und \*.sh Dateien.

