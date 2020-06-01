---
title: "Orangebox Update 28.06.2011 (RIP fps_max)"
tags: ["steam", "game-server", "Orangebox", "SourceMod"]
published: true
date: "2011-06-28"
---

Es gab schon wieder ein Orangebox Update. Diesmal sind die Servertools wie Mani Admin, Sourcemod usw. nicht betroffen. Mani kann es auch nicht sein, weil die Entwickler es immer noch nicht geschafft haben, einen Fix zum letzten zu releasen.

Wie so oft nach Updates gilt bei Mani Admin: Wer es einfach haben will, der muss leiden.

Mit dem letzten Update wurde die [CPU Erkennung](/server-fps-bei-orangebox-stabiler/) aus der L4D Server Reihe in die Orangebox Server eingeführt.

Auf zahlreichen Systemen, insbesondere solchen, die mit Kerneln laufen, die Preemtion aktiviert haben haben, verursachte das Update wesentlich höhere CPU Last, wenn die Server leer waren.

Dies wird mit dem neuen Update behoben:

> \*Source Engine Changes (CS:S, DoD:S, TF2, HL2:DM)\*  
>  – Reduced CPU usage for idle servers

<del datetime="2011-06-28T09:14:46+00:00">Ob es ein Bug bei den Neuerungen ist, oder aber Absicht, auf jeden Fall</del>Die Server erreichen nun nur noch maximal 420-500 FPS.

Die ersten Provider beschweren sich deswegen schon auf der Mailingliste:

> Hmm, it does appear to be only processing on every other frame, so FPS is halved.
> 
> Valve, please consider reverting this, or adding a command-line option to override it. Many providers sell servers based on FPS rate.
> 
> -John

Ich finde, Michael Koeberl hat recht passend auf diese Forderung geantwortet;

> Indeed, many providers sell their servers based on FPS rate (the higher fps, the higher price). Most providers are just doing this for getting more money, nothing else is changed on those servers and mostly the servers are _not_ running at best performance.
> 
> Also this one is not valves problem. Valve is here to get the best performance out of their games and to make the best gameplay for the customers -&gt; _not for making the game the best way to sell gameservers_
> 
> (…)

___
**Nachtrag:**  
Henry Goffin von Valve hat zu der Änderung Stellung genommen. Das Senken des Maximums war Absicht. Aber nicht nur das. Er kündigt an, dass Valve langfristig fps_max entfernen wird.

Ziel des Ganzen ist es, den CPU Verbrauch der Server zu senken, so dass mehr Gameserver je Host gehostet werden können.

Das wird dann ein ganz herber Schlag für all die Hoster werden, die Server FPS, bzw. fps_max als Marketingmasche ausnutzen, um mehr Geld zu verdienen, ohne dem Kunden einen reellen Gegenwert für den Mehrpreis zu geben.

Die komplette Mail aus der Mailingliste:

> Hi all –
> 
> Free to Play brought a huge influx of new users to Team Fortress. To help server counts scale up to match the demand, we are reworking the dedicated server for performance. We want to improve player responsiveness as well as to reduce CPU usage so that hosts can run more servers per physical server.
> 
> Some of those changes addressing CPU usage went out last night. Server operators should see a big decrease in CPU load and can potentially run more instances per physical box now. However, a side effect that many of you have noticed is that server FPS has an effective cap of 500 instead of the previous 1000, or possibly even lower than 500 depending on your Linux kernel HZ setting. This should not have a noticeable impact on gameplay as the tick rate is still locked (well, mostly locked) at 66 updates per second and the frames that are being dropped are "empty" frames that do not actually run a server tick.
> 
> We’re going to address this further in another set of performance improvements. Sorry for the temporary confusion, but we wanted to get these CPU load reduction changes out quickly to help with the Free to Play user crush.
> 
> Longer term, we want to move away from FPS as a measure of performance and instead show actual load and responsiveness (jitter/latency) statistics. The difference between a tick and a frame is complicated, and fps_max sometimes affects performance in counter-intuitive ways. We would like to retire fps_max for servers and replace it with a more obvious server performance setting. We’ll give you all a heads up before we do so.
> 
> Henry G.

