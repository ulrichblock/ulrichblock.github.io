---
title: "PHP Gameserver Query Skript"
tags: ["php", "game-server"]
published: true
date: "2010-12-15"
---

Weil es so wenige Zeilen sind, hier mal ein universelles PHP Gameserver Query Skript. Es setzt voraus, dass man das Programm quakestat ausführen kann. Dieses veranlasse ich das Query Ergebnis im XML Format auszugeben. Aus dem XML Ergebnis wird dann ein Array erstellt, aus dem man sich dann die gewünschten Werte herausholen kann.

```php
<?php

server[status];
$name=$xml->server->name;
$maxplayers=$xml->server->maxplayers;
$numplayers=$xml->server->numplayers;
// Geht bei HL2, welcher Wert im Array für andere genommen werden muss, mal selber testen
$gamename=$xml->server->rules->rule[2];
// Ein kleiner Output
echo "Server is $status";
echo "<br></br>$gamename";
echo "<br></br>Players: $numplayers/$maxplayers";
?>
```

Hier mal Beispielhaft die Ausgabe bei einem Counter-Strike: Source Server:

```xml
<qstat>
    <server address="111.111.111.111:27015" status="UP" type="A2S">
    <hostname>85.25.26.199:27015</hostname>
    <name>CSS Servername vom User eingestellt</name>
    <gametype>cstrike</gametype>
    <map>de_dust2</map>
    <numplayers>0</numplayers>
    <maxplayers>16</maxplayers>
    <ping>7</ping>
    <retries>1</retries>
    <rules>
        <rule name="protocol">F</rule>
        <rule name="gamedir">cstrike</rule>
        <rule name="gamename">Counter-Strike: Source</rule>
        <rule name="dedicated">1</rule>
        <rule name="sv_os">linux</rule>
        <rule name="password">1</rule>
        <rule name="secure">1</rule>
        <rule name="version">1.0.0.56</rule>
        <rule name="coop">0</rule>
        <rule name="deathmatch">1</rule>
        <rule name="decalfrequency">60</rule>
        <rule name="mp_autoteambalance">0</rule>
        <rule name="mp_c4timer">50</rule>
        <rule name="mp_fadetoblack">0</rule>
        <rule name="mp_flashlight">1</rule>
        <rule name="mp_footsteps">1</rule>
        <rule name="mp_freezetime">6</rule>
        <rule name="mp_friendlyfire">1</rule>
        <rule name="mp_limitteams">20</rule>
        <rule name="mp_maxrounds">0</rule>
        <rule name="mp_roundtime">2</rule>
        <rule name="mp_startmoney">800</rule>
        <rule name="mp_timelimit">0</rule>
        <rule name="mp_winlimit">0</rule>
        <rule name="sv_accelerate">5</rule>
        <rule name="sv_airaccelerate">10</rule>
        <rule name="sv_alltalk">0</rule>
        <rule name="sv_cheats">0</rule>
        <rule name="sv_contact">kontakt@mail.de</rule>
        <rule name="sv_friction">4</rule>
        <rule name="sv_gravity">800</rule>
        <rule name="sv_maxspeed">320</rule>
        <rule name="sv_password">1</rule>
        <rule name="sv_pausable">0</rule>
        <rule name="sv_stepsize">18</rule>
        <rule name="sv_tags">ESL Gather,friendlyfire</rule>
        <rule name="sv_voiceenable">0</rule>
        <rule name="tv_enable">0</rule>
        <rule name="tv_password">0</rule>
        <rule name="tv_relaypassword">0</rule>
    </rules>
    </server>
</qstat>
```

Das Array dazu:

```
object(SimpleXMLElement)#1 (1) { 
 ["server"]=> object(SimpleXMLElement)#9 (10) { 
 ["@attributes"]=> array(3) { 
 ["type"]=> string(3) "A2S" 
 ["address"]=> string(18) "111.111.111.111:27015" 
 ["status"]=> string(2) "UP"
 } 
 ["hostname"]=> string(18) "111.111.111.111:27015" 
 ["name"]=> string(37) "CSS Servername vom User eingestellt" 
 ["gametype"]=> string(7) "cstrike" 
 ["map"]=> string(8) "de_dust2" 
 ["numplayers"]=> string(1) "0" 
 ["maxplayers"]=> string(2) "16" 
 ["ping"]=> string(1) "7" 
 ["retries"]=> string(1) "1" 
 ["rules"]=> object(SimpleXMLElement)#10 (1) { 
 ["rule"]=> array(40) { 
 [0]=> string(1) "F" 
 [1]=> string(7) "cstrike" 
 [2]=> string(22) "Counter-Strike: Source" 
 [3]=> string(1) "1" 
 [4]=> string(5) "linux" 
 [5]=> string(1) "1" 
 [6]=> string(1) "1" 
 [7]=> string(8) "1.0.0.56" 
 [8]=> string(1) "0" 
 [9]=> string(1) "1" 
 [10]=> string(2) "60"
 [11]=> string(1) "0" 
 [12]=> string(2) "50" 
 [13]=> string(1) "0" 
 [14]=> string(1) "1" 
 [15]=> string(1) "1" 
 [16]=> string(1) "6" 
 [17]=> string(1) "1" 
 [18]=> string(2) "20" 
 [19]=> string(1) "0" 
 [20]=> string(1) "2" 
 [21]=> string(3) "800" 
 [22]=> string(1) "0" 
 [23]=> string(1) "0" 
 [24]=> string(1) "5" 
 [25]=> string(2) "10" 
 [26]=> string(1) "0" 
 [27]=> string(1) "0" 
 [28]=> string(26) "kontakt@mail.de" 
 [29]=> string(1) "4" 
 [30]=> string(3) "800" 
 [31]=> string(3) "320" 
 [32]=> string(1) "1" 
 [33]=> string(1) "0" 
 [34]=> string(2) "18" 
 [35]=> string(23) "ESL Gather,friendlyfire" 
 [36]=> string(1) "0" 
 [37]=> string(1) "0" 
 [38]=> string(1) "0" 
 [39]=> string(1) "0"
 }
 }
 }
} 
```

