---
title: "Den Seitenaufruf bei WordPress beschleunigen"
tags: ["wordpress"]
published: true
date: "2011-08-14"
---

Eins vorne weg, ich habe leider vergessen, die Benchmarks zu speichern, weswegen ich hier keine Zahlen zum Vergleich anführen kann.

Mir viel in letzter Zeit auf, dass der Seitenaufruf oft sehr langsam von Statten ging, obwohl der Webserver mehr oder minder im Idle Zustand war. Es ging deswegen davon aus, dass das Problem an WordPress selber liegt.

Ich hatte zwar Plugins im nur einstelligen Bereich installiert, dennoch waren zu dem Zeitpunkt bereits 2 Plugins am laufen, die weder die User, noch ich wirklich einsetzen. Beide brachten einige \*.js Dateien mit sich.  
Im ersten Schritt habe ich deswegen alles deaktiviert, was nicht gebraucht wird.  
Schon diese einfache Maßnahme beschleunigte die Seite spürbar. Die ab Benchmark bestätigte dann auch diesen subjektiven Eindruck.

Man hätte nun an dieser Stelle stoppen können. Einmal angefangen, wollte ich aber alles einfach umsetzbare machen, und begann mich genauer zu informieren.

Schnell wurde mir klar, dass ich cachen muss, wenn ich den Seitenaufbau weiter beschleunigen möchte. Ich begann mich deswegen nach vorgefertigten Lösungen umzusehen.

Das erste Cache Plugin beschleunigte die Page zwar etwas, hatte aber so seine Schwächen. Z.B. musste man den Cache per Hand löschen, wenn man einen neuen Artikel geschrieben hatte. Des Weiteren cachte es die SQL Queries nicht.

In einem Forum habe ich dann den Vorschlag gelesen, die beiden Plugins [DB Cache Reloaded Fix](http://www.ivankristianto.com/web-development/programming/db-cache-reloaded-fix-for-wordpress-3-1/1784/) und [Hyper Cache](http://www.satollo.net/plugins/hyper-cache) zusammen einzusetzen. Ich entfernte das alte cache Plugin und installierte die beiden neuen.

Im Anschluss lies ich abermals die ab Benchmark laufen und war positiv überrascht. Im Vergleich zum Zeitpunkt, an dem mir die Seite viel zu langsam vorgekommen ist, waren die Seitenaufrufe um ca. 1/3 schneller geworden. Mit diesem Ergebnis kann ich gut leben.

Es gibt also keinen einzelnen Trick, mit dem man WordPress Beine machen kann. Vielmehr bringt erst die Summe an Maßnahmen einen spür- und messbaren Erfolg.

