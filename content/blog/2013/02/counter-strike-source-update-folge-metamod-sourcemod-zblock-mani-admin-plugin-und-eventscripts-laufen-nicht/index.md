---
title: "Counter-Strike: Source Update; Folge: Metamod, Sourcemod, zBlock, Mani Admin Plugin und Eventscripts laufen nicht"
tags: ["steam", "game-server", "Counter-Strike: Source", "SourceMod"]
published: true
date: "2013-02-05"
---

So eben hat es ein CSS Update gegeben. Valve patcht damit endlich Bugs, die beim Orangebox Zweig schon länger gefixt sind. Der Nachteil ist, dass derzeit keine Servertools laufen.  
Metamod, Sourvemod, zBlock, Eventscripts und auch das Mani Admin Plugin wollen nicht mehr starten. Am schnellsten werden wohl Metamod und Sourcemod gepatched werden. Etwas später kommt dann zBlock. Für Mani Admin könnte es das endgültige Ende bedeuten, da die Entwicklung bereits eingestellt worden ist.

Mani Admin User werden wohl nun zwangsweise zu Sourcemod umsteigen müssen.

Die Releasenote seitens Valve:

> We’ve released a mandatory update for Counter-Strike: Source. The notes for the update are below.
> 
> -Eric
> 
> ——————————
> 
> Counter-Strike: Source  
> – Added mat_viewportupscale and mat_viewportscale to enable rendering the world at a reduced resolution  
>  – "mat_viewportupscale 1" and "mat_viewportscale 0.5" will downscale world rendering by 50%  
> – Added positional audio support for Mumble clients  
> – Added a new ConVar mp_mapcycle_empty_timeout_seconds to trigger a changelevel when the server is empty  
> – Added a new ConVar sv_shutdown_timeout_minutes  
>  – Forces a server to shutdown if it has been requested to do so, even if the server is not empty  
> – Fixed a ConVar exploit that allowed malformed values to circumvent range checks  
> – Fixed a con_logfile ConVar exploit  
> – Fixed HTTP downloads on Mac not sending an HTTP referer  
> – Fixed a bug that prevented consecutive clicks on scrollbar buttons  
> – Fixed a bug that was causing intermittent lag spikes for Linux dedicated servers  
> – Fixed a crash while command-tabbing on Mac in fullscreen  
> – Fixed a client crash in the sound emitter  
> – Fixed an audio problem for Mac users  
> – Fixed MOTD sometimes not displaying HTML contents  
> – Improved the performance and stability of the libraries used for in-game HTML display  
> – Performance and stability improvements  
> – Updated to support Big Picture mode

___
**Nachtrag:**  
[Metamod: Source 1.10.0-hg817](http://www.metamodsource.net/mmsdrop/1.10/mmsource-1.10.0-hg817-linux.tar.gz)  
[Sourcemod 1.5.0-hg3763](http://www.sourcemod.net/smdrop/1.5/sourcemod-1.5.0-hg3763-linux.tar.gz)  
[Sourcemod SDK Hooks](https://forums.alliedmods.net/attachment.php?attachmentid=111404&d=1351298994)

___
**Nachtrag 2:**  
[Eventscripts bld378](http://build.eventscripts.com/eventscripts2/2012-12-21/378-804b28a522eb/es2-ob-linux-bld378.zip)

___ 
**Nachtrag 2:**  
[zBlock 4.69](http://zblock.mgamez.eu/content.htm?cid=31)

