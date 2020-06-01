---
title: "Alle Keys bei Redis droppen"
tags: ["Redis"]
published: true
date: "2013-09-08"
---
Im letzten Beitrag hatte ich beschrieben, wie ich den Blog mittels Redis cache.

Ich hatte noch weiter gebastelt und das alte Syntax Highlighting Plugin, das seit ca. 2 Jahren nicht mehr weiter entwickelt wird durch ein anderes ersetzt. Zu diesem Zeitpunkt war der Cache schon warm gelaufen und es befanden sich bereits ein paar hundert Seiten im Cache. Da ich nicht warten wollte, musste ich den gesamten Inhalt droppen.

Das Vorhaben habe ich mit einer kleinen Bash Schleife gelöst. Wie so oft, wird die Ausgabe eines Programms mittels piping aufbereitet und dann in eine *while read* Schleife übergeben. In der Schleife werden dann sämtliche Keys nach und nach gelöscht:

```bash
redis-cli keys "*" | awk '{print $1}' | while read key; do redis-cli del $key; done
```