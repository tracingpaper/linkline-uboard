(function ($){

    var MAX_ITEMS = 10;
    const MORE_ITEMS = 5;

    const $items = $('.gallery-item')

    $items.addClass("hidden");

    $items.slice(0, MAX_ITEMS).removeClass("hidden");

    $('#gallery-load-more').click(function (e) {
        $items.slice(MAX_ITEMS, MAX_ITEMS += MORE_ITEMS).removeClass("hidden");
        //reinit aos
        AOS.init();
        //
        $(this).trigger('blur');

        if(MAX_ITEMS >= $items.length) $(this).remove();
    });

})(jQuery);
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