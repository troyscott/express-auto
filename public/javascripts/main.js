
jQuery(document).ready(function() {

 console.log('ready ...');

 // Left Side Bar Navigation

 $("#home, #contactus").button();
 $(".menu1 , .menu2").button( { icons: {secondary: 'ui-icon-triangle-1-s'}} );
 $(".submenu1, .submenu2").button();

 $("#contentMain").mouseover(function(){
    console.log("in contentMain");
    $(".submenu1, .submenu2").css("display","none");     
 
  });

 $("html").click(function() {
    $(".submenu1, .submenu2").css("display", "none");
    });

 $("#home, #contactus").mouseover(function() {
    $(".submenu1, .submenu2").css("display", "none");


});

 $(".menu1").mouseover(function(){
    $(".submenu2").css("display", "none");
    $(".submenu1").css("display", "block");

  });


 $(".menu2").mouseover(function(){
    $(".submenu1").css("display", "none");    
    $(".submenu2").css("display", "block");

  });



                      
});

