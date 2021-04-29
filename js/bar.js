$(function() {
    $(window).scroll(function() {

        var scrollValue = $(this).scrollTop();

        if (scrollValue > 1000) {
            $(".sk1").css("animation", "sk1 2s")
            $(".sk2").css("animation", "sk2 2s")
            $(".sk3").css("animation", "sk3 2s")
            $(".sk4").css("animation", "sk4 2s")
            $(".sk5").css("animation", "sk5 2s")
            $(".sk6").css("animation", "sk6 2s")
            $(".sk7").css("animation", "sk7 2s")
            $(".sk8").css("animation", "sk8 2s")
            $(".sk9").css("animation", "sk9 2s")
        }
    })
})