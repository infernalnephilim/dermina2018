// $(window).on('resize', function () {
//     if ($(window).width() > 905) {
//         $("#menu").show("slide", {
//             direction: 'right'
//         }, "ease", 3000);
//     } else {
//         $("#menu").hide();
//     }
// });

$(function () {

    var $window = $(window);
    var scrollTime = 0.7;
    var scrollDistance = 300;

    $window.on("mousewheel DOMMouseScroll", function (event) {

        event.preventDefault();
        var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta * scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo: {y: finalScroll, autoKill: true},
            ease: Power1.easeOut,	// https://api.greensock.com/js/com/greensock/easing/package-detail.html
            autoKill: true,
            overwrite: 5
        });

    });

});


$(function () {

    $("nav").load("menu.html");
    $("header").load("header.html");
    $("#cookies-wrapper").load("cookies.html");
    $("footer").load("footer.html");

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $("#oferta-wrapper").load("oferta-mobile.html");
    } else {
        $("#oferta-wrapper").load("oferta.html");
    }
    $(".collapse.navbar-collapse.in").removeClass("in");
});

$(window).load(function () {
    $(".loader").fadeOut();
    $(".loader-wrapper").delay(350).fadeOut("slow");
});

$(document).ready(function () {

    $(window).scroll(function () {

        $('.show-me-left').each(function (i) {

            var point_of_object = $(this).offset().top + 20;//$(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > point_of_object) {

                $(this).animate({'opacity': '1'}, 700);
                $(this).addClass("slide-in-left")
            }

        });
        $('.show-me-right').each(function (i) {

            var point_of_object = $(this).offset().top + 20;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > point_of_object) {

                $(this).animate({'opacity': '1'}, 700);
                $(this).addClass("slide-in-right")
            }

        });

    });
    // $(document.body).prepend("<script src=\"jquery-cookie/jquery.cookie.js\"></script>");
    // $(document.body).prepend("<style>\n" +
    //     "    .vertical-alignment-helper {\n" +
    //     "        display:table;\n" +
    //     "        height: 100%;\n" +
    //     "        width: 100%;\n" +
    //     "        pointer-events:none;\n" +
    //     "    }\n" +
    //     "    .vertical-align-center {\n" +
    //     "        display: table-cell;\n" +
    //     "        vertical-align: middle;\n" +
    //     "        pointer-events:none;\n" +
    //     "    }\n" +
    //     "    .modal-content {\n" +
    //     "        width:inherit;\n" +
    //     "        max-width:inherit;\n" +
    //     "        height:inherit;\n" +
    //     "        margin: 0 auto;\n" +
    //     "        pointer-events: all;\n" +
    //     "    }\n" +
    //     "</style>\n" +
    //     "<div id=\"myModal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n" +
    //     "    <div class=\"vertical-alignment-helper\">\n" +
    //     "        <div class=\"modal-dialog vertical-align-center\" role=\"document\">\n" +
    //     "            <div class=\"modal-content\">\n" +
    //     "                <div class=\"modal-header\">\n" +
    //     "                    <!--<h4 class=\"modal-title\" style=\"float: left;\">Urlop</h4>-->\n" +
    //     "                    <button type=\"button\" class=\"btn close modalClose\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n" +
    //     "                            aria-hidden=\"true\">&times;</span></button>\n" +
    //     "                </div>\n" +
    //     "                <div class=\"modal-body\">\n" +
    //     "                    <h3 class=\"center\">Gabinet nieczynny od&nbsp;30.04.2018 do&nbsp;04.05.2018</h3>\n" +
    //     "                </div>\n" +
    //     "                <div class=\"modal-footer\">\n" +
    //     "                    <button type=\"button\" class=\"btn btn-default modalClose\" data-dismiss=\"modal\">Zamknij</button>\n" +
    //     "                </div>\n" +
    //     "            </div>\n" +
    //     "        </div>\n" +
    //     "    </div>\n" +
    //     "</div>");
    //
    // if ($.cookie('showModalOnce1') != 'yes') {
    //     $("#myModal").modal('show');
    // }
    // $.cookie('showModalOnce1', 'yes', {path: '/', expires: 2});

});


/*****************************************************************
 * Home slider
 ******************************************************************/
function slide_show(nr) {
    $(".slide" + nr + "_img").show("drop", {
        direction: 'right'
    }, "ease", 500);
    setTimeout(function () {
        $(".slide" + nr + "_img2").show("drop", {
            direction: 'right'
        }, "ease", 500);
    }, 100);
    setTimeout(function () {
        $("#slide" + nr + "_p1").show("slide", {
            direction: 'left'
        }, "ease", 300);
    }, 100);
    setTimeout(function () {
        $("#slide" + nr + "_p2").show("slide", {
            direction: 'left'
        }, "ease", 300);
    }, 300);

}

function slide_hide(nr) {
    $(".slide" + nr + "_img").hide("drop", {
        direction: 'right'
    }, "ease", 500);
    $(".slide" + nr + "_img2").hide("drop", {
        direction: 'right'
    }, "ease", 500);
    $("#slide" + nr + "_p1").hide("slide", {
        direction: 'left'
    }, "ease", 300);
    $("#slide" + nr + "_p2").hide("slide", {
        direction: 'left'
    }, "ease", 500);
}

var current = 1;

function slideShow() {
    slide_hide(current);
    $("#slide" + current).fadeOut(1000);
    $("#sl_button" + current).removeClass("slider_active");
    current = current + 1;
    if (current > 2) {
        current = 1;
    }
    $("#slide" + current).fadeIn(1000);
    $("#sl_button" + current).addClass("slider_active");

    setTimeout(slide_show(current), 1000);
}

var slideshowInterval = setInterval(slideShow, 10000);

$(function () {
    $("#sl_button1").click(function () {
        if (current != 1) {
            slide_hide(current);
            $("#slide" + current).fadeOut(1000);
            $("#sl_button" + current).removeClass("slider_active");
        }
        current = 1;

        $("#slide" + current).fadeIn(1000);
        $("#sl_button" + current).addClass("slider_active");

        setTimeout(slide_show(1), 700);
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(slideShow, 10000);
    });

    $("#sl_button2").click(function () {
        if (current != 2) {
            slide_hide(current);
            $("#slide" + current).fadeOut(1000);
            $("#sl_button" + current).removeClass("slider_active");
        }
        current = 2;
        $("#slide" + current).fadeIn(1000);
        $("#sl_button" + current).addClass("slider_active");

        setTimeout(slide_show(2), 700);
        clearInterval(slideshowInterval);
        slideshowInterval = setInterval(slideShow, 10000);
    });

    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 10
                }, 1000);
                return false;
            }
        }
    });
});

$(window).bind('resize', function () {
    var menu = $('#sidebar');
    menu.width($('#list-column').width());

    var menu = $('#sidebar');
    if (isBreakpoint('xs') || isBreakpoint('sm')) {
        menu.removeClass('fixed');
    }
});

$(window).bind('scroll', function () {
    showBackToTop();
});


function showBackToTop() {
    var top = $(window).scrollTop();
    if (top > 700) {
        $(".scroll-top").show("slide", {
            direction: 'right'
        }, "ease", 3000);
    } else {
        $(".scroll-top").hide("slide", {
            direction: 'right'
        }, "ease", 3000);
    }
}

function isBreakpoint(alias) {
    return $('.device-' + alias).is(':visible');
}

