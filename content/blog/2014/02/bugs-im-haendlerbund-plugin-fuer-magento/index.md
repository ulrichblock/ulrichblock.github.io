---
title: "Bugs im Händlerbund Plugin für Magento"
tags: ["magento", "php"]
published: true
date: "2014-02-16"
---

Laut eigener Angabe ist der Händlerbund:

> Der Händlerbund vertritt als größter Onlinehandelsverband Europas die Interessen von mehr als 30.000 Onlinepräsenzen und stellt als Anbieter von professionellen E-Commerce-Dienstleistungen neben abmahnsicheren Rechtstexten für Online-Händler ein Kundenbewertungssystem für Online-Shops zur Verfügung.

Als solcher bietet er auch eine Schnittstelle zum automatisierten Einbinden und Updaten der Rechtstexte an. Für die Shopsoftware Magento gibt es bereits ein fertiges Plugin. Es kann auch statische Blöcke an Stelle von Seiten befüllen. Nur ist diese Funktion in der mir vorliegenden Version des Plugins leider verbugt. Weder kann man die statische Blöcke auswählen, noch updated das Plugin den Text in die Blöcke hinein. Dies liegt an zwei Bugs in zwei Dateien.

Bug eins befindet sich in der **app/code/community/IntegerNet/Haendlerbund/Model/System/Config/Source/Haendlerbund/CmsSites.php** in den Zeilen 31 + 37 hier heißt es:

```php
foreach($cmsBlocks as $cmsBlock) {
    $cmsBlocksOptions[] = array(
        'label' => $cmsPage->getTitle(),
        'value' => 'block_'.$cmsPage->getId(),
    );
}
```

Korrekt wäre es:

```php
foreach($cmsBlocks as $cmsBlock) {
    $cmsBlocksOptions[] = array(
        'label' => $cmsBlock->getTitle(),
        'value' => 'block_'.$cmsBlock->getId(),
    );
}
```

Nun kann man statische Blöcke unter *System &gt; Konfiguration &gt; Händlerbund* auswählen. Klickt man auf "Füge Rechtstexte jetzt ein", zerschießt man sich eine oder mehrere CMS Seiten, weil es noch einen zweiten Bug gibt. So steht in den Zeile 41 der Datei **app/code/community/IntegerNet/Haendlerbund/Model/InsertLegislativeTexts.php**:

```php
$model = Mage::getModel('cms/page')->load($id);
```

Hier muss es heißen:

```php
$model = Mage::getModel('cms/block')->load($id);
```

Hat man beides korrigiert, kann man die gewünschten statischen Blöcke auswählen und die Rechtstexte aktualisieren.

