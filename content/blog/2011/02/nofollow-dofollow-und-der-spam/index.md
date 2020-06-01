---
title: "NoFollow, DoFollow und der Spam"
tags: ["wordpress", "spam"]
published: true
date: "2011-02-11"
---

Gibt ein Kommentator bei WordPress eine Homepage an, bindet sie Worpress standardmäßig mit folgendem Attribut ein:  
`rel='external nofollow'`

Suchmaschinen sehen den Link zwar, jedoch wird er nicht als Backlink gewertet. Grundsätzlich steigt die eigene Wertigkeit, mit der Anzahl und der Qualität der Backlinks bei Suchmaschinen an. Von daher ist es für den ein oder anderen Kommentator interessant, wenn nofollow nicht gesetzt wird.

Wenn es nicht gewertet wird, sollte man eigentlich für Spammer uninteressant sein. Deswegen störte mich diese Einstellung nicht weiter. Nun ist es aber so, dass bei meinem Blog täglich dutzende Spammeinträge geblockt werden, obwohl nofollow gesetzt ist. Die Spammer und Spambots scheint es demnach nicht wirklich zu interessieren, ob nofollow gesetzt ist, oder nicht.

Wenn jemand einen Sinnvollen Kommentar abgibt, hat er es eigentlich auch verdient, dass er dafür einen Backlink bekommt. Da nofollow ja offensichtlich nichts gegen Spam bringt, habe ich mich dazu entschlossen, bei Kommentaren nofollow zu deaktivieren.  
Dies ist recht einfach zu bewerkstelligen, indem man in seinem wp-includes, oder wie immer auch man ihn halt so umbenannt hat, Ordner die Datei comment-template.php öffnet und in der Zeile 155 folgenden Eintrag abändert:

```php
$return = "<a class="url" href="%24url" rel="external nofollow">$author</a>";
```

Wird zu:

```php
<pre class="brush:php">$return = "<a class="url" href="%24url">$author</a>";
```

