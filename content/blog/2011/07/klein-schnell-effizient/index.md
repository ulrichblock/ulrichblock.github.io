---
title: "Klein, schnell effizient."
tags: ["THTTPD", "Apache2"]
published: true
date: "2011-07-23"
---

Ich bin gerade dabei einen kleinen Fileserver aufzubauen, der ausschließlich statische Dateien mittels http ausliefern soll. Es geht dabei hauptsächlich um einen Fastdownload Server.

Viele würden nun schnell den Apache2 Server über das Paketmanagement beziehen, und dann die Dateien in das **/var/www**  packen.

Der Apache ist mir jedoch zu groß, schwer und recourcenhungrig. Es musste also eine Alternative her.

Meine Wahl ist auf den [thttpd](http://acme.com/software/thttpd/) gefallen. [Wie er ausgesprochen wird, kann man hier sehen](http://ars.userfriendly.org/cartoons/?id=19990926).

Bei Debian ist er als Packet vorhanden und kann sehr einfach installiert werden:

```bash
apt-get install thttpd
```

Danach muss man noch die **/etc/default/thttpd** bearbeiten und den einzigen Eintrag in der Config folgendermaßen abändern:

> ENABLED=yes

Im Anschluss sollte man noch einen User anlegen, dem die Dateien später gehören sollen. Des Weiteren muss man noch die **/etc/thttpd/thttpd.conf** modifizieren. Dabei bietet es sich an, das Logging abzuschalten:

> dir=/var/www/meinneueruser/  
> logfile=/dev/null

Die Config ist relativ kurz und enthält mehr Erklärungen und Dokumentationen, als einstellbare Variablen.

Nachdem alles vorbereitet ist, den Server neu starten:

```bash
/etc/init.d/thttpd restart
```

Das war es, der Fileserver ist fertig. Je nachdem, was man bevorzugt, kann man die Dateien nun mittels FTP(s), oder SFTP auf den Server befördern.

Bei mir verbraucht diese minimal Konfiguration derzeit ungefähr 50-70MB Ram und liefert fleißig Dateien aus.

Das Einrichten und Konfigurieren erschien mir wesentlich einfacher und schneller, als beim Apache. Dazu kommt, dass wesentlich weniger Recourcen verbraucht werden.

Es lohnt sich allemal, diesen kleinen effizienten Server zu testen.

