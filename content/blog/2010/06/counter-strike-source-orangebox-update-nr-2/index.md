---
title: "Counter-Strike Source Orangebox Update Nr.2"
tags: ["steam", "Counter-Strike Source", "Orangebox"]
published: true
date: "2010-06-25"
---

Achtung bei `-autoupdate` Valve hat wohl vergessen die `srcds_run` anzupassen, so dass es zu einer Endlosschleife kommt und immer wieder ein orangebox im orangebox Ordner erstellt wird.

In Zeile 296 der `srcds_run` heißt es:  
>DEPOT_ROOT="."

Es müsste aber so heißen:  
>DEPOT_ROOT=".."

Entweder ändert ihr die `srcds_run` bei allen euerer Images und installationen, oder ihr deaktiviert die Funktion `-autoupdate`

---
Nachtrag:  
Ich hatte den Bug auch in der hlds Mailingliste beschrieben.  
Nach kurzer Zeit schrieb Milton Ngan von Valve dazu:

> This should be fixed in the next update.

Spricht es wird mit dem nächsten Update behoben.

---
Zweiter Nachtrag:

Es wurde mittlerweile ein weiteres Update released, dass, wie versprochen, den Fehler bei der -autoupdate Funktion behoben hat.

