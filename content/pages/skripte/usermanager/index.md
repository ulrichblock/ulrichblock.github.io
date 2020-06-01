---
title: "Apache 2 Usermanager"
tags: []
published: true
date: "2010-06-07"
description: "Verwaltungsskript für Apache2 mit fcgid und suexec. Verwaltet Ftp und Webspaceuser und Vhosts"
---

Ich habe mich schon in einem früheren Beitrag dazu geäußert, wie man Phpmyadmin unter fcgid zum laufen [bekommt](/libapache2-mod-fcgid-und-phpmyadmin/). Und auf folgendes Tutorial verwiesen: [Klick Mich](http://wiki.hetzner.de/index.php/Apache_PHP5_fcgi_und_SuExec)

Der Nachteil bei dieser Methode ist der Umstand, dass jeder Benutzer von Hand mit allen Dateien angelegt werden muss. Ich habe deswegen ein Bash Script geschrieben, dass nach der gewünschten Subdmain bzw. Top Level Domain fragt und den Rest von alleine erledigt:

- User wird mit dem Namen der Domain angelegt
- für jeden Vhost ein eigenes Home Verzeichnis mit log, htdocs, fcgid wrapper und php.ini
- Vhost wird angelegt
- Beispiel robots.txt wird erstellt
- Ein Eintrag für das neu angelegte Logverzeichnislogrotate wird erstellt

Aufgerufen wird es mit:

```bash
./usermanager.sh add
```

Alle Einträge und Dateien werden gelöscht, wenn den Löschdialog aufruft und den entsprechenden user auswählt:

```bash
./usermanager.sh delete
```

Downloaden könnt ihr es [hier](https://github.com/ulrichblock/bash-scripts-web/blob/master/usermanager.sh).