(function($) {
    
    $(document).on('click', '#navbarCollapse.in a', function(e) {
        $("#navbarCollapse").removeClass("in").addClass("collapse");
    });

})(jQuery);