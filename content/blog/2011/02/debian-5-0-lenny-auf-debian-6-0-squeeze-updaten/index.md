---
title: "Debian 5 Lenny auf Debian 6 Squeeze updaten"
tags: ["Debian"]
published: true
date: "2011-02-11"
---

Wenn man die Nachrichten zu seiner Distribution verfolgt, hat man sicherlich mitbekommen, dass die Linux Distribution [Debian](http://www.debian.org/) die neue Stable Version 6.0 veröffentlicht hat.  
Man hat nun die Wahl, den PC, bzw. Server neu aufzusetzen, oder sich des komfortablen Debian Updaters zu bedienen.  
Ersteres ist im Grunde genommen unnötig, es sei denn man möchte nun ein anderes Dateisystem einsetzen, oder die Formatierung ändern.

Für alle folgende Befehle und Konfigurationen, sollte man schon eine gewisse Grundkenntnis in Sachen Linux und Debian verfügen. Die einzelnen Configeinträge und Befehle sollten hinterfragt und gegebenenfalls angepasst werden. Jedes System ist unterschiedlich. Manche vorinstallierten Images werden von Hostern auf deren Hardware angepasst. Passt man hier nicht auf, kann es schnell passieren, dass man sein System gar nicht mehr erreiche kann und im schlimmsten Fall das System neu aufsetzen muss. Nur weil die folgenden Befehle und Einstellungen bei mir geklappt haben, heißt es also noch lange nicht, dass sie auch bei euch 1:1 funktionieren werden.

Bevor man mit dem Upgraden beginnt, sollte man überprüfen, welche Kernelversion verwendet wird und diese gegebenen Falls aktualisieren. Kernel, die älter als 2.6.18 sind, werden von Squeeze unterstützt. Um genauer zu sein benötigt das Packet libc6, welches Debian zwingend braucht, einen Kernel, der 2.6.18er oder neueren Reihen. Wenn ihr einen eigenen Rootserver habt, sollte es relativ problemlos möglich sein, diesen auf eine neuere Version zu updaten. Bei Debian Lenny wird als Standartkernel einer der 2.6.26er Reihe verwendet, welcher auf den meisten Systemen laufen sollte.  
Installieren kann man ihn z.B. mit:

```bash
apt-get install linux-image-amd64
```

Je nachdem, welche Bitversion und CPU ihr verwendet, muss man eventuell einen andere Kernelversion wählen. Mit folgendem Befehl kann man nach den verfügbaren Kernelpaketen suchen:  

```bash
apt-cache search linux-image
```

Ist man Mieter eines Vservers hat man bei einigen Virtualisierungsformen keinen Zugriff auf den Kernel. Dies ist z.B. bei Virtuozzo der Fall. In diesem Fall muss der Hoster dafür sorgen, dass der Kernel des Hostsystems, geupgraded wird.  
Stellt ihr fest, dass der Hoster einen für lbc6 zu alten Kernel verwendet, solltet ihr unter keinen Umständen auf Squeeze upgraden, bis euer Hoster den Kernel geupdatet hat.

Bevor man sich an das Systemupgraden macht, update ich vorsichtshalber erst einmal das vorhandene System mit:

```bash
apt-get update && apt-get upgrade && apt-get dist-upgrade
```

Dies ist nicht zwingend erforderlich. Ich gehe nur lieber auf Nummer sicher. Bevor man nun zum Upgraden des System auf Debian Squeeze übergeht, ist es ratsam, von allen wichtigen Dateinen ein Backup zu machen. Auch dies ist nicht zwingend, aber sicher ist sicher.

Nachdem man alle Vorbereitungen abgeschlossen hat, kann man nun zum eigentlichen Upgraden übergehen.  
  
Als erstes editiert man die Datei /etc/apt/sources.list. Bei den allermeisten vorinstallierten Debianimages der Hoster ist diese so eingestellt, dass man die zu verwendende Debianversion expliziet angeben muss. Man muss dementsprechend alle "lenny" Einträge in "squeeze" umändern.  
Damit es keine bösen Überraschungen gibt, tragt am besten auch die non-free Quellen ein. Squeeze enthält in seinen Standardquellen nur noch GNU/GPL und ähnlich lizensierte Software, so dass man für manche Geräte die Treiber aus den non-free Quellen braucht.

Meine Souces.list sieht nach dem Editieren wie folgt aus:

```
# squeeze packages.
deb ftp://ftp2.de.debian.org/debian/ squeeze main contrib non-free
deb http://security.debian.org/ squeeze/updates main contrib non-free

# source packages.  
deb-src ftp://ftp2.de.debian.org/debian/ squeeze main contrib non-free  
deb-src http://security.debian.org/ squeeze/updates main contrib non-free
```

Nun kann man Upgraden, indem man folgende Befehle verwendet:

```bash
apt-get update && apt-get dist-upgrade
```

Die neuen Pakete und Dateien werden automatisch vom, in der /etc/apt/sources.list angegebenen Download Mirror heruntergeladen.  
Das nun ablaufende Upgrade dauert etwas. Man sollte sich also eine Tasse Kaffee, oder Tee hohlen. Man wird im Regelfall ein paar Dialoge beantworten müssen. Um sicherzugehen, dass der Server weiterhin läuft, sollte man bei Nachfragen die alten Configs beibehalten. Dieses Vorgehen ist auch die Vorgehensweise, die Debian einem vorschlägt.

Während des Upgradens wird man auf jeden Fall gefragt werden, ob man die Standardshell in die neue DASH umändern möchte. Die DASH soll wesentlich performanter, als die alte Shell sein. Ich vermisse in ihr aber Dinge wie Autovervollständigung per Tabulator Taste, das Aufrufen des letzten eingegebenen Parameters mittels esc + . und die Möglichkeit mit den Pfeiltasten vorhergegangene Befehle aufzurufen, bzw. in der aktuellen Eingabe zu navigieren. Es kann sein, das dies auch in der DASH geht. Ich hatte noch keine Zeit mich einzuarbeiten und auf die Schnelle keine Lösung für das Problem gefunden.

Des Weiteren werdet ihr zwangsläufig dem Dialog begegnen, mit dem der Bootloader Grub gegen die neue Version von Grub 2 ausgetauscht wird. Hier ist es am besten, den Upgrader die alten Daten importieren zu lassen, so dass es zu keinen Komplikationen mehr kommt.  
Wesentliches Merkmal beim neuen Grub, ist die Konfiguration. Die /boot/grub/menu.lst wird nicht mehr verwendet. Statt dessen wird die /boot/grub/grub.cfg eingesetzt, die man aber nicht manuell bearbeiten sollte. Startparameter werden statt dessen nun in die /etc/default/grub eingetragen. Im Anschluss ruft man update-grub auf, um die /boot/grub/grub.cfg neu generieren zu lassen.  
Die wichtigsten Parameter in dieser Datei:

```
# Default kernel
GRUB_DEFAULT=0
# Wartezeit bis zum starten des Kernels
GRUB_TIMEOUT=5
GRUB_DISTRIBUTOR=`lsb_release -i -s 2> /dev/null || echo Debian`
GRUB_CMDLINE_LINUX_DEFAULT="quiet"
# Zusatzparameter
GRUB_CMDLINE_LINUX="acpi=ht"
```

Nachdem ihr alle Dialoge abgearbeitet habt, und alle Pakete geupgraded wurden, kann man nun noch die Debianversion überprüfen:

```bash
cat /etc/debian_version
```

Die Ausgabe sollte 6.0 sein.

Benutzt man den Debian Kernel und hat das Paket "linux-image-amd64" installiert, wurde mit dem Upgrade der neue Standardkernel aus der 2.6.32er Reihe installiert. Damit dieser läuft, muss man das System mit dem neuen Kernel rebooten.  
Dies kann man mit folgendem Befehl machen:

```bash
shutdown -r now
```

Alternativ sollte auch folgendes gehen:

```bash
reboot
```

Wenn alles glatt gelaufen ist, sollte euer System bald wieder erreichbar sein und den neuen Kernel geladen haben.

