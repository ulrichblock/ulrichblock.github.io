---
title: "PHP5 SSH2: Systempaket, oder PEAR benutzen?"
tags: ["php"]
published: true
date: "2012-12-02"
---

Es gibt 2 einfache Möglichkeiten SSH2 Unterstützung für PHP zu installieren. Zum einen kann man ein fertiges Paket seiner Distribution verwenden. Bei Debian z.B. wäre es libssh2-php:

```bash
apt-get install libssh2-php
```

Bei PECL Paketen kann es vorkommen, dass man mit dem Systempaket eine recht veraltete, von längst behobenen Bugs betroffene, Version erhält.  
Die [Version 0.11.0](http://packages.debian.org/squeeze/libssh2-php), die mit Debian ausgeliefert wird, hat z.B. viele, die Grundfunktionen betreffende, Bugs. Eine Übersicht kann man im [Changelog](http://pecl.php.net/package-changelog.php?package=ssh2&release=0.12) des PECL Paketes sehen.

Es bietet sich deswegen an, die aktuelle Version mittels PEAR zu beziehen. Wenn man ein Systempaket bereits installiert hatte, sollte man es entfernen. Bei Debian geht dies mit:

```bash
apt-get remove libssh2-php
```

Dann installiert man das PEAR Paket. Bei Debian mit:

```bash
apt-get install php5-dev php-pear libssh2-1 libssh2-1-dev
```

Bei den Red Hat/CentOS Distributionen:

```bash
yum install php-pear
```

Distributionsunabhängig geht es dann weiter mit dem PECL Installer:

```bash
pecl install --alldeps ssh2-beta
```

Fall noch nicht vorhanden, muss man PHP noch sagen, dass es die Extension laden muss.  
Damit es übersichtlich bleibt, erstellt man eine eigene Datei in /etc/php5/conf.d/:

```bash
echo "extension=ssh2.so" > /etc/php5/conf.d/ssh2.ini
```

Anschließend den Apache2 neu starten:

```bash
/etc/init.d/apache2 restart
```

Die Ausgabe von phpinfo(); sollte nun folgendes enthalten:

> Registered PHP Streams (…), ssh2.shell, ssh2.exec, ssh2.tunnel, ssh2.scp, ssh2.sftp

