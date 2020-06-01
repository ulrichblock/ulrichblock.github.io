---
title: "Automatisch FTP Links im Firefox Browser mit einem FTP Client öffnen"
tags: ["Firefox", "FileZilla"]
published: true
date: "2011-03-24"
---

Ich habe oft mit FTP Links zu tun. Beim Download von Dateien stellt es kein Problem dar, die Funktionen des Browsers zu nutzen und die gewünschten Dateien mit diesem zu downloaden.

In vielen Fällen möchte ich aber auch Dateien bearbeiten und neue hinzufügen. Bei diesem Wunsch stoßen alle Browser an ihre Grenzen. Firefox kann man zwar mit Plugins nachrüsten, ich verwende aber lieber meinen FTP Client Filezilla.

Ich möchte die Daten aus den FTP Links im Browser nicht jedes mal manuell in den FTP Client übertragen. Deswegen habe ich bei meinem Firefox Browser das Verhalten beim Öffnen von FTP Links verändert. Klicke ich im Browser nun auf einen Link im Format "ftp://username@ip", so wird mein FTP Client geöffnet, der automatisch die Daten des angeklickten Links verwendet.

Damit dies funktioniert muss man folgende Schritte vornehmen:  
  
Als erstes gibt man in der Adresszeile about:config ein. beim Öffnen erscheint ein Dialog, bei dem bestätigt werden muss, dass man vorsichtig sein wird. Nach der Bestätigung wird einem dann die Seite mit den Configwerten angezeigt.

Mit einem Rechtsklick in das Fenster kann man ein Menu öffnen, mit dessen Hilfe man neue Werte einträgt.

Im ersten Schritt legt man einen neuen String mit den Eigenschaftennamen **network.protocol-handler.app.ftp** an.  
Nachdem man den Eigenschaftennamens mit OK bestätigt hat, erscheint ein neues Eingabefeld. Dieses sollte man leer lassen und abermals bestätigen.

Im zweiten Schritt legt man einen neuen Boolean mit dem Eigenschaftennamen **network.protocol-handler.external.ftp** an.  
Nach dem Bestätigen des Eigenschaftennamens mit OK, muss man in einem neuen Eingabefeld dem Bolean einen Wert zuzuweisen und wieder bestätigen. Dieser Wert muss **true** sein.

Im dritten und letzten Schritt ruft man einen FTP Link im Browser auf. Durch den Aufruf wird man gefragt, was mit dem FTP Link gemacht werden soll. Hier gibt man dann an, dass er mit dem FTP Client seiner Wahl geöffnet werden soll.

