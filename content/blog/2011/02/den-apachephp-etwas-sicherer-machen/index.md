---
title: "Den Apache und PHP etwas sicherer machen"
tags: ["Apache2", "security"]
published: true
date: "2011-02-12"
---

Im Folgenden ein paar Vorschläge, wie man seinen Apache, bzw. seinen Webspace etwas sicherer machen kann. Zum Thema Sicherheit sei noch angemerkt, dass es ein fortlaufender Prozess ist und man sein Konzept laufend weiter entwickeln sollte. Dieser Beitrag behandelt sicherlich nicht alles, was man machen kann und ist schon gar nicht ein komplettes Absicherungskonzept.

Bei kleineren Shared Hostingumgebungen setze ich auf Apache mit suexec und fcgid, damit ich wesentlich strengere CHMODs einstellen kann und PHP mit dem jeweiligen User ausgeführt wird.  
Bei größeren und großen Umgebungen ist dies aber nicht sehr praktikabel, da dies zu viele Recourcen verbraucht. 500 Kunden auf einem System können so zu 500 aktiven PHP Prozessen führen. In diesem Fall muss man einen Kompromiss eingehen und leider auf suexec + fcgid verzichten.

Es stellt sich dann auch die Frage, ob man nicht lieber einen Webserver nimmt, der nicht so recourcenhungrig ist. Ich denke da an Nginx und Lighttpd.

Was man aber bei jeder Konfiguration und Webserverart machen sollte, ist jedem Vhost eine eigene php.ini zuweisen. Dadurch, dass jeder Vhost eine eigene php.ini hat, kann man sehr einfach individuell konfigurieren.  
Der Safe Mode bringt nicht viel und wird, so weit ich weiß, wohl mit PHP6 wieder entfernt.  
Die Variable open_basedir hingegen bringt echte Sicherheit und ermöglicht es einen, PHP in einem Verzeichnis und dessen Unterverzeichnissen einzusperren. Dadurch, dass jeder eine eigene php.ini hat, kann man diese Variable bequem pro Vhost einrichten.

Benutzt man eine zentrale php.ini ist open_basedir entweder gar nicht gesetzt, oder sieht wie folgt aus:

```
open_basedir = /var/www
```

Ein Skript in /var/www/user1/http kann dabei problemlos auf Dateien aus /var/www/user2/http zugreifen. Ist die Variable gar nicht gesetzt, kann man bei nicht sehr strengen Chmods auf sehr viele Dateien im System zugreifen.  
Setzt man die Variable hingegen wie folgt, hat das PHP Skript nur Zugriff auf den Webspace, auf den es hochgeladen wurde.

```
open_basedir = /var/www/user1/http
```

Zusätzlich dazu, sollte jeder Vhost sein eigenes Temporäres und Session Verzeichnis haben. Auch diese kann man in der php.ini definieren:

```
upload_tmp_dir = /var/www/user1/temp
session.save_path = /var/www/user1/sessions
```

  
Zu dem Einsperren sollte man noch Funktionen von PHP verbieten, die sicherheitstechnisch als kritisch anzusehen sind. Updates aus dem Webinterface heraus einspielen zu können, ist zwar bequem, erfordert aber, dass man von extern Dateien nachladen kann. Dies kann von einem Angreifer gegen einen verwendet werden. Aus diesem Grund sollte man diese Möglichkeit deaktivieren:

```
allow_url_fopen = Off
allow_url_include = Off
```

Wenn man es nicht zwingend braucht, am besten auch den Dateiupload deaktivieren:

```
file_uploads = Off
```

Damit der Angreifer keine Shell, oder ähnliches nutzen kann, nachdem er eingebrochen ist:

```
disable_functions = fopen, fclose, exec, system, ini_restore, passthru, popen, pclose, proc_nice, proc_open, shell_exec, passthru, proc_close, proc_get_status, proc_terminate, apache_note, apache_setenv, debugger_on, define_syslog_variables, openlog, syslog
```

Wenn man keine Mails über den Vhost versenden will, sollte man hier auch noch die mail(); Funktion verbieten, um auszuschließen, dass der Vhost irgendwann einmal für den Spamversand genutzt wird.

Um einem Angreifer gar nicht erst zu zeigen, welchen Fehler er mit welcher Attacke auslösen konnte, sollte man das Error Reporting deaktivieren:

```
display_errors = Off
```

Nachdem PHP in seine Schranken verwiesen hat, sollte man den Zugriff auf die Dateien aus dem Browser heraus einschränken. Es gibt Angriffsarten, bei denen das Ausliefern von PHP gestört wird, so dass der Webserver beginnt, die PHP Dateien zum Download auszuliefern. Ist der Angreifer so weit gekommen, kann er sich nun eure config.php, oder wie sie auch immer genannt wird, downloaden und hat eure mysql Zugangsdaten. Ebenso kann man an andere Dateien kommen, die eigentlich niemand anderes haben sollte.

Dies gilt es zu unterbinden. Beim Apache hat man die Wahl, dies über eine htaccess Datei zu machen, oder direkt im Vhost anzugeben. Ich ziehe letztere Methode vor, weil eine htaccess Datei bei jedem Seitenaufruf geparst werden muss und vor allem manipuliert, bzw. überschrieben werden kann. Zusätzlich verbiete ich den Einsatz von htacces im Vhost:

```
AllowOverride None
```

Beim Apache kann man nun Blacklisting, oder Whitelisting beim Dateizugriff erlauben. Das Includen von Dateien mittels PHP wird von beiden Methoden nicht beeinflusst.

Viele PHP, bzw. Content Management Systeme arbeiten derart, dass immer eine bestimmte PHP, wie z.B. die index.php aufgerufen wird und diese dann nur noch unterschiedliche Dateien includiert. Hier bietet es sich an, Whitelisting zu betreiben:

```
<FilesMatch "\.php$">
    Order deny,allow
    deny from all
</FilesMatch>
<FilesMatch "^(index|login|register|admin)\.php$">
    Order allow,deny
    allow from all
</FilesMatch>
```

Bei WordPress müsste die Liste wie folgt aussehen:

```
<FilesMatch "^(index|wp-comments-post|xmlrpc|wp-login|post|index-extra|wp-tinymce|revision|admin|admin-ajax|load-styles|load-scripts|edit|edit-attachment-rows|edit-comments|edit-form-advanced|edit-form-comment|edit-link-categories|edit-link-category-form|edit-link-form|edit-post-rows|edit-tag-form|edit-tags)\.php$">
    Order allow,deny
    allow from all
</FilesMatch>
```

benutzt man ein andere Konzept, muss man auf Blacklisting zurück greifen. Dabei verbietet man explizit den Zugriff auf bestimmte Ordner und Dateien:

```
<Directory "/var/www/user1/http/include">
    Order deny,allow
    deny from all
</Directory>
<FilesMatch "^(config|_mysql|wp-config)\.php$">
    Order deny,allow
    deny from all
</FilesMatch>
```

