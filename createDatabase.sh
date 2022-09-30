#!/bin/bash
for i in {1..200}; do
    database="safe_tenant$i"

    docker exec -it mysql mysql -u root -proot -e "CREATE DATABASE IF NOT EXISTS $database;"

    docker exec -it mysql mysql -u root -proot -e "USE $database; CREATE TABLE users (id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, email varchar(500) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=latin1;"

    docker exec -it mysql mysql -u root -proot -e "USE $database; INSERT INTO users (id, email) VALUES (1, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com'),(2, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com'),(3, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com'),(4, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com'),(5, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com'),(6, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com'),(7, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com'),(8, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com'),(9, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com'),(10, '$(echo $RANDOM | md5sum | head -c 5)@tent$i.com');"

done
