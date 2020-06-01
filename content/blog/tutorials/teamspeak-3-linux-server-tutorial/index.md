---
title: "Teamspeak 3 Linux Server Tutorial"
tags: ["Teamspeak 3"]
published: true
date: "2010-11-08"
---

Hier mal ein Tutorial, wie man Teamspeak 3 einrichtet:

### Vorbereiten des Systems

Als erstes sollte der Server auf den neuesten Stand gebracht werden.  
Bei Debian macht man dies mit:

```bash
apt-get update && apt-get upgrade
```

Am besten legt ihr einen eigenen User für den Server an. Teamspeak 3 sollte niemals mit dem User root ausgeführt werden. Wer dies bis jetzt vor hatte, solte sich schleunigst in das Thema Sicherheit unter Linux einlesen.  
Das Anlegen des neuen Users macht ihr, indem ihr mit dem User root Folgendes eingebt:

```bash
adduser teamspeak3
```

Auf einigen Systemen muss man diesen User noch direkten shell Zugang erlauben. In der „/etc/ssh/sshd\_config“ Die Zeile den Eintrag AllowUsers mit dem teamspeak3 User ergänzen:

```
AllowUsers deinuser1 deinuser2 deinuser3 teamspeak3
```

Im Anschluss starte den SSH Deamon neu:

```bash
/etc/init.d/ssh restart
```

Schließt unter keinen Umständen das Fenster mit dem ihr als root eingelogt seid, so lange ihr den Login mit dem neuen User nicht getestet habt.  
Also mit diesem einloggen und erst wenn dies geklappt hat die Sitzung mit dem root Acount beenden.

### Download und Installation der Teamspeak 3 Dateien

