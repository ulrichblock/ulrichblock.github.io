---
title: "php5-memcached : Depends: libmemcached11 which is a virtual package."
tags: ["php"]
published: true
date: "2013-12-31"
---

Wer das Dotdeb Repository für PHP 5.5 verwendet und php-memcached installiert, wird wahrscheinlich über folgenden Fehler stolpern:

> php5-memcached : Depends: libmemcached11 which is a virtual package.

Der Grund ist, dass man nur das 55 Repository in der /etc/apt/sources.list hinterlegt hat. Wenn man zusätzlich das "normale" Dotdeb hinterlegt, ist libmemcached11 verfügbar und die Installation php5-memcached möglich.

Die Einträge sehen dann so aus:

> deb http://packages.dotdeb.org wheezy all
> deb-src http://packages.dotdeb.org wheezy all
> 
> deb http://packages.dotdeb.org wheezy-php55 all
> deb-src http://packages.dotdeb.org wheezy-php55 all

Die Installation funktioniert wie gewohnt:

```bash
apt-get update
apt-get install php-memcached
```

