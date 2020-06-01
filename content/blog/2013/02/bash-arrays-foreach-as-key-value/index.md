---
title: "Bash Arrays foreach as key => value"
tags: ["bash"]
published: true
date: "2013-02-06"
---

In einem älteren Beitrag mit dem Namen [Einige Codeschnipsel für Bash Arrays](/einige-codeschnipsel-fur-bash-arrays/ "Einige Codeschnipsel für Bash Arrays") hatte ich bereits einige Grundlagen für Bash Arrays gepostet.

Was fehlte und in vielen anderen Script- und Programmiersprachen vorhanden ist, ist ein foreach Loop bei dem ein assoziatives Array mit Key und Value durchgegangen wird. In PHP sieht es z.B. so aus:

```php
<?php

$array['key1'] = 'value1';
$array['key2'] = 'value2';
foreach ($array as $key => $value) {
    echo "Key = $key";
    echo "Value = $value";
}
```

In Bash erreicht man das selbe Ergebnis auf einem Umweg:

```bash
#!/bin/bash

declare -A array
array[key1]='value1'
array[key2]='value2'
for key in ${!array[@]}; do
    echo "Key = $key"
    echo "Value = ${backup[$key]}"
done
```

Man kann das Array auch anders definieren.

PHP:

```php
<?php

$array = array ('key1' => 'value1','key2' => 'value2');
foreach ($array as $key => $value) {
    echo "Key = $key";
    echo "Value = $value";
}
```

Bash:

```bash
#!/bin/bash

declare -A array
array=([key1]='value1' [key2]='value2')
for key in ${!array[@]}; do
    echo "Key = $key"
    echo "Value = ${backup[$key]}"
done
```

