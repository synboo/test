# PHP, Apache and MySQL on Mac OS X Lion

```
/etc/apache2/httpd.conf
/etc/apache2/extra/httpd-vhosts.conf
/etc/hosts

$ sudo /usr/sbin/apachectl restart
```

## References
* http://www.happytrap.jp/blogs/2012/01/21/6931/
* mysql
  * http://dev.classmethod.jp/etc/macbookair-homebrew-mysql5-5-14/


## mysql

```
Set up databases to run AS YOUR USER ACCOUNT with:
    unset TMPDIR
    mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp
--> mysql 2

To set up base tables in another folder, or use a different user to run
mysqld, view the help for mysqld_install_db:
    mysql_install_db --help

and view the MySQL documentation:
  * http://dev.mysql.com/doc/refman/5.5/en/mysql-install-db.html
  * http://dev.mysql.com/doc/refman/5.5/en/default-privileges.html

To run as, for instance, user "mysql", you may need to `sudo`:
    sudo mysql_install_db ...options...

Start mysqld manually with:
    mysql.server start

    Note: if this fails, you probably forgot to run the first two steps up above

A "/etc/my.cnf" from another install may interfere with a Homebrew-built
server starting up correctly.

To connect:
    mysql -uroot

To launch on startup:
* if this is your first install:
    mkdir -p ~/Library/LaunchAgents
    cp /usr/local/Cellar/mysql/5.5.25/homebrew.mxcl.mysql.plist ~/Library/LaunchAgents/
    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist

* if this is an upgrade and you already have the homebrew.mxcl.mysql.plist loaded:
    launchctl unload -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist
    cp /usr/local/Cellar/mysql/5.5.25/homebrew.mxcl.mysql.plist ~/Library/LaunchAgents/
    launchctl load -w ~/Library/LaunchAgents/homebrew.mxcl.mysql.plist

You may also need to edit the plist to use the correct "UserName".

==> Summary
/usr/local/Cellar/mysql/5.5.25: 6382 files, 222M, built in 7.5 minutes
```

## mysql 2

```
To start mysqld at boot time you have to copy
support-files/mysql.server to the right place for your system

PLEASE REMEMBER TO SET A PASSWORD FOR THE MySQL root USER !
To do so, start the server, then issue the following commands:

/usr/local/Cellar/mysql/5.5.25/bin/mysqladmin -u root password 'new-password'
/usr/local/Cellar/mysql/5.5.25/bin/mysqladmin -u root -h mba-2.local password 'new-password'

Alternatively you can run:
/usr/local/Cellar/mysql/5.5.25/bin/mysql_secure_installation

which will also give you the option of removing the test
databases and anonymous user created by default.  This is
strongly recommended for production servers.

See the manual for more instructions.

You can start the MySQL daemon with:
cd /usr/local/Cellar/mysql/5.5.25 ; /usr/local/Cellar/mysql/5.5.25/bin/mysqld_safe &

You can test the MySQL daemon with mysql-test-run.pl
cd /usr/local/Cellar/mysql/5.5.25/mysql-test ; perl mysql-test-run.pl

Please report any problems with the /usr/local/Cellar/mysql/5.5.25/scripts/mysqlbug script!
```
