---
title: "GTA San Andreas Server Query"
tags: ["php", "game-server"]
published: true
date: "2011-12-29"
---

Hier mal eine, in PHP geschriebene, Statusabfrage für den GTA San Andreas Server:

```php
$ip='1.1.1.1';
$port=7777;
$socket= @fsockopen("udp://".$ip,$port,$errnum,$errstr,5);
if ($socket==true) {
 $ex=explode('.',$ip);
 $packet='SAMP'.chr($ex[0]).chr($ex[1]).chr($ex[2]).chr($ex[3]).chr($port & 0xFF).chr($port >> 8 & 0xFF).'i';
 fwrite($socket,$packet);
 fread($socket,11);
 $return['password']=ord(fread($socket,1));
 $return['player']=ord(fread($socket,2));
 $return['slots']=ord(fread($socket,2));
 $return['hostname']=htmlentities(fread($socket,ord(fread($socket,4))));
 $return['mode']=htmlentities(fread($socket,ord(fread($socket,4))));
 $return['map']=htmlentities(fread($socket,ord(fread($socket,4))));
} else {
 $return=$errnum.': '.$errstr;
}
if (is_resource($socket)) {
 fclose($socket);
}
```

