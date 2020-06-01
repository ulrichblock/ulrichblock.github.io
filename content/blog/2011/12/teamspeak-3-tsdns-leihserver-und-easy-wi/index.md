---
title: "Teamspeak 3, TSDNS, Leihserver und Easy-WI"
tags: ["easy-wi", "Teamspeak 3"]
published: true
date: "2011-12-09"
---

Im letzten Beitrag [Teamspeak 3 und Domains (TSDNS)](/teamspeak-3-und-domains-tsdns/) habe ich beschrieben, was TSDNS ist und wie man es manuell einrichtet.

In diesem Beitrag möchte ich etwas Eigenwerbung für das Teamspeak 3 Modul von meinem Interface [Easy-Wi](https://easy-wi.com) machen.

Der Sinn von TSDNS ist es, dem Benutzer das Verbinden auf Teamspeak 3 Server so einfach, wie möglich zu machen. Das Verbinden auf eine Domain ist einfacher, weil sie einfacher zu merken ist und weil sie weniger verwirren kann, als eine Kombination von IP und Port.  
Des Weiteren verlangen zahlreiche Benutzer den Standardport zu einem Serverdienst. Technisch gesehen ist dies sinnlos. Darüber hinaus werden unnötigerweise kostbare IP4 Adressen verschwendet, wenn man diesem Wunsch nachkommt. Verbindet man nun auf eine Domain, benötigt man keinen Port mehr, so dass der Wunsch nach einem Standardport entfällt und damit kostbare IP4 Adressen gespart werden können.

Egal, ob man Teamspeak 3 Server nun gewerblich vermietet, oder mittels einer NPO Lizenz kostenlos an Freunde und Bekannte verteilt. Es bleibt ein kleiner Schwachpunkt. Man muss jedes mal arbeiten, wenn jemand eine Änderung wünscht.

Aus diesem Grund ist die Nutzung von TSDNS bei [Easy-Wi](https://easy-wi.com) vollständig automatisiert. Die Verwaltung der ***tsdns_settings.ini***, so wie das Starten und Updaten des TSDNS Servers, werden von Easy-Wi übernommen.

Beim Anlegen einer Teamspeak 3 Grundinstallation wird einmalig eine Standarddns, wie ***ts3.myclan.tld*** angegeben. Wird nun ein Voiceserver angelegt, wird eine Subdomain nach dem Schema ***Username-VirtualserverID.ts3.myclan.tld*** vorgegeben. Möchte man diese Kombination nicht nutzen, steht es einem natürlich frei, diese Vorgabe durch die gewünschte (Sub) Domain zu überschreiben. Selbstverständlich kann die (Sub)Domain jederzeit sowohl vom Benutzer, als auch vom Admin nachträglich bearbeitet werden. Dafür reicht es, die Domain im zuständigen Formularfeld zu ändern und die Änderung zu speichern. Der Admin muss somit nur eingreifen, wenn der Benutzer mit dem Eingeben einer Domain überfordert ist.

Sollte man bereits manuell, oder mit einem anderen Interface, Teamspeak 3 Server angelegt haben, so bietet Easy-Wi die Möglichkeit, die bestehenden Server zu übernehmen. In diesem Fall wird überprüft, ob bereits ein TSDNS Server konfiguriert wurde. Ist dies der Fall, werden die Einstellungen ebenfalls übernommen. Falls für einen Server keine TSDNS Einstellungen gemacht worden sind, so wird eine Subdomain nach dem oben beschriebenen Schema generiert.

Damit der Arbeitsaufwand auch in allen anderen Fällen reduziert wird, gibt es eine Überwachung vom Status der Teamspeak 3 Server.  
Es wird z.B. überwacht, ob der Benutzer bestimmte Parameter, wie Passwort, Hostbanner, Hostbutton, usw. einhält. Sollte ein Wert nicht eingehalten worden sein, werden die Admins und der Benutzer mit einer E-Mail informiert.

Neben Benutzern, die sich nicht an Vorgaben halten, kann es auch zu kleineren technischen Problemen kommen. So kommt es manchmal vor, dass beim Starten der Teamspeak 3 Hauptinstanz, nicht alle virtuellen Server gestartet werden. Dies kann passieren, obwohl der Parameter autostart gesetzt wurde. Manuelles Starten kann hier sehr viel Zeit kosten. Aus diesem Grund wird ein Server, der offline ist, obwohl er online sein sollte, automatisch gestartet und der Benutzer darüber informiert.

Sollte die Hauptinstanz also solche nicht erreichbar sein, werden die Admins natürlich auch informiert.

Die angelegten Teamspeak 3 Server können auch automatisiert mit dem Verleihmodul verliehen werden. Bei diesem gibt man vor, wie lange die Server minimal und maximal ausleihbar sein sollen und wie viele Slots minimal und maximal je Server vergeben werden dürfen. Zusätzlich definiert man die Schritte zwischen dem Minimal- und Maximalwert. Bei jedem Verleihvorgang wird der Server dann resettet und ein neuer initialer Admintoken ausgegeben. Das Verleihen kann dabei entweder über das mitgelieferte Formular geschehen, oder die XML Schnittstelle geregelt werden.

Wenn man Teamspeak 3 mit einer NPO Lizenz verleiht sollte man dringenst beachten, dass man keinerlei Gewinn daraus ziehen darf. Bereits Google Werbung auf der Webseite kann als gewinnbringend im Sinne der NPO Lizenz gesehen werden. Im schlimmsten Fall wird dann die NPO Lizenz entzogen und die IP des eingesetzten Servers geblacklistet.

