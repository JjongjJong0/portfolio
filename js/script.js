$(window).ready(function() {
   $(".polaroidBox").hover(function() {
        $(".tape").css("z-index", "-1");
   }, function() {
        $(".tape").css("z-index", "");
   }); 



})