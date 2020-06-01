---
title: "Counter Strike: Source Update veröffentlicht"
tags: ["game-server", "Counter Strike: Source"]
published: true
date: "2012-05-22"
---

Es gab mal wieder ein Counter-Strike: Source Update. Dabei handelt es sich überwiegend um Bugfixe.

- Fehler behoben, dass der Client beim Laden dynamischer Models abstürzt.
- Fehler behoben, dass der Gameserver bei Updates nicht automatisch neu startet
- Fehler behoben, dass ein IP Ban nicht für den RCON Zugang wirksam ist.
- Fehler behoben, dass ein Audio Buffer underrun zum Servrecrashen eingesetzt werden kann
- Fehler behoben, dass der Serverbefehl changelevel2 den Server zum abstürzen bringt.
- Das Console Logging wurde modernisiert, so dass weniger Dateioperationen geschehen und die Gesamtperformance deutliche besser wird
- Diverse Verbesserungen zur Server- und Clientstabilität
- Exploit behoben, der es Angreifern erlaubt, den Ping und Status Befehl für andere Spieler zu blocken
- Fatale Server Fehler werden nun geloggt
- Config Variablen sv_lowedict_threshold und sv_lowedict_action hinzugefügt.
- Serverbefehl changelevel_next hinzugefügt, mit dem zur nächsten Map im Mapcycle gewechselt werden kann.
- mp_restartgame_immediate hinzugefügt, der wie mp_restartgame funktioniert, nur ohne Verzögerung.

Der englische Originaltext:

> Counter-Strike: Source  
> – Fixed a client crash related to dynamic model loading  
> – Fixed dedicated server not receiving restart requests when updates are released  
> – Fixed IP bans not applying to RCON access  
> – Fixed server crash exploit related to audio buffer overruns  
> – Fixed server crash caused by using changelevel2  
> – Updated console logging system to minimize opening and closing of files, greatly improving performance under certain conditions  
> – Additional improvements for client/server stability  
> – Fixed a problem that allowed malicious clients to disable the "ping" and "status" commands for other connected clients  
> – Fatal engine errors are now written to the server log file  
> – Added sv_lowedict_threshold and sv_lowedict_action which allow the engine to take action before running out of free edicts  
>  – Possible values for sv_lowedict_action are: 0 – no action, 1 – warn to log file, 2 – attempt to restart the game, if applicable, 3 – restart the map, 4 – go to the next map in the map cycle  
> – Added changelevel_next server command which changes to the next map in the map cycle  
> – Added mp_restartgame_immediate ConVar which has the same effect as mp_restartgame without a delay

