---
title: "Über IP Filter, Validierung und wenn man nicht das Handbuch liest&#8230;"
tags: ["php"]
published: true
date: "2010-09-18"
---

In manchen Fällen muss, oder besser sollte, man bestimmte Eingaben und Werte überprüfen. Beim Programmieren gilt die Regeln, niemals dem Userinput vertrauen!  
Ich brauchte nun eine Validierung, ob der eingegebene Wert, eine IP Nummer ist. Ich habe dann sicher mehr als eine Stunde aufgewendet um einen Filter für die PHP Funktion "preg_match" zu erstellen:

```php
function isip($ipnumber){
 return preg_match ("/^([1-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/", $ipnumber);
}
```

Funktioniert auch gut, kann aber nur IP4 Addressen validieren. Es war auch ein recht großer Arbeitsaufwand.  
Hätte ich mir vorher das PHP Handbuch geschnappt, wäre ich auf die Funktion filter_var() gestoßen, die genau das macht, was ich wollte. Hier jetzt der neue Filter, den ich in 5 Minuten erstellt habe, und alle Arten von IPs validieren kann:

```php
function isip($ipnumber,$ipx){
    if ($ipx==ip4) {
        if(filter_var($ipnumber, FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)){
            return $ipnumber;
        }
    } else if ($ipx==ip6) {
        if(filter_var($ipnumber, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)){
            return $ipnumber;
        }
    } else if ($ipx==all) {
        if(filter_var($ipnumber, FILTER_VALIDATE_IP)){
            return $ipnumber;
        }
    }
}
```

Was lernt man daraus?
-> immer erst im Handbuch nachschauen, das spart viel Zeit und führt meistens zu effizienteren und besseren Lösungen.

