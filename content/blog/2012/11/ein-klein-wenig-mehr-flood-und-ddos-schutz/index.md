---
title: "Ein klein Wenig mehr Flood und DDOS Schutz"
tags: ["nginx", "Apache2"]
published: true
date: "2012-11-24"
---

In einem [früheren Artikel](/nginx-als-reverse-proxy-mit-cache-und-apache2/ "Nginx als Reverse Proxy mit Cache und Apache2") hatte ich beschrieben, dass ich einen Nginx Server als Reverse Proxy vor meinen Apachen geschaltet habe.

Bei neueren Tests mit deutlich mehr gleichzeitigen Verbindungen und Wiederholungen habe ich den Webserver jedoch unbeabsichtigter Weise selber unerreichbar gemacht. Für meinen Server hatte die Benchmark eine Auswirkung, wie eine kleine DDOS/Flood Attacke.  
Durch die vielen Anfragen auf die PHP Skripte und damit auch die MYSQL Datenbank dahinter, war die Hardware einfach am Limit.

Da ich beim para virtualisierten Vserver keinen vollen Zugriff auf die IP Tables habe, musste eine Lösung auf Ebene der Serverdienste her.

Als erstes habe ich im **http** Block der nginx.conf eine Limit Zone eingerichtet:

```
http {
	(...)
	limit_req_zone $binary_remote_addr zone=flood:10m rate=10r/s;
	(...)
}
```

Die Zone trägt den Namen **flood**, lässt pro IP 10 gleichzeitige Verbidungen zu und kann 10MB Informationen speichern.

Im zweiten Schritt habe ich die Zone im **server** Block des Vhosts für die **location** der PHP Dateien eingetragen:

```
server {
	(...)
	location ~ \.php {
		limit_req zone=flood burst=20;
		(...)
	}
	(...)
}
```

Dabei wird ein Burst von 20 Requests in der Sekunde zugelassen, damit bei einem Aufruf einer Seite mit vielen AJAX Elementen keine Probleme entstehen.

In die **location** für statische Dateien wird die Zone **nicht** eingetragen. Hat man viele statische Dateien, könnte sich der Seitenaufbau spürbar verlangsamen bzw. alle Dateien erst nach mehrmaligen Aufruf der Seite beim Benutzer vorhanden sein.

Wenn man Zugriff auf die IP Tables hat, sollte man besser hier ansetzen, als beim Webserver. Des Weiteren ist noch zu sagen, dass sowohl die vorgeschlagene Konfiguration, als auch die IP Tables nur kleinere Attacken aufhalten können, die das Ziel haben, die CPU und Ram Ressourcen des Servers anzugreifen. Wenn man mit mehr Bandbreite angegriffen wird, als man selber zur Verfügung hat, wird einem die Konfiguration nicht viel helfen und eine Hardwarefirewall muss her.

