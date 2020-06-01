---
title: "Überprüfen, ob Cookies erlaubt sind."
tags: ["php"]
published: true
date: "2010-07-19"
---

Ich schreibe gerade an einem Serverleihsystem. Damit nicht jeder x Server auf einmal beantragen kann, muss man Zeitsperren einbauen. Ein Weg eine Zeitsperre zu realisieren sind Cookies.

Man kann also einen Cookie mit einer Haltbarkeit von X Minuten erstellen lassen und beim Seitenaufruf abfragen, ob dieser Cookie vorhanden ist.

Wenn der Client jetzt aber keine Cookies akzeptiert, bringt einem die schöne Zeitsperre herzlich wenig, weil ja keiner geschrieben wird. Man braucht also eine Abfrage, ob Cookies akzeptiert werden. Wenn dies nicht der Fall ist, wird dann die Seite mit einem Hinweis, dass man Cookies erlauben muss, gesperrt.

Der Code dafür sieht so aus:

```php
<?php

$cookie = $_COOKIE['testcookie'];

if ("Wert" == $cookie) {
    echo "";
} else {
    switch($_GET['action']) {
        case "1": echo "";
        break;
    default:  header('Location: ./leihen.php?action=1');
        setcookie("testcookie", "Wert");
        exit;
    }
}
?>

<?php

if ("Wert" == $cookie) {
    echo "Hier kommt die Page rein die mit Cookies funktionieren soll";
} else {
    echo "Bitte erlaube Cookies, um diese Seite nutzen zu k&ouml;nnen!";
}

?>
```

