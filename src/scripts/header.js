// require jquery module
var $ = require("jquery");
// $(function(){
  // get html elements heights

 export default  function header(){

   var topbarHegth = $("#top-bar").outerHeight();
   var windowHeight = $(window).height();

    var  $headerContent = $(".header-content");
    var  $headerInner = $(".header-inner-wrap");

    $headerInner.css({'height':windowHeight});

    $(window).resize(function(){
      windowHeight = $(window).height();
      $headerInner.css({'height':windowHeight});
    });
    // end of funcrion

  }



  // end of ready
// })
