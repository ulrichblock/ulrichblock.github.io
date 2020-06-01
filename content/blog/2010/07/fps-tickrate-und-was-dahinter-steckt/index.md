---
title: "Was FPS und Tickrate ist, und was dahinter steckt."
tags: ["steam", "Counter-Strike", "Counter-Strike Source"]
published: true
date: "2010-07-07"
---

Bei allem sollte man sich darüber im klaren sein, dass die Gameserver die Spielerpositionen und Schüsse interpolieren, also schätzen. Dies machen sie, weil es immer mal zu Verlusten von Daten kommt, die Spieler einen unterschiedlichen Ping haben und die Server nie 100% Synchron mit den Clients durch den Ping etc. sind.  
Durch eine Erhöhung von FPS und Tickrate ermöglicht man es dem Server nur genauer zu schätzen.

Zusammengefasst und auf ein Auto übertragen, verhalten sich Server FPS und Tickrate wie folgt:  
Elektronisch abgeregelte Beschleunigung und Maximalgeschwindigkeit (=Tickrate) Drehzahl (= Server FPS). Wenn nun die Drehzahl erhöht wird, bleibt die Beschleunigung und die Maximalgeschwindigkeit gleich. Das einzige, was man von so einer Aktion hat, ist ein erhöhter Spritverbrauch.  
  
  
Jetzt das ganze nochmal technischer und ausführlicher:

Tickrate definiert, wie oft in der Sekunde das Weltbild vom Server berechnet wird. Spricht je öfter das Weltbild berechnet wird, desto genauer sind die Informationen, mit denen die Clients dann theoretisch treffen können. Die meisten Durchschnittszocker merkten schon vor dem Orangebox Update bei CSS (HL2 basierend) keinen Unterschied zwischen 66 und 100.

Nach dem Orangebox Update kann man eine Tickrate von 100 nur durch einen kleinen Hack erreichen. In der Regel trifft man wesentlich schlechter auf Tick 100 Servern, als auf Tick 66. Valve hatte also einen guten Grund, "-tickrate" als Startparameter zu entfernen.  
In den Updatenews zu diesem Update hat Valve auch geschrieben, dass der Parameter entfernt wurde, damit es keine Probleme mehr mit Beschleunigten Türen usw. gibt. Hackt man Tickrate 100 nun wieder rein, treten all diese Probleme wieder auf. Es ist also davon abzuraten.

Falls ein Hoster auch nach dem Update mit Tickrate 100 wirbt und diese in den Server reinhackt, zeigt er dass er euer Vertrauen nicht verdient hat, weil es in so einem Fall nur zwei Möglichkeiten gibt:

Erste Möglichkeit ist, dass er die Updatenews von Valve nicht liest und demnach uninformiert, über die Software ist, die er einsetzt. Würdet ihr zu einem Arzt gehen, von dem ihr wisst, dass er sich nicht weiterbildet und an euch, ohne wirklich Ahnung zu haben, rumprobiert?

Die zweite Möglichkeit ist, dass er sie gelesen hat. In dem Fall geht es ihm nur darum noch mehr Geld an euch zu verdienen, wobei es ihm egal ist, ob es euch was nutzt. Würdet ihr zu einem Arzt gehen, von dem ihr wisst, dass er überflüssige und zum Teil auch riskante, sowie schädliche Behandlungen vornimmt, nur um mehr an euch zu verdienen?

Ein guter Hoster bietet euch Tick 100 also nur an, wenn ihr danach fragt und sagt euch aber auch, dass es eine sau dumme Idee ist und dass man es besser sein lassen solle. Falls ihr dann weiter darauf besteht, wird einem gleich gesagt, dass man dann bitte von Beschwerden wegen schlechtem Trefferverhalten und Ruckeln absehen soll.  
  
  
Die ServerFPS geben an, wie oft in der Sekunde nach neuen Daten geguckt wird. Bilder werden wie bei Clients nicht berechnet.Oder etwas anders: es sind die Netzwerkoperationen in der Sekunde. Bei Servern müsste man also eigentlich von NPS reden.  
Damit ein flüssiges Spielgefühl aufkommt, es wichtig ist, dass die Server FPS stabil laufen und vor allem nicht geringer sind, als die Tickrate, weil es sonst für die Spieler zu merkbaren Ruckler kommt. Für Orangebox braucht man nicht mehr Server FPS, als die Tickrate.

