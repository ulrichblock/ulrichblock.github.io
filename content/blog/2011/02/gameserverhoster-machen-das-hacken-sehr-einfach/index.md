---
title: "Gameserverhoster machen das Hacken sehr einfach"
tags: ["game-server", "security"]
published: true
date: "2011-02-24"
---

Ich hatte in einem früheren [Beitrag](/cheat-protected-server-oder-doch-nicht/) geschildert, wie man recht einfach die bestehenden protection Systeme aushebeln kann.

Im Gegensatz zum Nachladen von Plugins, gibt es noch wesentlich schwerwiegendere Probleme, wenn der Hoster, keine Absicherung seines FTP Servers vornimmt. Ich habe einige Interfaceanbieter auf dieses Problem hingewiesen. Wenn diese es an ihre Kunden weitergeleitet haben, sollte es hoffentlich nicht mehr so viele Hoster betreffen.

Auf vielen Systemen sind die CHMODs nicht ausreichend streng gesetzt, so dass man sehr einfach auf viele Dateien des Systems zugreifen kann. Dies liegt sehr oft daran, dass die Umasks nicht ausreichend streng gewählt wurden.

Viele Programme und Serverdienste, wie auch der Counter-Strike Source Server, setzen Startskripte ein, die in der Programmiersprache Bash geschrieben sind. Sind die Rechte auf dem System nun zu lasch gewählt, kann man mit einem Editor diese Dateien bearbeiten und in die Skripte zusätzlichen Code schreiben, welcher bei einem Start des Servers ausgeführt wird. Startskripte der (Game)server sind z.B. (hlds_run|srcds_run|…). Alternativ kann man das Skript, oder die (srcds_\*|hlds_\*) durch eigene Dateien und Skripte austauschen. So lange sie ausführbar sind, wird bei vielen Hostern der veränderte Code einfach ausgeführt.  
Die Skripte ohne Erlaubnis zu verändern ist sehr wahrscheinlich strafbar. Für genauere Informationen fragt den Anwalt eures Vertrauens.

Die harmloseste Variante beim Verändern wäre es, die Startparameter des Hosters zu überschreiben um den eigenen Server aufzuwerten. Es geht aber auch wesentlich schlimmer.

Mit etwas Ahnung kann man auf diese Weise das Hostsystem nach Belieben analysieren und ausspionieren. Bei Bekannten habe ich auf diese Weise sehr schnell von einem Gameserver ausgehend deren MYSQL Zugangsdaten der Webseiten gehabt, als ich den Server auf Sicherheit testen sollte. Durch die Mehrfachverwendung von Passwörtern hatte ich dann auch noch Zugriff auf Master- und Rootaccounts. Durch geschickte Analyse kann man sich also sehr schnell durch die Accounts und Daten des Systems arbeiten und weitgehende Recht erlangen.

Man kann natürlich auch den Server dazu veranlassen andere Programme und Dienste auszuführen, als eigentlich vom Hoster gewollt. Dies stellt gerade deswegen eine große Gefahr dar, weil es unzählige Exploits bei verschiedensten Paketen und Kerneln gibt, mit denen man schnell Rootrechte erlangen kann.

Es handelt sich also um ein extrem schwerwiegendes Sicherheitsproblem, von dem wohl Anbieter Anbieter betroffen sein könnte.  
Man kann nun der Ansicht sein, dass es nicht weiter relevant ist, weil ja bekannt ist, wer den Server angemietet hat und diesen so haftbar für eventuelle Schäden machen kann.

Doch was ist mit Fakebestellungen, abhanden gekommenen Passwörtern, Testaccounts usw.? Außerdem kann sich jeder auf den Punkt stellen, hinter der eingeloggten IP steckte ich nicht, es hatten X andere Menschen über diese Anschluss Zugriff auf das Internet.

Letztendlich muss dem Täter bewiesen werden, dass er es war. Dies wird mehr als problematisch werden und sehr wahrscheinlich zu nichts führen.

Auch wird sich, wenn irgendwo ein Schaden durch den Root entstanden ist, erst einmal an den Rooteigentümer gewendet.

