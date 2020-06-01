---
title: "zBlock Update"
tags: ["zBlock", "Counter-Strike: Source"]
published: true
date: "2011-10-16"
---

Wie bereits in ihrem Forum angekündigt, wurde das Update für zBlock noch an diesem Wochenende veröffentlicht. Es macht zBlock kompatibel zu dem neuesten Orangebox Update vom 14.10.2011.

Es kann unter folgender Adresse gedownloaded werden: [zblock.mgamez.eu/files.htm](http://zblock.mgamez.eu/files.htm)

Das komplette Changelog:

> zBlock 4.62 -&gt; 4.63  
> ——————–  
> -Fixed load issues with the 13/10/11 update.  
> -"zb_record" now saves named demos with the format "date_time_map", instead of "map_date_time".  
> -Fixed SteamBans integration.  
> -Prevented an interp value exploit.  
> -Checks more userinfo values for client/server inconsistencies.  
> -Added "zb_maxnamechanges" (default 3) – Configures the total number of name changes a player is allowed to make in the time "zb_namechangeperiod" before being kicked (0=unlimited).  
> -Added "zb_namechangeperiod" (default 500) – The number of seconds between tracked name changes (0=unlimited).  
> -Added "zb_kicknamethieves" (default 0) – Kicks players with similar name, basically it removes all whitespace and compares the player name, if it’s not 1 or 2 characters different the copycat will be kicked.  
> -Added the server concommand "zb_recentdisconnects", which prints details of the last 20 players to have disconnected from the server.  
> -Fixed string parsing of auth-host urls.  
> -Many changes to the authhost implementation.  
> -Locked all "ammo_" cvars to their defaults in warmode.  
> -The new engine cvar "mp_show_voice_icons" is forced to 0 in warmode as not to give away player positions when using in-game voice (i.e. zb_deadvoice).  
> -Clients can now use "ignorerad" when "zb_warmode 0" is set. We however recommend that server owners set "sv_ignoregrenaderadio" according to preference.  
> -Detects the client userinfo cvar "zb_wantignorerad", if this is set to "1" then zBlock automatically sets "ignorerad" for you (again only when "zb_warmode 0" is set).  
> -Kicks for using the inferno prediction exploit.  
> -Fixed a bug in the cvar scanner, improved its general performance and worked around an issue involving other plugins doing things wrong.  
> -Cients will no longer be kicked for "Not responding to cvar queries" when timing out.  
> -Added a new method of grabbing interfaces which will be more resilient with future engine updates.  
> -Prevented cheaters from retrieving enemy team chat.

