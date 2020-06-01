---
title: "libapache2-mod-fcgid und phpMyAdmin"
tags: ["sql", "Apache2", "phpMyAdmin"]
published: true
date: "2010-05-31"
---

Eine Möglichkeit, PHP Scripte nicht mit dem Webserveruser, sonderm mit dem Besitzer der Datei auszuführen, bietet das Modul FCGID für den Apache2 Server. Bei Debian lautet der Packetname libapache2-mod-fcgid.

Wie man ein solches System eingerichtet, kann man z.B. [hier](http://www.christophfischer.com/linux/12-apache/47-apache-server-mit-php-fastcgi-und-debian-50-lenny) und [hier](http://wiki.hetzner.de/index.php/Apache_PHP5_fcgi_und_SuExec) nachlesen.

Ein Nachteil ist, dass Webanwendungen, wie phpMyAdmin, die auch über apt oder aptitude bezogen werden, nur mit Mehraufwand laufen. Dies liegt daran, dass sie erwarten, dass der Benutzer www-data die Webseiten ausliefert. Dies ist durch FCGID aber gerade nicht mehr der Fall.

Man hat jetzt 2 Möglichkeiten: Entweder man installiert phpMyAdmin manuell, oder man passt die über apt oder aptitude bezogene Installation an.

Bei der zweiten Variante legt man einen weiteren Vhost in dem Ordner /etc/apache2/sites-available an:

```bash
<virtualhost *:80>
    ServerAdmin me@example.com
    ServerName pma.example.com
    ServerAlias www.pma.example.com
    SuexecUserGroup pma pma
    AddHandler fcgid-script .php
    DocumentRoot /usr/share/phpmyadmin
    DirectoryIndex index.htm index.html index.php

    Options FollowSymLinks Includes
    AllowOverride None
    
    <directory /usr/share/phpmyadmin>
        Options Indexes MultiViews FollowSymLinks Includes +ExecCGI
        FCGIWrapper /var/www/pma/fcgi/fcgi-starter .php
        Order allow,deny
        allow from all
    </directory>

    ErrorLog /var/www/pma/logs/error.log
    LogLevel warn
    CustomLog /var/www/pma/logs/access.log combined
    ServerSignature Off
</virtualhost>
```

und aktiviert diesen mit a2ensite "vhostname" und `/etc/init.d/apache2 reload`.  
Weshalb auch immer, der Include für das Blowfish Passwort wird nicht richtig ausgeführt. Man kommentiert in der /usr/share/phpmyadmin/config.inc.php den Include am besten aus und schreibt den einzigen PHP Befehl aus dieser Datei direkt in die config.inc.php.

```php
// include('/var/lib/phpmyadmin/blowfish_secret.inc.php');
$cfg['blowfish_secret'] = 'HierDeinBlowfishPasswort';
```

Macht man dies nicht erhält man diesen Fehler bei der Login Page:

`Ab sofort muss ein geheimes Passwort zur Verschlüsselung in der Konfigurationsdatei gesetzt werden (blowfish_secret).`

Hat man alle Schritte befolgt, sollte man unter dem eingestellten Vhost Zugriff auf phpMyAdmin haben.

