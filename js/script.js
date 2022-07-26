
window.onload = function() {
}


$(window).ready(function() {
     //loading
     // setInterval(function() {
     //      $(".loader").fadeOut();
     // }, 3000);

     //메뉴스크롤
     $('#gnb > li > a').click(function() {
          var target = $(this).attr("href"); 
          $("html").animate({scrollTop:$(target).offset().top}, 1000);
     });
     
     // 모바일(햄버거) 메뉴
     $(".mobileMenu,  #gnb").click(function() {
          $(".mobileMenu").toggleClass("open");
          $("#gnb").toggleClass("show");
     });

     // 메뉴바
     $("#gnb > li").last().each(function() {
          const name = $(this).find("img").attr("src");
          const src = name.substring(0, name.lastIndexOf('.'));

          $(this).hover(function() {
               $(this).find("img").attr("src", src + "_on." + /[^.]+$/ .exec(name));}, function() {
               $(this).find("img").attr("src", src + "." + /[^.]+$/ .exec(name));
          });
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
     $(".modal-up > .closeBtn").click(function() {
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

     // project details
     $(".pro1-details").hide();
     $(".pro1-text > .process").click(function(e) {
          e.preventDefault();
          $(".pro1-details").slideDown(300);
          $("html").css({"overflow-y":'hidden'})
     });
     $(".details-btn").click(function() {
          $("html").css({"overflow-y":'scroll'})
          $(".pro1-details").slideUp(300);
     });

     // img-animation
     $(".pro1-img, .pro2-img, .pro3-img, .pro4-img").hover(function() {
          $(this).find("img").css("animation-play-state", "paused");
     }, function() {
          $(this).find("img").css("animation-play-state", "");
     });
     
     //skills-gauge
     $(window).scroll(function() {
          const skills = $("#skills").offset().top - $("#skills").outerHeight();
          console.log(skills);
          if($(window).scrollTop() > skills) {
               $('.gauge-border > .skill-bar').css("width",
                    function() {
                         return $(this).attr("aria-valuenow") + "%";
                    }
               );
          }
     });

     //skills-txt
     $(".skill-over-txt").hide();
     $(".skill-box > ul > li").hover(function() {
          $(this).children('.gauge-box').css("opacity","0").next().show();
     }, function() {
          $(this).children('.gauge-box').css("opacity","").next().hide();

     });

});