(function($) {
    const $navbar = $("#navbar");
    const offset = $navbar.height();

    $(window).on("scroll", function(e) {

        if($(this).scrollTop() > offset) {

            $navbar.removeClass('bg-transparent').addClass('fixed-top bg-light');

        }

        else {
            $navbar.addClass('bg-transparent').removeClass('fixed-top bg-light');
        }

    });

})($);