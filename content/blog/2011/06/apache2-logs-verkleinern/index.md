---
title: "Apache2 Logs verkleinern"
tags: ["Apache2"]
published: true
date: "2011-06-29"
---

In manchen Fällen ist es ganz hilfreich, wenn man detaillierte Logs hat. In anderen Fällen kann es hinderlich sein.  
Aus Gewohnheit hatte ich einen Vhost angelegt, wie ich es meistens mache. Das Loglevel auf "warning" und ansonsten das "CustomLog" auf "combined".

Dieser Vhost wird nun einigermaßen gut besucht und die zahlreichen Grafiken taten ihr übriges um die Logs sehr schnell anschwellen zu lassen. 300MB in der Woche waren ganz normal. Das das Speichern von so viel Informationen Leistung kostet, sollte ja klar sein.

Da der Vhost auf einem kleinen Vserver liegt, ist eben diese nicht im Überfluss vorhanden.  
Eine Möglichkeit wäre es nun, das Log komplett zu deaktivieren. In diesem Fall sollen aber einige Informationen, wie Fehler und Referrer gespeichert werden.

Es ist derzeit umstritten, ob IP Adressen als personenbezogene Daten anzusehen sind, oder nicht. Sind es personenbezogene Daten, dürfen sie nicht ohne Einwilligung gespeichert werden. Deswegen sollen auch IP Adressen nicht mehr Bestandteil der Logs sein.

Setzt man den Apache2 Server ein, muss man nur einen Eintrag in der "/etc/apache2/apache2.conf" abändern.

> LogFormat "%h %l %u %t \\"%r\\" %&gt;s %b \\"%{Referer}i\\" \\"%{User-Agent}i\\"" combined

wird zu:

> LogFormat "%t \\"%r\\" %&gt;s %b \\"%{Referer}i\\" \\"%{User-Agent}i\\"" combined

Setzt man einen Logparser ein, der das alte Format erwartet, kann man die Einträge auch anders abändern, spart dann aber nicht mehr den Platz ein:

> LogFormat "0.0.0.0 – – %t \\"%r\\" %&gt;s %b \\"%{Referer}i\\" \\"%{User-Agent}i\\"" combined

Im zweiten Schritt wird das Loglevel herabgesetzt und das Speichern von Informationen bezüglich bestimmter Dateien deaktiviert.

> LogLevel error  
> SetEnvIf Request_URI "\\.(jpg|xml|png|gif|ico|js|css|swf|js?.|css?.)$" dont  
> CustomLog /var/www/thedomainname/logs/access.log combined Env=!dont

Da ich für jeden Vhost ein eigenes Logverzeichnis habe, wird dieser Eintrag im Vhost und nicht global vorgenommen.

Im Anschluss wird der Apache noch neu gestartet:

> /etc/init.d/apache2 restart

Wer noch mehr über die Möglichkeiten nachlesen möchte, kann es z.B. hier tun:  
[http://www.howtoforge.de](http://www.howtoforge.de/howto/wie-konfiguriere-ich-apache-damit-bestimmte-zugriffe-nicht-im-access-log-vermerkt-werden/)

