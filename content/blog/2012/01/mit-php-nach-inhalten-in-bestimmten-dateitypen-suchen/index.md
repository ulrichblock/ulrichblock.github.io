---
title: "Mit PHP nach Inhalten in bestimmten Dateitypen suchen"
tags: ["php"]
published: true
date: "2012-01-16"
---

Ich wurde heute von jemanden angeschrieben, bei dem über einen Exploit eine umfangreiche PHP Shell eingeschleust wurde. Das Einfallstor war ein Uploadskript, welches eigentlich für Zip Archive gedacht war. Dieses Skript hat leider nicht geschaut, was wirklich hochgeladen wird.

Dank strenger Chmods war der PHP User sehr eingeschränkt. Durch den Einsatz von disable_functions in der php.ini war es dem PHP User weder möglich, Systembefehle auszuführen, noch Sockets zu öffnen. Aus diesem Grund konnte nur Schaden bei der betroffenen Webseite selber angerichtet werden. Es war zum Beispiel möglich sämtliche Dateien auszulesen und zu manipuliert. Des Weiteren ist es sehr wahrscheinlich, dass der Inhalt der Datenbank sich in den Händen des Angreifers befindet.

Da es sich um einen angemieteten Webspace handelt, wäre es nun extrem aufwendig gewesen, alle Dateien per Hand nach Manipulationen zu durchsuchen. Ich wurde deswegen gebeten, ein PHP Skript zu schreiben, das diese Aufgabe für den Betroffenen erledigt.

Das Ergebnis sind diese beiden Functions:

```php
<?php
// Function, die die einzelnen Dateien überprüft.
function checkfile($file) {
	// Der Inhalt dieser Dateitypen wird überprüft.
	$types=array('php', 'php4', 'php5', 'txt', 'html', 'htm');
	// Nach diesem Inhalt wird in den Dateien gesucht.
	$contents=array('Suchbegriff', 'Suchausdruck');
	$found=array();
	// Namen der ausführenden Datei und der zu durchsuchenden bestimmen.
	$thisfile=preg_split('/\//', $_SERVER['SCRIPT_FILENAME'], -1, PREG_SPLIT_NO_EMPTY);
	$filename=preg_split('/\//', $file, -1, PREG_SPLIT_NO_EMPTY);
	// Den Dateityp bestimmen.
	$filetype=preg_split('/\./', $file, -1, PREG_SPLIT_NO_EMPTY);
	// Wenn es sich nicht um die ausführende Datei handelt und der Typ in der Dateiliste ist, einen Filehandler für die Datei öffnen.
	if ($thisfile[count($thisfile)-1]!=$filename[count($filename)-1] and in_array($filetype[count($filetype)-1], $types)) {
		// Die Datei so lange auslesen, bis das Ende erreicht wurde.
		$fp= @fopen($file, 'r');
		// Wenn der Filehandler erfolgreich geöffnet werden konnte, die Datei durchsuchen.
		if ($fp) {
			while (!feof($fp)){
				// Alle Suchbegriffe durchgehen und wenn einer gefunden wurde, diesen Treffer dem Trefferarray hinzufügen.
				foreach ($contents as $content) {
					if(strpos(strtolower(fgets($fp)), strtolower($content)) !== false) $found[]=$content;
				}
			}
			// Dateihandler schließen
			fclose($fp);
		}
	}
	unset($fp);
	// Wenn Suchbegrife gefunden wurden, diese als String ausgeben. Anderenfalls mit false antworten.
	if (count($found) == 0) return false;
	else return implode(', ',$found);
}
// Das angegeben Verzeichnis und alle Unterverzeichnisse durchsuchen.
// Wenn kein Verzeichnis angegeben wird, dann im aktuellen beginnen.
function listcontent($dir='.') {
	// Wenn es sich um ein Verzeichnis handelt, den Inhalt listen.
	if (is_dir($dir)) {
		$dircontent=scandir($dir);
		// Den gesamten Inhalt des Verzeichnisses durchgehen.
		foreach ($dircontent as $c) {
			// Wenn es sich um ein Verzeichnis handelt, die Function listcontent() aufrufen;
			if ($c!='.' and $c!='..' and is_dir($dir.'/'.$c)) {
				listcontent($dir.'/'.$c);
			// Wenn es sich um eine Datei handelt und die checkfile() Function einen String zurückgibt, einen Suchtreffer ausgeben.
			} else if ($c!='.' and $c!='..' and checkfile($dir.'/'.$c)) {
				echo 'Found file: '.$dir.'/'.$c.' with content: '.checkfile($dir.'/'.$c).'
';
			}
		}
	// Wenn es sich um eine Datei handelt und die checkfile() Function einen String zurückgibt, einen Suchtreffer ausgeben.
	} else if (checkfile($dir.'/'.$c)) {
		echo 'Found potential bad file: '.$dir.'/'.$c.' with content: '.checkfile($dir.'/'.$c).'
';
	}
}
// Die Suche starten.
echo "Starting search
";
listcontent();
echo "Search finished
";
?>
```

