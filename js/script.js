// window.onbeforeunload = (function() { 
//      $(".loader").show(); 
// },3000);

// $(window).load(function() {
//      $(".loader").hide();
// }, 3000);
// $(window).load(function() {
//      $(".loader").fadeOut();
// }, 3000);


$(window).ready(function() {
     //loading
     // $(window).load(function() {
     //      (".background").css("width", 0);
     //      (".background").css("opacity", 0);
          
     // });


     // 모바일(햄버거) 메뉴
     $(".mobileMenu").click(function() {
          $(this).toggleClass("open");
          $(".gnbMobile").toggleClass("hide show");
     });

    //emoji
   $(".polaroidBox").hover(function() {
        $(".tape").css("z-index", "-1");
        $(".purpleArrow").css("z-index", "-1");
   }, function() {
        $(".tape").css("z-index", "");
        $(".purpleArrow").css("z-index", "");

   }); 

    //modal
    $(".textBox > strong").click(function() {
          $("#modal").addClass("on");
    });
    $("#modal > .modalUp > .closeBtn").click(function() {
          $("#modal").removeClass("on");
     });
})