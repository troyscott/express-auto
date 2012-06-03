
/**
 * Module dependencies.
 */

var express = require('express'),
    stylus = require('stylus'),
    routes = require('./routes');


var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(stylus.middleware({
    src: __dirname + '/views', // .styl files in /views/stylesheets
    dest: __dirname + '/public' // creates .css in /public/stylesheets
    
  }));    
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  
  });

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes


app.get('/', routes.index);
app.get('/contactus', routes.contactus);
app.get('/starters', routes.starters);
app.get('/alternators', routes.alternators);

app.get('/test', routes.test);





app.listen(8080, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
