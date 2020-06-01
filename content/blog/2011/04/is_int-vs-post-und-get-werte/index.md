---
title: "is_int(); vs POST und GET Werte"
tags: ["php"]
published: true
date: "2011-04-30"
---

Beim Programmieren sollte der Grundsatz gelten, dass man niemals dem Userinput vertraut.  
Möchte man überprüfen, ob der Wert, der im Formular eingegebene wurde, ein Integer ist, denkt man sofort daran, die PHP eigene Funktion is_int(); zu benutzen.  
Dies könnte man so machen:

```php
if (!is_int($_POST['integer'])) {
 echo "kein Integer";
}
```

POST und GET Werte sind aber immer Strings, auch dann, wenn der Inhalt selber ein Integer ist. Deswegen kann man die Funktion is_int(); nicht zum Validieren nutzen.  
Statt dessen kann man die Funktion preg_match zum Validieren verwenden:

```php
if (!preg_match("/^[\d+(.\d+|$)]+$/", $_POST['integer'])) {
 echo "kein Integer";
}
```

