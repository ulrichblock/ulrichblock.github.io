---
title: 'Userinput Klasse'
tags: []
published: true
date: "2012-04-09"
---

Die Grundregel, dass man keinem Userinput vertrauen soll, wird jedem ein Begriff sein.

Zum Validieren in PHP 5.2 und neuer habe ich mir eine Klasse geschrieben, die folgendermaßen arbeitet:  
Im ersten Schritt werden die Superglobals in ein Object übergeben und dabei escaped bzw. automatisiertes Escapen rückgängig gemacht. Nach der Übergabe werden die Superglobals gelöscht, da ihr Inhalt nicht mehr benötigt wird.

Im folgenden kann der vorherige Inhalt der Superglobals zusammen mit einer Methode aufgerufen werden, die den Inhalt überprüft. Nur wenn die Überprüfung erfolgreich war, wird der Userinput zurückgegeben. Ist die Überprüfung erfolglos, ist die Rückgabe *„false“*

Bei dem Aufruf der Funktion gibt man an, welchen Key aus welcher Superglobal erwünscht ist. Wenn die Methode auch auf Länge überprüfen kann, dann muss man auch noch die Länge angegeben werden.  
Mit dem ersten Wert sagt man, welcher Key gewünscht ist, mit dem zweiten Wert sagt man, von welcher der Superglobals der Wert genommen werden soll.

Falls ihr zusätzliche Methoden, oder reguläre Ausdrücke habt, die nützlich sein könnten, dann könnt ihr mir sie gerne mitteilen. Ich werde die Klasse dann damit erweitern.

Die Klasse ist unter diesem [Link](./user_input_class.zip) downloadbar.

Die Klasse kann folgendermaßen verwendet werden:

```php
<?php

include('validator_class.php');
// Die Superglobals leeren, nachdem sie in das Object übergeben worden sind.
$ui=new ValidateUserinput($_GET,$_POST,$_SERVER,$_REQUEST,$_ENV);
unset($_GET);
unset($_POST);
unset($_SERVER);
unset($_REQUEST);
unset($_ENV);

// Ab hier würde dann der restliche PHP Code beginnen.
// Die einzelnen Werte werden dadurch aufgerufen, dass man mit der Funktion bestimmt, auf was der Wert überprüft werden soll.
// Mit dem ersten Wert sagt man, welcher Key gewünscht ist, mit dem zweiten Wert sagt man, von welcher der vorherigen Superglobals der Wert genommen werden soll.
// Bei dem Beispielaufruf datei.php?w=test würde test ausgegeben werden
if ($ui->smallletters('w','get')) echo $ui->smallletters('w','get');
else echo 'Nicht validiert';
?>
```

Die Klasse sollte auch bei Projekten mit mehreren Mitarbeitern helfen, bei denen man einen einheitlichen Codestandard und Sicherheit erreichen möchte. Jeder wird gezwungen, validierten Input zu verwenden. Konstrukte, dass man GET und POST Werte direkt in SQl Querys schreibt, sollten demnach nicht mehr auftreten.