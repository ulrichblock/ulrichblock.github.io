---
title: "It is not safe to rely on the system’s timezone settings"
tags: ["php"]
published: true
date: "2014-04-21"
---

Es dürften schon so einige über eine ähnliche Fehlermeldung nach einem PHP Update gestolpert sein:

> Warning: strtotime(): It is not safe to rely on the system’s timezone settings. You are \*required\* to use the date.timezone setting or the date_default_timezone_set() function. In case you used any of those methods and you are still getting this warning, you most likely misspelled the timezone identifier. We selected ‚Europe/Berlin‘ for ‚CEST/2.0/DST‘ instead in /var/www/domain.tld/htdocs/index.php on line 21

Der korrekte Lösungsansatz ist es, die **php.ini** Variable *date.timezone* zu definieren:

```
date.timezone = Europe/Berlin
```

Wer keinen Zugriff darauf hat, kann sich mit PHP selber behelfen. Dafür muss man folgenden kleinen Code am Anfang seines Skriptes einfügen:

```php
$timezoneDefined = @ini_get("date.timezone");

if ($timezoneDefined == "")
{
    date_default_timezone_set(@date_default_timezone_get());
}
```

Schreibt man eine Anwendung, die von einer Vielzahl von Leuten genutzt werden soll, bietet es sich an, dass man im Installer bzw. einer Config Einstellung, dem User die effektive Zeitzone einstellen lässt. Eine Liste mit allen erlaubten könnte man so in ein Formular einbauen:

```php
<label for='inputInstallTimezone'>Zeitzone</label>
<select id='inputInstallTimezone' name='timezone'>
<?php
$timezoneDefined = ini_get('date.timezone');
foreach (timezone_identifiers_list() as $time)
{
    echo "<option>${time}</option>";
}
?>
</select>
```

