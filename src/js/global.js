import $ from 'jquery';

$(document).ready(function () {
    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".nav-fixedtop").addClass("bg-nav");
        //change logo svg color
        var pic = $("#top-logo").attr('data-alt-src')
        $("#top-logo").attr('src', "/src/images/"+pic);
    } else {
        $(".nav-fixedtop").removeClass("bg-nav");
        //change logo svg white
        var pic = $("#top-logo").attr('alt')
        $("#top-logo").attr('src', "/src/images/"+pic);
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".nav-fixedtop").addClass("bg-nav");
            //change logo svg
            var pic = $("#top-logo").attr('data-alt-src')
            $("#top-logo").attr('src', "/src/images/"+pic);
        } else {
            $(".nav-fixedtop").removeClass("bg-nav");
            //change logo svg white
            var pic = $("#top-logo").attr('alt')
            $("#top-logo").attr('src', "/src/images/"+pic);
        }
    });
});