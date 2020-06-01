---
title: "CMS unabhängiges Protected Abfrage Skript für Tekbase"
tags: ["php", "Tekbase"]
published: true
date: "2010-11-06"
---

Das Webinterface Tekbase von Teklab beinhaltet so genannte "protected Gameserver", die vor Serverseitigen Cheatprogrammen schützen sollen.

Damit Gegner abfragen können, ob der jeweilige Gameserver in diesen Modus versetzt wurde, gibt es ein Abfrageskript von Teklab gleich mitgeliefert. Komplett mit Formular und sofort einsatzbereit ist es aber nur, wenn man auch das CMS von Teklab benutzt.

Benutzt man das CMS nicht, muss man das Formular usw., selber schreiben, dass dann eine Abfrage an Tekbase macht und dessen Antwort verarbeitet.  
Das nicht vorhanden sein einer Einsatzbereiten Abfrage ohne CMS soll wohl auch eine kleine Aufmunterung sein, dass CMS zu kaufen bzw. zu mieten.

Nicht jeder setzt auf das CMS von Teklab. In diesem Fall kommt man nicht darum herum die Abfrage selber zu programmieren.

Ich habe gestern eine CMS unabhängiges Abfrageskript für den Hoster <http://exklusive-server.de> geschrieben, dass die Eingabe des Users validiert, und nur im Falle des Formates IP:PORT eine Abfrage an Tekbase richtet und dessen Antwort auswertet.  
Falls irgendwann mal IPv6 Adressen ein Thema bei Gameservern werden sollten, ist das Skript jetzt schon in der Lage, auch diese zu verarbeiten.

Wer Interesse an dem Skript hat, soll mich anschreiben.

