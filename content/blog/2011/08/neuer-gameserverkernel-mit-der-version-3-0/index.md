---
title: "Neuer Gameserver Kernel mit der Version 3.0"
tags: ["game-server", "Kernel"]
published: true
date: "2011-08-01"
---

Ich biete schon seit einiger Zeit Kernel zum download an. Mittlerweile sind sie schon ganz schön angestaubt und bräuchten eigentlich ein Update.  
Damit habe ich mir zum einen aus Zeitmangel, zum anderen, weil es nicht mehr besonders notwendig war, Zeit gelassen. Als Zeitpunkt für ein Update hatte ich mir das Release der stable Kernel Version 3.0 vorgenommen. Diese Version wurde mittlerweile veröffentlicht.  
Ich habe nun einen Kernel mit dieser Version kompiliert und ein paar Tage getestet. Da es zu keinen Problemen gekommen ist, gebe ich ihn nun zum Download frei. Zu finden ist er auf meiner [Kernelseite](/gameserverkernel/). Dort ist er als *3.0-ub-100hz* bezeichnet und auch weiter beschrieben.

Das ein Update nicht so wichtig war, lag an folgenden Gründen:  
Seitdem Debian in der Version 6.0 vorliegt, hat für Debian Nutzer die Bedeutung eines selber gebackenen Kernels im Gameserverbereich abgenommen. Mit 6.0 wird ein Kernel mit der Version 2.6.32 ausgeliefert, der im Regelfall schon mehr als ausreichend für den Betrieb von Gameservern ist.

Des Weiteren hat das Thema Optimierung des Kernels für Gameserver bezüglich Half-Life 2 basierender Server noch weiter an Brisanz verloren, als Valve begonnen hat, die Engine abermals zu überarbeiten, um mittelfristig auf "fps_max" ganz verzichten zu können.  
Durch die ersten Schritte in diese Richtung schafft so gut wie jeder halbwegs aktuelle Kernel, der nicht vollkommen verkonfiguriert ist, sehr konstante FPS Werte.

Es ist demnach schlichtweg nicht mehr so wichtig, viel am Kernel zu basteln, um etwaige Schwächen am Serverprogramm ausgleichen zu können.

Man sollte vielleicht auch noch darauf hinweisen, dass es, mal abgesehen von Kernelhackern, die Teile des Kernels speziell für den Gameserverbetrieb umschreiben, keine Gameserverkernel als solche gibt.  
Wenn man ehrlich ist, sind es lediglich ein paar Einstellungen am Kernel, die erfahrungsgemäß zu einem reibungsloseren Betrieb von Gameservern beitragen.  
Um den technisch nicht so versierten Usern besser vermitteln zu können, dass so ein Kernel Vorteile bringt, spricht man von einem Gameserverkernel.

Obwohl es nicht mehr so wichtig ist, setze ich dennoch lieber auf neuere Versionen des Kernels, als die von Debian mitgelieferte.  
Seit der Einführung von 2.6.32 gab es wesentliche Änderungen am Kernel, wie zum Beispiel das Entfernen des Big Kernel Lock und einer größeren Überholung des Complete Fair Schedulers. In der Summe führen diese Neuerungen oft zu einem besseren Verhalten des Gesamtsystem in Situationen unter einem hohem Load.

