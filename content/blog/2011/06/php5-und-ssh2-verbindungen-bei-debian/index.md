---
title: "PHP5 und SSH2 Verbindungen bei Debian"
tags: ["php"]
published: true
date: "2011-06-01"
---

In manchen Fällen möchte man mit PHP SSH2 Verbindungen herstellen. Die PHP Funktion dazu heißt [ssh2_connect()](http://www.php.net/manual/de/ref.ssh2.php).  
Egal, wie man PHP am laufen hat, sei es per suexec und fcgid, sei es mod_php, oder auf noch andere Weise, die Standardinstallation stellen diese Funktion nicht bereit. Es gibt nun zahlreiche Anleitungen im Netz, die einem sagen, dass man die Pakete libssh2 und die PECL SSH2 auf einem Debian System kompilieren muss.

Pakete selber zu kompilieren ist nicht schädlich. Man muss sich aber bewusst sein, dass man bei Updates diese Pakete jedes mal neu compilieren muss. Ebenso ist es nun Pflicht die News zu diesen Paketen zu verfolgen, um schnell reagieren zu können.

Diesen Aufwand kann man sich bei Debian sparen. Durchsucht man die Paketlisten nach "libssh", sollte man man auf folgende Treffer stoßen:

```bash
apt-cache search libssh
```

> [libssh2-php](http://packages.debian.org/search?suite=default&section=all&arch=any&searchon=names&keywords=libssh2-php) – PHP Bindings for libssh2  
> [libssh2-1](http://packages.debian.org/search?suite=default&section=all&arch=any&searchon=names&keywords=libssh2-1+) – SSH2 client-side library

Debian verfügt also bereits über vorkompilierte Pakete. Diese kann man wie bei gewohnt mit

```bash
apt-get install libssh2-php libssh2-1
```

installieren.

Durch den Einsatz der vorkompilierten Pakete spart man sich das Kompilieren, das Verfolgen der Listen und das Kompilieren bei den manuellen Updates. Man verfolgt, wie bisher die Nachrichten von Debian und updated die Pakete über Debians Paketverwaltungssystem. Dies verbraucht natürlich wesentlich weniger Zeit als das manuelle Kompilieren.

Es zeigt sich wieder einmal, dass man Anleitungen und HowTo´s nicht kopieren und einfügen, sondern sich selber Gedanken machen sollte. Der geringe Mehraufwand einer Paketsuche mittels "apt-cache search modulname" ist nichts im Vergleich dazu, die selber kompilierten Pakete manuell aktuell zu halten.

