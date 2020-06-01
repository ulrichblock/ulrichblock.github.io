---
title: "DELETE FROM mit INNER JOIN"
tags: ["sql"]
published: true
date: "2012-12-31"
---

Bei relationalen Datenbanken sind die Daten oft über verschiedene Tabellen verstreut. Untereinander werden sie durch IDs referenziert. Um die Daten mit nur einem Query abzufragen, benutzt man JOINs.

Benutzt man einen LEFT JOIN:

```sql
SELECT t1.*,t2.* FROM `table1` t1 LEFT JOIN `table2` t2 ON t1.`table2ID`=t2.`id`
```

geht so lange alles gut, solange es keinen Eintrag in der table2 zu der t1.`table2ID` gibt. In in diesem Fall erhält man die Werte für die Columns der table 1 und NULL Werte für die Columns der table2.

Möchte man Probleme in dem Script vermeiden, dass das das Ergebnis des Querys nutzt, sollte man einen INNER JOIN nutzen:

```sql
SELECT t1.*,t2.* FROM `table1` t1 INNER JOIN `table2` t2 ON t1.`table2ID`=t2.`id`
```

Nun werden nur Ergebnisse angezeigt, bei denen erfolgreich gejoint werden konnte.

Das eigentliche Problem des Schiefstands in der Datenbank ist damit aber nur umgangen. Entstehen tut er meist durch Bugs, oder durch Updates, die die Datenstruktur verändern.

Finden kann man die verwaisten Einträge mit:

```sql
SELECT t1.`id` FROM `table1` t1 LEFT JOIN `table2` t2 ON t1.`table2ID`=t2.`id` WHERE t2.`id` IS NULL
```

Wenn man noch nicht viel mit JOINs gearbeitet hat, wird man nun folgendes versuchen, was einen Syntax Fehler ausgeben wird:

```sql
DELETE FROM `table1` t1 LEFT JOIN `table2` t2 ON t1.`table2ID`=t2.`id` WHERE t2.`id` IS NULL
```

Möchte man das DELETE Statement zusammen mit einem JOIN ausführen, sollte man folgenden Syntax benutzen:

```sql
DELETE t1.* FROM `table1` t1 LEFT JOIN `table2` t2 ON t1.`table2ID`=t2.`id` WHERE t2.`id` IS NULL
```

