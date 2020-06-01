---
title: "mysql_query() hat ausgedient"
tags: []
published: true
date: "2011-03-19"
---

Ich bin gerade dabei, bei meine PHP Funktionen und Klassen, die auf mysql_query() basieren, mysql_query() zu entfernen und durch PDO zu ersetzen.

Die meisten haben wahrscheinlich noch nie davon gehört. Dabei ist es in meinen Augen wesentlich besser, als mysql_query();. PDO steht für PHP Data Objects.

mysql_query ist, wie der Name schon sagt, auf MYSQL Datenbanken limitiert.  
Eine weitere Schwachstelle bei mysql_query ist, dass man höllisch aufpassen muss, dass keine SQL Injection möglich ist.  
Bei PDO können so ziemlich alle gängigen SQL Datenbanken verwendet werden. Auch ist hier die Gefahr einer Injection nicht ganz so groß. Dennoch sollte man auch hier jeglichen Userinput validieren, da doppelt ja bekanntlich besser hält.

Um das mal zu veranschaulichen zwei kleine Beispiele:

Vereinfacht und ohne zusätzliche Funktionen bzw. Klassen kann man mit mysql_query so eine einfache Abfrage machen:

```php
$host = "localhost";
$user = "username";
$password = "geheim";
$db = "meinedatenbank";
mysql_connect( $host, $user , $password ) ;
mysql_select_db($db);
$query = "SELECT foo,bar FROM foobar WHERE id='$_GET['id']'";
$result = mysql_query($query);
while ($row = mysql_fetch_assoc($result)) {
    $foo = $row['foo'];
    $bar = $row['bar'];
    echo "Foo ist:".$foo." Und Bar:".$bar."<br />";
}
mysql_close($connect);
```

Hier wird jeglicher Wert aus dem GET Parameter ungefragt übernommen, so dass man mit einer Injection schnell die ganze Datenbank ausforschen kann.

Bei PDO ist dies nicht mehr so einfach möglich:

```php
$type = "mysql";
$sql = new PDO("$type:host=$host;dbname=$db", $user, $password);
$select = $sql->prepare("SELECT foo,bar FROM foobar WHERE id=:id");
$select->execute(array(':id'=> $_GET['id']));
foreach ($select->fetchAll() as $row) {
    $foo = $row['foo'];
    $bar = $row2['bar'];
    echo "Foo ist:".$foo." Und Bar:".$bar."<br />";
}
$sql = null;
```

Dies ist nur eine Art die Abfrage zu gestalten. Es gibt bei PDO noch wesentlich mehr Möglichkeiten.

Besonders interessant sind prepared Statements zusammen mit der Bindfunktion, wenn man einen Aufruf öfters macht. Hier definiert man einmal das Grundgerüst, um später Variablen Werte zuzuweisen und dann das Statement auszuführen. Eine kleine Logfunktion könnte man so umsetzen:

```php
$log = $sql->prepare("INSERT INTO log (userid, useraction,  logdate) VALUES (:userid, :useraction,  :logdate)");
$log->bindParam(':userid', $userid, PDO::PARAM_INT);
$log->bindParam(':useraction', $useraction, PDO::PARAM_STR);
$log->bindParam(':logdate', $logdate, PDO::PARAM_STR, 11);
$useraction = "Am Hintern gekratzt";
$userid = "112";
$logdate = date('Y-m-d H:i:s');
$log->execute();
$useraction = "Nach Hause gegangen";
$logdate = date('Y-m-d H:i:s');
$log->execute();
$useraction = "Im Kreis gedreht";
$userid = "113";
$log->execute();
```

`$log>execute()` dann die Werte in die Datenbank, die gerade definiert sind.

Besonders, wenn man bei dem Aufruf eines Skriptes gleich mehrere Aktionen speichern möchte, sind prepared Statements also eine deutliche Arbeitserleichterung.

Jedem, der mit einem neuen Projekt beginnt ist anzuraten, von vornherein mit PDO zu arbeiten. mysql_query(); hat ausgedient

