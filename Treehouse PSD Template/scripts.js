$(window).scroll(function() {
    $('.section_title').each(function() {
        var sectionPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (sectionPos < topOfWindow + 800) {
            $(this).addClass('fadeInUp');
        }
    });

    $('.services_item').each(function() {
        var sectionPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (sectionPos < topOfWindow + 800) {
            $(this).addClass('bounceInUp');
        }
    });
});
