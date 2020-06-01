---
title: "Schon einmal daran gedacht, &#8230;"
tags: ["game-server", "security"]
published: true
date: "2011-10-01"
---

dass man mit Gamserverplugins mehr anstellen kann, als nur Adminverwaltung und Spielmodifikationen?

In letzter Zeit habe ich viel darüber geschrieben, welche Maßnahmen man ergreifen sollte, um den Zugriff aus Gameserver Installationen abzusichern. Je nach Hostinglösung wird bereits einiges im Vorfeld verhindert und oder die Folgen von erfolgreich durchgeführten kleineren Exploits beseitigt.

Bei den Valve Servern der HL1 und HL2 Serie ist es möglich, eigene Plugins zu kompilieren und die .so Dateien vom Gameserver ausführen zu lassen.  
Diese Möglichkeit wird gegeben, damit die Community Erweiterungen und Modifikationen zu dem jeweiligen Spiel schreiben kann. Von dieser Möglichkeit wird auch rege Gebrauch gemacht, schaut man sich die Vielzahl von Erweiterungen, wie z.B. Sourcemod, Eventscripts und deren Plugins an. Diese Art der Nutzung war und ist wohl auch Valves Intention.

Anders genutzt, kann diese Freiheit den Gameserver zum größten Sicherheitsproblem von allen machen. Man kann sich z.B. etwas schreiben, dass den Shellzugriff über Rcon erlaubt. So lange es möglich ist, Plugins hochzuladen, besteht demnach immer ein Riskio.  
Ist dieser Schritt erst einmal gemacht, kann man mit dem Shellzugang sehr viel Schaden anrichten. Aus diesem gutem Grund wird in der Regel Gameserverkunden ja auch kein Shellzugriff eingeräumt.

Dass solche Handlungen auf einem fremden System strafbar sind, sollte wohl jedem klar sein.

Man sollte als Hoster deshalb darauf achten, dass Kunden, nicht per Shell in die Verzeichnisse schauen können, die sie nichts angehen. Ebenso sollte es Pflicht sein, sein System aktuell zu halten, um weniger Angriffsfläche für weitergehende Exploits zu bieten.