Für Spiele, die noch auf der alten Engine von HL2 laufen gilt:  
Da ein Server nicht immer 100% synchron mit den Clients das Weltbild berechnet, kommen die Informationen nie gleichzeitig also synchron zur Weltbildberechnung beim Server an. Sind die Server FPS nun niedrig eingestellt, kann es sein, dass eine Clientinformation etwas zu spät beim Server ankommt und erst für den nächsten Tick verwendet werden kann. Dies liegt daran, dass nur am Anfang jedes Frames gefragt wird, ob neue Daten vom Spieler da sind, nicht aber ständig innerhalb des Frames.  
Bei fps_max 300 kommen auf einen tick (bei tick 66) ~4,55 Abfragen nach neuen Daten bei 500FPS ~7,6 Abfragen usw.  
Durch höhere ServerFPS erhöht man also die Wahrscheinlichkeit, dass die Clientdaten rechtzeitig zur Berechnung des Ticks vorliegen. In der Regel kann man aber keinen oder kaum einen Unterschied zwischen 500FPS und 1000FPS spüren, wenn die FPS stabil laufen, wohl aber, wenn der Server auf 1000FPS eingestellt ist und auf 500FPS oder weniger einbricht. Deshalb sind stabile 300, oder 500 FPS besser, als eingestellte 1000fps, die aber ständig schwanken und einbrechen. Es gilt also, wie bei euch mit den Client FPS auch, dass Stabilität besser als ein Maximum ist, das nicht konstant gehalten werden kann.

Höhere Server FPS können also einen etwas niedrigeren net_graph Ping zu Folge haben, weil die Daten unter Umständen etwas schneller bearbeitet werden.

Um das ganze mal zu verdeutlichen, die Abstände zwischen den Netzwerkoperationen im Vergleich zu den Server FPS:

- 66 FPS = 15ms Abstand
- 100 FPS = 10ms Abstand
- 300 FPS = 3,3ms Abstand
- 500 FPS = 2ms Abstand
- 1000 FPS = 1ms Abstand
- 2000 FPS = 0,5ms Abstand
- 5000 FPS = 0,2ms Abstand
- 10000 FPS = 0,1ms Abstand

Bis 500 FPS sieht man eine deutliche Steigerung. Der Sprung von 500 zu 1000 FPS macht dann aber nur noch einen Unterschied von 1ms aus und ist im net_graph nicht mehr als niedrigerer Ping erkennbar. Noch kleiner fallen die Unterschiede oberhalb der 1000er Grenze aus. Man ab 1000 FPS einfach keinen im Spiel spürbaren Leistungs- bzw. Pingvorteil mehr erzieheln. Wenn diese X tausend FPS dann auch noch instabil laufen ist der Server im Endergebnis schlechter als ein stabiler 500er!  
Man kann X tausend FPS deswegen auch als gut aufgezogenen Marketinggag bezeichnen, weil es nur eins bringt, und das ist eine vollere Kasse bei den Hostern. Obwohl Gag trifft es wohl nicht wirklich, weil leider viel zu viele Leute daran glauben, dass es einfach besser ist und sich jeglichen sachlichen Argumenten verschließen. Aber was solls, der Glaube versetz ja bekanntlich Berge.

  
Bei HL1 basierenden Servern sieht die Welt etwas anders aus:  
Hier wird die Zeitberechnung über den fps_max Wert geregelt, der maximal 1000 sein kann. Die wirklichen Server FPS sind bei HL1 aber identisch mit der sys_ticrate. Bei allen pingboost Varianten kann man grundsätzlich keine höhere ticrate als 1000 erreichen, aber dennoch einstellen. Dies gilt bei pingboost 3 nicht und man kann eine größere ticrate als 1000 erreichen. Der Server geht aber immer noch davon aus, dass man nur 1000 erreichen kann (fps_max). Egal wie viele nun oberhalb der 1000er Marke erreicht werden und wie stark es schwankt, es werden mit dem "stats” Befehl immer 1000 FPS ausgegeben. Die FPS sind also nur scheinbar stabil 1000. Wenn du Zugang zur Shell hast, dann wechsel mal auf den Screentab und gebe host_speeds 1 ein. Dann wirst du die "waren” FPS/Ticrate sehen. Du wirst feststellen, das sie auch bei sys_ticrate 2500 schwanken. Der "stats” Befehl, kann sie halt nur nicht mehr anzeigen.  
  
Nun bleibt noch der Beschleunigungseffekt bei sys_ticrate &gt;1000:  
Der Server geht, wie oben beschrieben davon aus, dass in der Sekunde maximal 1000 FPS ablaufen können. Durch eine hohe ticrate und pingboost 3 laufen jetzt aber mehr ab, egal wie stabil sie wirklich sind. Der Server hat also schneller bis 1000 gezählt, als eine Sekunde in Wirklichkeit abgelaufen ist.  
Genau dies hat dann den Beschleunigungseffekt zur Folge.

Gute Kernel zeichnen sich folglich dadurch aus, dass schon bei geringen Werten oberhalb der 1000er Grenze eine spürbare Beschleunigung auftritt, weil sie den eingestellten Wert konstanter halten, als schlechte Kernel.  
  
Was ich noch bemerkt habe ist, dass auch bei guten Kerneln bei einem Wert von genau 1000 starke Drops auftreten. Stellt man die ticrate jedoch auf 1001, sind sie auf einmal weg.  
Ich starte Warserver mit meinem Kernel deswegen mit -pingboost 3 -sys_ticrate 1010 [und habe dann solche Ergebnisse.](http://www.fpsmeter.org/p,view;53884.html)

Eine Beschleunigung ist schon ab ca. 1050 bemerkbar.
