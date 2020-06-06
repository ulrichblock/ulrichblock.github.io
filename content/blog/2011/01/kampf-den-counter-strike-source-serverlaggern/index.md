---
title: "Kampf den (Counter-Strike Source) Server Laggern"
tags: ["steam", "Counter-Strike Source", "game-server", "security"]
published: true
date: "2011-01-26"
---

Ein altes Problem bei HL2 Servern sind A2S_INFO DoS Attacken, die eine Schwachstelle im Server ausnutzen. Es gibt leider auch noch andere Schwachstellen. Diese sind nicht auf Counter-Strike Source beschränkt und betreffen alle Server, die die Source Technonogie benutzen. Die Folge eine solchen Attacke ist in der Regel, dass der Serverping in die Höhe schießt, und der Server massig CPU verbraucht.  
Dadurch, dass man nur eine geringe Bandbreite für einen erfolgreichen Angriff braucht, kann sie von jedem noch so kleinen DSL Heimanschluss erfolgreich geführt werden. Deswegen kann jeder die allermeisten HL2 basierenden Server unspielbar machen, der es schafft, eines der Programme, die sich Serverlagger, oder ähnlich nennen, zu downloaden.  
Kurz: Jedes rachsüchtige Kind, dass Google bedienen und eine Ip und Port in die Maske eines Programms eingeben kann, kann Server unspielbar machen.

Wenn man einen Linux Server benutzt, ist das effizienteste, mittels der IPtables betreffende Pakete zu filtern. Je nach Typ des Angriffs blockiert man die Pakete vollständig, oder lässt nur eine bestimmte Anzahl pro Sekunde durch.  
Kleinere Skripte, die IPtable Regeln laden, mit denen man den Print Spam in den Griff kriegen kann:  
[https://github.com/Arie/tf2scripts/](https://github.com/Arie/tf2scripts/blob/master/rate-limit-iptables-querycache.rb)  
[http://www.vanillatf2.org/](http://www.vanillatf2.org/2011/01/fighting-dos-attacks/)

Bei folgenden Beispielen ist $i der jeweilige Gameserverport und $IPTABLES ist mit "/sbin/iptables" definiert:  
UDP Shortpackes könnte man so filtern

```bash
$IPTABLES -A INPUT -p udp -m udp --dport $i -m length --length 0:28 -j DROP
```

Oder

```bash
$IPTABLES -A INPUT -p udp -m udp --dport $i -m length --length 0:32 -j DROP
```

Bei einem RCON Bombardement kann dies hier helfen

```bash
$IPTABLES -A INPUT -p tcp -m tcp --dport $i -m hashlimit --hashlimit-upto 2/sec --hashlimit-burst 1 --hashlimit-mode srcip,dstip,dstport --hashlimit-name PACKET_LIMIT_$i -j ACCEPT
```

Diese Methoden setzten natürlich voraus, dass man Rootzugang zu dem Hostystem hat.  
Mietet man einen Server an, muss der Hoster diese Maßnahme treffen. Leider gibt es immer wieder Hoster, die so etwas nicht machen wollen, oder wohl auch nicht können und dann Vorwände vorschieben. Es läge zwar in ihrem Interesse, diesen Typ von Angriff zu blocken, da er ja zusätzliche CPU Leistung frisst und man einen unzufriedenen Kunden hat, aber wenn man keine Ahnung von der Materie hat, dann kann man ja auch nichts unternehmen. An dieser Stelle sollte man sich dann überlegen, ob man sich den richtigen Anbieter rausgesucht hat und gegebenen Falls den Vertrag kündigen.

Unternimmt der vermietende Anbieter nichts auf der IPtabel Ebene, kann man sich aber unter Umständen mit Servertools helfen:  
Zum einen kann hier der [DoS Attack Fixer](http://sourceserver.info/wiki/daf) eingesetzt werden. Auf War Servern in ESL Spielen dürfen aber keine Servertools außer zBlock installiert sein. Deswegen ist dieses Servertool interessant für Puplic Server.

Ich meine, dass [zBlock](http://zblock.mgamez.eu/) ebenfalls dazu in der Lage ist, solche Attacken abzuwehren. Dieses Servertool sollte aber nur auf Warservern eingerichtet werden und kann deswegen von Puplic Server Betreibern nicht eingesetzt werden.

