---
title: "IP Adressen, Datenschutz, Nginx, Apache und CMS"
tags: ["nginx"]
published: true
date: "2013-01-31"
---

Ob IP Adressen personenbezogene Daten sind, wurde in Deutschland bisher noch nicht in höchster Instanz entschieden. Bei IP4 Adressen bleibt es noch strittig, insbesondere, weil sie sich bei vielen ISPs nach jedem Login ändern.

Das OLG Hamburg sieht sie im Beschluss Beschluss vom 03.11.2010, 5 W 126/10 nicht als solche an, der EuGH hat im Urteil Urt. v. 24.11.2011, Az. C-70/10 sie als personenbezogene Daten angesehen. Datenschützer vertreten schon lange die Ansicht vom EuGH. Ein Wechsel zum Hashen der IPs reicht nach einer Ansicht nicht.

Wer hinter diesem Hintergrund, das Speichern von IPs deaktivieren möchte, muss dies zum Einen beim Webserver, zum Anderen bei den eingesetzten Scripten tun.

Bei Nginx legt man ein neues Logformat (/etc/nginx/conf.d/logging.conf) an:

```
log_format noip	'[$time_local] '
	'"$request" $status $body_bytes_sent '
	'"$http_referer" "$http_user_agent"';
```

und wendet es in den einzelnen Vhosts an:

```
access_log /var/log/nginx/access.log noip;
```

Beim Apache ist das Logformat im Regelfall in der /etc/apache2/apache2.conf definiert und kann so angepasst werden:

```
LogFormat "%v:%p %t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" vhost_combined
LogFormat "%t \"%r\" %>s %b \"%{Referer}i\" \"%{User-Agent}i\"" combined
LogFormat "%t \"%r\" %>s %b" common
```

Nach den Webservern sind die Scripte dran. Das Einfachste ist es, die Column der Datenbank zu bearbeiten, in der die IPs gespeichert werden. In der Regel ist diese mit VARCHAR(15) definiert, weil eine IP4 Adresse maximal 15 Stellen haben kann. Minimal sind es 7 Stellen. Reduziert man die Column auf 6 oder weniger Stellen, ist es nicht mehr möglich, IPs in sinnvoller Weise zu speichern:

```sql
ALTER TABLE `wp_comments` CHANGE `comment_author_IP` `comment_author_IP` VARCHAR(5) NOT NULL DEFAULT ''
```

Das Beispiel ist für die Kommentarfunktion von WordPress gedacht, lässt sich aber auf beliebige andere CMS anwenden.

