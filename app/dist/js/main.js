const bootstrap = function ($) {

    //WOW js
    AOS.init();
    
};
/*(function($) {
    const $navbar = $("#navbar");
    const offset = $navbar.height();

    $(window).on("scroll", function(e) {

        if($(this).scrollTop() > offset) {

            $navbar.removeClass('bg-transparent hidden').addClass('bg-light dropTop');

        }

        else {
            $navbar.addClass('bg-transparent').removeClass('bg-light dropTop');
        }

    });

})($);*/
(function ($){

    $(window).on('load', function (e) {

        $("#preloader").remove();

        bootstrap();
    });

})(jQuery);