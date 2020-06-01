---
title: "Cheat protected Server? Ich denke nicht!"
tags: ["security", "game-server"]
published: true
date: "2011-09-20"
---

Ich bin bereits in vorherigen Artikeln darauf eingegangen, wie man mittels FTP Client und dem Servercommand **plugin_load** bei vielen Hostern den so genannten Protection Modus aushebeln kann:

- [Cheat Protected Server, oder doch nicht?](/cheat-protected-server-oder-doch-nicht/)
- [Cheat protected Server Nr.2](/cheat-protected-server-nr-2/)
- [Cheat protected Server Nr.3](/cheat-protected-server-nr-3/)

Eine wesentlich schlimmere Lücke, die entsteht, wenn der Hoster seinen FTP Client nicht anständig konfiguriert, bzw. System durchdenkt, hatte ich etwas später beschrieben. Mittels FTP Client und einem einfachen Editor ist es damit möglich, beliebigen Shellcode bei dem Hoster auszuführen. Dass ein solchen Server nicht Servercheat sicher ist, sollte klar sein.  
Der Artikel findet sich hier:

- [Gameserverhoster machen das Hacken sehr einfach](/gameserverhoster-machen-das-hacken-sehr-einfach/)

In allen Artikeln gebe ich gleich Hinweise, wie man ein Ausnutzen der Schwächen verhindern kann. In der Regel handelt es sich um LIMIT Anweisungen für den FTP Server, die den Zugriff auf bestimmte Dateien per FTP verhindern.

Es gibt aber noch andere Wege, als einen FTP Client, um die Serverskripte zu manipulieren, den ich bisher nicht beschrieben habe. Das Einfallstor ist dabei der Gameserver selber. Genauer sind es die Möglichkeiten, die man mit Servertools und Plugins bei der Orangebox Engine hat. In den Beispielen wird die Sprache Sourcepawn benutzt, in der man Sourcemodplugins schreibt.

Bevor versucht wird, das beschriebene nachzumachen sollte man sich eines bewusst machen:  
Alle Lücken sollten nur auf eigenen Roootservern getestet werden. Indem Moment, indem man Kunde bei einem Gameserverhoster ist, ist ein Eingriff in dessen Datenverarbeitung sicherlich strafbar.

Im ersten Schritt ermittle ich den Inhalt des Binary und Skript Ordners, um festzustellen, ob der Hoster auf das srcds_run Startskript zurück gereift, oder eine eigene Lösung verwendet. Dies kann man mit einem FTP Client machen, oder einem Plugin. Mein Soucemod Plugincode ist sehr rudimentär, erfüllt aber seinen Zweck:

```c
#define PLUGIN_VERSION "0.1"
public Plugin:myinfo = 
{
 name = "runscripts and binaries check",
 author = "Terrorkarotte",
 description = "POC for testing protection mode and server security",
 version = PLUGIN_VERSION,
 url = "http://ulrich-block.de"
};

public OnPluginStart()
{
 new String:path[PLATFORM_MAX_PATH];
 new Handle:dir = OpenDirectory("../");
 if (dir == INVALID_HANDLE) {
  PrintToServer("Cant go to 'orangebox/'");
  return false;
 } else {
  PrintToServer("I am in 'orangebox/'");
  while (ReadDirEntry(dir, path, sizeof(path))) {
   PrintToServer("%s", path);
  }
  CloseHandle(dir);
 }
 return true;
}
```

Nachdem man weiß, welche Datei überschrieben werden muss, lädt man eine bereits modifizierte Datei per FTP hoch. Dabei kann man z.B. die Dateiendung .bsp verwenden und sie in das maps/ Verzeichnis packen, obwohl es sich um ein Skript handelt. Auf diese Weise kann man zuverlässig jegliche FTP Filter umgehen. Wenn man nun ein zusätzliches Plugin hat, dass Dateien verschieben und Chmods setzen kann, dann kann man dem Interface jetzt seinen eigenen Code unterschummeln.

Wenn das Webinterface nun nicht aufpasst, was es da so alles startet, dann wird der eingeschleuste Code ausgeführt und man kann allerlei anrichten. Man könnte z.B. eine Funktion vom Screen des laufenden Gameservers abkoppeln, die dann alle X Sekunden prüft, ob der Gameserver noch läuft und wenn nein den Server aus dem ungeschützten Verzeichnis neu startet. Wenn dies schnell genug geschieht, dann ist der Gameserverport bereits belegt, wenn der protected Gameserver gestartet wird. Der protected Gameserver nimmt sich dann den nächst höheren Port und das Webinterface denkt, dass alles in Ordnung ist. Des Weiteren könnte man sich auch seinen eigenen SSH2 Deamon bauen, um direkt auf der Shell zu arbeiten. Dies geht z.B. relativ einfach mit Tools wie netcat und telnet.

Hier noch ein bisschen Pseudocode, der veranschaulichen sollte, was ich meine. Dass ich keine 1:1 Anleitung gebe, ist denke ich mal verständlich.

```bash
#!/bin/sh

backgroundfunction() {
 while immer war; mach
  schlafe x sekunden
  wenn server nicht läuft; dann
   starte aus dem unprotected Verzeichnis
  fi
 done
}

backgroundfunction&
```

