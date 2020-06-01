---
title: "Update für den Usermanager"
tags: ["Apache2"]
published: true
date: "2011-06-28"
---

Ich habe den [Usermanager](/?page_id=72) geupdatet. Neben einer grundlegenden Überholung der php.ini, bietet er nun die Möglichkeit, mod_security2 samt den gotroot Regeln zu installieren.  
Des Weiteren gebe ich im Vhost nun ein paar Regeln vor, die den Zugriff auf manche Dateien und Ordner vom Browser aus verhindern. Sollte der Webserver einmal PHP als Datei ausliefern, besteht so nicht die Gefahr, dass jemand die Config Dateien mit den Mysql Zugangsdaten, oder ähnliches herunterladen kann.  
Je nach eingesetzter Software muss man diese aber noch anpassen.

mod_security2 ist eine Software Firewall für den Apache2, die, sofern sie ordentlich konfiguriert ist, viele unbekannte und bekannte Attacken auf unsichere PHP Skripte abfangen kann. Ebenso kann sie gegen Spammer helfen.  
Beim Installieren sollte einem bewusst sein, dass die Firewall sicherlich kein Allheilmittel ist. Aber besser etwas, als nichts filtern. Als letztens ein XSS Hack für Sourcebans die Runde machte, hat mod_security2 mit den Gotroot Regeln erfolgreich die versuchten Angriffe auf meine Installationen abgewehrt.

Man kann sich nun die Frage stellen, warum ich meine Vhosts über ein Bash Skript verwalte, wo es doch zahlreiche Interfaces wie Plesk, oder Froxlor gibt.

Zum einen bin ich der einzige, der die Vhosts verwalten muss. Es entfällt also die Notwendigkeit, dass ich Dritten Zugangsrechte geben muss.

Zum anderen kommt läuft auf den Servern, auf dem ich das Skript einsetze, der Mailserver lediglich, um die PHP Mailfunktion nutzen zu können. Es gibt also keine Notwendigkeit Email Adressen zu verwalten.

Zum anderen versuche ich puristisch bei den installierten Anwendungen zu sein. Alles was ich nicht unbedingt brauche, kommt nicht auf den Server. Wenn man diese Einstellung hat, ist es optimaler, bei Bedarf ein Bash Skript aufzurufen, als permanent ein Webinterface pflegen zu müssen.

Die grundlegenden Funktionen, einen User, samt Vhost anzulegen und wieder zu löschen erfüllt das Skript problemlos.

