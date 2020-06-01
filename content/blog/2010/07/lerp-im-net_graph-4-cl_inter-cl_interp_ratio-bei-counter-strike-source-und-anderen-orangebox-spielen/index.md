---
title: "Lerp im net_graph 4, cl_inter, cl_interp_ratio bei Counter-Strike Source und anderen Orangebox Spielen"
tags: ["steam", "Counter-Strike Source"]
published: true
date: "2010-07-15"
---

Bei Spielen, die die Orangebox Engine benutzen, wie z.B. seit neuestem Counter-Strike Source seitdem Orangebox Update vom 07.07.2010, gibt es beim net_graph 4 die Anzeige Lerp. Und so raten die Leute rum, was er denn bedeutet und warum er bei manchen Werten seine Farbe wechselt. Auf Englisch könnt ihr es auf der [Valve Developer Page](http://developer.valvesoftware.com/wiki/TF2_Network_Graph) nachlesen.

Ich werde es hier im folgenden auf Deutsch wiedergeben und erklären, welche Auswirkungen das Ganze auf den Spielfluss hat:

Der Lerp ist die Länge des Interpolationsintervalles. Die Interpolation braucht man, um die Bewegung zwischen den einzelnen Updates zu schätzen. Standartmäßig sind das 20 in der Sekunde. spricht alle 50ms. Die Bewegung würde ohne das Schätzen, das zwischen diesen Updates passiert, sehr rucklig aussehen.  
Deswegen rät Valve auch ausdrücklich davon ab, die Interpolation mit den Werten cl_inter_ratio 0 und cl_interp 0 abzuschalten. Statt dessen wird empfohlen, mit den Werten cl_interp_ratio 1 und cl_interp 0 zu spielen, damit sich das Interpolationsintervall wieder nach der Updaterate (cl_updaterate) richtet. In diesem Fall ist das Interpolationsintervall und damit auch der lerp cl_interp_ratio/cl_updaterate. Bei einer cl_updaterate von 66 bedeutet dies: cl_interp=1/66=0.0152 bzw. ein Lerp von 15,2ms. Diese Werte gebe ich auch bei meinem Config Generator vor.  
  
Leute die euch sagen, ihr müsst unbedingt ohne Interpolation mit einem Lerp von 0 spielen, haben sich nicht die Mühe gemacht, Valves Informationen durchzulesen und somit nicht die Funktion der Interpolation verstanden. Wer es dennoch macht soll sich dann nicht beschweren, wenn andere über ihren Bildschirm ruckeln, was auf Public Servern schnell mal passieren kann.

Nun zu den Farben des Lerps  
Sie ist sowohl von den Servereinstellungen, als auch von euren Netsetting abhängig.

Er ist weiß:  
Wenn die Serverfps höher als cl_interp * 1000 sind und euer cl_interp Wert größer als, oder gleich 2/cl_updaterate ist. Bei den Valve standart ist dies der Fall. Hier läuft der Server mit ~270 fps, cl_interp ist 0.1 und cl_updaterate ist 20. Spricht: 270fps > (0.1\*1000=100) und 0.1 > (2/20=0.1)  
Bei den Standartwerten sollte ein weißer Wert in Ordnung zum Spielen sein, auch ist der Server in diesem Fall spielbar.

Er ist gelb:  
Wenn die Serverfps kleiner als cl_interp\*1000 sind.  
Blinkt der Lerp ab und zu gelb auf, ist der Server instabil und ihr solltet euch einen neuen suchen. Leuchtet er konstant gelb, ist die Hardware entweder mit dem Server überfordert, oder der Admin hat fps_max auf einen niedrigen Wert limitiert, um den CPU Verbrauch zu senken. Ein weiterer Grund für einen gelben Lerp kann eine FPS Lib sein, die eingesetzt wird, um mehr als 1000 fps zu erreichen. FPS Werte oberhalb von 1000 können vom net_graph 4 nicht richtig ausgewertet werden. Die FPS werden links unter "sv" angezeigt. Bei den FPS Libs wird hier im Regelfall ein sehr niedriger Wert konstant angezeigt. Wenn der Server jetzt konstant FPS oberhalb der tickrate hat, oder es zu einer KrummenAnzeige wegen einer FPS Lib kommt, könnt ihr auf dem Server weiter spielen. Warum hohe FPS Werte überbewertet sind habe [ich hier erklärt](/fps-tickrate-und-was-dahinter-steckt/).

Er ist orange:  
Wenn cl_interp kleiner als 2/cl_updaterate ist. Spricht bei einer cl_updaterate von 66 kleiner als 0.03 ist.  
Ein oranger lerp ist nicht grundsätzlich nicht schlimm. Sollte es jetzt aber bei 3 oder mehr Packeten in Folge zu Choke kommen, ist das Interpolationsintervall vorbei und ihr werdet Ruckler spüren. Die Lösung ist dann aber bei den anderen netzwerk Cvars zu suchen und nicht bei cl_interp.

