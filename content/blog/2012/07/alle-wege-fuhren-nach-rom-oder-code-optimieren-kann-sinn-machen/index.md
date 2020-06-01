---
title: "Alle Wege führen nach Rom, oder Code optimieren kann Sinn machen"
tags: ["sql", "MySQL", "php"]
published: true
date: "2012-07-06"
---

Es gibt das Sprichwort, „Alle Wege führen nach Rom". Es trifft auch auf viele Situationen beim Programmieren zu.

Besonders bei Code, der sich über die Zeit entwickelt hat, schleicht sich gerne etwas ein, dass man wesentlich permanenter gestalten könnte.
Dies möchte ich einmal an Hand des Ziels, die Gesamtanzahl aller Einträge in einer Datenbank zu bestimmen demonstrieren.

Bei der Zeitbestimmung habe ich eine indexiert Tabelle mit einem Primary Key und 2060 Einträgen genommen. Die Abfrage wurde immer 1000 mal wiederholt.

Zur Zeitmessung habe ich eine Schleife geschrieben, mit der alle nachfolgenden Codeschnipsel 1000 mal aufgerufen wurden und im Anschluss die Laufzeit des berechnet wurde.
Den Code kann man sicher auch für eine Ausgabe auf Seiten wie „Diese Seite wurde in X Sekunden generiert" verwenden und sieht folgender Maßen aus:


```php
<?php
list($startMS,$startS)=explode(' ',microtime());
$count=0;
for ($i=0;$i&lt;1000;$i++){
    //...
    $count++;
}
list($stopMS,$stopS)=explode(' ',microtime());
$elapsed=$stopS-$startS.','.$stopMS-$startMS;
echo 'Count ist: '.$count.' Zeit war: '.$elapsed.' Sekunden';
```

Am Anfang hat man sich vielleicht etwas aus der Table anzeigen lassen und dabei mitgezählt. Wenn ich diesen Code 1000 mal Aufrufe dauert es auf meinem kleinen Vserver 19.534067 Sekunden:

```php
<?php
$sql="SELECT * FROM `table`";
$query=$connection->prepare($sql);
$query->execute();
foreach ($query->fetchAll(PDO::FETCH_ASSOC) as $row) {
	$id=$row['id'];
	$value1=$row['column1'];
	$value2=$row['column2'];
	$value3=$row['column3'];
	$count++;
}
```

Irgendwann brauchte man die Daten aus der Tabelle nicht mehr, hat den Code kopiert und nur noch das Mitzählen verwendet.
Der Query wurde zwar etwas eingeschränkt, damit hatte es sich dann aber auch. Dies dauert nur noch 4.661913 Sekunden, was schon wesentlich schneller ist:

```php
<?php
$sql="SELECT `id` FROM `table`";
$query=$connection->prepare($sql);
$query->execute();
foreach ($query->fetchAll(PDO::FETCH_ASSOC) as $row) {
    $count++;
}
```

Zu einem späteren Zeitpunkt schaut man dann über seinen Code und realisiert, dass man doch besser gleich die Methode der DB Anbindungen nutzen könnte, um die Ergebnisse zu zählen.
Z.B. bei __PDO__ __->countRows();__ und bei __mysql_connect()__ __row_count()__. Der Code ist nicht nur kürzer, er brauchte auch nur noch 0.052255 Sekunden um ausgeführt zu werden:

```php
<?php
$sql="SELECT FROM `id` FROM `table`";
$query=$connection->prepare($sql);
$query->execute();
$count=$count+$query->rowCount();
```

Alle obigen Änderungen haben gemeinsam, dass man im Wesentlichen nur anderes mit dem Ergebnis der Datenbankabfrage umgeht, weil der Query ja so schön funktioniert und man ihn nicht umbauen möchte.
Dabei geht es von der SQL Seite her viel einfacher und ressourcensparender in 0.044995 Sekunden:

```php
<?php
$sql="SELECT COUNT(*) AS `amount` FROM `table`";
$query=$connection->prepare($sql);
$query->execute();
$count=$count+$query->fetchColumn();
```

Reduziert auf eine Column ging es derart schnell, dass die Zeitmessung nicht mehr möglich war und mir negative Werte für die Laufzeit ausgegeben worden sind:

```php
<?php
$sql="SELECT COUNT(`id`) AS `amount` FROM `table`";
$query=$connection->prepare($sql);
$query->execute();
$count=$count+$query->fetchColumn();
```

Alle Beispiele sind funktionierende Lösungen. So lange man nur wenige Inhalte in seiner Datenbank hat und diese nicht chronisch überlastet ist, wird es für den Anwender keine spürbaren Unterschiede geben.
Sobald aber die Tabelle größer wird und oder die Zugriffszahlen steigen, ist man eventuell gezwungen, seinen Code zu optimieren, um weiterhin eine schnelle Webseite zu haben.
Die Messungen beweisen deutlich, dass man hin und wieder Codeschnippsel aus seiner Codekiste vor dem Kopieren noch einmal überdenken sollte, bevor man diese einfach kopiert.
