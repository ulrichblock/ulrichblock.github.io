---
title: "Steam-Service wird installiert"
tags: ["steam"]
published: true
date: "2012-02-06"
---

Beim Starten von Steam begrüßte mich heute folgende Meldung:

> Steam-Service wird installiert
> 
> Zum korrekten Ausführen von Steam mit dieser Version von Windows muss die Steam-Service-Komponente innstaliert sein.  
> Für die Installation der Service-Komponente sind Administratoren-Zugriffsrechte erforderlich.
> 
> SERVICE INSTALLIEREN ABBRECHEN

Ich war erstmal reichlich verwundert, zumal Steam dies bisher nicht getan hatte. Bevor ich auf den Button *"SERVICE INSTALLIEREN"* klicke, wollte ich erst einmal wissen, ob dieses Fenster überhaupt zu Steam gehört, oder mir etwas untergeschoben worden ist. Mein Nutzerverhalten kann man zwar als vorsichtig bezeichnen, dennoch kann man nie wissen, was man sich trotzdem eingefangen haben könnte.

Eine Google Suche brachte nichts 100% konkretes zu Tage. Man konnte aber sehen, dass die Nachricht von Valve bzw. Steam kommt. Damit war meine erste Befürchtung, dass mein System kompromittiert ist, zum Glück falsch.

Tendenziell ist es wohl ein Problem mit der Rechteverwaltung des Windows Users. Steam benötigt für die Installation eines Updates wohl Administratorrechte. Bei der Autoerkennung dieser Rechte muss ein Problem bestehen, so dass der Updater nicht direkt gestartet werden kann.

Ich entschied mich dafür, den *"SERVICE INSTALLIEREN"* Button zu betätigen. Die Windows Administrator Warnung erschien. Sie bestätigte mir, dass die Anwendung von Valve kommt und als solche verifiziert ist.  
Nachdem ich Windows erlaubt hatte, das Programm auszuführen, wurde der Updater gestartet. Im Anschluss startete Steam ohne weitere Probleme.

Mein Fazit:  
Lieber einmal zu vorsichtig sein, als irgendwann das Nachsehen zu haben.

