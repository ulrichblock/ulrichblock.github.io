---
title: "Sonderbares Verhalten des TSDNS Servers"
tags: ["Teamspeak 3"]
published: true
date: "2011-12-22"
---

Ich nutze seit kurzem den TSDNS Server, der mit der Teamspeak 3 Serversoftware mitgeliefert wird. Dabei gehe ich so vor, dass ich als TSDNS Adressen Subdmains zu der Subdomain *ts.domain.tld* verwende.  
Ein entsprechender A Record *\*.ts.domain.tld A 1.1.1.1* mit einer Wildcard wurde angelegt.

Außer TSDNS soll nichts Domain bezogenes auf diesem Server laufen. Der Hostname und ein Reserve DNS Eintrag wurde deswegen nicht auf *ts.domain.tld* eingestellt. Weil diese Subdomain nicht in Gebrauch ist, wurde kein A Record zu *ts.domain.tld* erstellt.

Nach dem Konfigurieren der *tsdns_settings.ini* wurde dann noch der TSDNS Server geupdatet.

In der Theorie sollte nun alles gehen. Nicht so in der Praxis. Ein Ping bzw. Tracert auf eine Subdomain zur Subdomain landet bei der richtigen IP. Beim Verbinden mit dem Teamspeak 3 Client gibt es aber Probleme. Egal welche Subdomain man benutzt, man landet immer auf dem virtuellen Teamspeak 3 Server dieser IP, der auf dem Standardport betrieben wird.

Sobald man einen A Record für die nicht verwendete Subdomain *ts.domain.tld* erstellt und die Änderung übernommen wurde, stoppt dieses Verhalten. Ab diesem Zeitpunkt ist es dann möglich, auf den virtuellen Teamspeak 3 Server zu verbinden, der in der *tsdns_settings.ini* angegeben wurde.

