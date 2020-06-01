---
title: "Rekursives löschen, oder rm -r mit PHP"
tags: ["php"]
published: true
date: "2012-01-02"
---

Die Dateifunktionen zum Löschen von Ordnern und Dateien sind bei PHP sehr limitiert. **unlink();** kann eine Datei und **rmdir();** einen Ordner löschen. Die Möglichkeit des rekursiven Löschens ist nicht gegeben. Des Weiteren kann man Ordner nur dann löschen, wenn diese bereits leer sind.  
Ein **rm -r**, wie auf der Linux Shell ist somit nicht möglich.

Man könnte nun mit **exec();** arbeiten. Diese Funktion wird aber von vielen Hostern als Sicherheitsrisiko eingestuft. Deswegen ist sie zu Recht deaktiviert. Wenn die Funktion zugelassen ist, kann man mit PHP **rm -r** aufrufen:

```php
exec("rm -r /Absoluter/Pfad/Zum/löschenden/Ordner/");
```

Wenn die **exec();** Funktion nicht zur Verfügung steht, kommt man nicht darum herum eine Funktion zu schreiben, die die Funktionsweise von **rm -r** nachbildet.  
Die eigene Funktion muss den Ordnerinhalt auflisten und für jedes Element der Liste überprüfen können, ob es sich um eine Datei, oder einen Ordner handelt. Wenn es sich um eine Datei handelt, soll die Datei mit der PHP Funktion **unlink();** gelöscht werden. Wenn es sich um einen Ordner handelt, sollte die Funktion sich selber so lange selber aufrufen, bis sie in keinen weiteren Unterordner herabsteigen und dabei die Dateien aus den Unterordnern löschen kann.

```php
function rmr($dir) {
	// Wenn der Input ein Ordner ist, dann Überprüfung des Inhaltes beginnen
	if (is_dir($dir)) {
		// Ordnerinhalt auflisten und jedes Element nacheinander überprüfen
		$dircontent=scandir($dir);
		foreach ($dircontent as $c) {
			// Wenn es sich um einen Ordner handelt, die Funktion rmr(); aufrufen
			if ($c!='.' and $c!='..' and is_dir($dir.'/'.$c)) {
				rmr($dir.'/'.$c);
			// Wenn es eine Datei ist, diese löschen
			} else if ($c!='.' and $c!='..') {
				unlink($dir.'/'.$c);
			}
		}
		// Den nun leeren Ordner löschen
		rmdir($dir);
	// Wenn es sich um eine Datei handelt, diese löschen
	} else {
		unlink($dir);
	}
}
// Aufrufen der Funktion
rmr('Zu/Löschender/Ordner');
```

