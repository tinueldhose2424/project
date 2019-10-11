$(document).ready(function () {

    // Menu-overlay //

    $("#toggle_btn").on("click", function () {
        $(".overlay").fadeIn();
        $("#menu-nav").animate({ width: "400px" });
    });
    $(".overlay").on("click", function () {
        $(".overlay").fadeOut(2000);
        $("#menu-nav").animate({ width: "0px" });
    });

    // Menu-overlay completed //
    $("#menu-nav li").on("click",function(){
        $(this).addClass("font-green");
        $(this).siblings().removeClass("font-green");
    });

});

// Additional menu overlay//

$(window).resize(function () {

    if ($(window).width() >= 975) {
        $(".overlay").fadeOut(2000);
        $("#menu-nav").removeAttr("style");
    }
});

// Additional menu overlay completed //

