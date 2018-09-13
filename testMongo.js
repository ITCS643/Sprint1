

/*
 * MongoDB NodeJS driver
 * http://mongodb.github.io/node-mongodb-native/3.1/


 Connection Parameter:
 - connect to replica set
 - connect with username and password
   http://mongodb.github.io/node-mongodb-native/3.1/tutorials/connect/

Run this create user command

db.getSiblingDB("LearningSite").runCommand( { createUser: "dev",
                                          pwd: "dev",
                                          roles: [
                                                   { role: "clusterAdmin", db: "admin" },
                                                   { role: "readAnyDatabase", db: "admin" },
                                                   "readWrite"
                                                 ],
                                          writeConcern: { w: "majority" , wtimeout: 5000 }
                                       } )


 **/


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dev:dev@127.0.0.1:27017/LearningSite?authMechanism=DEFAULT&authSource=LearningSite";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("LearningSite");
  console.log("Connected.");
});
