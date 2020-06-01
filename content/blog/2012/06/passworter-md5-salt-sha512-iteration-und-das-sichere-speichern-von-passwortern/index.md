---
title: "Passwörter, MD5, Salt, sha512, Iteration und das sichere Speichern von Passwörtern"
tags: ["php"]
published: true
date: "2012-06-29"
---

Eines vor weg. 100% Sicherheit gibt es nicht. Das Folgende kann in ein paar Jahren schon komplett überholt sein. Es kann aber das Speichern von Passwörtern deutlich sicherer machen, als die Methode ein Passwort mit md5() zu hashen und in der der Datenbank zu hinterlegen.

Im Laufe der letzten Wochen und Monate gab es immer wieder Berichte von gehackten Webseiten, bei denen Millionen von Userdaten abhanden gekommen sind.

Was den Datendiebstahl noch schlimmer machte, war der Umstand, dass die Passwörter, nach heutigen Standards, unzureichend gesichert waren. In den meisten Fällen wurde das Passwort ohne den Einsatz eines so genannten Salts als MD5 Hash gespeichert.

In PHP würde das so aussehen:

```php
$hash=md5('dasPasswort');
```

In der Theorie ist ein MD5 irreversibel. Das eine Problem mit dieser Hash Methode ist, dass zu Millionen Passwörtern der Hash bereits bekannt ist. Es gibt zahlreiche Datenbanken die diese Hashes speichern und frei verfügbar sind. Die bekannteste nennt sich Google.

Das andere Problem mit der md5() Hash Methode ist, dass sie vor Jahren auf Geschwindigkeit optimiert wurde. Heutzutage können extrem viele Hashes je Sekunde berechnet werden. So braucht das Berechnen eines MD5 Hashes nur Millisekunden.  
Selbst wenn das Passwort zu dem Hash einmal nicht bekannt sein sollte, ist es mit den heutigen Grafikkarten relativ einfach dieses mittels Brutforce den Hash zu knacken.

Dementsprechend konnten Angreifer Millionen von Passwörtern rekonstruieren und damit sicher den ein oder anderen Paypal, Facbook und ähnliche Accounts kapern, weil die Anwender das selbe Passwort undbenutzernamen mehrfach benutzen.

Damit dieses Problem nicht mit den eigenen Datensätzen passiert, kann man wesentlich mehr machen, als nur MD5() verwenden. Es ist z.B. schon seit längeren ist es Standard, die Passwörter mit einem so genannten "Salt" zu salzen. Ein Salt ist ein willkürlicher String, mit dem das eigentliche Passwort verlängert wird.

Ein folgender Hash wäre z.B. nicht so leicht zu knacken, wenn der Salt unbekannt ist:

```php
$hash=md5('dasPasswort'.'HierIstEinSehrLangerSaltMit0123456789Und!"§%(');
```

Ist der Salt einmal bekannt, ist es aber auch hier sehr einfach viele Passwörter Mittels Brutforce Angriff zu knacken.

Deswegen hat man irgendwann mit der Iteration begonnen, bei dem der String an den bestehenden Hash gebunden wird und immer wieder neu gehasht wird:

```php
$hash='';
for ($i=0;$i<1000;$i++) {
    $hash=md5($hash.'HierIstEinSehrLangerSaltMit0123456789Und!"§%('.'dasPasswort');
}
```

Der Schwachpunkt ist auch hier der mittlerweile sehr alte MD5 Hash, mit dem man sehr schnell eine große Rainbow Tabelle erstellen kann.

Ich ziehe deswegen den neueren sha512, oder sha256 Hash vor. In Kombination mit flexiblen und dynamischen Salts kann man die Sicherheit der Passwörter erheblich steigern.

Kombiniert man die Methoden kann man eine Funktion wie diese nutzen:

```php
function createHash ($name,$pwd,$saltOne,$saltTwo='ZPZw$[pkJF!;SHdl',$iterate=2000) {
    $pwdSplit=str_split($pwd,(strlen($pwd)/2)+1);
    $nameSplit=str_split($name,(strlen($name)/2)+1);
    $hash='';
    for ($i=0;$i< =$iterate;$i++) {
        $hash=hash('sha512',$nameSplit[0].$saltOne.$pwdSplit[0].$hash.$nameSplit[1].$saltTwo.$pwdSplit[1]);
    }
    return $hash;
}
```

Die Funktion setzt voraus, dass mit dem User wird ein individueller Salt in der Datenbank hinterlegt wird. Zusätzlich Wird ein statischer, im Code enthaltender Salt verwendet.
Durch das Splitten und die Iteration gibt es so viele Möglichkeiten, dass man eine doch sehr erhebliche Rechenleistung benötigt um für jeden einzelnen User eine Rainbow Tabelle zu erstellen.
da Zeit gleich Geld ist, wird sich der Angreifer dann oft ein einfacheres Ziel suchen.
