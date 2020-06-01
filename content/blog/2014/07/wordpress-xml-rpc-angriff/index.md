---
title: "WordPress XML-RPC Angriff"
tags: ["wordpress", "security"]
published: true
date: "2014-07-20"
---

Beim Kontrollieren meiner Logs musste ich heute feststellen, dass ein Botnetz versucht hat und immer noch dabei war, das XML-RPC Feature meiner WordPress Installation für Angriffe auf andere Server auszunutzen.

Die Versuche wurden zwar von der Nginx WAF NAXSI geblockt, die Logs sind dennoch explodiert. Das wird wohl auch damit zusammenhängen, dass hier fast 3500 Bots am Werke sind:

```bash
grep 'xmlrpc.
php' error.log error.log.1 | awk '{print $7}' | awk -F '&' '{print $1}' | awk -F '=' '{print $2}' | sort -u | wc -l
> 3462
```

Die Gesamtanzahl der Aufrufe je IP ist relativ gering. Die Angreifer versuchen dadurch wohl unter dem Radar von etwaigen Rate Limiting durchzufliegen:

```bash
grep 'xmlrpc.php' error.log error.log.1 | wc -l
> 22853
```

Ich benutze das XML-RPC Feature bei diesem Blog nicht. Deswegen hatte ich die xmlrpc.php auch vor einiger Zeit gelöscht. Durch ein Update wurde sie aber wieder eingespielt und ich hatte vergessen sie abermals zu entfernen.

Ich hatte nun zwei Ziele. Zum einen, will ich den Zugriff auf die xmlrpc.php sperren, egal, ob sie existiert, oder nicht. Die CPU Leistung, die die WAF zum Blocken braucht, muss man ja nicht unnötig aufwenden. Zum zweiten, sollen die Zugriffe nicht mehr geloggt werden. Falls es den Bedarf einer genaueren Analyse geben sollte, kann man das Logging ja nachträglich wieder aktivieren.

Um die Ziele zu erreichen habe ich eine neue Location in den Vhost an erster Stelle, noch vor dem Block "location /", eingetragen:

```
location ~ xmlrpc.php {
    access_log off;
    error_log /dev/null crit;
    deny all;
}
```

