---
title: "Fallstricke mit Cloudflare.com"
tags: []
published: true
date: "2013-02-03"
---

[Cloudflare](https://www.cloudflare.com/) ist vereinfacht gesagt ein Reverse Proxy Dienst. Er ist kostenlos, sowie in verschiedenen Preis- und [Funktionsklassen](https://www.cloudflare.com/plans) zu haben. Auch in der kostenlosen Version kann Cloudflare:

- die Ladegeschwindigkeit einer Seite durch Caching beschleunigen
- die eigentliche Server IP des Webservers verschleiern
- die Verfügbarkeit der Seite erhöhen
- einen gewissen Schutz vor DDOS und anderen Angriffstypen auf Serverdienstebene bieten
- das Spam aufkommen reduzieren

Was der Dienst nicht kann, ist den Admin von seinen Pflichten entbinden. Der Server und die darauf installierten Webseiten müssen nach wie vor aktuell gehalten werden, um die Angriffsfläche gering zu halten. Denn wenn jemand gezielt angreift und die eigentliche IP des Servers erlangt, wird er wohl über diese und nicht über die Domain angreifen.

Das Einrichten von Cloudflare ist relativ schnell gemacht, wenn der Domainanbieter es zulässt, den Nameserver für die Domain zu setzen. Stellt er die Option nicht bereit, kann man Cloudflare nicht nutzen.

Durch das Benennen von Cloudflare als Nameserver müssen nun alle Subdomains im Interface von Cloudflare verwaltet werden.

Hier ist der erste Fallstrick. Trägt man eine Wildcard wie **\*.domain.tld** ein, werden alle nicht explizit angegeben Subdomains auf die eigentliche IP aufgelöst. Cloudflare unterstützt Wildcards nicht richtig! Ruft der Angreifer eine Zeichensuppe, wie **jgfghffg.domain.tld** als Subdomain auf, kommt er an die IP.  
Ein Wildcard Eintrag sollte wohl überlegt sein.

Der zweite Fallstrick sind etwaige Mailfunktionen von Scripten und Content Management Systemen. Wird der lokale Mailserver benutzt, lässt sich ein etwaiger Angreifer eine Mail, z.B. über ein Registrierungsformular, schicken und findet anhand der Mail die IP heraus. Ein externer Mailserver kann Abhilfe schaffen.

Der nächste Weg sind Scripte, die Verbindungen vom Webserver nach außen aufbauen. Beispielhaft seien mal Statusscripte für Games- und Voiceserver genannt. Diese melden sich mit der Webserver IP. Hat der Angreifer die Möglichkeit das Script auf den Serverdienst seiner Wahl zu richten, kann er über diesen die IP bestimmen. Auch hier kann ein Auslagern helfen.

