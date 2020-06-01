---
title: "Kein Hotlinking unter dieser Adresse"
tags: ["Apache2"]
published: true
date: "2011-04-11"
---

Jeder der eine Homepage betreibt, wird früher oder später ein Problem mit Hotlinking bekommen. Manche Webmaster binden lieber externe Inhalte ein, als sie auf dem eigenen Webspace zu hosten.  
Die Motive sind dabei unterschiedlich. Manche wollen Bandbreite sparen, andere sind zu faul die Dateien selber hochzuladen.  
Betreibt ein Webmaster einer gut besuchten Homepage Hotlinking können selbst kleinere Bilder schnell zu einem hohen Belastung werden.

In manchen Fällen stört der anfallende Zusatztraffik nicht, für andere stellt er ein erhebliches Problem dar. In beiden Fällen bietet es sich an, mit Hilfe des Apache2 Moduls "mod_rewrite" die Anfragen für bestimmte Dateitypen umzuleiten.

Im ersten Fall leite ich gerne auf ein Bild um, dass meine Meinung zum Hotlinking wiedergibt. Die Besucher des stehlenden Webmasters sehen dann, dass er ein Dieb ist.

Im zweiten Fall sollte man den Zugriff lieber komplett verbieten, um den eigenen Traffik gering zu halten.

Die Rewriteregel, die man wahlweise in den Vhost, oder die .htaccess schreiben kann, könnte man so gestalten:

```
<pre class="brush:bash">
RewriteEngine on
RewriteCond %{HTTP_REFERER} !^-$
RewriteCond %{HTTP_REFERER} !^http(s)?://(www\.)?domain1.de [NC]
RewriteCond %{HTTP_REFERER} !^http(s)?://(www\.)?domain2.info [NC]
RewriteCond %{HTTP_REFERER} !^http(s)?://(www\.)?forums.domain3.com [NC]
# Umleiten
RewriteRule .*\.(gif|jpe?g|png)$ http://www.domain1.com/no-hotlinking.jpe [R,L]
# Verbieten
#RewriteRule .*\.(gif|jpe?g|png)$ - [F]
```

Zu der technischen Lösung kann man sicherlich auch noch juristisch gegen Hotlinker vorgehen. Genaueres dazu erläutert euch der Anwalt eures geringsten Missvertrauens.

