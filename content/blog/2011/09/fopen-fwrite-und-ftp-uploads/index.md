---
title: "fopen(); fwrite(); und FTP Uploads"
tags: ["php"]
published: true
date: "2011-09-20"
---

Ich bin vor kurzem über ein kleineres Problem mit fwrite und FTP Verbindungen gestolpert. Nach immer derselben Datenmenge von ca. 2800 Bytes wurde aufgehört zu schreiben. Dabei hat fwrite(); aber zurückgegeben, dass alles geschrieben wurde, so dass es mir unmöglich war einen Abbruch im Stream zu bestimmen und darauf reagieren zu können.

Dateien, die die Datenmenge überschritten waren unvollständig. Ich habe dann versucht, die Dateigröße zu bestimmen und fwrite diese als Maximalwert vorzugeben. Des Weiteren, versuchte ich, nicht den ganzen String, sondern jede Zeile einzeln zu schreiben.  
Beides hatte keinen Erfolg.

Der Upload verlief dabei ungefähr nach diesem Schema:

```php
$overwrite = stream_context_create(array('ftp' => array('overwrite' => true)));
$write = fopen('ftp://username:ftppass@ip:ftpport/pfad/datei', 'w', false, $overwrite);
fwrite($write, $newconfig);
fclose($write);
```

Da ich keine Informationen zu einem möglichen Bug in PHP finden konnte, musste ein Workaround her. Ich schreibe den Inhalt der hochzuladenen Datei in eine temporäre, öffne diese mit Fopen um dann die FTP Funktionen für den Upload zu nutzen:

```php
<pre class="brush:php">
$temp = tmpfile();
fwrite($temp, 'My Content');
fseek($temp,0); 
$ftp_connect = ftp_connect($ip,$ftpport);
$ftp_login = ftp_login($ftp_connect,$username,$ftppass);
ftp_fput($ftp_connect,'/pfad/datei',$temp,FTP_ASCII);
fclose($temp);
ftp_close($ftp_connect);
```

Beide Codeschnipsel sind gekürzt. Für den produktiven Einsatz sollte man noch eine Fehlerbehandlung einbauen.

