---
title: "WLAN im Home Office mein Setup"
tags: ["WLAN", "Home Office"]
published: false
date: "2020-06-06"
---

Als wir 2017 in unsere neue Wohnung zusammengezogen sind, habe ich mich auf die kommende Bastelei am Netzwerk gefreut.
Der Vermieter hatte CAT-7 Kabel mit Steckdosen in jedem Zimmer und zentralen [Patch Panel](https://de.wikipedia.org/wiki/Patch_panel) installieren lassen.

## Die Herausforderung

In dem Altbau von 1895 wurden zahlreiche Stahlträger verbaut. Die Wohnung ist in die Länge geschnitten.
So liegen, je nach Position 3-4 Wände zwischen dem WLAN Modem und Empfänger.

Erschwerend kommt hinzu, dass das, vom Anbieter gelieferte Modem, ein nicht sonderlich gutes WLAN Modul besitzt.
Direkt neben dem Fernseher platziert, kommt es regelmäßig zu Abbrüchen der Verbindung.

Am gegenüberliegenden Ende der Verbindung ist die WLAN Verbindung öfter weg, als verfügbar.

## Die vermeintliche Lösung

### Setup

Die erste Idee war der weitgehende Verzicht auf Datenübertragung über WLAN. Dazu sollte die WLAN Reichweite durch einen weiteren Access Point erweitert werden.

Das neu angeschaffte [ASUS RT-AC51U Modem](https://www.asus.com/de/Networking/RTAC51U/) wurde neben dem Patch Panel platziert.
Das Modem des Anbieters wurde über den Uplink angeschlossen. Im Folgenden wurde die SSID und Passwort am RT-AC51U in gleicher Weise, wie beim Anbieter Modem konfiguriert.

Der Fernseher per CAT-6 Kabel an das Modem des Anbieters. Der PC geht mit CAT-6 Kabel an die Multimedia Steckdose, welche in letztendlich mit dem RT-AC51U verbindet.

### Ergebnis

Die Geräte, die kabelgebunden sind, haben keinerlei Netzwerkeinbußen. Auch die Internetnutzung am Handy ist weitestgehend frei von Störungen.

Weniger Erfreulich war das gelegentliche Arbeiten aus dem Home Office. Das CAT-6 Kabel herausholen, Adapter ans MacBook und loslegen.
Der VPN Tunnel in das Corporate Network ist stabil. Das Kabel und der Prozess begann mich zu stören.

Der Versuch das WLAN zusammen, mit dem VPN zu nutzen, war nicht sonderlich erfolgreich.
Das gewählte WLAN Setup verfügt über keine Roaming Eigenschaften. Ob man dann am RT-AC51U oder am Anbieter Modem landet, purer Zufall.
Im Ergebnis war der VPN Tunnel so instabil, dass an Arbeiten nicht zu denken war.

## Die Lösung

### Setup

Genervt von den ganzen Problemen habe ich mich entschlossen mit Kanonen auf Spatzen zu schießen.

## Das Ergebnis

