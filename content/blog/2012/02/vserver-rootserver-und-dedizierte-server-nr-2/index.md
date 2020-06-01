---
title: "Vserver, Rootserver und dedizierte Server Nr.2"
tags: []
published: true
date: "2012-02-09"
---

In einem [früheren Beitrag](/vserver-rootserver-dedizierte-server-und-schwarze-schafe/) hatte ich den Unterschiede zwischen Vserver, Rootserver und dediziertem Server beschrieben. Dort bin ich auch auf Möglichkeiten eingegangen, wie man ein System auf der Konsole als Vserver identifizieren kann.

Eine sehr einfach Möglichkeit hatte ich vergessen. Mit dem Programm **dmidecode** kann man die Hardwareinformationen seines Servers auslesen. Manchen Images enthalten es bereits. Bei anderen muss es noch installiert werden.

Die interessanteste Ausgabe ist die des Systemherstellers. Der Befehl dazu lautet:

> dmidecode -s system-manufacturer

Auf einem mit VMWare virtualisiertem System ist die Ausgabe:

> dmidecode -s system-manufacturer  
> VMware, Inc.

Bei Virtuozzo hingegen ist ein Zugriff auf diese Informationen gar nicht erst möglich:

> dmidecode -s system-manufacturer  
> /dev/mem: Permission denied

Auf einem dedizierten Server von Fujitsu ist die Ausgabe:

> dmidecode -s system-manufacturer  
> FUJITSU

Auch MSI Mainboards melden sich entsprechend:

> dmidecode -s system-manufacturer  
> MSI

