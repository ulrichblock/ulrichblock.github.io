---
title: "Zip Archiv mit PHP rekursiv entacken"
tags: ["php"]
published: true
date: "2012-01-01"
---

Ich wünsche allen Lesern ein frohes neues Jahr.

Zum neuen Jahr möchte ich euch ein kleines PHP Skript zur Verfügung stellen, mit dem man ein Zip Archiv rekursiv auf dem Webspace entpacken kann.

```php
$zielordner='entpacken/';
$archivname='archiv.zip';
$zo=@zip_open($archivname);
// Wenn das Archiv geöffnet werden konnte, weitermachen
if (is_resource($zo)) {
	// Den Inhalt in einer While Schleife durchgehen
	while ($ze=zip_read($zo)) {
		// Den Namen von der Datei, oder Ordner bestimmen.
		$name=zip_entry_name($ze);
		// Den Eintrag öffnen und mittels Regex überprüfen, ob es sich um eine Datei handelt.
		$zeo=zip_entry_open($zo,$ze,'r');
		if (preg_match('/^(.*)\.[\w]{1,}$/',$name)) {
			// Den Ordner, bzw. die Unterordner bestimmen, in dem sich die Datei befindet
			$folders=preg_split('/\//',$name,-1,PREG_SPLIT_NO_EMPTY);
			$count=count($folders)-1;
			$i=0;
			unset($checkfolder);
			while ($i< $count) {
				if (isset($checkfolder)) {
					$checkfolder .='/'.$folders[$i];
				} else {
					$checkfolder=$folders[$i];
				}
				$i++;
			}
			// Wenn es sich um einen Unterordner handelt und er nicht existiert, diesen erstellen.
			if (isset($checkfolder) and $checkfolder!='' and !is_dir($zielordner.$checkfolder) and !is_file($zielordner.$checkfolder)) {
				@mkdir($zielordner.$name);
			}
		// Falls der Regex ergibt, dass es sich um einen Ordner handeln muss, überprüfen, ob er existiert und gegebenen Falls erstellen
		} else if (!is_dir($zielordner.$name)) {
			@mkdir($zielordner.$name);
		}
		// Wenn es sich um eine Datei handelt, einen File Handler für die zu entpackende Datei öffnen und den Inhalt der gepackten Datei in diesen Handler Schreiben
		if (preg_match('/^(.*)\.[\w]{1,}$/',$name) and $zeo) {
			// File Handler öffnen
			$nf=fopen($zielordner.$name,'w');
			// Dateigröße bestimmen
			$fz=zip_entry_filesize($ze);
			// Den Inhalt der gepackten Datei in den Handler schreiben
			fwrite($nf,zip_entry_read($ze,$fz),$fz);
			// Handler schließen
			zip_entry_close($ze);
			fclose($nf);
		}
	}
	// Archiv schließen
	zip_close($zo);
}
```

