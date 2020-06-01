---
title: "Grüße von einem Botnetz"
tags: ["wordpress", "security"]
published: true
date: "2013-05-30"
---

So wie es scheint gehen die Angriffe auf WordPress Blogs in die nächste Runde. Ich musste eben das Wordfence Plugin umstellen, damit es mich nicht mehr mit E-Mails zuspammt. Bisher wurde ich über jeden fehlgeschlagenen Versuch ein Passwort zurückzusetzen, oder einen fehlgeschlagenen Loginversuch informiert. Innerhalb weniger Minuten hatte ich auf einmal über 600 Mails im Posteingang. Jede war für einen eigene Bot bzw. IP.

Per Brutforce wird versucht die hier nicht mehr vorhandenen Accounts **admin**, **adminadmin** und **administrator** zu knacken.

Der Angriff geht weiter, wenigstens werde ich nicht mehr mit Warnungen bombardiert. Den aktuellen Stand kann ich mit diesem Query nachvollziehen:

```sql
SELECT COUNT(`IP`) AS `attackerCount`, COUNT(`IP`)+SUM(`blockedHits`) AS `totalAttacks` FROM `wp_wfLockedOut`
```

Nur 10 Minuten, nachdem ich das Mail Versenden ausgestellt hatte, ist das Ergebnis:

> attackerCount: 1573  
> totalAttacks: 4927

