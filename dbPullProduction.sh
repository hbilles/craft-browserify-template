#!/bin/sh
mysqldump -P3306 -h64.207.189.91 -uUSER -pPASSWORD PRODUCTION_DATABASE > ./_database/dump/PRODUCTION_DATABASE.sql
mysqldump -uUSER -pPASSWORD DEV_DATABASE > ./_database/dump/DEV_DATABASE.sql
mysql -uUSER -pPASSWORD DEV_DATABASE < ./_database/dump/PRODUCTION_DATABASE.sql