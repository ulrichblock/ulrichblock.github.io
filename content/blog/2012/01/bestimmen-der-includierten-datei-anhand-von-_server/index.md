---
title: "Bestimmen der includierten Datei anhand von $_SERVER"
tags: ["php"]
published: true
date: "2012-01-07"
---

$_SERVER ist eine so genannte [Superglobal](http://www.php.net/manual/de/language.variables.superglobals.php) und enthält Informationen, wie die Sprache des Users und Daten zu der aufgerufenen Datei.

Mit folgendem Code kann man sich den gesamten Inhalt samt Keys auflisten lassen:

```php
<?php
foreach ($_SERVER as $key => $info) {
	echo $key.': '.$info.'<br />';
}
?>
```

Die Ausgabe kann dann wie folgt aussehen:

> TMPDIR: /var/www/html/project.tld/temp/  
> PATH: /usr/local/bin:/usr/bin:/bin  
> PHPRC: /var/www/html/project.tld/conf/  
> PWD: /var/www/html/project.tld/php-fcgi  
> FCGI_ROLE: RESPONDER  
> UNIQUE_ID: Twgt2T5asdUAAHbGuiIAAACS  
> HTTP_HOST: project.tld  
> HTTP_USER_AGENT: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:9.0.1) Gecko/20100101 Firefox/9.0.1  
> HTTP_ACCEPT: text/html,application/xhtml+xml,application/xml;q=0.9,\*/\*;q=0.8  
> HTTP_ACCEPT_LANGUAGE: de-de,de;q=0.8,en-us;q=0.5,en;q=0.3  
> HTTP_ACCEPT_ENCODING: gzip, deflate  
> HTTP_ACCEPT_CHARSET: ISO-8859-1,utf-8;q=0.7,\*;q=0.7  
> HTTP_COOKIE: PHPSESSID=2a03a4eec3as2b9a4afd692474c64c1e  
> HTTP_DNT: 1  
> HTTP_CONNECTION: close  
> SERVER_SIGNATURE:  
> SERVER_SOFTWARE: Apache/2.2.17  
> SERVER_NAME: project.tld  
> SERVER_ADDR: 1.1.1.1  
> SERVER_PORT: 80  
> REMOTE_ADDR: 2.2.2.2  
> DOCUMENT_ROOT: /var/www/html/project.tld/httpd  
> SERVER_ADMIN: admin@project.tld  
> SCRIPT_FILENAME: /var/www/html/project.tld/httpd/test.php  
> REMOTE_PORT: 50156  
> GATEWAY_INTERFACE: CGI/1.1  
> SERVER_PROTOCOL: HTTP/1.1  
> REQUEST_METHOD: GET  
> QUERY_STRING: test=test  
> REQUEST_URI: /test.php?test=test  
> SCRIPT_NAME: /test.php  
> PHP_SELF: /test.php  
> REQUEST_TIME: 1325936089

$_SERVER enthält keinen Key für den Namen der aufgerufenen Datei selber. Wenn man darauf reagieren möchte, welche Datei einen bestimmten Code includiert hat, wird man mit dem Aufruf eines Keys von $_SERVER alleine erfolglos sein. Man kann die notwendige Information aber aus dem Key ‚SCRIPT_NAME‘ gewinnen:

```php
<?php
// den Key 'SCRIPT_NAME' an den "/" trennen.
$split=preg_split("/\//",$_SERVER['SCRIPT_NAME'],-1,PREG_SPLIT_NO_EMPTY);
// Die Einträge des Arrays bestimmen und 1 abziehen, da bei den Array Keys bei 0 zu zählen begonnen wird
$count=count($split)-1;
// Der Letzte Eintrag ist unsere Datei
$file=$split[$count];
// Wenn es die Datei x ist, 'Hello World' ausgeben, ansonsten den Dateinamen
if ($file=='x.php') {
	echo 'Hello World';
} else {
	echo $file;
}
?>
```

Ohne Kommentare und zusammengefasst sieht der Code dann so aus:

```php
<?php
$split=preg_split("/\//",$_SERVER['SCRIPT_NAME'],-1,PREG_SPLIT_NO_EMPTY);
$file=$split[count($split)-1];
if ($file=='x.php') {
	echo 'Hello World';
} else {
	echo $file;
}
?>
```

