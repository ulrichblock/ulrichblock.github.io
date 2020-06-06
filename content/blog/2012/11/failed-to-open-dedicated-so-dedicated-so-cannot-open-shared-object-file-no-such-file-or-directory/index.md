---
title: "Failed to open dedicated.so (dedicated.so: cannot open shared object file: No such file or directory)"
tags: ["steam", "game-server"]
published: true
date: "2012-11-06"
---

Wer das optionale Update für Day of Defeat: Source und Team Fortress 2 von heute Nacht eingespielt hat, wird sich mit dem Fehler

> Failed to open dedicated.so (dedicated.so: cannot open shared object file: No such file or directory)

konfrontiert sehen.

Das Problem ist simpel, in der srcds_linux ist die nicht mehr vorhandene dedicated.so verlinkt. Die aktuelle nennt sich *dedicated_srv.so*
