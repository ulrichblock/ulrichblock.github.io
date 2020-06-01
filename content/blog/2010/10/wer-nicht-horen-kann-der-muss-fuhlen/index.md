---
title: "Rootserver sind kein Spielzeug, oder wer nicht hören kann, der muss &#8230;"
tags: ["security"]
published: true
date: "2010-10-02"
---

Ich hatte jemanden oft gesagt, dass die Art und Weise, wie er seinen Root Server administriert sehr unsicher ist.  

– Ein Passwort für alles  
– Für alles ein Webpanel  
– Administration nach dem Motto "Egal wie, Hauptsache es läuft"

Diese Vorgehensweise hatte nun die absehbaren Konsequenzen.

Sein Provider schickte ihm die letzten Tage Traffikwarnungen zu, so dass er einen DDOS Angriff vermutete. Ich wollte ihm dann helfen. Netstat ergab aber nichts dergleichen.

Mir vielen aber ein paar Verbindungen auf, die auf einen mir unbekannten Port liefen. Der Eigentümer des Roots konnte sich auch nicht erinnern, dass er einen Dienst auf diesem Port gestartet hatte. Diese Verbindungen schienen auch recht viel outgoing Traffik zu produzieren, also die Ursache für die Traffik Warnungen zu sein.

Netstat wollte auch partout nicht sagen, welches Programm zu diesem Port gehört. Alles in allem roch es sehr verdächtigt nach einer Backdoor, Rootkit und Dergleichen.

Also habe ich mal lsof installiert um weiter nachzuforschen.  
Über netstat wusste ich den Port und das Protokoll:

```bash
netstat -tn (stark gekürzter output)
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp      112  87504 hierwarneip:4936       hierwarneip:1024     ESTABLISHED
tcp        0 101361 hierwarneip:4936       hierwarneip:54796   FIN_WAIT1
tcp        0  97152 hierwarneip:4936       hierwarneip:1041       ESTABLISHED
tcp      112  68392 hierwarneip:4936       hierwarneip:1024       ESTABLISHED
```

Ich wusste also, dass auf dem Port 4936 etwas lief, das so nicht laufen sollte. Der Verdacht, dass der Server gecrackt wurde erhärtete sich.  
Mehr Aufschluss brachte dann lsof:

```bash
lsof -i TCP:4936
COMMAND     PID     USER   FD   TYPE     DEVICE SIZE NODE NAME
nanox86_6 32620 www-data    4u  IPv4 2740480835       TCP Debian-50-lenny-64-LAMP:4936->hierwarneip:1041 (ESTABLISHED)
nanox86_6 32620 www-data    6u  IPv4 2730374173       TCP Debian-50-lenny-64-LAMP:4936->hierwarneip:1024 (ESTABLISHED)
nanox86_6 32620 www-data    9u  IPv4 2751415190       TCP Debian-50-lenny-64-LAMP:4936->hierwarneip:1024 (ESTABLISHED)
```

Das Programm sollte es so sicher nicht unter dem www-data User geben. Und siehe da eine PID, die es laut netstat gar nicht geben sollte, wurde nun auch angezeigt.  
Jetzt da ich eine PID hatte, war es simpel herauszufinden, welche Dateien das Programm geöffnet hatte:

```bash
lsof -p 32620 (verkürzt)
COMMAND     PID     USER   FD   TYPE     DEVICE       SIZE     NODE NAME
nanox86_6 32620 www-data  cwd    DIR        9,2       4096 13877855 /root/teamspeak3/teamspeak3-server_linux-x86/files/virtualserver_1/internal/avatar_mabjihfmlikgbogieolnmdpmdgmdmpblmdikjggp
nanox86_6 32620 www-data  txt    REG        9,2     231389 13877857 /root/teamspeak3/teamspeak3-server_linux-x86/files/virtualserver_1/internal/avatar_mabjihfmlikgbogieolnmdpmdgmdmpblmdikjggp/nanox86_64
nanox86_6 32620 www-data    3r   REG        9,2 5323653120 13877879 /root/teamspeak3/teamspeak3-server_linux-x86/files/virtualserver_1/internal/avatar_mabjihfmlikgbogieolnmdpmdgmdmpblmdikjggp/Blazblue.Calamity.Trigger-RELOADED.tar
nanox86_6 32620 www-data    5r   REG        9,2 6017792000 13877913 /root/teamspeak3/teamspeak3-server_linux-x86/files/virtualserver_1/internal/avatar_mabjihfmlikgbogieolnmdpmdgmdmpblmdikjggp/F1_2010-Razor1911.tar
```

Die komplette Dateiliste des teamspeak3 Ordners erspar ich euch mal. Es waren so ziemlich alle aktuellen Spiele und Filme in DVD, oder HD Format vorhanden und wurden über ein IRC Netzwerk zur Verfügung gestellt.

Was war passiert? Der User, dem die ganzen Dateien gehörten und mit dem dieser Content bereit gestellt wurde war www-data. Der Einbruch ins System muss also über diesen erfolgt sein.  
Auf dem Rootserver lief ein TS3 Webinterface, um selbiges zu verwalten. Diese wurde sehr wahrscheinlich auch nicht geupdatet und war Software der Kategorie, "Hauptsache sie funktioniert".  
Wie der Einbruch genau erfolgt ist, lässt sich nicht mehr nachvollziehen. Auch welche Dateien kompromitiert worden sind. Auf jeden Fall war im Webverzeichnis noch ein WI für ein Botnet versteckt und in der Datenbank Daten für dieses hinterlegt.

Was man denn nun machen soll, war die Frage. Die Antwort ist kurz und schmerzlos. Kiste formatieren und neu aufsetzen. Übernehmen kann man nichts, weil man nicht weiß wie weit und wie tief das System befallen war.

Hätte man von Anfang an das System abgesichert und nur vertrausnwürdige Software eingesetzt, wäre diese Extraarbeit sicherlich nicht angefallen.

