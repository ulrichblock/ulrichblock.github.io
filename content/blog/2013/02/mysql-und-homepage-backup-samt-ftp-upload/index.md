---
title: "MYSQL und Homepage Backup samt FTP Upload"
tags: ["sql", "bash", "MySQL"]
published: true
date: "2013-02-04"
---

Heute mal ein kleines Backupscript mit dem man seinen Webspace samt Datenbank backuppen kann. Der Speicherpfad und eine etwaige MYSQL Datenbank werden in einem assoziativen Bash Array angegeben, dass dann in einer ***"foreach as key =&gt; value"*** Schleife/Loop geloopt wird. Der Key ist dabei der Speicherpfad und die Value der Datenbankname.

Sowohl die Dateien, als auch der Datenbankdump werden mit gzip komprimiert und danach mit dem Tool ***wput*** auf den Backup FTP geladen.

```bash
#!/bin/bash

# Dieses Script unterliegt der CC BY 3.0 Lizenz:
# https://creativecommons.org/licenses/by/3.0/de/
# und ist ohne Garantie und Support
#
# This script is published under the CC BY 3.0 licence:
# https://creativecommons.org/licenses/by/3.0/
# it comes without any warranty


backupDir='/home/backups'
webspaceDir='/var/www'
htdocDir='htdocs'
mysqlRootPassword='DeinMysqlRootPassword'
ftpAddress='BackupIP'
ftpPassword='GanzGeheimesPasswort'
ftpPort='21'
ftpUser='BackupFtpUser'

declare -A backup
# Define 
backup[domain1.tld]='databaseName'
backup[dev.domain1.tld]='databaseName2'
backup[wiki.domain2.tld]='wiki'
backup[forum.domain2.tld]='domain'

currentDate=`date +'%Y-%m-%d'`
for key in ${!backup[@]}; do
    if [ ! -d "$backupDir/$key/" ]; then
        mkdir -p "$backupDir/$key/"
    fi
    if [ -f "$backupDir/$key/files.tar.gz" ]; then
        mkdir -p "$backupDir/$key/$currentDate/"
        mv "$backupDir/$key/files.tar.gz"  "$backupDir/$key/$currentDate/"
        if [ -f "$backupDir/$key/backup.sql.gz" ]; then
            mv "$backupDir/$key/backup.sql.gz"  "$backupDir/$key/$currentDate/"
        fi
    fi
    if [ -d "$webspaceDir/$key/$htdocDir/" ]; then
        cd "$webspaceDir/$key/$htdocDir/"
        tar cfvz "$backupDir/$key/files.tar.gz" . &> /dev/null
        wput -q -o /dev/null --basename="$backupDir/$key" "$backupDir/$key/files.tar.gz" "ftp://$ftpUser:$ftpPassword@$ftpAddress:$ftpPort/$key/$currentDate/files.tar.gz"
    fi
    if [ "${backup[$key]}" != "" ]; then
        mysqldump -u root -h localhost -p$mysqlRootPassword --databases "${backup[$key]}" | gzip -9 > "$backupDir/$key/backup.sql.gz"
        wput -q -o /dev/null --basename="$backupDir/$key" "$backupDir/$key/backup.sql.gz" "ftp://$ftpUser:$ftpPassword@$ftpAddress:$ftpPort/$key/$currentDate/backup.sql.gz"
    fi
done
```

