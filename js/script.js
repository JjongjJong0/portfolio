
$(window).ready(function() {
     //loading
     // setInterval(function() {
     //      $(".loader").fadeOut();
     // }, 3000);

     
     // 모바일(햄버거) 메뉴
     $(".mobileMenu,  .gnbMobile").click(function() {
          $(".mobileMenu").toggleClass("open");
          $(".gnbMobile").toggleClass("hide show");
     });

     //emoji
     $(".polaroidBox").hover(function() {
          $(".tape").css("z-index", "-1");
          $(".purpleArrow").css("z-index", "-1");
          $(".blur").css("display", "block");
     }, function() {
          $(".tape").css("z-index", "");
          $(".purpleArrow").css("z-index", "");
          $(".blur").css("display", "");
     }); 

     //modal
     $(".textBox > strong").click(function() {
          $("#modal").addClass("on");
     });
     $("#modal > .modalUp > .closeBtn").click(function() {
          $("#modal").removeClass("on");
     });

     // project
     var project1 = $(".project1").offset().top - $(".project1").outerHeight();
     $(window).scroll(function() {
          
          if($(window).scrollTop() > project1) {
               $(".project1").addClass("scrolled");
          }else {
               $(".project1").removeClass("scrolled");
          }
     });

     var project2 = $(".project2").offset().top - $(".project2").outerHeight();
     $(window).scroll(function() {
          
          if($(window).scrollTop() > project2) {
               $(".project2").addClass("scrolled");
          }else {
               $(".project2").removeClass("scrolled");
          }
     });
     
     var project3 = $(".project3").offset().top - $(".project3").outerHeight();
     $(window).scroll(function() {
          if($(window).scrollTop() > project3) {
               $(".project3").addClass("scrolled");
          }else {
               $(".project3").removeClass("scrolled");
          }
     });

     var project4 = $(".project4").offset().top - $(".project4").outerHeight();
     $(window).scroll(function() {
          console.log($(window).scrollTop());
          if($(window).scrollTop() > project4) {
               $(".project4").addClass("scrolled");
          }else {
               $(".project4").removeClass("scrolled");
          }
     });

     // project1
     $(".project1 > .pro1-box > .pro1-img").hover(function() {
          $(".pro1-img > img").css("animation-play-state", "paused");
     }, function() {
          $(".pro1-img > img").css("animation-play-state", "");
     });

     // project2
     $(".project2 > .pro2-box > .pro2-img").hover(function() {
          $(".pro2-img > img").css("animation-play-state", "paused");
     }, function() {
          $(".pro2-img > img").css("animation-play-state", "");
     });

     // project3
     $(".project3 > .pro3-box > .pro3-img").hover(function() {
          $(".pro3-img > img").css("animation-play-state", "paused");
     }, function() {
          $(".pro3-img > img").css("animation-play-state", "");
     });

     // project4
     $(".project4 > .pro4-box > .pro4-red > .pro4-yellow > .pro4-img").hover(function() {
          $(".pro4-img > img").css("animation-play-state", "paused");
     }, function() {
          $(".pro4-img > img").css("animation-play-state", "");
     });

     //skills
     $(window).scroll(function() {
          const skills = $("#skills").offset().top - $("#skills").outerHeight();
          console.log(skills);
          if($(window).scrollTop() > skills) {
               $('.gaugeBorder > .skillbar').css("width",
                    function() {
                         return $(this).attr("aria-valuenow") + "%";
                    }
               );
          }
     });

     // $(".skill-text > p").hide();

     // $(".skill-box > ul > li").hover(function() {
     //      $(".gaugeBorder, .skill-text > h3, span").addClass("none");
     //      $(this).show();
     //      // $(this).animate({opacity:"1"},300);
     // }, function() {
     //      $(this).css("opacity","");
     // });

     // $(".skill-box > ul > .html").hover(function() {
     //      $(".html > p").animate({opacity:"1"},300);
     // }, function() {
     //      $(".html > p").css("opacity","");
     // });

     // $(".skill-box > ul > .css").hover(function() {
     //      $(".css > p").animate({opacity:"1"},300);
     // }, function() {
     //      $(".css > p").css("opacity","");
     // });

     // $(".skill-box > ul > .sass").hover(function() {
     //      $(".sass > p").animate({opacity:"1"},300);
     // }, function() {
     //      $(".sass > p").css("opacity","");
     // });

     // $(".skill-box > ul > .jQuery").hover(function() {
     //      $(".jQuery > p").animate({opacity:"1"},300);
     // }, function() {
     //      $(".jQuery > p").css("opacity","");
     // });

     // $(".skill-box > ul > .js").hover(function() {
     //      $(".js > p").animate({opacity:"1"},300);
     // }, function() {
     //      $(".js > p").css("opacity","");
     // });

     // $(".skill-box > ul > .ps").hover(function() {
     //      $(".ps > p").animate({opacity:"1"},300);
     // }, function() {
     //      $(".ps > p").css("opacity","");
     // });

     // $(".skill-box > ul > .ai").hover(function() {
     //      $(".ai > p").animate({opacity:"1"},300);
     // }, function() {
     //      $(".ai > p").css("opacity","");
     // });

     // $(".skill-box > ul > .pr").hover(function() {
     //      $(".pr > p").animate({opacity:"1"},300);
     // }, function() {
     //      $(".pr > p").css("opacity","");
     // });

     // $(".skill-box > ul > .ae").hover(function() {
     //      $(".ae > p").animate({opacity:"1"},300);
     // }, function() {
     //      $(".ae > p").css("opacity","");
     // });
});