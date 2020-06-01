---
title: "Kurze Downtime"
tags: ["Apache2"]
published: true
date: "2011-07-27"
---

Nachdem mein Hoster den Kernel auf eine mit Debian 6 kompatible Version aktualisiert hat, habe ich eben meinen Server auf Debian 6 aktualisiert.

Wenn ich gefragt wurde, ob ich meine alten Configs beibehalten wolle, habe ich immer mit ja geantwortet, um Einstellungen nicht wiederholen zu müssen.

Mal abgesehen vom MYSQL Server, der nun in der Version 5.1 ans Stelle von 5.0 vorliegt, hat dies auch wunderbar funktioniert.  
Ich hätte nun den Fehler suchen können, wollte aber eine schnelle Lösung. Der einfachste Weg ist es, die alte Config mit der aus dem Debian Paket zu überschreiben:

> cp /etc/mysql/my.cnf.dpkg-dist /etc/mysql/my.cnf

Als ich den Mysql Server danach erfolgreich gestartet habe, gab es noch folgenden Fehler:

> Could not create the upgrade info file ‚/var/lib/mysql/mysql_upgrade_info‘ in the MySQL Servers datadir, errno: 13

Dieser wurde dadurch verursacht, das die Datenbanken noch im 5.0 Schema vorlagen. Um sie auf den aktuellen Stand zu bringen kann man folgenden Befehl mit Rootrechten ausführen:

> mysql_upgrade -u root -h localhost –force –verbose -p

Nachdem ich diese Probleme beheben konnte, konnte ich den Mysql Server wieder starten und meine Seite war wieder erreichbar.

