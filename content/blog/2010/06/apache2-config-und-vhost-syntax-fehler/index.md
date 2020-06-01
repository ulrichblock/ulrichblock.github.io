---
title: "Apache2 Config und Vhost Syntax Fehler"
tags: ["Apache2"]
published: true
date: "2010-06-09"
---

Wer kennt das nicht: Schnell noch eine Änderung im Vhost oder der apache2.conf bzw. httpd.conf und den Apache reloaden oder neu starten.

Nur dank eines Systax Fehlers startet er nicht mehr und alle Nutzer sind ratz fatz am meckern, was denn los sei, wenn man ihn nicht schnell genug behebt.

Es gibt eine einfache Möglichkeit sowas vor dem Reload und Restart auszuschließen. Mit dem Befehl

```
apache2ctl -t
```

werden alle Configs und Vhosts auf Systax Fehler überprüft. Nach jeder Änderung erst den Systax testen und gegebenenfalls Fehler beheben. Erst danach den Reload oder Restart durchführen.

