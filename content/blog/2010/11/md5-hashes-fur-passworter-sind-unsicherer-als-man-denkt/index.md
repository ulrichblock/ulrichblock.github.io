---
title: "MD5 Hashes für Passwörter sind unsicherer, als man denkt."
tags: ["security"]
published: true
date: "2010-11-23"
---

Man liest immer wieder, dass man Passwörter in Datenbanken am besten als md5 Hash hinterlegt und bei einem Login dann den Hash des gerade eingegebenen Passwortes mit dem hinterlegten abgleicht.  
Das soll sicher sein, weil man den Hash nicht wieder rekonstruieren kann.

Theoretisch stimmt das ja. Aber wofür gibt es Datensammler und Datenbanken. Zu vielen Kombinationen sind die Hashes bekannt, so dass die Daten doch sehr leicht rekonstruierbar sind, hat der Angreifer erst einmal Zugriff auf die Datenbank erlangt.  
Wer ein wenig googelt, findet schnell einschläge Datenbanken und Suchseiten.

Wer also sein eigenes Login System benutzt, sollte mal überlegen, ob er dies nicht überarbeiten will, damit die Userpasswörter im Falle eines Zugriffs auf die Datenbank nicht so einfach zurück zu übersetzen sind.

Mysql bietet z.B. die Möglichkeit, die Daten mit einer 128bit AES Verschlüsselung zu versehen. Man könnte jetzt z.B. den Hashwert zusätzlich verschlüsseln und den verschlüsselten Haswert in der Datenbank hinterlgen.  
Hat der Angreifer den dazugehörigen Schlüssel nicht, kann er die verschlüsselten Hashwerte nicht rekonstruieren.  

---
**Nachtrag:**
Ich habe nochmal rumgesucht und rumgespielt und bin dann zu folgender Lösunge mit PHP gekommen:

```php
function passwordhash($password,$username){
 $passworda = str_split($password,(strlen($password)/2)+1);
 $usernamea = str_split($username,(strlen($username)/2)+1);
 $hash = md5($usernamea[0].$passworda[0].$usernamea[1].$passworda[1]);
 return $hash;
}
```

