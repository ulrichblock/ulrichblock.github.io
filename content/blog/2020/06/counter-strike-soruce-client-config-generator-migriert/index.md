---
title: "Counter-Strike: Source Client Config Generator Migriert"
tags: ["steam", "typescript", "javascript"]
published: true
date: "2020-06-09"
---

Bei der Migration zu Gatsby hatte ich den [Config Generator](/generatoren/config-generator/) bisher ausgenommen. 
Der Grund war der Aufwand ein Serverseitiges PHP Skript in Clientseitiges TypeScript umzuschreiben, welches nach JavaScript compiliert wird.

Dieses Projekt bin ich jetzt angegangen und habe als Erstes die Generation von Counter-Strike: Source Client Configs übertragen.

Das Herz der Logik steckt in der Komponente [GenerateConfigs.tsx](https://github.com/ulrichblock/ulrichblock.github.io/src/components/generate-configs/GenerateConfigs.tsx).
Sie wird in der Seite [password-generator.tsx](https://github.com/ulrichblock/ulrichblock.github.io/src/pages/generatoren/password-generator.tsx) eingebunden.

An Stelle die unterschiedlichen Formulare, wie vor fast 10 Jahren hart zu programmieren, bin ich diesmal einem generischen Ansatz gefolgt.
Im [JSON Format](https://github.com/ulrichblock/ulrichblock.github.io/src/components/generate-configs/config-client-css.ts) werden die einzelnen Config Werte beschrieben.
Ausgehend von dem JSON Format wird im ersten Schritt das Formular erstellt.

Auf dem onClick Event des **Erstellen** Buttons ist ein Event Handler registriert.
Wird der Event Handler aufgerufen, geht er über das JSON. Für jeden Eintrag wird der Wert von dem zugehörigen Input Feld übernommen und in einen String geschrieben.

Der String liegt an dieser Stelle im Ram des Browsers vor und muss nun als Download angeboten werden.
Mit diesem Ziel wird aus dem String ein Objekt im Blob Format erstellt. Mit dem Blob wird wiederum eine Object URL erstellt.
Die Object URL wird in _this._downloadUrl_ gecached, um sie bei einem erneuten Aufruf zurücksetzen zu können.

Zu guter letzt wird die Object URL als _href_ des Anchors gesetzt. Dies triggert den Browser zum Download.

Der entscheidende Code Teil:

```typescript
const anchor = document.getElementById('download_link') as HTMLAnchorElement

if (!anchor || !('href' in anchor)) {
  return
}

if (this._downloadUrl) {
  window.URL.revokeObjectURL(this._downloadUrl)
}

this._downloadUrl = window.URL.createObjectURL(new Blob([this._config()], { type: 'text/plain;charset=utf-8' }))

anchor.setAttribute('href', this._downloadUrl)
```

