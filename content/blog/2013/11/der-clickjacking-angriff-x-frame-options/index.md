---
title: "Der Clickjacking Angriff, X-Frame-Options"
tags: []
published: true
date: "2013-11-23"
---

## Einleitung

Bei einem Clickjacking Angriff wird ein User dazu verleitet auf einen Button, Link, Bild, usw. zu klicken, auf das er nicht klicken wollte. Typischerweise macht man dies mit einem, für den User unsichtbaren Iframe.  
Im schlimmsten Fall kann durch den Angriff ein Account, oder sogar der PC des Opfers übernommen werden.

Wer testen möchte, ob seine Seite anfällig für einen solchen Angriff ist, der kann sich ein Testscript am Ende des Beitrages [Click Jacking Test Script](http://www.cirt.net/clickjack-test) hernunterladen.

Wie also schützen? Das Problem dieses Angriffstyps ist schon länger bekannt und es wurden sowohl Server, als auch Clientseitige Lösungen entwickelt. Leider haben alle gemein, dass sie keinen 100% Schutz bieten. Die Gefahr kann aber deutlich verringert werden.

## Client

Clientseitig kann man Browserplugins installieren mit denen man das Laden von Fremdinhalten auf einer Seite Regulieren kann.  
Bei Firefox gibt es z.B. das Plugin [RequestPolicy](https://addons.mozilla.org/de/firefox/addon/requestpolicy/).  
Google Chrome user können sich mit dem [Cross-Domain Request Filter](https://chrome.google.com/webstore/detail/cross-domain-request-filt/ggdfifojddnlfciogdedpldahnbnjmhd) schützen.

Beide haben gemein, dass man beim erstmaligen Betreten einer Webseite oft nach konfigurieren muss.

## Server

Von allen modernen Browsern unterstützt, kann man den Webserver die X-FRAME-OPTIONS mitsenden lassen. Es gibt zwei mögliche Optionen:  
*SAMEORIGIN*  
Die Seite wird in einem iframe angezeigt, wenn der Iframe von der selben URL generiert wird, wie das einzubindende Ziel  
*DENY*  
Die Seite kann nicht in einem Frame angezeigt werden.

Eintrag für den Nginx im Server Block:

```
add_header X-Frame-Options DENY;
```

Eintrag in die .htaccess Datei beim Apache2:

```
Header append X-FRAME-OPTIONS "DENY"
```

## Javascript

Man kann auch mit Javascript arbeiten. [OWASP](https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet) empfiehlt im Head den HTML Body auszublenden. Mit einem Javascript im Head wird diese Anweisung gleich wieder gelöscht, wenn es sich nicht um eine Iframe Einbindung handelt.

```html
<head>
	...
	<style id="antiClickjack">body{display:none !important;}</style>
	<script> 
	  if (self == top) {
		var theBody = document.getElementsByTagName('body')[0]
		theBody.style.display = "block"
	  } else { 
		top.location = self.location 
	  }
	</script>
	...
</head>
```

