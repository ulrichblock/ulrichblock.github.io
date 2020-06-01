---
title: "Gameserver Kernel"
tags: []
published: true
date: "2010-06-28"
---

### Einleitung/Allgemeines

Für diejenigen unter euch, die sich nicht zutrauen, einen Gameserver Kernel selber zu kompilieren und nicht den Debian Standard Kernel nutzen wollen, biete ich hier nur die fertigen Debian Pakete an. Wer einen Kernel passend auf sein System erstellen möchte findet im Tutorial [Der optimale Gameroot und Gameserver Kernel](http://www.ulrich-block.de/tutorials/der-optimale-gameroot-und-gameserver-kernel/ "Der optimale Gameroot und Gameserver Kernel") eine Anleitung

Ich wäre euch sehr dankbar, wenn ihr einen Kommentar hinterlassen würdet, wenn der Kernel auf eurem System funktioniert, bzw. nicht. Auf diese können andere dann im Voraus wissen, ob sie besser von einem Einsatz absehen sollten, oder es keine Bedenken gibt.  
  
**ACHTUNG: Da jedes System anders ist kann ich nicht garantieren, dass der Kernel bei euch läuft! Aus diesem Grund schließe jegliche Haftung aus!**  
  
Ich habe bei allen Kerneln die Kernelconfig vom Debian Stable als Grundstock genommen und nur die, für Gameserver relevanten Stellen geändert. Die Hardwareunterstützung in meinem Kernel beinhaltet deshalb alle Treiber des Debian Kernels. Deshalb kann man sagen, dass wenn der Debian Stable Kernel bei euch läuft, grundsätzlich meine Kernel auch bei euch laufen müssten.

  
Ich biete hier sowohl Varianten mit 100Hz ohne Preemtion, als auch 1000Hz mit Preemtion jeweils für 32bit und 64bit an. Die Headers braucht ihr nur, wenn ihr Module für den Kernel bauen wollt.  
  
Bitte beachtet, dass die Stabilität der Server FPS auch sehr stark von der eingesetzten Hardware abhängt. Verwendet euer Anbieter billige Desktop Hardware, schwanken die FPS oft deutlich stärker, als bei teuer Marken-, oder Serverhardware.  
  
Bei HL1 basierenden, wie CS, DOD und Natural Selection benutze ich für Public Server keinen Pingboost und -sys\_ticrate 1500. Manche setzten hier auch Werte knapp unterhalb der 2000 ein. Bei Warservern meist auch. Wenn die Leute unbedingt einen absolut geraden Graph möchten, dann *-pingboost 3 -sys\_ticrate 1001 – 1010*.  
Startet man mehr als einen Server mit pingboost 3 kommt es vor, dass die CPU Verbrauchsanzeige bei Linux spinnt und ignoriert werden muss. Der reale Verbrauch liegt zwar niedriger, als angezeigt, aber deutlich über den anderen pingboost Varianten. Aus diesen Gründen setze ich ihn nur noch ein, wenn der User nicht davon abzubringen ist, dass ~1000 fps besser seien als etwas schwankende von 950-980. In diesem Fall sage ich es aber nochmals explizit, dass die Aktion ein Placeboeffekt sein wird.

### Die unterschiedlichen Kernel
  
#### Debian 7.0

**3.14.1-ub-1000hz**:  
Hier werden die ungepatchten Sourcefiles von [kernel.org](http://www.kernel.org) verwendet.  
Viele Optimierungen der Kernelentwickler sorgen dafür, dass man einen deutlich niedrigeren Ping als mit älteren Kerneln wie denen aus der 3.0er, oder 3.2er Serie hat. High Res Timer, Deadline Scheduler und Low Latency Desktop (Preemtion) bei 1000hz geben diesem tickless Kernel die höchste Genauigkeit. Wenn man wenige Server bei bester Performance betreiben möchte, ist hier richtig.

**3.14.1-ub-100hz**:  
Hier werden die ungepatchten Sourcefiles von [kernel.org](http://www.kernel.org) verwendet.  
Viele Optimierungen der Kernelentwickler sorgen dafür, dass man einen deutlich niedrigeren Ping als mit älteren Kerneln wie denen aus der 3.0er, oder 3.2er Serie hat. High Res Timer, Deadline Scheduler und deaktivierte Preemtion bei 100hz geben diesem tickless Kernel die notwendige Power um möglichst viele Slots/Server gleichzeitig zu betreiben.

**3.0.89-ub-100hz**:  
Hier werden die ungepatchten Sourcefiles von [kernel.org](http://www.kernel.org) verwendet.  
Durch den High Res Timer sind die Server FPS **NICHT** an die Hz des Kernels gebunden! Die 100Hz und der Einsatz von Dynamic Ticks, so wie der Verzicht auf Preemtion ( eingesetzt wird „No Forced Preemption (Server)“ ) lassen einen größeren Throughput zu, wodurch in der Regel mehr Slots/Server gleichzeitig betrieben werden können, als mit hohen Hz Zahlen und Preemtion.  
Er richtet sich an Admins, die Server mit hohen Slotzahlen betreiben, und/oder schächere Hardware besitzen.

  
#### Debian 6.0

**3.0-ub-100hz**:  
Hier werden die ungepatchten Sourcefiles von [kernel.org](http://www.kernel.org) verwendet.  
Durch den High Res Timer sind die Server FPS **NICHT** an die Hz des Kernels gebunden! Die 100Hz und der Einsatz von Dynamic Ticks, so wie der Verzicht auf Preemtion ( eingesetzt wird „No Forced Preemption (Server)“ ) lassen einen größeren Throughput zu, wodurch in der Regel mehr Slots/Server gleichzeitig betrieben werden können, als mit hohen Hz Zahlen und Preemtion.  
Er richtet sich an Admins, die Server mit hohen Slotzahlen betreiben, und/oder schächere Hardware besitzen.

#### Debian 5.0

**2.6.33.5-zen3-ub-100hz**:  
Durch den High Res Timer sind die Server FPS **NICHT** an die Hz des Kernels gebunden! Die 100Hz und der Einsatz von Dynamic Ticks, so wie der Verzicht auf Preemtion ( eingesetzt wird „No Forced Preemption (Server)“ ) lassen einen größeren Throughput zu, wodurch ihr mehr Slots/Server gleichzeitig betreiben könnt. Durch den BFS Scheduler optimal für HL1 basierende (CS 1.6, CS CZ) Server. Funktioniert aber auch sehr gut bei großen HL2 basierenden Servern. Ich setze ihn ebenso für Server der Call of Duty Reihe ein.  
Dieser Kernel sollte auf jeden Fall eingesetzt werden, wenn ihr schwächere Hardware Hardware wie ältere AMD X2 Prozessoren oder ähnliches benutzt und wenn ihr Server mit hohen Slotzahlen auf dem System habt. Ob ihr nun 500, 300 oder 66 habt, merkt im Spiel eh keiner, so lange sie halbwegs stabil und höher als die eingestellte Tickrate bleiben.  
Ziel soll es sein, einen Server zu betreiben, bei dem keiner meckert und nicht ein Server der den hübschesten Graph bei einer FPS Messung bei leerem Server ausspuckt und bei belegten Slots einbricht

Ich habe es aber auch schon erlebt, dass auf mancher älterer Hardware die 100Hz Variante in Kombination mit HL1 Servern nicht so gut funktioniert. Aber auch hier kann man keine Faustregel aufstellen, so dass es heißt probieren geht über studieren.

  
**2.6.33.5-zen3-ub-1000hz**:  
Im Unterschied zur 100Hz Variante werden hier 1000Hz und volle Preemtion (Desktop) eingesetzt und auf Dynamic Ticks verzichtet. Dies führt auf manchen Systemen bei HL1 Servern zu etwas stabileren FPS, bedeutet aber auch, dass ihr für die gleiche Slotzahl mehr Rechenleistung benötigt. Je nach System kann der Mehrverbrauch wesentlich, oder auch nur minimal mehr sein.  
Wer ausschließlich oder hauptsächlich Warserver auf HL1 Basis betreibt, wird mit dieser Variante wahrscheinlich glücklicher, als mit der 100Hz Variante.

**2.6.34.1-ub-100hz**:  
Hier werden die ungepatchten Sourcefiles von [kernel.org](http://www.kernel.org) verwendet. Eingestellt wird er auch der zen3-100hz, so dass grundsätzlich das Gleiche gilt.  
Auch bei ihm entsteht ein etwas höheren Load als das Zen3 Pendant und ist für HL1 basierende Server weniger geeignet.  
Er richtet sich an Admins, die Server mit hohen Slotzahlen betreiben, und/oder schächere Hardware besitzen.

### Installation

Installation mit dem benutzer root (XXX und bitversion durch die Werte des benutzen Kernels ersetzen):  
```
dpkg -i linux-image-2.6.33.5-XXX-ub-XXXhz_bitversion.deb
update-grub
```

Vergewissern, dass der Kernel in der Datei /boot/grub/menu.lst eingetragen ist.

```
shutdown -r now
```

### Downloads:

Hier waren mal die Downloads. Da die Kernel extrem veraltet waren und dementsprechend viele Sicherheitslücken enthalten, wurden sie entfernt.