---
title: "In PHP IP auslesen und darstellen"
tags: ["php"]
published: true
date: "2010-08-06"
---

Es gibt ja viele Seiten, die Nutzern helfen, ihre IP Adresse heraus zu finden. Der PHP Code hierfür ist recht simpel:

```php
<?php

$ip=$_SERVER['REMOTE_ADDR'];
echo $ip;

?>
```

