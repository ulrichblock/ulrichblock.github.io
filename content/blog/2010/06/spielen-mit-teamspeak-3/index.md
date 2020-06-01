---
title: "Spielen mit Teamspeak 3"
tags: ["Teamspeak 3"]
published: true
date: "2010-06-01"
---

[Teamspeak 3](http://www.teamspeak.org) liegt mitlerweile in der Version beta 22 vor. Die Sprachqualität ist im Vergleich zu Teamspeak 2 gestiegen und die Verzögerung deutlich gesunken.  
Was aber negativ auffällt, ist der stark gestiegene Verbrauch an Bandbreite. Auch im Zeitalter von DSL kann dies zu Problemen führen, wenn man einen Anschluß mit Light DSL besitzt. Dies liegt halt an dem gestiegenen Bandbreitenverbrauch.  
Ist man jetzt nur am Reden, treten keine Probleme auf. Möchte man Teamspeak 3 benutzen während man spielt, reicht bei Light DSL Anschlüssen die Bandbreite des Uploads oft nicht mehr aus.  
Bei Teamspeak 3 kann man im Moment die maximal genutze Bandbreite nicht Clientseitig limitieren. Ob eine solche Funktion hinzugefügt wird, ist ungewiss.  
Es bleibt also nur die Möglichkeit Serverseitig zu limitieren. Deswegen muss man einen eigenen Serverchannel für die Light DSL User erstellen. Breitband Codecs sollte man für diesen Channel nicht benutzen. Deswegen stellt als Codec den Speex Schmalband (8kHz) und den Regler bei Qualität auf 4 oder 5 ein. Mit noch weniger Qualität wird es unverständlich. Auf diese Weise verbraucht ihr ungefähr 3 – 3,5 kb/s des Uploads

Im nächsten Schritt müsst ihr die maximal benutzbare Bandbreite bei eurem Spiel einstellen. Dafür sollte man wissen, wie viel überhaupt zur Verfügung steht. Dies kann man z.B. mit diesem [Speedtest](http://www.wieistmeineip.de/speedtest/) machen. Uns interessiert vor allem das Ergebnis des Uploads. Wenn man im Spiel den Upload direkt limitieren kann, dann weißt ihm hier etwas weniger, als den Rest des verfügbaren Uploads zu.  
Bei Spielen, die auf Half-Life 1 und Half-Life 2 basieren wie Counter-Strike, Counter-Strike: Source, Day of Defeat: Source und Team Fortress kann man die Bandbreite nur insgesamt limitieren. Bei ihnen verhält sich der Upload meist im Verhältniss 1:2 -1:3 zum Download. Spricht auf jedes hochgeladene Packet kommen 2-3 heruntergeladene. Hat man beim Speedtest also einen Upload von 12 kb/s herausgefunden, dann bleiben euch also ungefähr 8 kb/s für das Spiel über. Daraus folgt, dass ihr die insgesamte Bandbreite wie folgt limitieren müsst: 8 + 2 \* 8 = 24 kb/s.  
Bei allen HL1 und HL2 Spielen macht man dies, indem man folgenes in die config.cfg oder autoexec.cfg einfügt:  
`rate 24000`

Bitte beachtet, das die Formel nur eine ungenaue Näherung darstellt. Erhöht den Wert so lange, bis es anfängt zu ruckeln, bzw. senkt ihn, bis es aufhöhrt, während ihr und andere redet.

