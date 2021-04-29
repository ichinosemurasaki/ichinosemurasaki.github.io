$(document).ready(function() {
    var wind = $(window).width();

    if (wind > 767) {
        $("#tag-titl1").mouseenter(function() {
            $("#sub1").css("display", "block")
        });
        $("#tag1").mouseleave(function() {
            $("#sub1").css("display", "none")
        });

        $("#tag-titl2").mouseenter(function() {
            $("#sub2").css("display", "block")
        });
        $("#tag2").mouseleave(function() {
            $("#sub2").css("display", "none")
        });

        $("#tag-titl3").mouseenter(function() {
            $("#sub3").css("display", "block")
        });
        $("#tag3").mouseleave(function() {
            $("#sub3").css("display", "none")
        });

        $("#tag-titl4").mouseenter(function() {
            $("#sub4").css("display", "block")
        });
        $("#tag4").mouseleave(function() {
            $("#sub4").css("display", "none")
        });

        $("#tag-titl5").mouseenter(function() {
            $("#sub5").css("display", "block")
        });
        $("#tag5").mouseleave(function() {
            $("#sub5").css("display", "none")
        });

        $("#tag-titl6").mouseenter(function() {
            $("#sub6").css("display", "block")
        });
        $("#tag6").mouseleave(function() {
            $("#sub6").css("display", "none")
        });

        $(".sub-nav").find("a").hover(function() {
                $(this).css("color", "white")
            },
            function() {
                $(this).css("color", "black")
            }
        )
    }

})