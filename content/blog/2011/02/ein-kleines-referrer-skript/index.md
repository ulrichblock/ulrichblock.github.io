---
title: "Ein kleines Referrer Skript"
tags: ["php"]
published: true
date: "2011-02-18"
---

In manchen Fällen möchte man verhindern, dass ein Link, den man auf seiner Seite setzt, von Suchmaschinen als Link erfasst werden, oder ein andere Webseitenbetreiber anhand des Referrers sehen kann, wo man ihn verkinkt hat.

Geht es einem Hauptsächlich darum, das Suchmaschinen den Link nicht werten, könnte man den Link mit "nofollow" erstellen. Eine Suchmaschine würde ihn aber dennoch finden und registrieren.  
Interne Links hingegen werden ignoriert. Deswegen kann man nun an Stelle des direkten Verlinkens eine Datei verlinken, die zu der gewünschten Url weiterleitet. Mit PHP ist dies sehr einfach zu bewerkstelligen:

```php
<?php
$ref=$_GET['r'];
header ("Location: $ref");
?>
```

Aufgerufen bzw. verlinkt wird es mit:  
`http://zuverlinkendedomian.tld`

Bei dieser Form kann jeder, auch andere Webseitenbetreiber das Skript ansprechen. Ebenso würde das Skript versuchen auf alles und jeden angegebenen Parameter weiterzuleiten.  
Es bietet sich also an, zu verifizieren, ob das Skript von der eigenen Homepage aus aufgerufen wurde, und ob der Parameter wirklich eine Url ist:

```php
<?php
$ref=$_GET['r'];
$match=$_SERVER['SERVER_NAME'];
if (preg_match("/$match/", $_SERVER["HTTP_REFERER"])=="1" and filter_var($ref, FILTER_VALIDATE_URL)==true) {
 header ("Location: $ref");
}
?>
```

