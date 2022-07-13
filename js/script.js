$(window).ready(function() {
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