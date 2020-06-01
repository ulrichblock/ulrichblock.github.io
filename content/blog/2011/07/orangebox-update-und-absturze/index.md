---
title: "Orangebox Update und Abstürze"
tags: ["steam", "Counter-Strike Source", "Day of Defeat: Source", "Team Fortress 2", "Orangebox"]
published: true
date: "2011-07-02"
---

Heute Nacht gab es ein optionales Update für die Orangebox Server. Betroffen sind demnach CS:S, DoD:S, TF2 und HL2:DM.  
[Die dazugehörige Updatenachricht gibt es hier nachzulesen](http://forum.i3d.net/hlds-valve-linux-newsletter/173604-hlds_linux-team-fortress-2-update-released.html#post1290738)

Da es optional ist, sollte der Autoupdater des Linux Servers diese nicht von selber anfordern.  
Wer jedoch mittels Cronjobs, oder andere Weise, seine Server auf den aktuellsten Stand hält, der sollte bereits aktuelle Server haben.

Das Update umfasste nur eine neue Datei, die den Namen „**vphysics.so**" hat. Sie befindet sich im „**orangebox/bin/**" Ordner.  
Diese Datei ist jedoch fehlerhaft. Egal, ob Servertools, bzw. Addons wie Sourcemod, oder Zblock auf dem Server verwendet werden, oder nicht, der Server stürzt sofort nach dem Start ab. Genauer bei dem „changelevel" Befehl, mit dem die Maps geladen werden.  
Viele würden deswegen das Problem wohl eher mit „mein Server startet nicht" beschreiben.

In der Konsole kann man einen Text wie diesen lesen:

> changelevel ctf_2fort  
> \*\*\* glibc detected \*\*\* ./srcds_linux: double free or corruption (out): 0x0b4cfd58 \*\*\*  
> ======= Backtrace: =========  
> /lib32/libc.so.6(+0x6bf31)\[0xf759ff31\]  
> /lib32/libc.so.6(+0x6d7a8)\[0xf75a17a8\]  
> /lib32/libc.so.6(cfree+0x6d)\[0xf75a488d\]  
> bin/libtier0.so(_ZdlPv+0x22)\[0xf779ca02\]  
> (…)

[Ian R. Justman](http://www.ian-justman.com) hat freundlicherweise die alter Version geuploaded und den Link an die HLDS Mailingliste geschickt: [Seinen Beitrag kann man hier nachlesen.](http://forum.i3d.net/hlds-valve-linux-newsletter/173604-hlds_linux-team-fortress-2-update-released.html#post1290747)

Wenn ihr, oder euer Provider das optionale Update bereits eingespielt habt, ersetzt die neue „**vphysics.so**" durch die alte und startet den Server neu.

Hat man SSH Zugriff zum Server kann man nun seine Autoupdater anhalten, oder die „**vphysics.so**" mittels des immutablen Bits vor dem erneutem Überschreiben schützen, bis Valve das Problem behebt.  
Das immutable Bit setzt man mit Rootrechten unter Verwendung von folgendem Befehl:

```bash
chattr +i -V vphysics.so
```

__+i__ setzt es, __-V__ bedeutet „verbose", also dass das Programm viele Informationen zurück gibt.

Wieder aufheben kann man es mit:

```bash
chattr -i -V vphysics.so
```