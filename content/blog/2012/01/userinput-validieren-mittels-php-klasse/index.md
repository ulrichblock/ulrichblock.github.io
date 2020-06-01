---
title: "Userinput validieren mittels PHP Klasse"
tags: ["php"]
published: true
date: "2012-01-10"
---

Die Grundregel, dass man keinem Userinput vertrauen soll, wird jedem ein Begriff sein.

Zum Validieren habe ich mir nun folgendes Konzept überlegt:  
Im ersten Schritt werden die Superglobals in ein Object übergeben und dabei escaped. Nach der Übergabe werden die Superglobals gelöscht, da ihr Inhalt nicht mehr benötigt wird.

Im folgenden kann der vorherige Inhalt der Superglobals zusammen mit einer Funktion aufgerufen werden, die den Inhalt überprüft. Nur wenn die Überprüfung erfolgreich war, wird der Wert zurückgegeben.

Bei dem Aufruf der Funktion gibt man an, welchen Key aus welcher Superglobal erwünscht ist. Wenn die Funktion auch auf Länge überprüfen kann, dann muss man auch noch die Länge angegeben werden.  
Mit dem ersten Wert sagt man, welcher Key gewünscht ist, mit dem zweiten Wert sagt man, von welcher der vorherigen Superglobals der Wert genommen werden soll.

Für den produktiven Einsatz braucht man sicher noch mehr Funktionen. Als Ausgangscode ist die Klasse sicher gut zu gebrauchen:

```php
< ?php
class ValidateUserinput {
	private $get=array();
	private $post=array();
	private $server=array();
	private $cookie=array();
	private $request=array();
	private $env=array();
	// Wenn die Magic Quotes nicht zum escapen eingesetzt werden, dann mit addcslashes escapen
	private function magic_quotes ($value) {
		if (!function_exists('get_magic_quotes_gpc') or get_magic_quotes_gpc()==0) {
			$value=addcslashes($value); 
		}
		return $value;
	}
	private function inputsecurity ($value,$what) {	
		foreach ($value as $key => $val) {
			if (is_string($val)) {
				$this->$what[$key] = $this->magic_quotes($val);
			} else if (is_array($val)) {
				$this->$what[$key] = $this->inputsecurity($val,$what);
			}
		}
	}
	// Constructor
	function __construct($get,$post,$server,$cookie,$request,$env) {
		foreach ($get as $key => $val) {
			if (is_string($val)) {
				$this->get[$key] = $this->magic_quotes($val);
			} else if (is_array($val)) {
				$this->get[$key] = $this->inputsecurity($val,'get');
			}
		}
		foreach ($post as $key => $val) {
			if (is_string($val)) {
				$this->post[$key] = $this->magic_quotes($val);
			} else if (is_array($val)) {
				$this->post[$key] = $this->inputsecurity($val,'post');
			}
		}
		foreach ($server as $key => $val) {
			if (is_string($val)) {
				$this->server[$key] = $this->magic_quotes($val);
			} else if (is_array($val)) {
				$this->server[$key] = $this->inputsecurity($val,'server');
			}
		}
		foreach ($cookie as $key => $val) {
			if (is_string($val)) {
				$this->cookie[$key] = $this->magic_quotes($val);
			} else if (is_array($val)) {
				$this->cookie[$key] = $this->inputsecurity($val,'cookie');
			}
		}
		foreach ($request as $key => $val) {
			if (is_string($val)) {
				$this->request[$key] = $this->magic_quotes($val);
			} else if (is_array($val)) {
				$this->request[$key] = $this->inputsecurity($val,'request');
			}
		}
		foreach ($env as $key => $val) {
			if (is_string($val)) {
				$this->env[$key] = $this->magic_quotes($val);
			} else if (is_array($val)) {
				$this->env[$key] = $this->inputsecurity($val,'env');
			}
		}
	}
	// Destructor
	function __destruct() {
		unset($this->get);
		unset($this->post);
		unset($this->server);
		unset($this->cookie);
		unset($this->reques);
		unset($this->env);
	}
	// Url Filter
	function url ($value,$type) {
		$check=$this->$type;
		if(filter_var($check[$value],FILTER_VALIDATE_URL)) {
			return $check[$value];
		}
	}
	// Mail Filter
	function ismail($value,$type) {
		$check=$this->$type;
		if(filter_var($check[$value],FILTER_VALIDATE_EMAIL)) {
			return $check[$value];
		} 
	}
	// IP4 Adressen
	function ip4 ($value,$type) {
		$check=$this->$type;
		if(filter_var($check[$value], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4)){
			return $check[$value];
		}
	}
	// IP 6 Adressen
	function ip6 ($value,$type) {
		$check=$this->$type;
		if(filter_var($check[$value], FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)){
		return $check[$value];
		}
	}
	// IP4 und IP6 Adressen
	function ip ($value,$type) {
		$check=$this->$type;
		if(filter_var($check[$value], FILTER_VALIDATE_IP)){
			return $value;
		}
	}
	// Serverport
	function port($value,$type) {
		$check=$this->$type;
		if (preg_match("/^(0|([1-9]\d{0,3}|[1-5]\d{4}|[6][0-5][0-5]([0-2]\d|[3][0-5])))$/",$check[$value])) {
			return $check[$value];
		}
	}
	// A-Z, a-z und 0-9 sind in beliebiger Anordnung mit einer maximalen Stringlänge erlaubt.
	function pregw($value,$length,$type) {
		$check=$this->$type;
		if (preg_match("/^[\w]{1,$length}$/",$check[$value])) {
			return $check[$value];
		}
	}
	// Gibt den Wert ohne Inputüberprüfung zurück.
	function escaped ($value,$type) {
		$check=$this->$type;
		return $check[$value];
	}
}
// Die Superglobals leeren, nachdem sie in das Object übergeben worden sind.
$ui=new ValidateUserinput($_GET,$_POST,$_SERVER,$_COOKIE,$_REQUEST,$_ENV);
unset($_GET);
unset($_POST);
unset($_SERVER);
unset($_COOKIE);
unset($_REQUEST);
unset($_ENV);
// Ab hier würde dann der restliche PHP Code beginnen.
// Die einzelnen Werte werden dadurch aufgerufen, dass man mit der Funktion bestimmt, auf was der Wert überprüft werden soll.
// Mit dem ersten Wert sagt man, welcher Key gewünscht ist, mit dem zweiten Wert sagt man, von welcher der vorherigen Superglobals der Wert genommen werden soll.
// Bei dem Beispielaufruf datei.php?w=test würde test ausgegeben werden
if ($ui->escaped('w','get')) echo $ui->escaped('w','get');
else echo 'Nicht validiert';
?>
```