Mit dem neu angelegten User solltet ihr nun die neueste Version downloaden. Welche dies ist könnt ihr auf der Teamspeak Homepage herausfinden:  
[teamspeak.com](http://www.teamspeak.com/?page=downloads)

Dabei je nach eurem Betriebssystem die 32 (x86), oder 64 (amd64) Bit Version downloaden.  
Bitte kopiert folgende Befehle nicht einfach, sondern überprüft auf der Teamspeak Homepage, welche Versionsnummer aktuell ist.

32bit:

```bash
wget http://ftp.4players.de/pub/hosted/ts3/releases/beta-29/teamspeak3-server_linux-x86-3.0.0-beta29.tar.gz
```

64bit:

```bash
wget http://ftp.4players.de/pub/hosted/ts3/releases/beta-29/teamspeak3-server_linux-amd64-3.0.0-beta29.tar.gz
```

Im Anschluss diese Datei entpacken und das sehr lange Verzeichnis umbenennen:

```bash
tar xfvz teamspeak3-server_linux-amd64-3.0.0-beta29.tar.gz
mv teamspeak3-server_linux-amd64 teamspeak3
```

### Erstmaliges Starten des Servers

Nun in das teamspeak3 Verzeichnis wechseln und den Server in der Konsole starten

```bash
cd teamspeak3
./ts3server_minimal_runscript.sh
```

In der Konsole seht ihr die neu angelegten Zugangsdaten zu eurem Server. Speichert diese und beendet den Server mit strg+c .

Die wichtigen Daten sind der Token und der Serveradmin Account. Die Ausgabe sieht ungefähr so aus:

```bash
./ts3server_linux_amd64
Logging started
2009-12-26 12:20:09.241411|INFO    |ServerLibPriv |   | Server Version: 3.0.0-beta9 [Build: 9527]
2009-12-26 12:20:09.241564|INFO    |DatabaseQuery |   | dbPlugin name:    SQLite3 plugin, (c)TeamSpeak Systems GmbH
2009-12-26 12:20:09.241590|INFO    |DatabaseQuery |   | dbPlugin version: 3.6.21
2009-12-26 12:20:09.253018|INFO    |SQL           |   | db_CreateTables() tables created

------------------------------------------------------------------
                      I M P O R T A N T
------------------------------------------------------------------
              Server Query Admin Acccount created
         loginname= "serveradmin", password= "knDaeTFu"
------------------------------------------------------------------

2009-12-26 12:20:09.452675|WARNING |Accounting    |   | Unable to find valid license key, falling back to limited functionality
2009-12-26 12:20:09.962314|INFO    |FileManager   |   | listening on 0.0.0.0:30033
2009-12-26 12:20:10.061566|INFO    |VirtualServer |  1| listening on 0.0.0.0:9987
2009-12-26 12:20:10.061945|INFO    |VirtualServer |  1| client 'server'(id:0) added token for servergroup 'Server Admin'(id:6)
2009-12-26 12:20:10.062135|WARNING |VirtualServer |  1| --------------------------------------------------------
2009-12-26 12:20:10.062323|WARNING |VirtualServer |  1| ServerAdmin token created, please use the line below
2009-12-26 12:20:10.062507|WARNING |VirtualServer |  1| token=47GxnN/X+bHV8Y2SSljK5SYrmoFlTyz59T/PfeUd
2009-12-26 12:20:10.062690|WARNING |VirtualServer |  1| --------------------------------------------------------
2009-12-26 12:20:10.062873|INFO    |VirtualSvrMgr |   | dbLoadVirtualServers() VirtualServer(1) started (Default)
2009-12-26 12:20:10.063205|INFO    |Query         |   | listening on 0.0.0.0:10011
```

### Startscript

Bei den gedownloadeten Dateien ist ein Startscript dabei. Dieses ist für den Dauerhaften Betrieb des Servers zu nutzen:

```bash
./ts3server_startscript.sh start
```

Zum Stoppen, oder Restarten einfach start durch stop, oder restart ersetzen.

### Kostenlose Lizenz für 10 Server und 512 Slots

Wenn ihr mehr als 32 Slots benötigt und diese nicht vermieten wollt, weil ihr den Server als Clan, Gilde, Freehoster oder ähnliches betreibt, könnt ihr hier die kostenlose Lizenz erwerben:

Geh auf die Website [tritoncia.com](http://npl.tritoncia.com/ts3npl.php)

Auf REGISTER klicken  
Namen, Vornamen, Adresse und (sogar) die Telefonnummer angeben  
Die eingegebenen Daten nochmal bestätigen

Ihr solltet eine Email von von „Triton CI and Associates“ mit dem Betreff „TeamSpeak 3 Non-Profit License Email Validation“ mit diesem Inhalt bekommen:

> \*\* ATTENTION \*\*
> 
> Before completing the registration process for your TeamSpeak 3 Non-Profit License, you MUST confirm your email address by clicking on the link below:
> 
> http://npl.tritoncia.com/ts3npl.php?page=confirm&amp;token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx  
> Once your email has been confirmed, your license will be processed within one hour or less, and an email containing your license key will be sent to this email address.
> 
> Thank you.

 Klicke auf den Link. Mit der Email bestätigt ihr dem Lizenzabieter, dass es sich um euere Emailadresse handelt. Dieses Teil er euch dann auch mit:

> Your email address has been confirmed and your request for a Non-Profit License has been submitted. Within one hour, you will automatically receive an email containing your license key.

Ihr bekommt dann nach ein paar Minuten wieder eine Email von Triton CI and Associates mit dem Betreff „TeamSpeak 3 Non-Profit License Issued“. Im Anhang befindet sich eine Datei mit dem Namen „licensekey.dat“. In der Email steht:

> Conngratulations!
> 
> Your TeamSpeak 3 Non-Profit License has now been issued.
> 
> TO ACTIVATE YOUR LICENSE:  
> 1\) Place the attached licensekey.dat file on the root directory of your TeamSpeak 3 Server installation folder.  
> 2\) STOP AND RESTART the TeamSpeak 3 Server master binary (exe) process.
> 
> Please DO NOT share your licensekey.dat file with ANYONE outside of your registered organization. Doing so may cause your license to be SUSPENDED.
> 
> Thank you.

Wie in der Mail beschrieben, müsst ihr die Datei aus dem Anhang in das Hauptverzeichnis des Ts3servers kopieren und im Anschluß den Server neu starten

Jetzt kann man mehr virtuelle Server erstellen und Slotzahlen bis zu 512 verwenden.

### Virtuellen Server hinzufügen

Hierfür benötigst du einen Zugang zum Server Query.  
In die Server-Query Konsole unter „Extras &gt; Server Query“ im Clienten folgendes eingeben:  
login BENUTZERNAME PASSWORT

```
login serveradmin PASSWORD
servercreate virtualserver_name=SERVERNAME virtualserver_port=SERVERPORT virtualserver_maxclients=SLOTS
```