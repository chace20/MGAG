#!/usr/bin/expect

##
# This script is used for init db
# Please refer ../conf/init.sql
##

spawn mysql -u root -p
expect "password:"
send "chao0015793110\r"
send 'source ../conf/init.sql\r'
expect eof
print 'init db success'