---
title: "Low Rater ein Problem?"
tags: ["steam", "game-server", "Counter-Strike: Source"]
published: true
date: "2012-02-23"
---

Es kommt immer mal wieder vor, dass sich Spieler über so genannte "Low Rater" beschweren. Der Gelegenheitsspieler versteht dann in aller Regel nicht einmal, was man von ihm will.

Unter Low Ratern versteht man Spieler, die Netsettings verwenden, welche wenig Daten zum Server senden und empfangen. Bei HL1 und HL2 Spielen wie Counter-Strike 1.6 und Counter-Strike: Source werden die "Rates" mit folgenden Configeinträgen bestimmt:

> // Maximal benutzbare Bandbreite. Je Mehr Spieler auf dem Server und desto größer die cl_cmd- und cl_udpaterate Werte sind, desto mehr wird gebraucht.  
> rate "25000"
> 
> // Anzahl in der Sekunde, in der Daten von dir zum Server gesendet werden. Kann nicht größer als die erreichten FPS sein.  
> cl_cmdrate "66"
> 
> // Anzahl in der Sekunde, in der Daten vom Server zu dir gesendet werden. Man sollte aufpassen, dass hier keine zu große Abweichung zu cl_cmdrate entsteht.  
> cl_updaterate "66"
> 
> // So viele (0.01=10ms) werden die Hitboxes nach hinten versetzt, um den Ping auszugleichen. Bei einem hohen Ping sollte man einen höheren Wert nehmen.  
> // Als Startwert kann man den durchschnittlichen Scoreboard Ping nehmen. Danach so weit herabsetzen, bis man merkt, das dieHitboxen nicht mehr passen.  
> cl_interp "0.01"

Die Standardwerte von Valve sind deutlich geringer, als die im Beispiel verwendeten.

Es hält sich nun hartnäckig das Gerücht, dass man Spieler mit diesen Einstellungen schlechter treffen kann. Für HL1 Spiele, wie Counter-Strike 1.6 trifft dies bedingt zu. Bei HL2 Spielen wie Counter-Strike: Source ist der Netzwerkcode deutlich robuster, so dass bei mir der Eindruck entstanden ist, dass die Netsettings anderer eine unbedeutenderer Rolle spielen.

Man kann sich nun entweder über Spieler mit wenig technischen Kenntnissen aufregen, oder als Admin aktiv werden.  
Sowohl HL1, als auch HL2 basierenden Servern bieten die Möglichkeit, die zulässigen Grenzwerte für die Netsettings einzuschränken. Verbindet ein Spieler mit Netsettings außerhalb dieser Grenzen auf den Server, wird sein Spiel den zulässigen Grenzwert verwenden.

Die Grenzen werden folgendermaßen in der server.cfg bestimmt:

> // Minimale Bandbreite 0=unlimited  
> sv_minrate "15000"
> 
> // Maximale Bandbreite 0=unlimited  
> sv_maxrate "100000"
> 
> // Minimum Updates pro Sekunde zum Client  
> sv_minupdaterate "40"
> 
> // Maximum Updates pro Sekunde zum Client  
> sv_maxupdaterate "66"
> 
> // Minimum Updates vom Client pro Sekunde  
> sv_mincmdrate "40"
> 
> // Maximum Updates vom Client pro Sekunde  
> sv_maxcmdrate "66"

Beim Erzwingen werden die Grenzen nur angewendet. Die Config des Spielers wird **nicht** überschrieben. Aus diesem Grund sind Plugins, die die Netsettings der Spieler überprüfen überflüssig und schaden eventuell sogar der Community auf dem Server. Schaden können sie , weil schlechte Verlierer nun die Configwerte der Spieler anschauen können. Die Schuld für das Verlieren wird auf die angeblichen "Low Rates" geschoben und entsprechend geschimpft. Dies natürlich auch dann, wenn der beschimpfte Spieler vom Server gezwungen wird, andere Werte zu verwenden, die alles andere als "Low" sind.

Manch ein Admin wird nun auf die Idee kommen, den maximal zulässigen Wert auch als minimalen Wert zu verwenden, damit jeder mit den Werten 100/100, oder 66/66 spielt.  
Dies ist keine gute Idee. Es gibt viele Spieler, die mit alter Hardware und oder Laptops spielen. Diese erreichen nur niedrige Frameraten (FPS). Ein Spieler kann nur so viele Updates in der Sekunde senden, wie er FPS hat. Weicht die effektiv gesendete *cmdrate* nun zu stark von der eingestellten *updaterate* ab, trifft man den Spieler in der Regel sogar schlechter, als einen, der etwas niedrigere Rates verwendet.  
Der bessere und benutzerfreundlichere Weg ist somit ein minimaler Wert von 40-50.

Zwingt man die Spieler Netsettings innerhalb dieser Grenzen zu benutzen, ist schlechtes Treffen nicht mehr den Configeinstellungen geschuldet. Die Aussage, man treffe einen anderen wegen seinen "Low Rates" nicht ist demnach nur noch eine Ausrede für eigenes Unvermögen.

Mit wenigen Handgriffen sind "Low Rater" kein Problem für den Spielablauf.

