$(window).bind('scroll', function () {
    stickySidebar();
    highlightCurrent();

});

function stickySidebar() {
    var menu = $('#sidebar');
    var top = $(window).scrollTop();
    if (!isBreakpoint('xs') && !isBreakpoint('sm')) {
        if (top > 898) {
            menu.addClass('fixed');
            menu.width($('#list-column').width());
        } else {
            menu.removeClass('fixed');
        }
    }
}

function highlightCurrent() {
    for (var i = 0; i < 7; i++) {
        var current = $('#peel' + i);
        var nextI;
        if (i != 6) {
            nextI = i + 1;
        }

        var next = $('#peel' + nextI);
        var top = $(window).scrollTop();
        if (top > current.offset().top - 200) {
            $("#peel-li-" + i).addClass('other-color');
            $("#peel-li-" + i).css('border-left-color', '#A4D44E');
        } else {
            $("#peel-li-" + i).removeClass('other-color');
            $("#peel-li-" + i).css('border-left-color', 'transparent');
        }
        if (i!=6 && top > next.offset().top - 200) {
            $("#peel-li-" + i).removeClass('other-color');
            $("#peel-li-" + i).css('border-left-color', 'transparent');
        }
    }
}