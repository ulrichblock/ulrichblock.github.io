---
title: "CSS Layout: Header, 3 Reihen (Fixed-Fluid-Fixed), Footer"
tags: ["html", "css"]
published: true
date: "2012-01-23"
---

Ein 3 Spalten Layout, dass einen Header und Footer hat, kann man mit HTML und CSS auf unterschiedliche Weise gestalten. Die beiden meist genutzten Varianten sollten Divs und Tabellen sein.

Mit Tabellen ist die gleichmäßige Höhen- und Breitengestaltung sehr einfach. Die Höhe und Breite aller Spalten richtet sich an den Maximalwerten der anderen Elemente aus. Eine einfache Tabelle sieht so aus:

```html
<table>
    <tr>
        <td colspan="3">Header</td>
    </tr>
    <tr>
        <td>Linkes Menu</td>
        <td>Inhalt</td>
        <td>Rechtes Menu</td>
    </tr>
    <tr>
       <td colspan="3">Footer</td>
    </tr>
</table>
```

Der Einsatz von Tabellen zu diesem Zweck gilt aber als veraltet und damit nicht mehr zeitgemäß.

Zur Zeit verwendet man für die Layout Gestaltung überwiegend Divs. Dabei schreibt man die Positionsangaben zum DIV nicht in selbiges hinein, sondern weist diesem eine ID und oder Klasse zu. Die Eigenschaften der IDs und Klassen definiert man dann in einer extra *\*.css* Datei.

Wenn man feste mit flexiblen Breiten- und Höhenangaben vermischt, wird man bei Divs auf Hürden und Hindernisse treffen.

Wenn man z.B. möchte, dass die Höhe des Layouts immer minimal 100% der Höhe des Browserfensters beträgt, umfasst man das eigentliche Layout mit einem Div. Dieses Div macht man dann zu einem Wrapper. In den Eigenschaften wird dann bestimmt, dass der Wrapper immer mindestens 100% der Seitenhöhe belegen soll. Die Divs, die das eigentliche Aussehen bestimmen sollen, werden in diesem Wrapper positioniert.

Bei einem Layout mit drei Spalten kann man diese mittels Float ausrichten. Bei dem Linken und Mittleren setzt man ***"float:left;"***. Beim Rechten ***"float:right;"***.  
Ist die Höhe der Divs ein fester Wert, bekommt man keine Probleme. Soll aber zumindest eine Höhe flexibel sein, werden alle drei eine, an ihrem Inhalt bestimmte, unterschiedliche Höhe erhalten. Möchte man unterschiedliche Hintergründe verwenden, kann das Endergebnis sehr unsymmetrisch aussehen.

Eine Alternative ist es, die Position der 3 Spalten absolut (*"position:absolute;"*) zu bestimmen. Im Folgenden definiert man dann den Abstand der rechten und linken Spalte zum Rand mit 0. Die mittleren Spalte wird mit Margin nach Links und Rechts ausgerichtet. Als Werte für die Margin Angabe nimmt man die Spaltenbreite der äußeren beiden Spalten.  
Im Ergebnis hat man 3 Spalten, bei denen für die beiden äußeren feste Pixelwerte verwendet werden können. Die Mittlere Spalte wird immer die restliche Breite für sich in Anspruch nehmen, egal wie Breit das Browserfenster des Users gerade ist.

Definiert man nun die minimale Höhe aller drei Spalten mit 100%, werden durch diese Höhenangabe alle Spalten gleichmäßig bis zum Ende des Wrappers getreckt.

Die farbliche Gestaltung der einzelnen Divs erfolgt ebenfalls mittels CSS. Im Beispiel habe ich die Farben Grün **\#0F0**, Rot **\#0F0** und Blau **\#00F** verwendet. Die Farben passen so sicher nicht zusammen und beißen sicher etwas in den Augen. Ich habe sie dennoch gewählt, um mittels des Kontrastes die gleichmäßige Höhe der Spalten besser darstellen zu können.

Eine Beispielseite, die den nachfolgenden Code verwendet, kann man hier ansehen: [3cols.html](/download/3cols.html)

Die CSS Angaben:

```css
html,body {
	margin:0;
	height:100%;
	font-size:12px;
	font-family:"HelveticaNeue-Light","Helvetica Neue Light","Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
}
#header{
	position:relative;
	z-index:100;
	width:100%;
	height:30px;
	line-height:30px;
	text-align:center;
	font-size:14px;
	background-color:#3D3D3D;
	color:#CCCCCC;
}
#wrapper {
	position:relative;
	min-height:97%;
	height:auto !important;
	height:97%;
	overflow:hidden;
}
#menuleft {
	position:absolute;
	z-index:50;
	top:0px;
	left:0px;
	width:140px;
	height:100%;
	background-color:#0F0;
}
#datapage {
	position:absolute;
	z-index:1;
	height:100%;
	margin:0 140px 0 140px;
	background-color:#F00;
}
#menuright {
	position:absolute;
	z-index:50;
	top:0px;
	right:0px;
	width:140px;
	height:100%;
	background-color:#00F;
}
#footer{
	position:absolute;
	z-index:100;
	bottom:0px;
	width:100%;
	height:30px;
	line-height:30px;
	background-color:#3D3D3D;
	text-align:center;
	font-size:14px;
	color:#CCCCCC;
}
```

Der HTML Code, der diese CSS Angaben verwendet:

```html
<div id="header">
    Header
</div>
<div id="wrapper">
    <div id="menuleft">
        Linkes Menu
    </div>
    <div id="datapage">
        Inhalt
    </div>
    <div id="menuright">
        Rechtes Menu
    </div>
    <div id="footer">
        Footer
    </div>
</div>
```

