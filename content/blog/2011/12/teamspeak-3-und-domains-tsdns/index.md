---
title: "Teamspeak 3 und Domains (TSDNS)"
tags: ["Teamspeak 3"]
published: true
date: "2011-12-08"
---

Schon seit einiger Zeit unterstützt [Teamspeak 3](http://teamspeak.com) das Verbinden auf Domains. Anfangs konnte man zwar auf eine Domain verbinden, musste aber noch zusätzlich den Port angeben.

Dies hat sich Mitte des Jahres mit einer der ersten RC Versionen geändert. Seitdem wird mit dem Teamspeak 3 Server zusätzlich ein DNS Server ausgeliefert (TSDNS). Mit dessen Hilfe ist es möglich, den Teamspeak 3 Clients mitzuteilen, auf welche IP:Port Kombination verbunden werden soll, wenn nur eine Domain, oder Subdomain vom Benutzer eingegeben wird. Mit (Sub)Domain ist eine Topleveldomain wie subdomain.domain.tld gemeint.

Das Verbinden auf eine Domain ist praktisch, wenn der Benutzer keine, oder kaum technischen Kenntnisse hat.

Der TSDNS Server befindet sich im Unterordner *tsdns/* des Teamspeak 3 Serververzeichnisses. Je nach Bitversion der Software heißt die Binary unterschiedlich. *tsdnsserver_linux_amd64* in der 64bit Version und *tsdnsserver_linux_x86* für den 32bit Betrieb.

Die Einstellungen werden in der Datei *tsdns_settings.ini* gemacht, die sich im selben Ordner, wie die Binary befindet. Die *tsdns_settings.ini* muss man selber erstellen, da sie nicht mit den Serverdateien mitgeliefert wird. Der Hersteller liefert als Beispiel für die *tsdns_settings.ini* die Datei *tsdns_settings.ini.sample* mit.  
Aus der *tsdns_settings.ini* werden Zeilen, die mit einer Raute ***\#*** beginnen, nicht berücksichtigt. Dies liegt daran, dass eine Raute dem TSDNS Server sagt, dass es ein Kommentar für den Benutzer ist. In den restlichen Zeilen macht man seine Einstellungen. Für jede Domain und Server macht man einen Eintrag:

```
ts1.myclan.tld=1.1.1.1:9987
ts2.myclan.tld=1.1.1.1:9988
# Diese Zeile ist ein Kommentar und wird vom TSDNS Server ignoriert 
ts3.yourclan.tld=1.1.1.1:9989
```

Nach dem Konfigurieren der *tsdns_settings.ini* muss der TSDNS Server noch gestartet werden:

```bash
cd tsdns/
./tsdnsserver_linux_amd64
```

Wenn der TSDNS Server bereits läuft und die *tsdns_settings.ini* geändert wurde, dann updated man ihn, an Stelle eines Neustarts:

```bash
cd tsdns/
./tsdnsserver_linux_amd64 --update
```

Zusätzlich zu der Konfiguration des TSDNS Servers ist es erforderlich, dass die Domain bei eurem Anbieter konfiguriert wird. Da sich hier die Interface Lösungen stark unterscheiden, kann man nur allgemein sagen, dass ein A Record für die (Sub)Domain auf die IP des Teamspeak 3 Servers gelegt werden muss. Dabei hat man entweder die Wahl die (Sub)Domains einzeln zu konfigurieren, oder mit so genannten Wildcards ***\**** zu arbeiten. Benutzt man eine Wildcard, werden alle Subdomains auf die angegebenen IP aufgelöst.  
Ein einzelner Eintrag für eine Subdomain sieht dann meist so aus:

```
subdomain A 1.1.1.1
```

Wenn man alle Subdomains mit dieser IP nutzen möchte:

```
* A 1.1.1.1
```

Wenn man alle Subdomains von einer Subdomain (**subsubs**.subdomain.domain.tld) mit einer bestimmtem IP nutzen möchte:

```
*.subdomain A 1.1.1.1
```

Im Anschluss noch ein kleines Skript, das automatisch die Bitversion überprüft und feststellt, ob der Server bereits läuft. Je nachdem wird der Server gestartet, oder geupdated:

```bash
#!/bin/bash

############################################################################
#                                                                          #
#  Author: Ulrich Block                                                    #
#  Kontakt: www.ulrich-block.de                                            #
#                                                                          #
#  This program is free software: you can redistribute it and/or modify    #
#  it under the terms of the GNU General Public License as published by    #
#  the Free Software Foundation, either version 3 of the License, or       #
#  (at your option) any later version.                                     #
#                                                                          #
#  This program is distributed in the hope that it will be useful,         #
#  but WITHOUT ANY WARRANTY; without even the implied warranty of          #
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           #
#  GNU General Public License for more details.                            #
#                                                                          #
#  You should have received a copy of the GNU General Public License       #
#  along with this program.  If not, see <http://www.gnu.org/licenses/>.   #
#                                                                          #
############################################################################

cd `dirname $0`

if [ -f tsdnsserver_linux_amd64 ]; then
 bin='tsdnsserver_linux_amd64'
elif [ -f tsdnsserver_linux_x86 ]; then
 bin='tsdnsserver_linux_x86'
else
 echo 'No TSDNS Server found. Exiting now'
 exit 0
fi

echo "Found TSDNS binary '$bin'"

if [[ `ps fx | grep "$bin" | grep -v grep` ]]; then
 echo 'Starting TSDNS Server'
 ./$bin
else
 echo 'Updating TSDNS Server'
 ./$bin --update
fi
```

