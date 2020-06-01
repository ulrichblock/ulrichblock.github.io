---
title: "WLAN im Home Office mit kleiner Wohnung"
tags: []
published: false
date: "2020-05-30"
---

Vor über einem Jahr haben mich Bekannte wegen WLAN Problemen im Home Office angesprochen.
Sie wohnten zu diesem Zeitpunkt in der Stadt in einer 2 Zimmer, Küche und Bad Wohnung.
Das mittlere Zimmer diente als Wohnzimmer. Hier befand sich auch das Modem ihres Anbieters.

## Das Problem

Sobald von dem Nachbarzimmer aus gearbeitet wurde, ist der VPN Tunnel in das Corporate Network regelmäßig abgebrochen.
Das Gleiche für das WLAN als solches. Dabei lief das WLAN manchmal weiter, der Tunnel war aber weg.
Die notwendige Bandbreite war sowohl vom Internet Anbieter, als auch VPN Server gegeben.

Bei einem Speed Test konnte man deutlich sehen, dass nicht viel von der möglichen Bandbreite ankommt.

## Die Ursache

Es lag nur eine Mauer zwischen dem Gerät und dem Arbeitsplatz. Über CAT-5 Kabel konnte aus dem Wohnzimmer heraus problemfrei gearbeitet werden.
Über WLAN gab es auch hier Ausfälle, wenn auch weniger.

Der Verdacht, dass die WLAN Funktion des Modems die Ursache ist, lag also nahe. Insbesondere, da in [meinem Setup](/wlan-im-home-office-mein-setup) mit dem gleichen Gerät desselben Anbieters ähnliches auch ohne VPN aufgetreten ist.

## Die Lösung

Von dem ersten Versuch in meinem Setup gab es noch das, für die Größe meiner Wohnung unzureichende, ausrangierte [ASUS RT-AC51U Modem](https://www.asus.com/de/Networking/RTAC51U/).
Es ist nichts Besonderes und erlaubt eine eigene SSID für 5 GHz und 2.4 GHz zu verwenden.
An dessen Stelle hätte man auch so gut wie jedes andere aktuelle Modem im 30 - 50€ Bereich verwenden können.

Als erstes haben wir das WLAN über die Admin Oberfläche des Anbieter Modems deaktiviert.
Dann wurde das RT-AC51U Modem einem CAT-5e Kabel an das Modem des Anbieters angeschlossen und die Geräte nebeneinander positioniert.

Nun der wesentliche Schritt. Die Konfiguration des SSIDs am RT-AC51U Modem.
Über dessen Admin Oberfläche wurde sowohl die SSID für 2.4 GHz, als auch 5GHz auf den Namen der SSID vom Anbieter Modem gesetzt.
Auch das Passwort wurde übernommen.

Durch die Übernahme von SSID und Passwort haben sich alle Geräte von selber verbunden. Es war keine weitere Konfiguration erforderlich.

## Das Ergebnis

Beim Speed Test per Kabel, mit WLAN vom Wohnzimmer, mit WLAN im Nachbarzimmer konnte kein Unterschied mehr festgestellt werden.
Über alle Verbindungsarten kann die volle Bandbreite des Internetanbieters genutzt werden.

Das VPN in dieser Situation über ein einfaches "es geht" hinaus zu testen, war nicht möglich. In den folgenden Wochen hat es laut Bekannten, keine mehr gegeben.

Erst als mit Corona/COVID-19 alle ins Home Office mussten, kam die Frage auf, warum das VPN jetzt wieder so instabil sei.
Hier war die Ursache mangelnde Kapazitäten bei der VPN Verbindung auf Server Seite. Nichts, was man an seinem Home Office ausgleichen kann.
