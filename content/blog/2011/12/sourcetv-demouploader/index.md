---
title: "SourceTV Demo Uploader"
tags: ["game-server", "SourceTV", "bash"]
published: true
date: "2011-12-31"
---

Manch einer möchte seine SourceTV Demos automatisiert komprimieren und auf einen externen Webspace hochladen. Wenn man Zugriff auf die Shell hat, kann man dies mit einem kleinen Bashscript machen.

Der folgende Code ist sicherlich nicht der performanteste, erfüllt jedoch seinen Zweck. Für einzelne Gameserver mag es hilfreich sein. Ein komplettes System würde ich darauf aber nicht aufzubauen wollen.

Wenn man die Demos auch auf dem Gameserver archivieren möchte, muss man den zusätzlichen Parameter **-k** bei bzip2 verwenden. Er steht für **keep** und weist bzip2 an, die Ausgangsdatei nicht zu entfernen.

Hier nun das kleine Bashscript:

```bash
#!/bin/bash

DIR='/home/username/servername/css'
DEMODIR='cstrike'

cd $DIR/$DEMODIR
tail -f $DIR/screenlog.0 | while read line; do
 if [[ `echo $line | grep 'Completed SourceTV demo'` ]]; then
  DEMONAME=`echo -n "$line" | awk '{print $4}' | tr -d '"' | tr -d ','`
  if [[ ! `lsof $DEMONAME` ]]; then
   nice -n +19 bzip2 -s -q -9 $DEMONAME
   wput --remove-source-files $DEMONAME.bz2 ftp://user:password@1.1.1.1/demos/
  fi
 fi
done
```

