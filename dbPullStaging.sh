#!/bin/sh
ssh root@104.130.244.141 "mysqldump -uUSER -hlocalhost -pPASSWORD STAGING_DATABASE > /root/mysql_dump/STAGING_DATABASE.sql"
scp root@104.130.244.141:/root/mysql_dump/STAGING_DATABASE.sql ./_database/dump/STAGING_DATABASE.sql
mysqldump -uUSER -pPASSWORD DEV_DATABASE > ./_database/dump/DEV_DATABASE.sql
mysql -uUSER -pPASSWORD DEV_DATABASE < ./_database/dump/STAGING_DATABASE.sql