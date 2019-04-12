$('.header-search').on('click', function() {

    if ($('.header-search-input').css('display') == 'none')
        $('.header-search-input').css('display', 'block');
    else
        $('.header-search-input').css('display', 'none');

})

$(".header-search-input").click(function(event) {
    event.stopPropagation();

});

$(".search-field").on('blur', function() {
    $('.header-search-input').css('display', 'none');

});