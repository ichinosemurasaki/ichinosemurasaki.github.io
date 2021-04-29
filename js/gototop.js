$(function() {
    $(window).scroll(function() {
        $("#mobile-only").css("opacity", "0");
        $("#scroll-down").css("opacity", "0");
        var scrollValue = $(this).scrollTop();
        if (scrollValue > 500) {
            $("#totop").css("opacity", "1")
            $("#sidebar").css("opacity", "1")
        } else {
            $("#totop").css("opacity", "0")
            $("#sidebar").css("opacity", "0")
        }
    })
})