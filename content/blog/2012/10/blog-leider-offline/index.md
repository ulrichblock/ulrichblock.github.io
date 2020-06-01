---
title: "Blog leider offline"
tags: []
published: true
date: "2012-10-18"
---

> Deine PHP-Installation scheint nicht Ã¼ber die von WordPress benÃ¶tigte MySQL-Erweiterung zu verfÃ¼gen.

Das konnte man leider die letzten Tage hier lesen.

Was war passiert? Ich nutze Caching und einen Reverse Proxy. Während eines Serverupdates hatte der Proxy diese Nachricht gecached und dann allen Usern immer wieder ausgeliefert.

In der Zeit war ich mehrfach auf dem Blog, jedoch eingeloggt. Für eingeloggte User ist das Caching deaktiviert. Deswegen ist mir das Problem leider nicht aufgefallen.

Damit sich das Problem nicht wiederholt, wurde die Dauer, mit der die Daten gecached werden, reduziert.

