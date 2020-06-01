---
title: "mod_tls_memcache/0.1: notice: unable to register &#8218;memcache&#8216; SSL session cache: Memcache support not enabled"
tags: ["ProFTP"]
published: true
date: "2014-03-08"
---

Schonmal über folgenden Fehler beim Neustarten von ProFTP gestolpert?

```bash
/etc/proftpd# /etc/init.d/proftpd restart
[ ok ] Stopping ftp server: proftpd.
[....] Starting ftp server: proftpdeasy-wi proftpd[26395]: mod_tls_memcache/0.1: notice: unable to register 'memcache' SSL session cache: Memcache support not enabled
. ok
```

Im Regelfall wird man das Modul nicht brauchen. Deswegen kann man es deaktivieren und ist die Fehlermeldung los.

Öffnet die Datei **/etc/proftpd/modules.conf** mit eurem bevorzugten Editor, sucht den Eintrag für das Modul und kommentiert ihn aus:  
```
(...)
#LoadModule mod_tls_memcache.c
(...)
```

Beim nächsten Neustart sollte die Fehlermeldung nicht mehr erscheinen.

