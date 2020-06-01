---
title: "PHP Passwort Generatoren"
tags: []
published: true
date: "2010-10-08"
---

In manchen Fällen, will man Passwörter generieren lassen, um den User eine Vorstellung zu geben, was man als sicher erachtet, bzw. damit er dieses übernehmen kann.  
Mit PHP kann man dies mit einem Einzeiler machen:

```
<pre class="brush:php"><?php
$randompass=substr(md5(mt_rand(0,999999999)), 0, 15);
?>
```

Bei dieser Variante wird aus einer Zufallszahl die MD5 Summe gebildet und aus dieser dann Stellen 1-15 als Passwort genutz. MD5 Summen enthalten aber keine Großbuchstaben. Das Passwort ist also nicht so sicher, wie man es gerne hätte.

Sichere Passwörter kann man generieren, indem man ein Array mit den gewünschten Zeichen anlegt und aus diesem per Zufallsprinzip das Passwort generieren lässt:

```
<pre class="brush:php"><?php
$zeichen = array('a','b','c','d','e','f','g','h','j','k','m',
 'A','B','C','D','E','F','G','H','J','K','M',
 '2','3','4','5','6','7','8','9');
$anzahl=count($zeichen);
for($i=1; $i<=10; $i++){
 $wuerfeln = mt_rand(0,$anzahl);
 $randompass .= $zeichen[$wuerfeln];    
}
?>
```

In den meisten Fällen sollte Variante 1 reichen. Ich gehe aber lieber auf Nummer sicher und setze Variante 2 ein. Man kann hier das Array beliebig um weitere Zeichen erweitern. Durch den Einsatz von count() wird die Länge des Arrays automatisch richtig erkannt, so dass beim Durcheinanderwürfeln immer alle Zeichen genutzt werden.

