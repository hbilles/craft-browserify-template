#!/bin/sh
mysqldump -uUSER -pPASSWORD DEV_DATABASE > ./_database/dump/DEV_DATABASE.sql
scp ./_database/dump/DEV_DATABASE.sql root@104.130.244.141:/root/mysql_dump/DEV_DATABASE.sql
ssh root@104.130.244.141 "mysqldump -uUSER -hlocalhost -pPASSWORD STAGING_DATABASE > /root/mysql_dump/STAGING_DATABASE.sql"
ssh root@104.130.244.141 "mysql -uUSER -hlocalhost -pPASSWORD STAGING_DATABASE < /root/mysql_dump/DEV_DATABASE.sql"