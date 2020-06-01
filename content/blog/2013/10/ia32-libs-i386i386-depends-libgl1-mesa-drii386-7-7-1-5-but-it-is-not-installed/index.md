---
title: "ia32-libs-i386:i386 : Depends: libgl1-mesa-dri:i386 (>= 7.7.1-5) but it is not installed"
tags: []
published: true
date: "2013-10-13"
---

Beim rumspielen auf einer meiner lokalen Test VMs bin ich bei der Installation des Paketes ia32-libs in folgenden Fehler gelaufen:

```bash
Errors were encountered while processing:
 /var/cache/apt/archives/libgl1-mesa-dri_8.0.5-4+deb7u2_i386.deb
E: Sub-process /usr/bin/dpkg returned an error code (1)
```

  
Das Wiederholen von apt-get upgrade hilft auch nicht:

```bash
apt-get upgrade
Reading package lists... Done
Building dependency tree
Reading state information... Done
You might want to run 'apt-get -f install' to correct these.
The following packages have unmet dependencies:
 ia32-libs-i386:i386 : Depends: libgl1-mesa-dri:i386 (>= 7.7.1-5) but it is not installed
E: Unmet dependencies. Try using -f.
```

Das vorgeschlagene apt-get -f install rennt ebenfalls in einen Fehler:

```bash
(Reading database ... 33999 files and directories currently installed.)
Unpacking libgl1-mesa-dri:i386 (from .../libgl1-mesa-dri_8.0.5-4+deb7u2_i386.deb) ...
dpkg: error processing /var/cache/apt/archives/libgl1-mesa-dri_8.0.5-4+deb7u2_i386.deb (--unpack):
 trying to overwrite shared '/etc/drirc', which is different from other instances of package libgl1-mesa-dri:i386
dpkg-deb: error: subprocess paste was killed by signal (Broken pipe)
Errors were encountered while processing:
 /var/cache/apt/archives/libgl1-mesa-dri_8.0.5-4+deb7u2_i386.deb
E: Sub-process /usr/bin/dpkg returned an error code (1)
```

Außer Update und Suche klappten die apt Funktionen nicht mehr. Was also in so einer Deadlock Situation tun, Wenn man die VM nicht neu aufzusetzen möchte?

Mit ein wenig Shell Kenntnissen diesen Befehl ausführen:

```bash
apt-get purge ia32-libs lib32tinfo5 `dpkg --get-selections | grep i386 | awk '{print $1}'`
```

Nun ist man die 32Bit Libs wieder los und kann sein System nutzen.

Wie nun aber 32Bit Programme zum laufen bekommen? Folgendes klappte in meinem Setup, weil ich keine Programme nutze, die die 64Bit Version der Lib nutzen:

```bash
apt-get purge libgl1-mesa-dri
```

Nun noch einmal:

```bash
apt-get install ia32-libs
```

Diesmal läuft der Befehl sauber durch.

Warum die Lib bei mir überhaupt installiert war? Ich teste und spiele auf der lokalen VM herum. Dabei wird natürlich viel Installiert und wieder entfernt. Dabei muss irgendwann einmal etwas über gelieben sein.

