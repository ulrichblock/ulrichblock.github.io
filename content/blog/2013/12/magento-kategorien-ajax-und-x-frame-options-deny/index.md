---
title: "Magento Kategorien, Ajax und X-Frame-Options DENY"
tags: ["magento"]
published: true
date: "2013-12-10"
---

Bei einer jüngst vorgenommenen Magento Installation, wollten einige Funktionen, die mit Ajax arbeiten nicht so recht.

Insbesondere beim Speichern von Kategorien traten Probleme auf. So wurde die Kategorie zwar hinzugefügt bzw. geändert, das Gif drehte sich aber munter weiter weil die Ajax Aktion an irgend einer Stelle fehlgeschlagen ist.

Error Logs durchsucht, Google befragt, alles war erfolglos.

Was also tun? Ich habe die Javascript Console im Firefox angeschaut und war des Rätsels Lösung etwas dichter. Ein Iframe konnte nicht geöffnet werden. Iframe? Da war doch was? Genau, ich verwende in meinem Standardtemplate folgenden Eintrag um [Clickjacking Angriffe](/der-clickjacking-angriff-x-frame-options/ "Der Clickjacking Angriff, X-Frame-Options") zu verhindern:

```
add_header X-Frame-Options DENY;
```

Nachdem ich die Option auf SAMEORIGIN umgestellt hatte, gingen die Ajax Funktionen wieder:

```
add_header X-Frame-Options SAMEORIGIN;
```

