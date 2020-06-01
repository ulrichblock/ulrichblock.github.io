---
title: "Spammer, Webspell und Stopforumspam.com"
tags: ["spam", "security", "php", "Webspell"]
published: true
date: "2012-01-27"
---

Das CMS [Webspell](http://www.webspell.org) hat, wie so ziemlich jedes andere CMS auch, mit Spammern zu kämpfen. Der Clan [myRevenge e.V.](http://www.myrevenge.net) setzt Webspell ein und hat mich um Hilfe mit ihrem Spam Problem gebeten. Trotz Captcha und Bestätigungslink schaffen es Spammer immer wieder sich anzumelden oder als Gast zu spammen. Nach einer erfolgreichen Anmeldung wird im zweiten Schritt auch in Bereichen gespmamt, in denen Gäste keine Schreibrechte haben.

Um den Spam einzudämmen, bietet sich eine Überprüfung an, wer so schreibt. Dabei macht man sich zu Nutze, dass Spammer wiederkehrende E-Mail Adressen und Usernamen verwenden.

Im ersten Schritt werden unerwünschte Top Level Domains und Domainendungen in 2 Arrays übergeben und überprüft, ob die verwendete E-Mail einen dieser Kriterien entspricht. Weil Spammer sehr flexibel sind, stellt diese Maßnahme lediglich einen Tropfen auf den heißen Stein dar.

Wesentlich effizienter ist der zweite Schritt. Hier wird die API von [stopforumspam.com](http://stopforumspam.com) kontaktiert und gefragt, ob Name, oder E-Mail bereits als Spammer bekannt sind. Stopforumspam.com ist eine Seite, die bekannte Spammer sammelt und nicht kommerziellen Nutzern eine API zu der Datenbank anbietet.  
Nur wenn die API antwortet, dass der Datensatz unbekannt ist, darf der User sich anmelden, bzw. einen Kommentar schreiben.

Die beschriebenen Ergänzungen werden in den Dateien register.php und comments.php vorgenommen.  
  
Die Erweiterung der register.php:

```php
// check e-mail
if(!validate_email($mail)) {
	$error[]=$_language->module['invalid_mail'];
} else {
	// Liste mit unzulaessigen Maildomains
	$badmaildomains=array('willich.nicht','auchnicht.de');
	// Liste mit unzulaessigen TLs array('cn','xxx')
	$badtld=array();
	// Useraccount von Domain trennen
	list($user,$domain)=explode('@',$mail);
	// Top Level herausfinden
	$domain_explode=explode('.',$domain);
	$last_array_entry=count($domain_explode)-1;
	// Überpruefen, ob die Domain geblacklisted ist
	if (in_array($domain,$badmaildomains) or in_array($domain_explode[$last_array_entry],$badtld)) {
		$error[]=$_language->module['invalid_mail'];
	} else {
		// Stopforumspam kontaktieren:
		$opts=stream_context_create(array('http'=>array('method'=>'GET','header'=>"Accept-language: en\r\nUser-Agent: ".$_SERVER['HTTP_HOST']."\r\n")));
		$contact_stopforumspam=@file_get_contents('http://www.stopforumspam.com/api?email[]='.urlencode($mail).'&username[]='.urlencode($username).'&username[]='.urlencode($nickname),false,$opts);
		if($contact_stopforumspam!=false) {
			$xmlreply = simplexml_load_string($contact_stopforumspam);
			foreach ($xmlreply as $xml_key => $xmlcheck) {
				// Wenn der Spammer in der Datenbank erfasst ist, feststellen, ob die Mail und oder der Username bekannt war und einen entsprechenden Fehler ausgeben
				if ($xmlcheck->appears==1) {
					if ($xml_key=='email') {
						$error[]=$_language->module['invalid_mail'];
					} else if ($xml_key=='username') {
						$error[]=$_language->module['nickname_inuse'];
					}
				}
			}
		}
	}
}
```

Und die Änderung in der comments.php:

```php
function IsNoSpammer ($mail,$username,$useragent) {
	$nospammer=true;
	// Liste mit unzulaessigen Maildomains
	$badmaildomains=array('willich.nicht','auchnicht.de');
	// Liste mit unzulaessigen TLs array('cn','xxx')
	$badtld=array();
	// Useraccount von Domain trennen
	list($user,$domain)=explode('@',$mail);
	// Top Level herausfinden
	$domain_explode=explode('.',$domain);
	$last_array_entry=count($domain_explode)-1;
	// Überpruefen, ob die Domain geblacklisted ist
	if (in_array($domain,$badmaildomains) or in_array($domain_explode[$last_array_entry],$badtld)) {
		$nospammer=false;
	}
	$opts=stream_context_create(array('http'=>array('method'=>'GET','header'=>"Accept-language: en\r\nUser-Agent: ".$useragent."\r\n")));
	$contact_stopforumspam=@file_get_contents('http://www.stopforumspam.com/api?email[]='.urlencode($mail).'&username[]='.urlencode($username),false,$opts);
	if($contact_stopforumspam!=false) {
		$xmlreply = simplexml_load_string($contact_stopforumspam);
		foreach ($xmlreply as $xml_key => $xmlcheck) {
			// Wenn der Spammer in der Datenbank erfasst ist, $nospammer auf false setzen
			if ($xmlcheck->appears==1) {
				$nospammer=false;
			}
		}
	}
	return $nospammer;
}
if (IsNoSpammer($mail,$name,$_SERVER['HTTP_HOST'])==true) {
	// hier den DB Eintrag vornehmen.
} else {
	die();
}
```

