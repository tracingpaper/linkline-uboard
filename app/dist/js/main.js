(function ($){

    var MAX_ITEMS = 10;
    const MORE_ITEMS = 10;

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
    AOS.init({
        disable: 'mobile'
    });
    
};
(function($) {
    
    $(document).on('click', '#navbarCollapse.in a', function(e) {
        $("#navbarCollapse").removeClass("in").addClass("collapse");
    });

})(jQuery);
(function ($){

    $(window).on('load', function (e) {

        $("#preloader").remove();

        bootstrap();
    });

})(jQuery);