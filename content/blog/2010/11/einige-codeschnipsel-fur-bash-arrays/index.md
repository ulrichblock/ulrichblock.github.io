---
title: "Einige Codeschnipsel für Bash Arrays"
tags: ["bash"]
published: true
date: "2010-11-24"
---

Was viele nicht wissen, man kann in der Bash und somit auch in Bashskripten Arrays benutzen. Im Folgenden einige Codeschnipsel, um einen das Leben einfach und den Code kleiner zu machen.

Man kann das Array auf verschiedene Arten definieren:

```bash
meinarray=("1" "2" "3" "test")
meinarray=(1 2 3 test)
meinarray[0]=1
meinarray[1]=2
meinarray[2]=3
meinarray[3]=test
```

Ausgeben kann man die Werte folgendermaßen, wobei man bei 0 zu zählen beginnt:

```bash
echo ${meinarray[0]}
echo ${meinarray[1]}
```

  
Um einen Wert zu überschreiben definiert man einfach später neu:

```bash
meinarray[2]=neuerwert
```

Die Anzahl der Werte im Array kann man so bestimmen:

```bash
count=${#meinarray[@]}
```

Um alle Werte auszugeben kann man eine for Schleife benutzen:

```bash
for i in ${meinarray[@]}; do
	echo $i
done
```

Wenn man erst ab einen bestimmten Wert das Array ausgeben möchte, kann man an Stelle der for Schleife eine while Schleife benutzen. Da man bei Arrays bei 0 zu zählen beginnt, muss man die Anzahl erst korrigieren. Dies ist z.B. nützlich, wenn man mit dem ersten Startparameter eine bestimmte Aktion des Bashskriptes auslösen möchte und bei den Restlichen den User zu keiner Reihenfolge zwingen will. In diesem Fall steckt man den Userinput in ein Array und lässt den ersten Wert bei der Verwendung des Arrays aus:

```bash
# das Skript wird so aufgerufen:
# ./skriptname.sh output parameter parameter2
if [ "$1" == "output" ]; then
	meinarray=($*)
	count=${#meinarray[@]}
	corcount=$[count-1]
	i=1
	while [ $i -le $corcount]; do
		echo ${meinarray[$i]}
	done
elif ([ "$1" == "output" ] && [ -z "$2" ]); then
	echo "Startparameter übergeben, aber keine weiteren"
else
	echo "keine Startparameter übergeben"
fi
```

Um zu überprüfen, ob ein Wert in einem Array vorhanden ist, benutze ich folgende Funktion in Kombination mit einer if Abfrage:

```bash
function exists {
	for i in ${meinarray[@]}; do
		if [ "$i" == "$1" ]; then
			echo "1"
		fi
	done
}
if [ "$(exists $parameter)" == "1" ]; then
	echo $parameter
fi
```

