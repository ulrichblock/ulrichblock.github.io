---
title: "String mit der Linux Shell in Dateien suchen"
tags: ["bash"]
published: true
date: "2013-08-23"
---

Weil ich es vorhin gebraucht habe, eine kleine Schleife, die nach Strings in Dateien sucht. Im Beispiel werden Dateien mit der Superglobal $_POST gesucht:

```bash
find -type f | while read file; do if grep '$_POST' $file > /dev/null; then echo "found $file"; fi; done
```

