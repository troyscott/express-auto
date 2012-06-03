
/*
 * GET home page.
 */

var ContentProvider = require('../models/content-provider').ContentProvider; 
var contentProvider  = new ContentProvider();

exports.index = function(req, res){
    
    contentProvider.ListItems('product', function(error,data) {    
        console.log('Product data: ' + data[0].code);
        res.render('index',  {title: 'Brighouse'});
    
        
     });
};


/*
 *  GET test page
 */  

exports.test = function(req, res) {
    
    cp = contentProvider.test.data;
    console.log('Test - Obj' + cp);
    console.log('Test - Obj Property' + cp[0].name);
    res.render('test', {title: 'Test Page', test:cp});


};
