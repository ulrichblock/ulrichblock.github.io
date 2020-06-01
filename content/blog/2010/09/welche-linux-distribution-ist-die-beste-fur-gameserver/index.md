---
title: "Welche Linux Distribution ist die beste für Gameserver?"
tags: ["Linux"]
published: true
date: "2010-09-30"
---

Man liest immer wieder Fragen, bei denen gefragt wird, welches Linux das beste für Gameserver sei.  
Die Fragestellung ist schon nicht ganz richtig. Unter Linux versteht man den Kernel selber. Um den Kernel können dann verschiedene Packete gebaut werden. Wenn man das selber machen will, setzt es extrem weitreichende Kentnisse voraus und kommt somit für die allermeisten nicht in Frage.

Distributionen, oder auch kurz Distros, haben bereits Packete um den Kernel gebaut. Sie bieten in aller Regel eine riesige Auswahl an fertigen Packeten und dazu noch ein Managementsystem für diese Packete.  
Eine Distro stimmt die einzelnen Packete aufeinander aufeinander ab und versucht so sicherzustellen, dass es zu keinen Komplikationen kommt. Die Packete sind dabei in aller Regel vorkompiliert, spricht man kann sie installieren und laufen sofort.  
Eine Distro ist also mehr oder weniger nur ein CMS für die Packete um den Linux Kernel herum. Man kann bei jeder Distro auf den Einsatz der fertigen Packete verzichten und an Stelle derer selber erstellte benutzen.  
Aus diesem Grund gibt es auch nicht DIE beste Distro für Gameserver. Steckt man genügend Zeit und Arbeit in das System sollten Gameserver auf allen Distributionen gleich gut laufen.

Jedoch eignen sich je nach Distribution die Standartpackete mehr oder weniger für den Gameserverbetrieb und erfordern somit mehr Arbeit. Auch ist die Philosophie hinter den Distros unterschiedlich. Deswegen werde ich jetzt einen kleinen, wegen der großen Anzahl von Distros sicherlich unvollständigen, Überblick geben. Sicherheitstechnisch sollten alle gleich gut sein, da sie alle gut gepflegt und mit Sicherheitspatches versorgt werden. Wenn ich im Folgenden von alten Versionen spreche, meine ich den Funktionsumfang. Sicherheitstechnisch sind (oder sollten) die Packete auf dem neuesten Stand sein.  
  
[Debian](http://www.debian.org):  
Das Ziel dieser Distro ist es, ein möglichst stabiles Betriebsystem zu haben. Lange Entwicklungszyklen sind hier normal. Deswegen werden hier nicht die neuesten, sondern die Packetversionen eingesetzt, die sich als besonders stabil erwiesen haben. Ebenso wird sehr darauf acht gelegt, dass sich die unterschiedlichen Packete nicht gegenseitig behinder. Debian verfügt über eine große hilfsbereite Community. Gameserver lassen sich in aller Regel ausgezeichnet mit der Standartinstallation betreiben.

[Ubuntu](http://www.ubuntu.com):  
Basiert auf Debian. Auch hier gibt es eine große hilfsbereite Community. Hier gibt es fest vorgeschrieben, kurze Entwicklungszyklen. Bei den Packeten wird Wert auf Aktualität gelegt. Die Distro tritt die Flucht nach Vorne an, anstelle bestehende Packetversionen zu fixen. Dementsprechend wird das Zusammenspiel der Packete nicht so ausführlich wie bei Debian getestet, bevor sie released werden. Eine Folge davon ist, es öfter mal zu Problemen im Zusammenspiel von Packeten kommen kann. Ebenso habe ich es schon erlebt, dass nach einem Update die Gameserver deutlich schlechter liefen, weil z.B. eine neuere, glibc Version eingespielt wurde.  
Im Regelfall lassen sich auch mit Ubuntu Gameserver einfach mit der Basisinstallation betreiben. Ich habe es aber schon öfters erlebt, dass nach Updates erstmal nachgebessert werden musste. Als Serverdistro setze ich sie ungern ein, weil ich mehr Wert auf Stabilität als Aktualität lege.

[Red Hat](http://www.de.redhat.com/):  
Red Hat ist ein Enterprise Linux also für Unternehmen. Es ist nicht kostenlos, dafür gibt es hier Garantieen und Support. Hier liegt das Augenmerk klar auf Stabilität. Von Admins, die es einsetzen, wurde mir berichtet, dass Gameserver ohne großen Aufwand gut laufen sollen.

[CentOS](http://www.centos.org/):  
Ist ein Open Source Projekt, das versucht Red Hat nachzubauen. Auch hier wird großer Wert auf Stabilität gelegt. Die Packetversionen sind zum Teil extrem alt. Bevor man hier ordentlich Gameserver betreiben kann, muss man schon etwas mehr Arbeit investieren. Ich habe es mal ausprobiert, es dann aber sein lassen, weil ich nichts davon halte eine Kopie zu benutzen, wenn man das Original haben kann.

[Gentoo](http://www.gentoo.de/):  
Ist eine Distro für die Bastler unter den Admins. Die Packete werden hier nur als Sourcecode ausgeliefert und werden dann vor der Installation durch das Packetmanagement kompiliert. Der Vorteil daran ist, dass man die Packete 100% angepasst an sein System erstellen und so unter Umständen etwas mehr Performance heraushohlen kann, als mit Packeten, die auf möglichst vielen Systemen laufen müssen.  
Es setzt weitreichende Linux Kentnisse voraus und ist definitiv nichts für Anfänger. Man hat ständig etwas kompilieren und zu basteln und braucht im Verhältnis zu anderen Distros recht lange, bis Gameserver gestartet werden können. Dazu kommt noch, dass beim Basteln gerne mal was schief läuft und man dann erstmal reparieren muss, so dass der Server ausfällt.  
Wenn setze ich es als Desktop Distro zu Hause ein, aber auf produktiven Servern in Rechenzentren mehr als ungern.

