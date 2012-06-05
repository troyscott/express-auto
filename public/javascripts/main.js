
jQuery(document).ready(function() {

 console.log('ready ...');

 // Left Side Bar Navigation


 $("#home").button({icons: {primary: 'ui-icon-home'}});
 $("#contactus").button({icons: {primary: 'ui-icon-mail-closed'}});
 $(".menu1 , .menu2").button( { icons: {primary: 'ui-icon-bullet', secondary: 'ui-icon-triangle-1-s'}} );
 $(".submenu1, .submenu2").button({icons: {primary: 'ui-icon-stop'}});

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

