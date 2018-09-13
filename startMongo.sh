#!/bin/bash
# See instruction
#  https://hub.docker.com/_/mongo/
#
# Name: mongo1
# Port: 27017
#
# Admin:    mongoadmin:secret
# User/Developer:     dev:dev 


docker run -d --name mongo1 -p 27017:27017 -v mongo-datadir:/data/db -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret mongo
