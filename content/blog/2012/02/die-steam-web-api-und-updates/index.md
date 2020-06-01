---
title: "Die Steam Web API und Updates"
tags: ["steam"]
published: true
date: "2012-02-13"
---

Von vielen unbemerkt hat Valve schon seit einiger Zeit eine umfangreiche Steam Web API bereitgestellt. Die Dokumentation ist leider nicht sehr vollständig und in der [Valve Developer WIKI](https://developer.valvesoftware.com/wiki/Steam_Web_API) zu finden.

Die Anfrage an die API wird mittels GET Parametern gemacht. Die Antwort kann in den Formaten XML, JSON und VDF ausgegeben werden.

Ein für Serveroperatoren sehr interessanter Teil ist leider nicht dokumentiert. Mittels der Valve Developer WIKI kann man zu SteamApps Versionsnummern mit der aktuellen abgleichen lassen. Im Fall von Counter-Strike: Source würde eine Abfrage mit XML folgendermaßen aussehen:

> https://api.steampowered.com/ISteamApps/UpToDateCheck/v0001/?appid=240&amp;version=1.0.0.69&amp;format=xml

Die aktuelle Version ist 1.0.0.70. Deswegen ist die XML Antwort:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE response>
<response>
	<success>true</success>
	<up_to_date>false</up_to_date>
	<version_is_listable>false</version_is_listable>
	<required_version>10070</required_version>
	<message>Your server is out of date, please upgrade</message>
</response>
```

Fragt man mit einer aktuellen Version nach:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE response>
<response>
	<success>true</success>
	<up_to_date>true</up_to_date>
	<version_is_listable>true</version_is_listable>
</response>
```

Mittels der API kann man sich also relativ einfach ein Script schreiben, dass die lokale Serverversion mit der aktuellen abgleicht. Im Folgenden wird dann je nach Output reagiert. Wenn "up_to_date" "False" ist, kann z.B. ein Update gestartet werden.

