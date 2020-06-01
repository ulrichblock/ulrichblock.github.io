---
title: "projecthoneypot.org API mit PHP ansprechen"
tags: ["php", "spam"]
published: true
date: "2012-11-09"
---

Spam ist ein alltägliches Problem. Es gibt viele Projekte und APIs, um das leidige Thema anzugehen.

Eines, wenn nicht sogar das bekannteste bekanntesten ist [projecthoneypot.org](http://www.projecthoneypot.org "projecthoneypot.org").

Die Registrierung und die Nutzung der [API](https://www.projecthoneypot.org/httpbl_api.php) ist kostenlos. Um die API nutzen zu können, ist ein Key erforderlich, den man kostenlos nach der Registrierung bekommt.

Mit diesem Key, kann man dann sehr leicht überprüfen, ob die zugreifende IP bereits aufgefallen ist. Dadurch, dass der Zugriff mittels der PHP Funktion ***gethostbyname*** erfolgen kann, ist man in der Lage performant Ergebnisse zu erlangen.

Mit dem folgenden Beispielcode, ein eigener API Code vorausgesetzt, ist es ein Leichtes bekannte Spammer zu identifizieren. Je nach Einsatzzweck kann man ihn anpassen und Ereignisse an die IF Bedingungen knüpfen.

```php
// Die API Dokumentation findet man unter https://www.projecthoneypot.org/httpbl_api.php

// Der projecthonepot.org API Key.
$apiKey='abcdefghijkl';

// IP Adresse des aufrufenden.
$ip=$_SERVER['REMOTE_ADDR'];

// Die IP muss als reversierte 8-bit-Zeichen gesendet werden.
$ipRevers=implode('.',array_reverse(explode('.',$ip)));

// Die Antwort erfolgt in 8-bit-Zeichen.
$ex=explode('.',gethostbyname($apiKey.'.'.$ipRevers.'.dnsbl.httpbl.org'));

// Wenn das erste 8-bit-Zeichen 127 ist, handelt es sich um eine IP die bereits in irgend einen Honeypot getappt ist.
if ($ex[0]==127){

    // Array um den Typ in Worte zu fassen
    $types=array(0=>'Search Engine',1=>'Suspicious',2=>'Harvester',3=>'Suspicious & Harvester',4=>'Comment Spammer',5=>'Suspicious & Comment Spammer',6=>'Harvester & Comment Spammer',7=>'Suspicious & Harvester & Comment Spammer');

    // Wenn das letzte 8-bit-Zeichen 0 ist, greift eine Suchmaschine zu.
    if ($ex[3]==0)  {

    // Array um die Suchmaschine zu identifizieren
    $searchEngines=array(0=>'Undocumented', 1=>'AltaVista', 2=>'Ask', 3=>'Baidu', 4=>'Excite', 5=>'Google', 6=>'Looksmart', 7=>'Lycos', 8=>'MSN', 9=>'Yahoo', 10=>'Cuil', 11=>'InfoSeek', 12=>'Miscellaneous');
    echo $types[$ex[3]].': '.$searchEngines[$ex[2]];

    // Wenn es keine Suchmaschine ist, ist die IP negativ aufgefallen.
    } else {

        // Eine kleine Testausgabe. Je nachdem, wie streng man sein möchte, kann man die die IP zulassen, wenn das letzte Auftauchen lange her ist, und oder die Gefahr als gering eingestuft wird.
        echo 'IP seems to be a '.$types[$ex[3]].'. It was last seen '.$ex[1].' day(s) ago and has a threat score of '.$ex[2];
    }

// In allen anderen Fällen ist die IP nicht aufgefallen.
} else {
```

Bitte denkt daran, das es ein Geben und Nehmen ist. Wenn man die API nutzt, dann sollte man auch gleich überlegen, selber einen Honeypot einzurichten, oder zumindest ein zwei Links einzubauen, um das Projekt zu unterstützen.

