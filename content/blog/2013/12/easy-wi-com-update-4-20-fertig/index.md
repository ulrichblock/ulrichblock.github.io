---
title: "Easy-Wi.com Update 4.20 fertig"
tags: ["easy-wi"]
published: true
date: "2013-12-23"
---

So langsam nimmt Easy-Wi.com als Open Source Projekt Fahrt auf. Das Update liegt nun in der Version 4.20.

Man merkt, dass der Bugtracker im Github aktiv genutzt wird und damit das Projekt voran bringt.

Danken möchte ich Chris von fv-hosting.de der die QA übernommen und viele Anregungen eingebracht hat. Durch die Zusammenarbeit ist es nun möglich, User, Subuser, Game- und Voiceserver aus so ziemlich jedem, anderen System per REST API. In den Tests wurde z.B. eine Teklab und eine Webspell Installation per RESTful Service ins WI befördert.

Von anderer Seite gab es einen Facelift für den Userbereich. Diesen hat der User "JumpmanJunior" als Pull Request über Github eingereicht.

Des Weiteren gab es zahlreiche neue vorgefertigte Gameserver Templates, eingereicht von Donzi von der utzone.de

Das [Changelog](https://easy-wi.com/de/news/update-auf-version-4-20/)

Neuerungen und Änderungen:

- Generell: 
  - Benutzer, Vertreter, Gameserver und Voiceserver importer hinzugefügt
  - Datenbank Menü um die Funktionen Game- und Addon Reparieren erweitert
  - Erster Menüeintrag von "Dashboard" zu "Home" umbenannt.
  - CMS und Lendserver active/inactive ins Modul Management ausgelagert.
  - Neuer Web Installer
  - Verbesserte template Header
  - Verbesserte Easy-WI Settings Verwaltung
  - Verbesserte Impressum Verwaltung
  - Bootstrap wird über ein CDN geladen
  - Font Awesome über CDN eingebunden
  - Usability &amp; Design Optimierungen im Userpanel
  - Fehlerhandling bezüglich $template_to_use und $template_file verbessert
  - Userpanel: Logübersicht überarbeitet
  - Userpanel: Zahglreiche Infotexte hinzugefügt
- Gameserver: 
  - Neue Gameserver Templates: Tekkit, Just Cause 2, sauerbratenremod, shootmania, trackmania, ut2004, ut99, warsow
  - .lua Unterstützung für geschütze Configs hinzugefügt
  - .lua wird kopiert an stelle von Symlink erstellt.
  - Verbesserte Mapgroup Unterstützung
  - Verbesserte Workshop Unterstützung
  - "Game Rootserver" in Menü "Gameserver" verlagert
  - game Templates werden standardmäßig nach ihrem shorten sortiert
  - Voreingestellte Gameserver Addons im Installer
  - Spinner in der GS mMasterserver Übersicht hinzugefügt
  - Gameroots können nun Resellern zugewiesen werden
  - Eingabe von FTP Daten verbessert
  - Logdarstellung von Gameserver verbessert
  - Game Templates können nun genauer definiert werden
  - Maxram und OS können bei Gameroots verwaltet werden
  - Userpanel: Fastdownload verbessert
  - Tabellen Struktur in der Config Edit Übersicht entfernt.
  - Infobubble bei den SteamApi Keys
  - Userpanel: Gameserverübersicht neu gestaltet
  - Quakestat durch GameQ ersetzt
  - GameQ um Just Cause 2 Multiplayer erweitert
- Benutzer: 
  - Reseller können sich nicht mehr selber in der User Übersicht bearbeiten
  - Funktion User_Permissions verbessert
  - CPU last durch password check und migration gesenkt
- Voiceserver: 
  - Besseres Error Handling im Bereich Userpanel Voice &gt; Backup
  - Connectioncheck beim Anlegen eines TSDNS Masters
  - Userpanel: Voiceserver Einstellungen verbessert
  - Userpanel: Voiceserver Backup verbessert
  - Userpanel: Voiceserver Übersicht verbessert

