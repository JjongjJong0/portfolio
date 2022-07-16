// window.onbeforeunload = (function() { 
//      $(".loader").show(); 
// },3000);

// $(window).load(function() {
     //      $(".loader").fadeOut();
     // }, 3000);
// const scrollElements = document.querySelectorAll(".scroll");

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const elementOutofView = (el) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop > (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };

// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//       displayScrollElement(el);
//     } else if (elementOutofView(el)) {
//       hideScrollElement(el)
//     }
//   })
// }

// window.addEventListener("scroll", () => { 
//   handleScrollAnimation();
// });


     
$(window).ready(function() {
     //loading
     // setInterval(function() {
     //      $(".loader").fadeOut();
     // }, 3000);

     // //스크롤
     // window.addEventListener("wheel", function(e) {
     //      e.preventDefault();
     // }, {passive : false});

     // var html = $('html');
     // var page = 1;
     // var lastPage = $('footer');

     // html.animate({scrollTop:0},10);

     // $(window).on("wheel", function(e) {
     //      if(html.is(":animated")) return;
     //      if(e.originalEvent.deltaY > 0){
     //           if(page == lastPage) return;
     //           page++;
     //      }else if(e.originalEvent.deltaY < 0) {
     //           if(page == 1) return;
     //           page--;
     //      }
     //      var posTop = (page-1) * $(window).height();

     //      html.animate({scrollTop : posTop});
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
          console.log(project4);
          console.log($(window).scrollTop());
          if($(window).scrollTop() > project4) {
               $(".project4").addClass("scrolled");
          }else {
               $(".project4").removeClass("scrolled");
          }
     });

     // project1
     $(".project1 > .pro1-box > .pro1-text").hover(function() {
          $(".pro1-img > img").css("animation-play-state", "paused");
     }, function() {
          $(".pro1-img > img").css("animation-play-state", "");
     });

     //skills
     // $(window).scroll(function() {
          // $('.gaugeBorder[data-percentage]').each(function () {
          //      var progress = $(this);
          //      var percentage = Math.ceil($(this).attr('data-percentage'));
          //      $({countNum: 0}).animate({countNum: percentage}, {
          //        duration: 2000,
          //        easing:'linear',

          //        step: function() {
          //        var pct = '';
          //        if(percentage == 0){
          //          pct = Math.floor(this.countNum) + '%';
          //        }else{
          //          pct = Math.floor(this.countNum+1) + '%';
          //        }
          //        progress.siblings().children().css('width',pct);
          //        }
          //      });
          // });

     // });

});