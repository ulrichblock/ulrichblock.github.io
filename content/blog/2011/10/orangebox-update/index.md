---
title: "Orangebox Update"
tags: ["steam", "Counter-Strike Source", "Day of Defeat: Source", "Team Fortress 2", "Orangebox"]
published: true
date: "2011-10-14"
---

Es gab wieder einmal ein großes Orangebox Update. Betroffen sind demnach die Spiele Team Fortress 2, Counter-Strike: Source, Day of Defeat: Source und Half-Life 2: Deathmatch. Es wird bei vielen für viel Chaos sorgen.

Das Wichtigste kurz zusammengefasst:

Im Zusammenhang mit Addons wie ZBlock, Sourcemod und Metamod kommt es zu zahlreichen Abstürzen. Die Entwickler werden hier sicher bald Bugfixes veröffentlichen.

__+fps_max__ ist nun ganz entfernt und die Server FPS sind nun an die Tickrate gekoppelt. Wer nun immer noch nach hohen FPS schreit, dem ist nicht mehr zu helfen.

Die Linux Server sollen nun Multithreading Unterstützung haben. Aktiviert wird sie mit dem Cvar

> „host_thread_mode" = „0"  
>  – Run the host in threaded mode, (0 == off, 1 == if multicore, 2 == force)

Nach dem Aktivieren konnte ich auf die Schnelle jedoch keine Veränderungen bei htop/top beobachten.

Es gibt den neuen Startparameter „-replayserverdir". Wird er nicht gesetzt, landen die Replays im Ordner cstrike/replay.

Bei Counter-Strike Source wurden die Serverbinaries vom orangebox/ Ordner in den neuen Ordner css/ verlagert. <del datetime="2011-10-14T07:25:58+00:00">Steam lädt das eigentliche Counter-Strike Source aber weiterhin nach orangebox/cstrike.  
Die neuen Dateien aus css/ erwarten sie aber unter css/cstrike. Bis hier Valve Abhilfe schafft, kann man seinen Startbefehl wie folgt anpassen:  
./srcds_run -game ../orangebox/cstrike -ip 1.1.1.1 -port 27015 +maxplayers 12 +map de_dust2 +tv_port 27016 +tv_maxclients 1 +clientport 27017</del>  
Der cstrike Ordner befindet sich deswegen nun unter css/cstrike. Die ressourcensparende Variante ist es deswegen, den css Ordner vor dem Update anzulegen, den cstrike Ordner nach css/ zu verschieben und danach ein Update mit dem zusätzlichen Paramter -verify_all zu starten.

Nun noch die komplette Updatenachricht:

