---
title: "MYSQL Passwort zurücksetzen"
tags: ["sql", "MySQL"]
published: true
date: "2011-06-13"
---

Ab und zu kommt es vor, dass mein sein Passwort vergisst, oder den Key zu seiner Passwortdatei verliert. Wenn man so den Zugriff auf den Adminaccount von MYSQL verliert, muss man das Passwort zurücksetzen.

Eine schnelle Suche bei Google und man erhält X Anleitungen, wie man es machen kann. Oft findet man Anleitungen, die einem sagen, man solle Configeinträge abändern, den MYSQL Server neu starten, dass Passwort ändern, die Configänderung rückgängig machen und dann den MYSQL Server abermals neu starten.

Dies ist reichlich umständlich und aufwendig und geht zu mindestens bei Debian auch anders.

Als erstes muss man erfahren, welches Serverpaket installiert ist.  
Bei Lenny kommt z.B. diese Ausgabe:

```bash
dpkg -l | grep mysql-server  
ii mysql-server 5.0.51a-24+lenny5 MySQL database server (metapackage depending  
ii mysql-server-5.0 5.0.51a-24+lenny5 MySQL database server binaries
``` 

und bei Sqeeze:

```bash
dpkg -l | grep mysql-server  
ii mysql-server 5.1.49-3 MySQL database server (metapackage depending on the latest version)  
ii mysql-server-5.1 5.1.49-3 MySQL database server binaries and system database setup  
ii mysql-server-core-5.1 5.1.49-3 MySQL database server binaries
```

Mit dem Wissen, welche Paketversion eingesetzt wird, konfigurieren wir dieses Paket neu:

```bash
dpkg-reconfigure mysql-server-5.1
```

Es wird ein Dialog erscheinen, bei dem man das Passwort neu setzen kann. Im Anschluss an die Eingabe, wird der Server automatisch neu gestartet, wodurch das neue Passwort aktiv wird.

