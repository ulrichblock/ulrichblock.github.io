---
title: "Verantwortungslose Admins"
tags: ["security"]
published: true
date: "2010-06-01"
---

Ich habe gerade in einem Forum einen Hilfegesuch gelesen, bei dem der User einen "nicht funktionierenden" FTP Server hat.  
>220 ProFTPD 1.3.1 Server (ProFTPD) [x.x.x.x]<br></br>Befehl:   USER root<br></br>Antwort:   331 Password required for root<br></br>Befehl:   PASS<br></br>Antwort:   530 Login incorrect.<br></br>Fehler:   Kritischer Fehler

Was sagt uns das? Zum Glück scheint er an einen verantwortungsbewussten Hoster geraten zu sein, der bei seinen Vservern/Roots ProFTP so vorinstalliert, dass ein Zugriff mit dem root Account per FTP nicht möglich ist.  
Ich verstehe einfach nicht, wie man sich trotz vieler Warnmeldungen bei den einschlägigen Hostern selber, einen Server mietet, ohne sich auch nur ein bischen in das Thema eingearbeitet zu haben. Es sollte eigentlich zum Allgemeinwissen eines Admins gehören, dass man mit dem Adminaccount auch nur Adminaufgaben wahr nimmt.  
Ich sehe es leider immer wieder, das der root Account für alles genutzt wird, "weil es ja funktioniert".  
Wegen diesen verantwortungslosen Admins darf sich dann der Rest mit Angriffen und Scanns von deren Servern rumschlagen. Im Log taucht dann sowas auf:  
>HierWarEineIP  "GET /w00tw00t.at.ISC.SANS.DFind:) HTTP/1.1" 400 226 "-" "-"<br></br>HierWarEineIP  "GET /w00tw00t.at.ISC.SANS.DFind:) HTTP/1.1" 400 226 "-" "-"<br></br>HierWarEineIP "GET /tiny_mce/plugins/tinybrowser/tinybrowser.php HTTP/1.0" 404 242 "-" "Python-urllib/1.17"<br></br>HierWarEineIP "GET /joomla/plugins/editors/tinymce/jscripts/tiny_mce/plugins/tinybrowser/tinybrowser.php HTTP/1.0" 404 282 "-" "Python-urllib/1.17"<br></br>HierWarEineIP "GET /index.php?jumpurl=typo3conf%2Flocalconf.php&juSecure=1&type=0&locationData=1%3A HTTP/1.0" 301 - "-" "Python-urllib/1.16"

