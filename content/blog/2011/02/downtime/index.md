---
title: "Downtime"
tags: ["Debian"]
published: true
date: "2011-02-07"
---

Mein Blog war in den letzten Stunden nicht erreichbar. Dies lag daran, dass ich versucht habe den Vserver von Debian Lenny auf Debian Squeeze zu updaten.  
Ich hätte mich mal besser vorher über die Abhängigkeiten unter Squeeze informieren sollen…

Das Update wollte ich einspielen, weil vor wenigen Tagen Debian 6.0 "Squeeze" als Stable Release veröffentlicht wurde.  
Als Debian User war also mal wieder Bastelzeit. Als erstes habe ich gleich einmal ein Backup gemacht, um im Zweifelsfall das System wieder herstellen zu können. Dabei sowohl manuell auf meinem PC, als auch mit dem Backupsystem meines Anbieters. Es handelt sich um einen Vserver bei Server4you.de

Noch bevor ich zu Squeeze gewechselt habe, wurde erst einmal Lenny auf den neuesten Stand gebracht:

```bash
apt-get update && apt-get upgrade
apt-get dist-upgrade
```

Soweit lief alles problemlos. Nun ging es ans Eingemachte und ich habe die sources.list editiert.  
Dabei sei gesagt, dass ich in meiner Sources.list expliziet den Debian Zweig angegeben, so dass ich in der Datei lenny duch squeeze ersetzen musste. Standartmäßig ist dies nicht erforderlich, so dass immer der aktuelleste Stable Zweig genommen wird.  
Damit es keine bösen Überraschungen gibt, sind auch die non-free Quellen eingetragen. Squeeze enthält in seinen Standardquellen nur noch GNU/GPL und ähnlich lizensierte Software, so dass man für manche Geräte die Treiber aus den non-free Quellen braucht.

Meine Souces.list sah dann wie folgt aus:

```
# squeeze packages.
deb ftp://ftp2.de.debian.org/debian/ squeeze main contrib non-free
deb http://security.debian.org/ squeeze/updates main contrib non-free

# source packages.  
deb-src ftp://ftp2.de.debian.org/debian/ squeeze main contrib non-free  
deb-src http://security.debian.org/ squeeze/updates main contrib non-free
```

Danach hieß es wieder:  
```bash
apt-get update && apt-get upgrade
```

Und:
```bash
apt-get dist-upgrade
```

Dann passierte Folgendes:
```
Preparing to replace libc6 2.7-18lenny7 (using .../libc6_2.11.2-10_i386.deb) ...
Checking for services that may need to be restarted...
Checking init scripts...
WARNING: this version of the GNU libc requires kernel version
2.6.18 or later. Please upgrade your kernel before installing
glibc.
The installation of a 2.6 kernel _could_ ask you to install a new libc
first, this is NOT a bug, and should *NOT* be reported. In that case,
please add lenny sources to your /etc/apt/sources.list and run:
  apt-get install -t lenny linux-image-2.6
```

Der Uralt Virtuozo Kernel ist inkompatibel mit dem aktuellen Debian Packet libc6. Einen eigenen Kernel kann man bei dieser Form der Virtualisierung nicht installieren.

Ich habe dann etwas nachgeforscht und diesen Thread gefunden: [http://serversupportforum.de](http://serversupportforum.de/forum/virtuelle-server/43463-update-auf-debian-squeeze-bei-server4you-vserver-nicht-moeglich.html)

Also wollte ich das Backup aus dem Interface von server4you.de nutzen. Bei dem zuletzt angelegten handelte es sich um ein inkrementelles. Was passierte? Das Einspielen schlug fehl.  
Eine Email dazu bekam man nicht. Das Fehlschlagen wurde lediglich unter Jobstatus angezeigt.  
Deswegen dachte ich mir, man kann ja mal versuchen, dass Vollbackup einzuspielen. Dieses funktionierte. Darüber dann das inkrementelle installiert und siehe da, es funktionierte.  
Ich frage mich, warum das System die zwei Schritte nicht automatisch erledigt, bzw. einem eine entsprechende Option gibt.

Wie es aussieht, muss ich wohl noch eine längere Zeit bei Lenny bleiben. Hoffentlich wird der Betrieb von Squeeze möglich sein, bevor die Sicherheitsupdates aufhören.  
Falls das nicht der Fall sein wird, wird der Vertrag halt gekündigt.

___
**Nachtrag:**

[In einer Diskussion im Serversupportforum](http://serversupportforum.de/forum/271594-post71.html) wurde nun seitens von server4you bekannt gegeben, dass die Kernel geupdated werden. Dies kann sich aber bis ins zweite Quartal hinziehen. Wenn sie den Zeitplan einhalten, dürfte das dann ja noch rechtzeitig sein.

