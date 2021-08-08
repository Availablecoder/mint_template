$(document).ready(function () {

    // loader
    $(".preloader").fadeOut(1000)
    // -----

    var wow = new WOW();
    wow.init();

    // Header & menu

    $("header .container nav i.menu-icon").click(function () {
        $(this).toggleClass("fa-bars fa-long-arrow-alt-right")
        $("header .container nav ul").toggleClass("sliding-menu")
    });

    $(window).resize(function () {
        if ($(this).width() > 767 && $("header .container nav i.menu-icon").hasClass("fa-long-arrow-alt-right")) {
            $("header .container nav i.menu-icon").removeClass("fa-long-arrow-alt-right");
            $("header .container nav i.menu-icon").addClass("fa-bars");
            $("header .container nav ul").removeClass("sliding-menu");
        }
    });

    // -----------
    $("header li a").click(function () {
        $("header .container nav ul").delay(8000).removeClass("sliding-menu")
    });
    // links && scrolling 
    var scroll = new SmoothScroll('a[href*="#"]');

    $(window).scroll(function () {
        // Header Responsive
        if ($(this).scrollTop() > 150) {
            $("header").addClass("header-scroll")
            $("header .container nav ul").css('backgroundColor' , "#bdc3c7")
        } else {
            $("header").removeClass("header-scroll");
            $("header .container nav ul").css('backgroundColor' , "#fff")
        }
        // ---------
        // menu activation 
        $("section").each(function(){
            if ($(window).scrollTop() > ($(this).offset().top) - 1) {
                var sectionID = $(this).attr('id');
                $("header li a[data-scroll='" + sectionID +"']")
                .addClass('active').parent()
                .siblings().find('a').removeClass('active');
            }
        });
        // --------
    });
    // -----------------

    // Shuffle 
    var mixer = mixitup('#shuffle');

    $(".shuffle-buttons ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    });
    
    $("li#brand").click(function () {
        $("div#brand").eq(0).css({
            gridArea : "one"
        });
        $("div#brand").eq(1).css({
            gridArea : "two"
        })
    });
    $("li#illustration").click(function () {
        $("div#illustration").eq(0).css({
            gridArea : "one"
        });
        $("div#illustration").eq(1).css({
            gridArea : "two"
        })
    });
    $("li#web").click(function () {
        $("div#web").eq(0).css({
            gridArea : "one"
        });
        $("div#web").eq(1).css({
            gridArea : "two"
        })
    });
    $("li#all").click(function () {
        $(".shuffle-cont > div").eq(0).css({
            gridArea : "one"
        });
        $(".shuffle-cont > div").eq(1).css({
            gridArea : "two"
        });
        $(".shuffle-cont > div").eq(2).css({
            gridArea : "three"
        });
        $(".shuffle-cont > div").eq(3).css({
            gridArea : "four"
        });
        $(".shuffle-cont > div").eq(4).css({
            gridArea : "five"
        });
        $(".shuffle-cont > div").eq(5).css({
            gridArea : "six"
        });
    });
    // -----------

    // Clients Slider
    var slider = tns({
        "slideBy": "page",
        "mouseDrag": true,
        "autoplayButtonOutput": false,
        "autoplay": true,
        "items": 1,
        "controls": false,
        "responsive": {
          "400": {
            "items": 2,
            "edgePadding": 30
          },
          "500": {
            "items": 3
          },
          "1000": {
            "items": 4
          }
        },
        "container": ".client",
        "swipeAngle": false,
        "speed": 400
    });
    // -----------------

    // scroll top 
    $(".scroll-top").click(function () {
        $("html,body").animate({scrollTop: 0} , 2500)
    });
    // 

});