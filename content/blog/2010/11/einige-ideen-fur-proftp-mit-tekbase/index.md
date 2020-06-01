---
title: "Einige Ideen für ProFTP (mit Tekbase)"
tags: ["security", "ProFTP"]
published: true
date: "2010-11-16"
---

## Zugriff mit Systemusern

Es treten immer wieder Probleme und dem FTP Deamon ProFTP auf. Wenn man dazu noch Tekbase einsetzt, werden sie selten weniger.

Oft kommt es vor, dass die angelegten Systemuser sich nicht per FTP einloggen können. Tekbase legt für die User/Kunden eben diese Systemuser an.  
Wenn ProFTP bereits installiert ist, liegt im Regelfall eine Falschkonfiguration von selbigem vor. Dies wird sehr oft dadurch bedingt, dass der Admin auch Webspace über den Server laufen lässt und dabei ein Webinterface wie Plesk, SysCP, Froxlor, IspCP, usw. einsetzt.  
Solche Panels konfigurieren den ProFTP oft wie folgt:

```
AuthOrder                mod_sql.c
```

Dadurch ist nur Usern aus der Datenbank, die das Panel führt, der FTP Zugriff erlaubt. Man hat nun zwei Möglichkeiten. Entweder man schreibt die Tekbase User auch in diese Datenbank, oder, was effizienter und einfacher ist, man erweitert den Eintrag in der Config wie folgt:

```
AuthOrder                mod_sql.c mod_auth_unix.c
```

Dies erlaubt auch Systemusern den Zugriff per FTP.  
Der komplette Eintrag könnte dann so aussehen:

```
<ifmodule>
 LoadModule               mod_sql.c
 AuthOrder                mod_sql.c mod_auth_unix.c
</ifmodule>
```

## Bandbreitenlimitierung

Benutzen mehrere User mit sehr schneller Anbindung ihren FTP Account gleichzeitig und verfügt der Rootserver nur über eine 100Mbit Anbindung, kann es schnell mal passieren, dass die Anbindung überlastet ist und andere Dienste, wie z.B. Gameserver dadurch beeinträchtigt werden. Um das zu verhindern, kann man die maximal zulässige Übertragungsgeschwindigkeit einer Übertagung auf z.B. 1024kb/s einschränken:

```
<pre class="brush:shell">TransferRate RETR 1024.0
TransferRate STOR 1024.0
```

## Den Server verschlüsseln (FTPS)

Die meisten von euch werden der Einfachheit halber einen reinen FTP Server einsetzen. Dieser arbeitet unverschlüsselt, so dass sensible Daten mitgehört werden könnten.  
Aus diesem Grund sollte jeder einmal überlegen, ob er nicht den ProFTP Server mit TLS verschlüsseln will. Das Stichwort hierfür ist FTPS. Im Gegensatz zu SFTP, das ein SSH-Subsystem ist, kann man weiterhin alle Einschränkungsmöglichkeiten des FTP Servers, wie z.B. Chrooting und LIMIT Anweisungen ohne zusätzliche Konfiguration weiternutzen. Bei SFTP erreicht man Chrooting nur über Umwege und Zusatzpackete.

Ein weiterer Vorteil von FTPS ist, dass der User im Gegensatz zu SFTP keine Valid Shell benötigt und man ihn nicht bei AllowUsers in der sshd_config eingetragen haben muss.

Wie man die verschlüsselung Platformunabhängig einrichtet, [kann man hier nachlesen](http://www.proftpd.de/HowTo-SFTP-TLS-verschluesse.55.0.html). Für [Debian kann man dieses How To nutzen.](http://www.howtoforge.com/setting-up-proftpd-tls-on-debian-lenny)

## Nutzerrechte einschränken

Aus diversen Gründen möchte man oft den Zugriff auf bestimmte Ordner einschränken, dem User aber in den restlichen Ordnern freie Hand gewähren. Der Umständliche Weg ist per Chmod und den Eigentümerrechten der Ordner. Dieser muss Pro User eingestellt werden und ist somit nicht wirklich praktikabel.  
Einfacher und für alle User auf einmal kann man das über die Directory und Limit Funktion des ProFTP Servers, die dem Aufbau einer htaccess Datei ähnlich ist.

Im folgenden Beispiel ist es dem FTP User nur möglich Dateien in den Ordnern und Unterordnern zu bearbeiten, die ausdrücklich erlaubt wurden. In allen anderen Ordnern besteht lediglich das Recht zu lesen. Anhand des Beispiels sieht man gut, dass man den Ordner, ab dem der Zugriff wieder erlaubt sein soll, nicht als solchen, sondern mit /\* am Ende angegeben muss:

```
# Schutz der Bynaries
# Erstmal alles verbieten
<directory><limit dele="" rnfr="" rnto="" stor="">
 DenyAll
 </limit></directory>

# Die Sperre fuer das Modverzeichnis bei orangebox Spielen aufheben
# das erste * hinter orangebox/ ist eine Wildcard, erfasst also sämtliche
# Bezeichnungen wie tf, cstrike, dods, usw.
<directory><limit dele="" rnfr="" rnto="" stor="">
 AllowAll
 </limit></directory>

# Die Sperre fuer das Modverzeichnis bei cstrike aufheben
<directory><limit dele="" rnfr="" rnto="" stor="">
 AllowAll
 </limit></directory>

# Die Sperre fuer das Modverzeichnis bei dod aufheben
<directory><limit dele="" rnfr="" rnto="" stor="">
 AllowAll
 </limit></directory>

# Die Sperre fuer das Modverzeichnis bei czero aufheben
<directory><limit dele="" rnfr="" rnto="" stor="">
 AllowAll
 </limit></directory>
```