Ich könnte mir vorstellen, dass die Rechtspechung hier auch die Störerhaftung anwendet, weil der Rooteigentümer bzw. Mieter den Server fahrlässiger Weise nicht ausreichend abgesichert hat. Diese rechtlichen Fragen sollten aber besser von einem Anwalt beantwortet werden.

Der Schluss aus dem Gesagten muss also sein, dass man diese Dateien nicht mehr ändern kann und die einzelnen User auf der Shell weniger zu sehen bekommen.

Ein erster Ansatz ist es die Umasks vom System selber strenger einzustellen:

In der Datei "/etc/profile" sollte die Umask so aussehen:

```
umask 077
```

In der "/etc/adduser.conf":

```
DIR_MODE=0700
```

Nachdem man die Umasks eingestellt hat, sollte man sein System überprüfen und ggf. die Chmods strenger einstellen.

Auf diese Weise kann User A dann weniger von User B erfahren.

Es bleibt das Problem, dass der User auf seine eigenen Startskripte zugreifen kann. Hier gibt es nun verschiedene Lösungsansätze.

Eine wäre es, das immutable Bit zu setzen. Damit nimmt man sich aber die Möglichkeit diese Dateien von Autoupdatern aktualisieren zu lassen. Hat man nun viele Server im System werden Updates sehr aufwendig, so dass diese Methode wenig gangbar ist.

Die Datei einem anderen User zuzuordnen und einen Strengen Chmod zu verwenden führt zu der selben Problematik.

Etwas gangbarer ist es, eine aktuelle Serverinstallation auf dem Rootserver zu haben und bei jedem Serverstart die kritischen Dateien mit Dateien aus dieser Installation zu überschreiben.

Zusätzlich zum Überschreiben, sperre ich die Dateien beim FTP Server selber bzw. blockiere den Zugriff.

Der FTPServer ProFTPD ermöglicht eine sehr umfassende Konfiguration und Limitierung.

Auch beim FTPServer stelle ich eine strenge Standardumask ein:

```
Umask 077  077
```

Man kann kann z.B. FTP Befehle für bestimmte Ordner und Unterordner sperren und dann nur für bestimmte Unterordner wieder erlauben. Ich blocke auch die Möglichkeit die CHMODs per FTP zu ändern:

```
# Erstmal alles verbieten
<Directory ~/*>
    <Limit RNTO RNFR STOR DELE DIRS CHMOD>
        DenyAll
    </Limit>
</Directory>

# Die Sperre fuer das Modverzeichnis bei orangebox Spielen aufheben
# das erste * hinter orangebox/ ist eine Wildcard, erfasst also sämtliche
# Bezeichnungen wie tf, cstrike, dods, usw.
<Directory ~/server/*/orangebox/*/*>
    <Limit RNFR RNTO STOR DELE>
        AllowAll
    </Limit>
</Directory>

# Die Sperre fuer das Modverzeichnis bei cstrike aufheben
<Directory ~/server/*/cstrike/*>
    <Limit RNFR RNTO STOR DELE>
        AllowAll
    </Limit>
</Directory>

# Die Sperre fuer das Modverzeichnis bei dod aufheben
<Directory ~/server/*/dod/*>
    <Limit RNFR RNTO STOR DELE>
        AllowAll
    </Limit>
</Directory>

# Die Sperre fuer das Modverzeichnis bei czero aufheben
<Directory ~/server/*/czero/*>
    <Limit RNFR RNTO STOR DELE>
        AllowAll
    </Limit>
</Directory>
```

Zusätzlich, oder alternativ kann man den Zugriff auf bestimmte Dateien, oder Dateitypen komplett blockieren. Dead_Eye von [sourceserver.info](http://sourceserver.info) hat z.B. folgende Regeln geschrieben:

```
<Directory ~>
    HideFiles (^\..+|\.ssh|srcds_run$|srcds_linux$|valve.rc$|\.sh$)
    PathDenyFilter (.+?/\..+|srcds_run$|srcds_linux$|valve.rc|\.sh$)
    HideNoAccess on
</Directory>
```

