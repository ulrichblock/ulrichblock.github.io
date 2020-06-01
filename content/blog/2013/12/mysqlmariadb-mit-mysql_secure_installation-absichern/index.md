---
title: "MySQL/MariaDB mit mysql_secure_installation absichern"
tags: ["security", "sql", "MySQL", "MariaDB"]
published: true
date: "2013-12-31"
---

Was viele nicht wissen und bei vielen Tutorials ausgelassen wird, ist das nützliche Tool ***mysql_secure_installation***

MariaDB ist bei Debian einfach zu installieren:

```bash
apt-get install mariadb-server mariadb-client
```

Ebenso MySQL:

```bash
apt-get install mysql-server mysql-client
```

Was viele nicht wissen, und was die wenigsten Tutorials beinhalten ist der anschließende Aufruf des Tools ***mysql_secure_installation***. Die Anwendung ist einfach und sorgt dafür dass unnötige Testzugänge und zu lockere Rechte abgestellt werden:

```bash
root@somehost:/home/phpuser/www# mysql_secure_installation

NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB
      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!

In order to log into MariaDB to secure it, we'll need the current
password for the root user.  If you've just installed MariaDB, and
you haven't set the root password yet, the password will be blank,
so you should just press enter here.

Enter current password for root (enter for none):
OK, successfully used password, moving on...

Setting the root password ensures that nobody can log into the MariaDB
root user without the proper authorisation.

You already have a root password set, so you can safely answer 'n'.

Change the root password? [Y/n] n
 ... skipping.

By default, a MariaDB installation has an anonymous user, allowing anyone
to log into MariaDB without having to have a user account created for
them.  This is intended only for testing, and to make the installation
go a bit smoother.  You should remove them before moving into a
production environment.

Remove anonymous users? [Y/n] y
 ... Success!

Normally, root should only be allowed to connect from 'localhost'.  This
ensures that someone cannot guess at the root password from the network.

Disallow root login remotely? [Y/n] y
 ... Success!

By default, MariaDB comes with a database named 'test' that anyone can
access.  This is also intended only for testing, and should be removed
before moving into a production environment.

Remove test database and access to it? [Y/n] y
 - Dropping test database...
ERROR 1008 (HY000) at line 1: Can't drop database 'test'; database doesn't exist
 ... Failed!  Not critical, keep moving...
 - Removing privileges on test database...
 ... Success!

Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

