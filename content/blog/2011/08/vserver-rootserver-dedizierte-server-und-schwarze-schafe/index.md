---
title: "Vserver, Rootserver, dedizierte Server und schwarze Schafe"
tags: []
published: true
date: "2011-08-21"
---

Der Markt bezüglich Servern ist in Deutschland sehr undurchschaubar. Es gibt leider Hoster, die mittels eines Webinterfaces es einfach mal versuchen möchten, sich ein paar Euro dazuzuverdienen und über keine besondere Sachkenntnis verfügen. In Foren werden diese Hoster dann auch oft als Kinderzimmerhoster verspottet.  
Man muss hier aber auch sagen, dass es auch viele kleine Hoster gibt, die ausgezeichnete Arbeit leisten.

Da der Preisdruck durch Massenhoster wie Hetzner, Strato, Myloc, Server4you und dergleichen sehr groß ist, versucht man unterschiedliche Wege zu begehen, da man Preislich nur sehr schwer konkurrieren kann.

Ein seriöse Weg ist es, ein Segment abzudecken, den diese Hoster nicht abdecken. In diesem Fall könnte man zum Beispiel Wert auf individuellen Support legen und auf den Einzelfall spezialisierte Leistungen anbieten.

Etwas fraglicher ist es, die Unkenntnis der potentiellen Kunden auszunutzen. So wird mit dem Begriff Rootserver sehr variable umgegangen. So wird von vielen der Begriff Rootserver für einen dedizierten Server verwendet. Dediziert bedeutet, dass die Hardware ausschließlich von einem Kunden verwendet wird. Rootserver bedeutet lediglich, dass man vollen Zugriff auf ein System hat.  
Man kann also bei jeglichen Systemen mit Vollzugriff, egal ob dediziert, oder virtualisiert von einem Rootserver sprechen.

Durch die oft falsch verwendete Bezeichnung "Rootserver" gehen viele Kunden davon aus, dass ein Rootserver ein dedizierter Server ist.

Diesen Umstand wird sicherlich von einigen ausgenutzt und virtualisierte Server als Rootserver angeboten. Der Kunde erhält demnach unter Umständen etwas, das er gar nicht wollte.  
In diesem Fall kann man noch sagen, dass der Kunde sich hätte besser informieren müssen, auch wenn ich ein solches Verhalten für fragwürdig halte.

Hingegen ist es sehr wahrscheinlich strafbar, die Leistungsdatenanzeige der Server zu manipulieren, bzw. Virtualisierte Server als dedizierte zu verkaufen. Wenn ich ein solches Vorgehen bei einem meiner gemieteten Server entdecken würde, würde ich auf jeden Fall einen Anzeige bei der Polizei aufgeben.

Ein solches Vorgehen ist leider schwer nachweisbar. Im Fall von virtualisierter Servern hat man aber einige Hinweise. Die einfachste Methode ist es, den Server zu belasten und zu schauen, wie sich die Auslastung der Ressourcen bei Monitoring Tools wie htop, top und munin verhält.

Wurde die Ramanzeige manipuliert und man hat weniger Ram als verkauft, dann wird man naturgemäß weniger belegen können, als man angeblich hat. Wenn man dann z.B. nicht mehr als 2GB belegen kann, obwohl das System angeblich 4GB haben soll, dann kann man sich relativ sicher sein, dass hier die Anzeige manipuliert ist.

Ein weiteres Indiz kann die Netzwerkkarte sein. Wenn man in der Stoßzeit deutlich weniger Bandbreite hat, als die Netzwerkkarte/Anbindung schaffen kann, dann deutet dies darauf hin, dass auch andere sie mitbenutzen.

Manche Virtualisierungsformen haben auch eindeutige Spuren im System. So gibt es bei einigen die Datei /proc/user_beancounters, in denen die Limits und das Einhalten, bzw. das Überschreiten der Limits aufgezeichnet werden. Um die beste Leistung zu erzielen, werden bei mit Vmware virtualisierten Servern oft die VMware Tools installiert, die dann in der Prozessliste auftauchen.

Schwarze Schafe sind hoffentlich eher die Ausnahme. Ich würde aber auf jeden Fall bei jedem System testen, ob man hier nicht etwas anderes bekommen hat, als versprochen.

