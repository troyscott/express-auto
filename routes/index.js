
/*
 * GET home page.
 */

var ContentProvider = require('../models/content-provider').ContentProvider; 
var contentProvider  = new ContentProvider();

exports.index = function(req, res){
        res.render('index',  {title: 'Brighouse'});
};

/*
 * GET contact us page
 * 
 */

exports.contactus = function(req, res) { 
    res.render('contactus', {title: 'Brighouse - Contact Us'});

}

exports.starters = function(req ,res) {
   
    res.render('starters', {title: 'Brighouse - Starters'});

}


exports.alternators = function(req, res) {
    res.render('alternators', {title: 'Brighouse - Alternators'})

}


/*
 *  GET test page
 */  



exports.test = function(req, res) {
    
    var cp_obj = contentProvider.test.data;
   
    
    contentProvider.ListItems('product', function(error,data) {    
            
            console.log('Data: ' + data);  
            res.render('test', {title: 'Test Page', test:cp_obj, dbtest: data});
            
            
     });

};
