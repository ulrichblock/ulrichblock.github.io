---
title: "Zeit mal wieder zu updaten"
tags: ["security"]
published: true
date: "2011-11-19"
---

Wenn man Systemupdates gerne schleifen lässt, wäre es derzeit vielleicht nicht schädlich, wenn man diese Gewohnheit etwas aussetzt. In den letzten Tagen und Wochen sind mehrere Updates erschienen, die sicherheitstechnisch wichtig sind.

Angefangen beim [ProFTPD Server](http://bugs.proftpd.org/show_bug.cgi?id=3711), bei dem eine Lücke entdeckt wurde, mit der es möglich ist, von außen Code einzuschleusen, ohne Zugangsdaten zu benötigen (remote code execution).

[Bind9](http://www.debian.org/security/2011/dsa-2347) hat ebenfalls eine schwere Lücke, mittels der der Angreifer den Deamon zum Absturz bringen kann (denial of service).

Des Weiteren ist [Sourcebans](http://www.sourcebans.net/content/sourcebans-149-released) nun in der Version 1.4.9 erschienen. Dieses Update behebt einige Bugs und die Möglichkeit einer SQL Injection.

