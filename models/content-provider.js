var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;



ContentProvider = function(host, port){
    console.log('Starting Content Provider ...');
    this.db= new Db('content-brighouse', new Server(host, port, {auto_reconnect: true}, {}));
    this.db.open(function(){});

    console.log('ContentProvider Constructor');
    // Use the test route 
    this.test= {data: [{code: "123", name: "12 Bolt Battery"}, {code:"456", name: "6 Volt Battery"} ]};    
};


ContentProvider.prototype.getList = function(type, callback) {
    console.log("ContentProvider List " + type + "'s");
    this.db.collection(type, function(error, items) {
            if(error)  callback(error);
            else callback(null, items);
            
            });

}


ContentProvider.prototype.ListItems = function(type, callback) {

    this.getList(type, function(error, items) {
        if( error ) callback(error)
        else {
            items.find().toArray(function(error, results) {
                if( error ) callback(error)
                else callback(null, results)
            });
         }

         });
};


exports.ContentProvider = ContentProvider;

