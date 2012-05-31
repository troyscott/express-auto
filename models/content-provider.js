

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;



ContentProvider = function(host, port){
    console.log('Starting Content Provider ...');
    this.db= new Db('node-mongo-blog', new Server(host, port, {auto_reconnect: true}, {}));

    this.test= {data: [{code: "123", name: "12 Bolt Battery"}, {code:"456", name: "6 Volt Battery"} ]};

};


exports.ContentProvider = ContentProvider;

