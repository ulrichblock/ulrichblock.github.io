---
title: "Nginx als Reverse Proxy mit Cache und Apache2"
tags: ["nginx"]
published: true
date: "2012-06-16"
---

Heute war mal wieder Bastelzeit am Server. Nachdem ich Worpress auf die aktuelle Version 3.4 gebracht hatte, bin ich das Projekt Nginx vor dem Apache2 als Reverse Proxy mit Caching angegangen.

Als Anregung dafür habe ich die Blogbeiträge [nginx reverse proxy cache wordpress apache](http://wp-performance.com/2010/10/nginx-reverse-proxy-cache-wordpress-apache/ "nginx reverse proxy cache wordpress apache") und [nginx als reverse proxy fuer statische inhalte vor apache](http://www.debianroot.de/server/nginx-als-reverse-proxy-fuer-statische-inhalte-vor-apache-1345.html "nginx als reverse proxy fuer statische inhalte vor apache") genommen.  
Ein weiteres HowTo für diese Thematik zu schreiben ist in Anbetracht der Fülle von bereits bestehenden wohl Zeitverschwendung. Deswegen beschränke ich mal auf die Darstellung des Ergebnis meiner Bastelei.

Ich hatte mir von der Aktion zwar eine Entlastung versprochen, aber das Ergebnis hat mich dann doch sehr positiv überrascht.  
Getestet habe ich mit der Apache Benchmark und habe jeweils 500 Request mit einer Concurrency von 50. Dabei hatte ich den Reverse Proxy am Anfang erst einmal auf dem Port 8080 laufen und habe dort die Einstellungen vorgenommen und getestet.  
Erst, als ich die Einstellungen zu meiner Zufriedenheit abgeschlossen hatte, wurden die Ports beim Apache und Nginx umgestellt und der Apache auf das Lauschen auf dem Localhost eingeschränkt.

Die Benchmarks der unterschiedlichen Konfigurationen sprechen für sich.

Ohne den vorgeschalteten Nginx schaffte der Apache2 lediglich:

> Requests per second: 8.08 \[#/sec\] (mean)

Mit dem Nginx als Proxy ergaben sich dann:

> Requests per second: 1485.38 \[#/sec\] (mean)

Wenn das keine Verbesserung ist, dann weiß ich auch nicht weiter.

Die komplette Apache2 Messung:

> ab -n 500 -c 50 /
> 
> Server Hostname: www.ulrich-block.de  
> Server Port: 80
> 
> Document Path: /  
> Document Length: 34243 bytes
> 
> Concurrency Level: 50  
> Time taken for tests: 61.872 seconds  
> Complete requests: 500  
> Failed requests: 350  
>  (Connect: 0, Receive: 0, Length: 350, Exceptions: 0)  
> Write errors: 0  
> Non-2xx responses: 24  
> Total transferred: 5265078 bytes  
> HTML transferred: 5166433 bytes  
> Requests per second: 8.08 \[#/sec\] (mean)  
> Time per request: 6187.249 \[ms\] (mean)  
> Time per request: 123.745 \[ms\] (mean, across all concurrent requests)  
> Transfer rate: 83.10 \[Kbytes/sec\] received
> 
> Connection Times (ms)  
>  min mean\[+/-sd\] median max  
> Connect: 4 4 0.3 4 6  
> Processing: 92 5609 12592.8 561 61867  
> Waiting: 92 5562 12578.3 561 61840  
> Total: 96 5614 12592.9 566 61872
> 
> Percentage of the requests served within a certain time (ms)  
>  50% 566  
>  66% 3633  
>  75% 6219  
>  80% 6817  
>  90% 8385  
>  95% 39301  
>  98% 59269  
>  99% 60499  
>  100% 61872 (longest request)

Mit Reverse Proxy und Caching:

> ab -n 500 -c 50 :8080/
> 
> Server Hostname: www.ulrich-block.de
> 
> Document Path: /  
> Document Length: 7749 bytes
> 
> Concurrency Level: 50  
> Time taken for tests: 0.337 seconds  
> Complete requests: 500  
> Failed requests: 0  
> Write errors: 0  
> Total transferred: 4003000 bytes  
> HTML transferred: 3874500 bytes  
> Requests per second: 1485.38 \[#/sec\] (mean)  
> Time per request: 33.661 \[ms\] (mean)  
> Time per request: 0.673 \[ms\] (mean, across all concurrent requests)  
> Transfer rate: 11613.24 \[Kbytes/sec\] received
> 
> Connection Times (ms)  
>  min mean\[+/-sd\] median max  
> Connect: 4 10 3.9 10 19  
> Processing: 11 22 4.4 22 35  
> Waiting: 4 9 2.9 10 16  
> Total: 21 32 2.7 32 43
> 
> Percentage of the requests served within a certain time (ms)  
>  50% 32  
>  66% 33  
>  75% 34  
>  80% 34  
>  90% 35  
>  95% 37  
>  98% 39  
>  99% 40  
>  100% 43 (longest request)

