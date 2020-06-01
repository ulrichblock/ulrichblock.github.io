---
title: "WordPress unleashed: Testsystem"
tags: ["wordpress"]
published: true
date: "2014-09-09"
---

Nachdem wir uns das Konzept überlegt haben, geht es daran eine lokale Testumgebung aufzusetzen.

### Testsystem

Damit man eine Referenz für die späteren Load Messungen hat, als erstes die Spezifikationen des Testsystems. Es ist eine, mittels [Oracle Virtualbox](https://www.virtualbox.org/) erstellte, VM, auf der das Betriebssystem Linux Debian 7 installiert wurde. Sie hat zwei Kerne eines Core i5-3570k @3,4GHz und 4096 MB Ram zur Verfügung. Die Daten der VM werden auf einer Seagate Barracuda 7200.12 500GB (ST3500418AS) gespeichert.

Im Laufe der Installation und Konfiguration werden wir 2 Vhosts erstellen. Einer als Referenz, der WordPress mittels PHP-FPM ausliefert, und ein zweiter, der unser "produktiver" HHVM betriebener wird. Damit man eine einfache Konfiguration hat, verzichte ich auf DNS im LAN und starte die VM mit 2 Netzwerkadaptern.

### Zweiten Netzwerksadapter konfigurieren

Dieser Schritt ist optional. Die Konfiguration erfolgt ausschließlich, damit ich besser Testen kann. Zum Aktivieren der zweiten Schnittstelle der VM bei Debian bearbeite ich die Datei **/etc/network/interfaces**  

```
# This file describes the network interfaces available on your system
# and how to activate them. For more information, see interfaces(5).

# The loopback network interface  
auto lo  
iface lo inet loopback

# The primary network interface  
allow-hotplug eth0  
iface eth0 inet dhcp

# Secondary network interface  
allow-hotplug eth1  
iface eth1 inet dhcp
```

Danach starte ich den Server neu

```bash
shutdown -r now
```

### Debian updaten

Als Startpunkt gehe ich davon aus, dass Debian auf dem System bereits installiert wurde. Um Probleme beim Installieren der Pakete zu vermeiden, wird der erste Arbeitsschritt auf dem System das Aktualisieren selbiges sein. Dafür führen wir als **root** aus:

```bash
apt-get update && apt-get upgrade && apt-get dist-upgrade
```

___
Weiter geht es mit [WordPress unleashed: LEMP Stack](/wordpress-unleashed-lemp-stack/ "Wordpress unleashed: LEMP Stack")

### Alle Teile dieser Serie

### Alle Teile dieser Serie

- [WordPress unleashed: Konzept](/wordpress-unleashed-konzept/ "Wordpress unleashed: Konzept")
- [WordPress unleashed: Testsystem](/wordpress-unleashed-testsystem/ "Wordpress unleashed: Testsystem")
- [WordPress unleashed: LEMP Stack](/wordpress-unleashed-lemp-stack/ "Wordpress unleashed: LEMP Stack")
- [WordPress unleashed: Datenbank + WordPress](/wordpress-unleashed-datenbank-wordpress/ "Wordpress unleashed: Datenbank + WordPress")
- [WordPress unleashed: Memcached + Cachify](/wordpress-unleashed-memcached-cachify/ "Wordpress unleashed: Memcached + Cachify")
- [WordPress unleashed: WordPress unleashed: Autoptimize JS + CSS](/wordpress-unleashed-autoptimize-js-css/ "Wordpress unleashed: WordPress unleashed: Autoptimize JS + CSS")
- [WordPress unleashed: Elasticsearch](/wordpress-unleashed-elasticsearch/ "Wordpress unleashed: Elasticsearch")
- [WordPress unleashed: WordPress Plugins](/wordpress-unleashed-wordpress-plugins/ "Wordpress unleashed: WordPress Plugins")
- [WordPress unleashed: Performance Tests](/wordpress-unleashed-performance-tests/ "Wordpress unleashed: Performance Tests")
- [WordPress unleashed: Nginx absichern](/wordpress-unleashed-nginx-absichern/ "Wordpress unleashed: Nginx absichern")