> Required updates for Team Fortress 2, Counter-Strike: Source, Day of Defeat: Source and Half-Life 2: Deathmatch are now available. Counter-Strike: Source has also been moved to use its own engine and dedicated server depots. Because of this, dedicated server files for Counter-Strike: Source will now be under a ‚css‘ folder.
> 
> The specific changes include:
> 
> Source Engine Changes (CS:S, DoD:S, TF2, HL2:DM)  
> – Fixed an issue with the multi-threaded renderer which could cause a crash on map change  
> – Adjusted whitespace to improve formatting in status command output  
> – Changed stats output to show KB/s instead of bytes/sec, added a connections column, and changed the users column to „Map changes"  
> – Fixed game servers not being able to execute the retry command due to the dependence on the connect command (which is not executable by game servers)  
> – Made sndplaydelay executable by servers  
> – Server frame rate is now based on the tickrate of the active Source mod, not the fps_max convar  
> – Server processing delays have been reduced, especially for servers on modern Linux kernels  
> – Entity processing logic has been optimized to significantly reduce CPU usage on full servers  
> – Multi-threaded server code is now enabled by default under Linux (already enabled on Windows)  
> – An exploit with non-printable characters causing lag on Windows servers has been fixed  
> – CPU is fully yielded back to the system whenever the server is running faster than the tickrate  
> – Dramatic increase in performance for low-level math libraries
> 
> Day of Defeat: Source  
> – Removed tickrate command line parameter  
> – Updated the localization files
> 
> Counter-Strike: Source  
> – Prevent AWP cycle time exploit using quick switch  
> – Fixed bug causing HUD History to display item pickups from nearby players  
> – Increased sized of HUD History resource to prevent clipping  
> – Changed grenade damage so that it always hits HITGROUP_GENERIC and takes into account armor for damage calculations  
> – Reduced standing and moving accuracy for pistols  
> – Decreased accuracy while moving with sniper rifles  
> – Added additional legacy mode (3) to cl_dynamiccrosshair  
> – Updated the localization files
> 
> Team Fortress 2  
> Manniversary:  
> – Experimenting with a new store interface with a subset of players  
> – Added several dozen community items in celebration of the Manniversary  
> – Added loadout presets — each class can now store four complete loadouts, including weapons and cosmetic items, and change between them with the press of a button.  
> – Added a new item type that can accept user-applied decals. Take any image off your hard drive, put it on a stick, and then smash people with it! (See the Decal Tool in the store!)  
> – Added new co-operative high five taunt  
> – Class select menu now shows the active loadout for each class  
> – Characters can now equip two misc-slot items at once  
> – Added a new in-game abuse-reporting system (see „Capture abuse report data" under „Miscellaneous" controls)  
> – Non-newly-released weapons in the store can now be tried out for free once per week! This will give you a fully-functional version of the weapon to be used in-game for no cost. If you decide you like it, you can purchase it for a discount during the trial period.  
> – All items purchased in the store can be used for crafting and can be traded after a few days  
> – Added a new startup music track from Meet The Medic  
> – Integrated with the new Steam Workshop to enable the publication and management of community contributed content
> 
> Maps:  
> – Added new community control point map Gullywash. Stamps are available in the store to support community map authors!  
> – Barnblitz is now available for offline practice  
> – Frontier: various geometry fixes  
> – Gorge/5Gorge: added team-specific func_nobuild brushes in elevated forward spawn areas
> 
> Replay:  
> – New camera shake functionality added for replays that are not sufficiently dramatic  
> – New slow-motion functionality added for replays where even camera shake does not provide sufficient drama  
> – Added support for recording voice chat into replays
> 
> Items:  
> – Pocket Medic can now be equipped by the Soldier in addition to the Heavy  
> – World Traveler’s Hat and the Connoisseur’s Cap are now paintable  
> – Bonk Boy and Foster’s Facade are now misc slot items  
> – Fixed The Director’s Vision not playing animations correctly for all classes in the loadout screen  
> – The Killer Exclusive is now paintable  
> – When sorting the backpack, otherwise-equivalent items will sort by strange weapon rank and crate series number if possible  
> – When selecting items from the loadout, weapons with different kill eater ranks will all show up  
> – Hat of Undeniable Wealth And Respect animations have been added. Really.  
> – LOD models added to several older cosmetic items
> 
> Response Rules:  
> – Reduced the chance of many response lines occurring  
> – Responses related to cart progress no longer play when disguised  
> – Players will now always call for a medic when low on health or when on fire when a medic is under the crosshair, whereas previously the character would ask the medic to follow them  
> – Named base items will no longer trigger responses that were supposed to be for new item variants  
> – Added additional Jarate hit responses  
> – Demoman:  
>  – Added achievement award response  
>  – Removed „I didn’t need your help y’know" line if being healed by a Medic  
>  – Saxxy kills will use the same lines as kills from the frying pan  
>  – Taunting with The Pain Train or the Saxxy now plays the same taunt as the grenade launcher  
>  – Added a taunt for The Ullapool Caber  
> – Engineer:  
>  – Fixed a problem that caused him not to say thanks after exiting a teleporter  
>  – Saxxy kills will use the same lines as kills from The Golden Wrench  
>  – Added a previously unused golden wrench kill line  
>  – Added an occasional response when swinging The Gunslinger  
>  – Wrangler taunt now performs the pistol taunt animation  
> – Heavy:  
>  – Added a previously unused fist swing line  
> – Medic:  
>  – Added a line to the response that occurs when doing a battle cry while looking at an enemy while holding a melee weapon  
>  – Taunting with a Saxxy plays the medigun taunt  
>  – Taunting with the Solemn Vow or the Crusader’s Crossbow now plays the same taunt as the syringe gun  
> – Scout:  
>  – Removed the response when killing an enemy Scout or Pyro and moved the lines to the dominating Pyro/Scout response  
>  – Added a rare response to double jumping after getting a recent kill  
> – Sniper:  
>  – Reduced chattiness when getting many sequential kills  
>  – Added a missing line to the scoped revenge response  
>  – Taunting with a Saxxy no longer play lines that reference a knife  
> – Soldier:  
>  – Added a line to the getting übercharged response  
>  – Taunting with the Righteous Bison, Battalion’s Backup, or the Saxxy now play the Buff Banner taunt
> 
> Bots:  
> – TFBots have a percentage chance of noticing weapon fire based on their difficulty level. Easy bots are fairly oblivious, and Expert bots notice pretty much everything.  
> – TFBots now treat certain weapon attacks as „quiet" (Spy knife, cloaking/uncloaking, some melee weapons, fists, etc). „Quiet" weapons can only be heard by TFBots when nearby, and their chance of being noticed is halved if the environment is „noisy" (ie., lots of non-quiet gunfire going on in the area). This greatly improves Spies ability to backstab TFBots without the entire team immediately turning on them.  
> – Spy bot improvements:  
>  – Spy bots are much better about circling around and backstabbing their victims now  
>  – Improved Spy bot target selection in some situations (ie: clusters of sentries and enemy players)  
>  – Spy bots will give up on an attack and retreat if an enemy sentry gun aims at them  
>  – Spy bots now avoid nearby enemies while disguised and/or cloaked so they don’t bump into them and give themselves away  
>  – Spy bots now have a simple notion of when their „cover is blown" now  
>  – Spy bots lead their target’s position as they chase them down for a backstab now  
>  – Spy bots don’t go after victims until setup time has elapsed  
>  – Hard and Expert Spy bots avoid looking at their prey until they get close and go for the stab  
>  – Easy Spy bots don’t avoid enemies, or try to get behind before stabbing  
>  – Normal Spy bots don’t avoid enemies  
>  – Fixed bug where Spy bots would jump against the enemy spawn gates during setup time  
> – Medic bot improvements:  
>  – Medic bots stick much closer to running patients now  
>  – Medic bots stick much closer to their patient if they have an Ubercharge ready, or are deploying their Uber  
>  – Medic bots hide from Sentryguns now, too  
> – Pyro bot improvements:  
>  – Pyro bots are less „pushy" with their compression blast, but will use it against Ubers and to get enemies off of a capture point
> 
> Other:  
> – Razer Hydra support can be enabled via „sixense_enabled 1" in the console. See http://sixense.com/tf2 for details.  
> – Added „tf_allow_taunt_switch". Set to 0 for disallowed (default behavior), 1 for old bug behavior, or 2 to allow weapon switching any time during the taunt.  
> – Screenshots can now be hooked up to the Steam Community automatically. There is a new option to control this under „Miscellaneous" in the Advanced Options page.  
> – Fixed gold ragdolls playing custom death animations when they should be locked in a pose  
> – Fixed Buffalo Steak Sandvich not having a cooldown if the Heavy is at full health.  
> – Fixed touching a cabinet while under the effects of the Buffalo Steak Sandvich removing the mini-crits but not removing the melee weapon restriction  
> – Fixed particle effects not showing up on spy disguise items  
> – Fixed spies never using genuine, community, or self-made items as disguise weapons  
> – Fixed demoman weapons primary/secondary being backwards in the loadout screen  
> – Fixed effects on Sticky Jumper grenades  
> – Fixed net_graph not updating server framerate when FPS is greater than 1000  
> – Fixed game servers not being able to execute the retry command  
> – Renamed tf_show_voice_icons to mp_show_voice_icons  
> – Updated the localization files
> 
> Jason