---
title: "Teklab, Debian 7.1 und die Befehle useradd, userdel, usermod"
tags: ["game-server"]
published: true
date: "2013-08-17"
---

Bei dem Upgrade von Debian 6 auf Debian 7 bzw 7.1 kommt es zu Problemen mit Teklabs Bash Skript */home/skripte/teklab*. **Es ist somit ein Upgrade Problem von Debian. Eine Standardinstallation von Debian 7 wird dieses Problem nicht bekommen. Ebenso, wenn man sudo unter Debian erstmalig, oder nach dem Purgen neu installiert.**

**Zum Hintergrund:**  
Ich wurde von einem mir bekannten Hoster angesprochen worden, weil das Skript auf sämtlichen Rootserver nicht mehr lief, nachdem ein Upgrade von Debian 6 Oldstable auf Debian 7.1 gemacht wurde.

Das Bash Skript */home/skripte/teklab* benutzt die Aliase usermod, userdel und useradd und verlässt sich darauf, dass die Distribution diese korrekt auf die Dateien in */usr/sbin/\** verlinkt werden. Bei den betroffenen Root Servern fehlten diese Aliase für den Benutzer ***user-webi***, auch in dem Fall, dass sie mit sudo aufgerufen worden sind.

~~Ob man betroffen ist kann man heraus finden, indem man als user-webi folgenden Befehl aufruft:~~

```bash
which useradd
```

~~Erhält man keinen Pfad als Ausgabe, ist man von dem Problem betroffen. Deutlicher sieht man es mittels compgen. Als root bekommt man:~~

```bash
root@debian64:~# compgen -c | grep user
_allowed_users
_user_at_host
_usergroup
_userland
adduser
usermod
newusers
useradd
deluser
userdel
users
fuser
```

~~Als user-webi:~~

```bash
user-webi@debian64:~$ compgen -c | grep user
_allowed_users
_user_at_host
_usergroup
_userland
users
fuser
```

~~Haupt ursächlich ist jedoch, dass sich Parameter in der Konfiguration von sudo geändert haben /etc/sudoers. Per Default wird bei einem Upgrade diese Datei nicht aktualisiert, sondern die alte beibehalten.~~

Ursache für die Probleme bei dem Upgrade sind die geänderten Anforderungen an die Konfiguration von *sudo* in der */etc/sudoers*. Macht man ein Upgrade von Debian 6 auf 7 wird die Datei standardmäßig 1:1 bei behalten, es sei denn, dass man entscheidet sich dagegen. Das Ergebnis ist dann, dass die neuen Einträge fehlen, die ein Alias Mapping nach /usr/sbin/\* ermöglichen.

**Debian 6:**

```
Defaults        env_reset
root    ALL=(ALL) ALL
%sudo ALL=(ALL) ALL
```

**Debian 7:**

```
Defaults        env_reset
Defaults        mail_badpass
Defaults        secure_path="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
root    ALL=(ALL:ALL) ALL
%sudo ALL=(ALL:ALL) ALL
```

Zum einen kann man nun */etc/sudoers* mit dem Befehl *visudo* bearbeiten.

Zum anderen kann man das Teklab Skript anpassen. Dazu ist zu sagen, dass es keine gute Idee Idee ist, sich blind auf einen Alias zu verlassen, wie es in dem Skript gemacht wird. Gängige Technik ist es, mittels *which* während der Installation die absoluten Pfade zu bestimmen und diese fortan zu nutzen. Werden die Aliase useradd, usermod und userdel durch Aufrufe mit absoluten Pfaden ersetzt, tritt das Problem auch mit alter Konfiguration unter Debian 7 nicht auf.

<del datetime="2013-08-18T17:48:30+00:00">Generell kann man sagen, dass es keine gute Idee Idee ist, sich blind auf einen Alias zu verlassen. Gängige Technik ist es, mittels *which* den absoluten Pfad zu bestimmen. Wenn der absolute Pfad nicht bestimmt werden kann, bricht das Skript ab. Kombiniert mit einem Installer, kann man die passenden Bindings suchen und so etwaige Unterschiede in Distributionen abfangen und ausschließlich absolute Pfade verwenden.</del>

<del datetime="2013-08-18T18:48:23+00:00">Man hat nun zwei Möglichkeiten das Problem zu lösen. Entweder man macht das Skript robuster indem man den absoluten Pfad angibt, oder man stellt die Verlinkungen für den User user-webi wieder her.</del>

Bei Debian müssten die Aufrufe mit absoluten Pfaden dann so aussehen:

```
/usr/sbin/usermod (...)
/usr/sbin/userdel (...)
/usr/sbin/useradd (...)
```

In dem konkreten Fall war die Modifikation des */home/skripte/teklab* alleine nicht ausreichend. Zwei weitere Schritte waren notwendig. Den Grund konnten wir nicht mehr ermitteln. Ebenso wenig, ob es ein lokales, oder generelles Problem war.

Erstens wurden alle Protected Server per MYSQL Query in den normalen Modus gesetzt:

```sql
UPDATE `teklab_gameserver` SET `protect`=1 WHERE `protect`=2
```

Zweitens wurden alle protected Prozesse auf den Rootservern beendet und der protected User gelöscht:

```bash
grep 'sec' /etc/passwd | awk -F ':' '{print $1}' | while read user; do killall -u $user; /usr/sbin/userdel -fr $user; done
```

**Achtung! Diese While Schleife kann extrem gefährlich werden. Setzt sie nur mit Bedacht ein! Sie geht davon aus, dass ausschließlich Protected User existieren, die *sec* im Namen haben. Sollten andere User auf dem System existieren, die irgendwo ein *sec* im Namen haben, werden sie ebenso gelöscht! Am besten ruft erst einmal nur den grep auf, um zu gucken, ob noch andere User fälschlicher Weise gelöscht werden würde:**

```bash
grep 'sec' /etc/passwd
```

Der User kann den protected Mode nun neu starten und dabei wird der ***sec*** User auf dem Root angelegt.

___
**Nachtrag 1:**  
Die genaue Ursache wurde genauer identifiziert und der Text dementsprechend ergänzt.

___
**Nachtrag 2:**  
Teile der Fehleranalyse gestrichen, weil inkorrekt. Ebenso Klarstellung am Anfang fett gemacht, weil der Inhaber von Teklab in diesem Artikel ein Angriff auf sein Produkt sieht.

