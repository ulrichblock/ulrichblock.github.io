---
title: "Vorschlag einer genaueren Protection Mode Richtlinie der ESL"
tags: ["ESL", "game-server", "security"]
published: true
date: "2012-01-07"
---

Möchte man als Hoster bei der [ESL](http://esl.eu) als zertifizierter Hoster geführt werden, muss er seinen Kunden ein Webinterface bereitstellen, dass den genannten *Protection Mode* unterstützt. beim Zulassungsverfahren wurde bisher eine PDF versandt, die nur recht Wage aufgelistet hat, welche Maßnahmen man ergreifen kann, damit der Server als sicher eingestuft wird. Das man hier keine genauen Vorschriften machen kann, was genau, auf welche Art umzusetzen ist, liegt in der Natur der Sache. Jedes Interface arbeitet anders. Das die Vorgabe sehr wage sind, kann man der ESL deswegen nicht vorwerfen. Es ist somit die Verantwortung der Webinterface Entwickler eine Lösung für ihren Spezialfall zu schaffen.

Was hingegen teilweise auf die Kappe der ESL geht, ist der Umstand, dass sich über mögliche Angriffswege ausgeschwiegen wurde. Nicht jeder Coder kennt sich in den Eigenarten einzelner Gameserver aus, oder verfolgt die Diskussionen zu diesen. Wenn er sich nur auf die ESL verlässt und auf den Rat von Dritten verzichtet, wird er wichtige Dinge übersehen. Wenn er jedoch Hinweise Dritter bewusst übergeht, ist eine fehlerhafte Umsetzung alleinig ihm anzulasten.

Da es bis heute keine zusammenfassende Auflistung über mögliche Angriffswege und Abwehrmaßnahmen gibt, habe ich nun im Rahmen meiner ehrenamtlichen Tätigkeit bei der ESL einen Vorschlag für eine Richtlinie erarbeitet und diese an die ESL weitergeleitet. Ob und in welcher Form mein Vorschlag übernommen wird, ist Sache der ESL.

Auch unabhängig vom Protection Mode ist es sicherlich interessant, über welche Wege Kunden ihre Server anderes betreiben können, als vom Anbieter vorgesehen.

Viele der Punkte gibt es schon seitdem es Gameserver gibt und sind versierten Anwendern ebenso lange bekannt. Dennoch werden sie leider immer wieder übersehen.

Im folgenden nun mein Vorschlag einer Richtlinie für den Protection Mode

### Ziel

Der Server, der unter der angegebenen Adresse (IP:Port) erreicht wird, darf außer den Servertools eslplugin und zblock keine weiteren Servertools geladen haben.

### Angriffswege , die nicht funktionieren dürfen

#### 1. Upload in das geschütze Verzeichnis

Der User darf nicht in der Lage sein, Servertools in die Verzeichnisse des geschützen Server zu laden und von dort auszuführen.

#### 2. plugin_load

Das Ausführen des Servercommands "plugin_load" muss verhindert werden. Dabei ist auch zu beachten, das die \*.so Dateien des Servers manipuliert werden können, so dass der Befehl unter dem Beispielnamen "plg1n_load" läuft. Über das deaktivieren des Befehls hinaus, muss deswegen sicher gestellt sein, dass der Benutzer die \*.so des Servers nicht verändern kann.

#### 3. Änderung der ausführbaren Dateien

Mittels eines FTP Client und Editor können Änderungen an den Startskripten , ausgeführten Binaries und den \*.so in den bin/ Ordern der Server gemacht werden. Des Weiteren kann man diese Änderungen auch mit Servertools wie Sourcemod und Eventscript herbeiführen.  
Diese Veränderungen müssen sowohl beim geschützten, als auch ungeschützen Server entweder rückgängig, oder von vornherein verhindert werden.

#### 4. (Reverse) Shells

Manche Servertools können Shells bereitstellen, mit denen man Prozesse vom Gameserverprozess losgelöst starten kann. Diese Prozesse müssen beim Start des Protected Modes beim normalen User beendet werden.

#### 5. Folgen von Punkt 3 und 4

Ein nach den Punkt 3 oder 4 kompromitierter ungeschützter Server kann auch durch eine Firewall hindurch eine Reverse Shell aufbauen. Wenn diese beim Start des Protected Modes nicht erkannt wird, kann man die Adresse des geschützten Servers mit einem ungeschützten belegen.  
Eine Belegung der Adresse kann ebenso mit Endlosschleifen und Cronjobs erreicht werden.  
Es müssen deswegen alle ungewollten Cronjobs und Prozesse beim Benutzer des ungeschützten Servers beendet werden, bevor der protected Server gestartet wird. Es darf nicht möglich sein, dass die Adresse voin einem anderen Prozess, als dem geschützten benutzt wird.

### Mögliche Maßnahmen

Folgende Maßnahmen müssen nicht alle umgesetzt werden. Sie sind lediglich eine Liste von Dingen, mit denen man das Ziel erreichen kann.

1. Strenge Chmods
2. Zugriffseinschränkungen und Dateifilter am FTP Server
3. Prozess und Port Kontrolle
4. Verbieten des Befehls plugin_load
5. Überprüfung kritischer Serverdateien vor jedem Serverstart sowohl im Protected Mode als auch im Unprotected Mode
6. Ohne Differenzierung alle Prozesse des ungeschützten Users beim Start des Protection Modes killen
7. Die Server mit unterschiedlichen Usern starten. Dabei sollte unter keinen Umständen ein User mit Root, oder Sudo Rechten den Prozesse ausführen.
8. Für jeden Gameserverprozess ein eigenes Chroot

### Zusätzlicher Hinweis

Es gibt keine wirksamen Maßnahmen gegen Shellplugins. Im Extremfall könnte dies ausgenutzt werden, um über veralterte Pakete oder Kernel Rootrechte erlangt werden. Es ist deswegen darauf zu achten, dass der Server nicht über bekannte Exploits von innen angreifbar ist.

