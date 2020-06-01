---
title: "Ist mein Server Steam Secured?"
tags: ["php", "game-server"]
published: true
date: "2012-08-09"
---

Valve hat vor kurzem seine API erweitert. Nun ist es möglich, abzufragen, ob der Server bei den Steam Masterservern bekannt und VAC secured ist.  
Die Abfrage ist per JSON und XML möglich. Für einen einzelnen Server kann man folgendes Skript verwenden:

```php
<?php
// Define the Serveraddress
$ip='1.1.1.1';
$port='27015';

// Get the JSON reply
$theResponse=@file_get_contents('http://api.steampowered.com/ISteamApps/GetServersAtAddress/v0001?addr='.$ip.':'.$port.'&amp;format=json');

// Decode the JSON if Request was succesful
if ($theResponse) {
	// decode the string
	$json=@json_decode($theResponse);

	// If JSON response process
	if (isset($json->response->servers[0]->secure) and $json->response->servers[0]->secure==1) {
		echo 'Server is secured';
	} else if (isset($json->response->servers[0]->secure) and $json->response->servers[0]->secure==0) {
		echo 'Server is unsecure';
	} else {
		echo 'Server is not listed with steam master servers';
	}
}
```

Man kann auch mehrere Server einer IP gleichzeitig abfragen:

```php
<?php
// Define the Serveraddress
$ip='1.1.1.1';

// Get the JSON reply
$theResponse=@file_get_contents('http://api.steampowered.com/ISteamApps/GetServersAtAddress/v0001?addr='.$ip.'&amp;format=json');

// Decode the JSON if Request was succesful
if ($theResponse) {
// decode the string
$json=@json_decode($theResponse);

// Decode the JSON if Request was succesful
if ($theResponse) {
	if ($json) {
		foreach ($json->response->servers as $server) {
			// If JSON response process
			if (isset($server->secure) and $server->secure==1) {
				echo 'Server is secured'.$server->addr.'<br />';
			} else if (isset($server->secure) and $server->secure==0) {
				echo 'Server is unsecure'.$server->addr.'<br />';
			} else {
				echo 'Server '.$server->addr.'is not listed with steam master servers<br />';
			}
		}
	}
}
```

