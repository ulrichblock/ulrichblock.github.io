---
title: "Server FPS bei Orangebox stabiler"
tags: ["steam", "Counter-Strike Source", "Orangebox"]
published: true
date: "2011-06-25"
---

Dieses Orangebox Update scheint es wirklich in sich zu haben. Mir ist gerade aufgefallen, dass die Server FPS deutlich weniger schwanken als davor.

Bei einem meiner Server mit Desktop Hardware gab es oft folgende Ergebnisse:

- fps_max "70" -> effektiv ~66
- fps_max "100" -> effektiv ~90
- fps_max "300" -> effektiv 240-270
- fps_max "500" -> effektiv 400-450

Durch den Einsatz von Idlern, Repriorisierung, usw. konnte man auch noch leicht bessere Ergebnisse erzielen, die man zwar nicht spüren, aber messen konnte. Deswegen habe ich darauf verzichtet.

Nach dem Orangebox Update auf dem ansonsten unveränderten System, sieht es nun wie folgt aus:

- fps_max "70" -> effektiv 69,4-69,9
- fps_max "100" -> effektiv 99,7-99,9
- fps_max "300" -> effektiv 295-299
- fps_max "500" -> effektiv 493-499

Ich habe mir daraufhin den Start des Servers auf der Konsole verfolgt und konnte folgendes Neues entdecken:

> Finished RDTSC test. To prevent the startup delay from this benchmark, set the environment variable RDTSC_FREQUENCY to 2673.000000 on this system. This value is dependent upon the CPU clock speed and architecture and should be determined separately for each server. The use of this mechanism for timing can be disabled by setting RDTSC_FREQUENCY to ‚disabled‘.

Anscheinend wird nun die CPU bestimmt und der Server angepasster an das System, als vor dem Update gestartet.

