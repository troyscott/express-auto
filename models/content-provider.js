var server_options = {auto_reconnect:true};
var username = process.env['MONGOHQ_USER'];
var password = process.env['MONGOHQ_PASSWORD'];
var host = process.env['MONGOHQ_HOST'];
var port = parseInt(process.env['MONGOHQ_PORT']);
//var port = 27075;

var dbname = process.env['MONGOHQ_DB'];

console.log('Connectiong to MongoHQ at ' + host + ':' + port);
console.log(typeof(port));



var mongodb = require('mongodb'),
    mongoserver = new mongodb.Server(host, port, server_options ),
    db_connection = new mongodb.Db(dbname, mongoserver);

function openDB(callback) {

    db_connection.open(function(error, db) {
        if(error) callback(error);
        console.log('Database connected');
        callback(null, db)

    });

}


function authenticate(db,username, password, type, callback) {

    console.log('Attempt authentication ');
    db.authenticate( username, password, function(error, result) {
        if (error) callback(error);

        if (result) {
            var collection = new mongodb.Collection(db, type);
            callback(null, collection);

        } else {callback(error) }

    })
      

}

// ContentProvider Class

ContentProvider = function(){
    console.log('Starting Content Provider ...');
    this.db = openDB(function(){});
    
    console.log('ContentProvider Constructor');
    // Use the test route 
    
    this.test= {data: [{code: "123", name: "12 Bolt Battery"}, {code:"456", name: "6 Volt Battery"} ]};    
};


ContentProvider.prototype.getList = function(type, callback) {
    console.log("ContentProvider List " + type + "'s");
    
    authenticate(db_connection, username, password, type, function(error, items) {
        if(error) callback(error);
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

