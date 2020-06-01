---
title: "The Logjam Attack"
tags: ["security"]
published: true
date: "2015-05-23"
---

Vor kurzem hatte ich einen Beitrag erstellt, der erklärt, wie man [HTTPS inklusive Forward Security beim Nginx konfiguriert](/https-und-forward-security-mit-nginx/). Als nun Nachrichten von einer „neuen" Lücke durch die Medien gingen, die nach Weltuntergang klangen, wie z.B. [hier](http://www.spiegel.de/netzwelt/web/logjam-sicherheitsluecke-gefaehrdet-zehntausende-websites-a-1034720.html) und [hier](http://www.heise.de/security/meldung/Logjam-Attacke-Verschluesselung-von-zehntausenden-Servern-gefaehrdet-2657502.html), machte ich mir schon etwas sorgen.

Zum Glück waren es nur reißerische Texte, die Klicks generieren sollten. Ob ihr selber betroffen seid, könnt ihr unter der URL <https://weakdh.org/sysadmin.html> nachprüfen. Diese Seite testet nur gegen Logjam. Einen ausführlicheren Test kann man unter [https://www.ssllabs.com/](https://www.ssllabs.com/ssltest/index.html) ausführen lassen.

Wer seinen Server nach gängigen Methoden und Erkenntnissen vor Bekannt werden von Logjam eingestellt hat, wird zumindest einen 2048bit Diffie-Hellman Parameter erstellt haben. In meinem voran gegangener Blogbeitrag hatte ich sogar 4096bit empfohlen.  
Herausgefunden wurde nun, dass diejenigen betroffen sind, die keinen, oder zu schwachen Parameter benutzen. So sind 512bit wohl sehr einfach, 768bit schafft wohl jeder etwas stärkere CPU Verbund und für 1024bit muss wohl ein etwas größeres Cluster her.

Mit anderen Worten sind wieder einmal nur diejenigen betroffen, die ihre Server, aus welchen Gründen auch immer, nachlässig betreuen.

