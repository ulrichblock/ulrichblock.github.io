---
title: "Hello Gatsby, Goodbye Wordpress"
tags: ["gatsby", "wordpress", "typescript", "github"]
published: true
date: "2020-06-07"
---

## TL;DR

[Wordpress](https://de.wordpress.org/) ist draußen, Gatsby ist drinnen. Weniger Kosten im Betrieb, bessere Performance für die Besucher.
Den Source Code des Blogs und das Deployment kann man sich [auf GitHub]() anschauen.

## Gatsby

Nach gut zehn Jahren habe ich meinen [Wordpress](https://de.wordpress.org/) Blog eingemottet und komplett durch den Static Webpage Generator [Gatsby](https://www.gatsbyjs.org) ersetzt.
Als Datenquelle habe ich Markdown gewählt.

### Vorteile

#### Sicherheit

Die Sicherheit des Blogs ist extrem verbessert worden. Bisher diente Cloudflare als CDN und Schutz. Dahinter befindet sich ein kleiner V-Server mit einem [komplexeren Setup](/wordpress-unleashed-konzept/).
Jede Software Komponente, Wordpress Plugin etc. vergrößert die Angriffsfläche. Alle Komponenten müssen regelmäßig gewartet und aktualisiert werden.
Im Fall von Wordpress Plugins muss man zusätzlich sichergehen, dass es noch weiterentwickelt wird.

Da nur noch statische Inhalte ausgeliefert werden, hätte ich das Setup um Memcached, PHP/HHVM, Elastic Search und MariaDB reduzieren können.
Der Betrieb eines V-Server im Zeitalter der Cloud ist ein unnötiges Sicherheitsrisiko, wenn man, wie es bei mir der Fall ist, nicht jeden Tag auf Patches, Attacken, 0-Days etc. reagieren kann.
Stattdessen wird die Webseite auf [GitHub Pages](https://pages.github.com/) gehostet. CDN und HTTPS ist hier inklusive.

Bei GitHub Pages werden die Dateien über Git auf GitHub verwaltet. Ich muss mir keine Sorgen um Backup und Restore mehr machen. Interna können nicht per Zufall über ein Backup geleakt werden.

#### Verfügbarkeit

Ich gehe davon aus, dass GitHub/Microsoft ausreichend Hardware, Personal und Expertise für den Betrieb eines globalen CDN samt Monitoring zur Verfügung stehen.
Mein Blog hatte bisher nur ausreichend Expertise. Dinge, wie Monitoring hatte ich nie eingerichtet.
Mit weniger Aufwand wird der Blog nun verfügbarer den je sein. 

#### Performance

##### Status Quo

Mein bisheriges [Setup](/wordpress-unleashed-konzept/) lieferte bereits eine hervorragende Performance. Googles [Speed Insights](https://developers.google.com/speed/pagespeed/insights/?hl=de) hatte nur wenig zu bemängeln.
Dies ist vor allem einer aggressiven Caching und Optimizing Strategie geschuldet. Betreibt man ein CMS ohne Caching drücken zeitaufwändige Datenbankabfragen massiv auf die Performance.
Wordpress ohne einen Optimizer bedeutet extrem viele CSS und JS Dateien die leider oft unkomprimiert sequentiell übertragen werden.

Für die kritischere Mobile Ansicht waren dennoch zwei Punkte angemerkt worden:

- Wichtige Anforderungen vorab laden (0,93 s); Mit `<link rel=preload>` können Sie das Abrufen von Ressourcen priorisieren, die derzeit beim Seitenaufbau erst später angefordert werden. [Weitere Informationen](https://web.dev/uses-rel-preload/).
- Ressourcen beseitigen, die das Rendering blockieren (0,18 s); Ressourcen blockieren den First Paint Ihrer Seite. Versuchen Sie, wichtiges JS und wichtige CSS inline anzugeben und alle nicht kritischen JS und Stile aufzuschieben. [Weitere Informationen](https://web.dev/render-blocking-resources/).

##### Gatsby

Bei Gatsby gab es sowohl in der Mobile, wie in der Page Ansicht 100/100 Punkten. Dennoch wurde angemerkt, dass nicht genutztes JavaScript entfernen zu entfernen sei.
Die Anzeige erscheint seit dem vor wenigen Wochen vorgenommenen Upgrade von Lighthouse. In der Gatsby Community wird bereits [diskutiert](https://github.com/gatsbyjs/gatsby/issues/24586) und einen weiteren Blog Beitrag wert.

#### Kosten

Der nun abbestellte V-Server kostete mich keine 10€ im Monat. Bei größeren Wordpress Projekten sieht die Welt anders aus. 
Selbst wenn man günstige Angebote, wie z.B. bei OVH in Anspruch nimmt, schlagen mehrere Root Server samt Load Balancer schnell mit mehreren hundert Euro im Monat zu Buche.

### Nachteile

Für mich keine. Ich bin Programmierer und betreibe den Blog alleine. Deswegen brauche ich weder einen Admin Bereich, noch eine benutzerfreundliche Oberfläche, um diesen Text zu verfassen.
Das jetzt verwendete [Markdown](https://de.wikipedia.org/wiki/Markdown) Format ist seit Jahren Bestandteil meiner täglichen Arbeit.
Einen Login für Benutzer hat es auf diesem Blog nie gegeben. Die Kommentarfunktion, hatte ich im Rahmen der [DSGVO](https://de.wikipedia.org/wiki/Datenschutz-Grundverordnung) bereits deaktiviert.

Die verbliebenen dynamischen Inhalte in Form von Config und Passwort Generator habe ich auf JavaScript migriert.

### Eine Kombilösung wäre möglich

Ein ganz so harter Cut, wie ich ihn vollzogen habe, ist nicht zwingend notwendig. Das Hauptargument von [Gatsby](https://www.gatsbyjs.org) gegenüber den zahlreichen anderen Static Webpage Generatoren sind die vielen Datenquellen.
Unter den zahlreichen Plugins befindet sich das Plugin [gatsby-source-wordpress](https://www.gatsbyjs.org/packages/gatsby-source-wordpress/).
Die Texte werden weiterhin über Wordpress verfasst. Beim Bauen der Gatsby Seite wird die Wordpress API genutzt, um die Seiten zu generieren. 

In einem solchen Scenario wird Wordpress als so genanntes Headless CMS eingesetzt.

## Gatsby Blog

Ich gehe davon aus, dass Node.js und NPM auf dem System installiert sind.

### Gatsby Starter Blog Typescript

Als Startpunkt habe ich die in Typescript verfassten Vorlage [Gatsby Starter Blog Typescript](https://github.com/gperl27/Gatsby-Starter-Blog-Typescript) gewählt.

Mit den folgenden Befehlen haben wir bereits einen auf dem Localhost (http://localhost:8000/) erreichbaren lauffähigen Blog.

```bash
npm install -g gatsby-cli
gatsby new blog https://github.com/gperl27/Gatsby-Starter-Blog-Typescript
cd blog
gatsby develop
```

### (dev) Dependencies

#### gatsby-plugin-google-analytics

Ich tracke keine User. Deswegen fliegt `gatsby-plugin-google-analytics` aus der package.json und gatsby-config.js.

#### gatsby-plugin-typescript

`gatsby-plugin-typescript` ist mittlerweile fester Bestandteil von Gatsby und kann deswegen als Dependency entfernt werden.
Um Typescript Compile Fehler im Build sehen zu können ist [gatsby-plugin-typescript-checker](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript-checker/) dazu gekommen.

#### TSLint vs ESLint

TSLint ist [End of Life](https://github.com/palantir/tslint/issues/4534) und durch [ESLint](https://eslint.org/) ersetzt.
Entfernt wird:

- gatsby-plugin-tslint
- tslint
- tslint-config-prettier
- tslint-loader
- tslint-plugin-prettier
- tslint-react

Hinzugekommen:

- dependencies
  - [gatsby-plugin-eslint](https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/)
- devDependencies
  - @typescript-eslint/eslint-plugin
  - @typescript-eslint/parser
  - eslint
  - eslint-loader
  - eslint-config-prettier
  - eslint-plugin-jest
  - eslint-plugin-prettier

#### Veraltete Dependencies

Aus den vorherigen Punkten kann man ablesen, dass die Vorlage etwas älter ist.
Man sollte die (dev)Dependencies auf den neuesten Stand bringen. Welche betroffen sind, kann man mit dem outdated Befehl sehen.

```bash
npm outdated
```

### Starter Anpassen

#### Developer Diary Typescript Portierung

Im Folgenden habe ich den Starter [Developer Diary](https://www.gatsbyjs.org/starters/willjw3/gatsby-starter-developer-diary/) nach Typescript portiert.
Typescript war der Grund, warum ich das Design portiert habe, an Stelle den Starter direkt zu nutzen.
Im Nachgang wäre es an dieser Stelle sicher besser gewesen, das Projekt mit diesem Starter anzulegen und die notwendigen Teile aus einem Typescript Starter zu portieren.

Die Modifikationen, die ich am Starter vorgenommen habe, waren dann auch ziemlich umfangreich. Da stellt sich die Frage, ob man nicht besser von Null angefangen hätte.

#### CSS vs SASS

Developer Diary kommt mit __CSS__. Für Erweiterungen und Änderungen in der Zukunft mag __SASS__ die bessere Alternative sein.
Aus diesem Grund kommen [gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/) und [node-sass](https://www.npmjs.com/package/node-sass) dazu.
Mitgelieferte `*.css` Dateien werden auf `*.scss` umbenannt.

#### Data Privacy

##### Privacy Header

Um nicht unnötig Informationen an die Ziele von Links zu geben, würde ich normalerweise am Server den `Referrer-Policy` setzen.
Bei den GitHub Pages ist es nicht möglich. Cloudflare oder ähnliches wollte ich auch nicht vorschalten.
Deswegen habe ich das HTML Equivalent `<meta content="strict-origin-when-cross-origin" http-equiv="Referrer-Policy">` ins Template eingearbeitet.

##### rel="external noopener noreferrer"

Mittels des Plugins [gatsby-remark-external-links](https://www.gatsbyjs.org/packages/gatsby-remark-external-links) setzte ich die [Link Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
Wer den Zielseiten den SEO Abfluss nicht gönnt oder aber bezahlte Links markieren möchte, lässt es beim Default `nofollow noopener noreferrer`. 

Gesponserte Links gibt es hier nicht. Suchmaschinen sollen den Links ruhig folgen. Deswegen gilt für die hier gesetzten externen Links `rel="external noopener noreferrer"`.

Ein gerenderter Link sieht dann wie folgt aus:

```html
<a href="https://de.wordpress.org/" target="_blank" rel="external noopener noreferrer">Wordpress</a>
```

#### Seo

##### Helm

Das benutzte Starter Theme kommt mit dem Plugin [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet).
Es wird in der src/components/seo.tsx verwendet und setzt zahlreiche SEO relevante Informationen je Page.

##### Sitemap und robots.txt

Um Crawlern das Leben leichter zu machen und damit die SEO zu verbessern, sollten sitemap und robots.txt nicht fehlen.
Zu diesem Zweck kommen die Plugins [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap) und [/gatsby-plugin-robots-txt](https://www.gatsbyjs.org/packages/gatsby-plugin-robots-txt/) hinzu.

##### gatsby-plugin-canonical-urls

Für Canonical URLs sorgt das Plugin [gatsby-plugin-canonical-urls](https://www.gatsbyjs.org/packages/gatsby-plugin-canonical-urls)

#### RSS Feed

Bei Wordpress kommt der News Feed out of the Box. Bei Gatsby erzeuige ich ihn mit dem Plugin [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed).

#### Suche

Eine Suche ist bei Wordpress auch mit an Bord. Bei Gatsby muss sie nachgerüstet werden.
Meine Wahl ist auf [gatsby-plugin-elasticlunr-search](https://www.gatsbyjs.org/packages/@gatsby-contrib/gatsby-plugin-elasticlunr-search) gefallen.
Die Suche arbeitet mit JavaScript ausschließlich auf der Seite.
Dies ist mir wichtig, weil ich vermeiden will, dass Daten an Drittanbieter wie z.B. Algolia übertragen werden.

Die Einbindung war nicht trivial und erforderte das Programmieren einer eigenen [Komponente](https://github.com/ulrichblock/ulrichblock.github.io/src/components/search/Search.tsx) [Seite](https://github.com/ulrichblock/ulrichblock.github.io/src/pages/suche.tsx).

#### Performance

##### Gatsby Guide

Developer Diary hat die Gatsby [Performance Anleitung](https://www.gatsbyjs.org/docs/performance/) größtenteils schon umgesetzt.
Zusätzlich

##### Purge CSS

Starter Themes und Plugins fügen oft mehr CSS hinzu, als man tatsächlich benötigt.
Developer Diary setzt z.B. auf Design System [bootstrap 4](https://www.npmjs.com/package/bootstrap).
Anzupassen kostet Zeit. Manuelles Cut and Paste schneidet einen von zukünftigen Updates ab, bzw. erfordert eine Wiederholung des Prozesses.

Eine Alternative zu den nicht so optimalen Prozessen ist [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss).
Wie der Name schon sagt, entfernt es unnötiges CSS. Im Falle des Blogs sind das __91.52%__ vom gesamten CSS:

```
gatsby-plugin-purgecss:
 Previous CSS Size: 191.76 KB
 New CSS Size: 16.48 KB (-91.41%)
 Removed ~175.28 KB of CSS
```

##### Offline

Das Plugin [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/) wird in seiner minimal Konfiguration genutzt.
Es fügt einen Service Worker hinzu, welcher einmal aufgerufene Seiten lokal vorhält. Dadurch wird die Webseite resilienter gegen schlechte Netzwerk Verbindungen.

## Content Migration

### Blogs und Pages

#### Export

Im ersten Schritt habe ich das Wordpress Plugin [WP Gatsby Markdown Exporter](https://wordpress.org/plugins/wp-gatsby-markdown-exporter) installiert.

Die exportierten Dateien habe ich zuerst in einem temporären Unterverzeichnis von Gatsby abgelegt.
Dies, weil die exportierte Struktur nicht meinem gewünschten Ziel entsprochen hat.

#### Strukturen

Mittels eines schnell geschriebenen Bash Skriptes habe ich die Meta Informationen des Exports geparst und Struktur geschaffen.
Darüber hinaus, wird der Header, wie von Gatsby erwartet angelegt und der exportierte erhalten.

```bash
#!/bin/bash

ls *.md | while read file; do
  PERMALINK=$(grep '^permalink:' "${file}" | awk -F ": " '{print $2}')
  DATE_MONTH=$(grep '^date:' "${file}" | awk -F"['-]" '{print $2"/"$3}')
  TITLE=$(grep '^title:' "${file}" | awk -F "'" '{print $2}')
  DATE=$(grep '^date:' "${file}" | awk -F"[T'-]" '{print $2"-"$3"-"$4}')
  FOLDER="${DATE_MONTH}/${PERMALINK}"
  mkdir -p "${FOLDER}"
  echo "---
title: \"${TITLE}\"
tags: []
published: true
date: \"${DATE}\"
---

$(cat $file)
" > "${FOLDER}/index.md"
done
```

#### Nacharbeit

Der exportierte Head entspricht nicht dem Zielformat. HTML Elemente wie __<br>__ und __<p> wurden nicht immer korrekt beim Export durch Zeilenumbrüche ersetzt. 

Über die Jahre hatte ich verschiedene Code Syntax Highlighter im Einsatz. Natürlich jeder mit eigenem Format.
Diese Formate scheinen nicht alle von dem Exporter unterstützt zu werden. Entweder fehlten Teile es Snippets oder waren falsch eingebunden.

Interne Links sind als URLs mit Domain exportiert worden. Suchen und ersetzen in Dateien macht schnell aus `http://www.ulrich-block.de/ein-blog-beitrag` `/ein-blog-beitrag`.
Des Weiteren hatte ich vor Jahren bei der Umstellung auf Permalinks nicht alle internen Verweise von `?p=123` auf `/ein-blog-beitrag/` umgestellt.
Text Search und manuelles auflösen auch hier.

### Passwort Generator

Den [Passwort Generator](/passwort-generator) habe ich schnell neu geschrieben.

### Nicht migriert

Dynamische Inhalte, die ein Backend benötigen habe ich erst einmal nicht migriert. Ebenso Inhalte, bei denen ein Rewrite zu Client seitigen Javascript mir für das Erste zu aufwendig gewesen ist.
Statt dessen habe ich erst einmal Platzhalter geschaffen, die ggf. später abgelöst werden.

Die Liste:

- Steam + VAC Secured
- Steam App
- Config Generator


## CI/CD

### Einleitung

Es ist mittlerweile etablierter Standard, Änderungen in einem Branch zu machen und diesen Branch dann als Change zu dem Haupt Branch einzureichen.
Bei GitHub wird dies über [Pull Requests](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) gemacht.
Sobald ein Pull Request aufgemacht wird, wird ein CI System getriggert. Dieses testet den Code auf verschiedene Aspekte.
Wenn einer der Tests fehlschlägt, wird der Pull Request blockiert. Man kann ihn nicht mehr in den Main Branch mergen.
In Projekten mit mehreren Teilnehmern wird hier der Code Review vorgenommen.

Sobald die technischen Checks und das Review erfolgreich sind, wird der Branch des Pull Requests in den Main Branch gemerged.
Hier wird das CI System dann abermals getriggert und der eigentliche Build vorgenommen.

Bei vorangegangenen Projekten habe ich den Service [Travis CI](https://travis-ci.org/) mit dem Repository verbunden.
Es ist für öffentliche Repositories kostenlos und hat bis jetzt alle meine Anforderungen erfüllt.
Ein Beispiel war das schon länger abgegebenen OpenSource Projekt [easy-wi.com](https://easy-wi.com).
Bei diesem wird die Webseite mit dem Statischen Site Generator [MkDocs](https://www.mkdocs.org/) gebaut und auf [GitHub Pages](https://github.com/easy-wi/page/blob/master/.travis.yml) deployed.

Es war meine Neugier und der Wunsch etwas Neues auszuprobieren und kein technischer Grund auf das eher neueres Feature [GitHub Actions](https://github.com/features/actions) zu setzen.

### GitHub Actions

#### Pull Request Voter

Der [Pull Requests Workflow](https://github.com/ulrichblock/www.ulrich-block.de/.github/workflows/pull-requests.yml) soll drei Dinge sicherstellen.

Die Konfigurationen sind zum Teil im Dateiformat YAML verfasst. Fehler in diesen Dateien führen zwar fast immer zu fehlerhaften Builds.
Je nach Build Tooling ist die Ursache aber schwer zu erfassen und zu beheben.
Die Action [GitHub YAMLlint](https://github.com/ibiqlik/action-yamllint) instrumentalisiert das in Python geschriebene Tool [yamllint](https://yamllint.readthedocs.io).

In die gleiche Richtung geht auch [ESLint](https://eslint.org/). Wie alles Linting hat es zwei Ziele. Eine einheitliche Formatierung und grobe Fehler vorab finden.
Die Wahl fiel auf [action-eslint](https://github.com/iCrawl/action-eslint). Die Action installiert ein nacktes ESLint.
Das Verhalten ist korrekt, führte in meinem Fall aber zu einem fehlerhaften Job, weil die zusätzliche Plugins fehlten, die es braucht, um Typescript und React umfangreich linten zu können.
Eine zusätzliche Run Anweisung, die Plugins zu installieren löste das Problem.

Während die ersten beiden Punkte nicht zwingend sind, ist der Dritte wichtig, um einer kaputten Seite vorzubeugen.
Der Gatsby Test Build wird durch die Github Action [Gatsby Publish](https://github.com/enriikke/gatsby-gh-pages-action) gesteuert.
Es werden dabei alle Befehle, wie beim späteren Build aufgerufen. Durch das Setzen von `skip-publish: true` wird lediglich auf den Publish bzw. Deploy verzichtet.

#### Page Build und Deployment

Der [Gatsby Publish Workflow](https://github.com/ulrichblock/www.ulrich-block.de/.github/workflows/gatsby-publish.yml) wird bei jeder Änderung am **dev** Branch ausgeführt.
Wie schon beim PR Voter, wird die Github Action [Gatsby Publish](https://github.com/enriikke/gatsby-gh-pages-action) verwendet.
Sobald es den Befehl `gatsby build` erfolgreich ausgeführt hat, pushed es das Ergebnis, den Inhalt des **public** Ordners, auf den **master** Branch.

### GitHub Page Konfiguration

#### DNS CNAME Records

In die DNS Einstellungen meines Domain Anbieters habe ich die bisherigen A Records entfernt. Statt dessen gibt es nun 

#### Repository

Das Hosten von Github Pages ist nur dann kostenlos, wenn das zugehörige Repository öffentlich ist.
Von einer Umgehungsstrategie, bei der ich den Quellcode in einem privaten Repository belasse und dann mittels CI/CD auf den `gh-pages` Branch eines öffentlichen pushe, habe ich abgesehen.
Der erste Schritt war demnach unter `Settings > Options > Danger Zone > Make this repository public` das Repository öffentlich zu machen.

Als Namen des Repositories hatte ich zuerst **www.ulrich-block.de** genommen. Der Default Branch war **master**.
Als ich in der Dokumentation von GitHub gefunden hatte, dass man statt dessen **ulrichblock.github.io** benutzen soll, habe ich das Repository umbenannt.
Die Überraschung folgte schnell. Nutzt man die User **<user>.github.io** bzw. Org Domain **<organization>.github.io**, wird die GitHub Seite zwangsweise vom **master** Branch ausgeliefert.
Als Folge dessen wurde nur die als HTML gerenderte README.md angezeigt, wenn man im Browser ulrich-block.de aufgerufen hat.

Deswegen habe ich vom **master** Branch aus, dann den neuen Branch **dev** erstellt. Nach dem Erstellen habe ich ihn unter `Settings > Branches` als Default branch konfiguriert.
Im Anschluss die Workflows dahingehend angepasst, dass **dev** die Sources enthält und an Stelle von **gh-pages** nach **master** deployed wird.
Dann noch den jetzt überflüssingen **gh-pages** Branch gelöscht.

#### CNAME

Um eine eigene Domain ([Custom Domain](https://help.github.com/en/github/working-with-github-pages/about-custom-domains-and-github-pages)) verwenden zu können, bedarf es der Konfigurationsdatei **CNAME** im Root des gh-pages Branches.
Wie alle Dateien, die von Gatsby in das Wurzelverzeichnis aka. Root kopiert werden sollen, platziert man die **CNAME** Datei im **static/** Order des **master** Branches.

Der **CNAME** Inhalt ist die Domain `www.ulrich-block.de` und damit ein Einzeiler.