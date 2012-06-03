
// config.json always located in root direcotry
var nconf = require('nconf');
nconf.file( { file: 'config.json'});

console.log(nconf.get('mongo_host'));
var server_options = {auto_reconnect:true};
var username = nconf.get('mongo_user') != null ? nconf.get('mongo_user') : process.env['MONGO_USER']; 
var password = nconf.get('mongo_password') != null ? nconf.get('mongo_password'): process.env['MONGO_PASSWORD'];
var host = nconf.get('mongo_host') != null ? nconf.get('mongo_host') : process.env['MONGO_HOST'];
var port = nconf.get('mongo_port') != null ? nconf.get('mongo_port') : process.env['MONGO_PORT'];
var dbname = "nodejitsudb2767836474"; 

console.log('Connectiong to MongoHQ at ' + host + ':' + port);

var mongodb = require('mongodb'),
    mongoserver = new mongodb.Server(host,parseInt(port), server_options ),
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

