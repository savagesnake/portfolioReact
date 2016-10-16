// require jquery module
var $ = require("jquery");
// $(function(){
  // get html elements heights

 export default  function header(){

   var topbarHegth = $("#top-bar").outerHeight();
   var windowHeight = $(window).height();
   var windowWidth = $(window).outerWidth();
   var $navWrap = $(".nav-wrap");

    var  $headerContent = $(".header-content");
    var  $headerInner = $(".header-inner-wrap");
    // check width
   function checkWidth(){
     if(windowWidth <= 960){
         $navWrap.css({padding:0});
     }else{
       $navWrap.removeAttr("style");
     }
   }
   checkWidth();

   $headerInner.css({'height':windowHeight});

    $(window).resize(function(){
       windowWidth = $(window).outerWidth();
      windowHeight = $(window).height();
      $headerInner.css({'height':windowHeight});
      checkWidth();
    });
    // end of funcrion

  }



  // end of ready
// })
