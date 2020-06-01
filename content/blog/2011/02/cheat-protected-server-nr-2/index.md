---
title: "Cheat protected Server Nr.2"
tags: ["game-server", "security"]
published: true
date: "2011-02-19"
---

In meinem Beitrag [Cheat Protected Server, oder doch nicht?](/cheat-protected-server-oder-doch-nicht/) hatte ich eine Möglichkeit aufgezeigt, mit der sich die meisten gängigen Protection Systeme von Gameserver Anbietern aushebeln kann.

Mittlerweile haben manche Kunden, deren Anbieter nicht von mir getestete Software einsetzen, bestätigt, dass es bei ihnen auch geht.

DeaD_Eye von [sourceserver.info](http://sourceserver.info) hat mir den Hinweis gegeben, dass man mit einem zusätzlichen Startparameter zumindestens bei HL2 Spielen verhindern kann, dass Plugins nachgeladen werden können.  
Man belegt einfach den Servercommand "plugin_load" neu:  
`+alias "plugin_load"`  
Afaik ist dies irreversibel. Man kann den Alias zwar nochmals neu belegen, die eigentliche Funktion des Commands sollte sich aber nicht wieder herstellen lassen.

Man kann der Ansicht sein, dass es falsch ist die Informationen in einem Blog zu veröffentlichen, weil dann jeder noch so unbegabte diese Informationen zum Cheaten benutzen kann.

Hätte ich die Lücke selber entdeckt und wäre sie unbekannt gewesen, hätte ich sicherlich den Anbietern eine Vorlaufzeit gegeben, nachdem ich sie informiert hätte. Und erst nach einer Frist den Artikel veröffentlicht.  
Die Vorgehensweise ist jedoch schon länger bekannt und auf den Mailinglisten diskutiert worden. Zum Teil wurde sie auch in relevanten Foren, bzw. Anbieter direkt darauf angesprochen.  
Wem die Methode unbekannt war, hat es unterlassen die Neuigkeiten und Nachrichten zu der von ihm eingesetzten Software zu verfolgen, oder das Problem ignoriert.

Wenn man jetzt damit wirbt, dass seine Server, bzw. sein Produkt sicher seien, es aber unterlässt, die notwendige Sorgfalt an den Tag zu legen, sehe ich es nicht ein, Rücksicht zu nehmen.

Es gab sicherlich den ein oder anderen, der sich über die Veröffentlichung nicht gerade gefreut hat. Manch einer mag sie vielleicht auch als Frechheit bezeichnen, weil man in ein schlechtes Licht gerückt wird.  
Anstelle gegen denjenigen zu ätzen, der die Probleme beim Namen nennt, sollte man sich lieber an die eigene Nase fassen, warum man die Schwachstellen und die Stimmen, die gewarnt haben, ignoriert, oder übersehen hat. Dazu sollte man die Probleme natürlich auch beheben.

