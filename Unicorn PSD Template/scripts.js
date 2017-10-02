/*Анимация при прокрутке*/
$(window).scroll(function() {
    $('.section-title').each(function() {
        var sectionPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (sectionPos < topOfWindow + 800) {
            $(this).addClass('zoomIn');
        }
    });
});

/*Анимация при наведении
$('.team-item--lead').hover(function() {
    $(this).addClass('animated bounce');
  }, function() {
    $(this).removeClass('animated bounce');
});

new WOW().init();
*/

$(document).ready(function() {

    $('.js-featured__slider').bxSlider({
        hideControlOnEnd: true,
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 360,
        slideMargin: 20,
        moveSlides: 1,
        pager: false,
        nextText: '',
        prevText: '',
        nextSelector: '.featured-slider__next',
        prevSelector: '.featured-slider__prev',
        infiniteLoop: false
    });

    $('.js-clients__slider').bxSlider({
        hideControlOnEnd: true,
        minSlides: 1,
        maxSlides: 6,
        slideWidth: 180,
        moveSlides: 1,
        pager: false,
        nextText: '',
        prevText: '',
        nextSelector: '.clients-slider__next',
        prevSelector: '.clients-slider__prev',
        infiniteLoop: false
    });
    $('.js-portfolio__slider').bxSlider({
        hideControlOnEnd: true,
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 430,
        moveSlides: 1,
        pager: true,
        controls: false,
        //ticker: true,
        //speed: 25000
    });

    $('.js-articles-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '.articles-slider__prev',
        nextArrow: '.articles-slider__next'
    });

    $('.header-nav__toggle').click(function(){
        $('.header-nav').toggleClass('active');
    });
});


$(document).ready(function(){
    sliderResize();
});
  
$(window).resize(function(){
    sliderResize();
});
  
function sliderResize() {
    var slider = $('.slider').bxSlider({
      slideWidth: 300,
      minSlides:1,
      maxSlides: 3,
      moveSlides: 1,
      slideMargin: 10
    });
  
    if ($(window).width()<900 && $(window).width()>600) {
      slider.reloadSlider({
        maxSlides: 2,
      });
    } else if ($(window).width()<600) {
      slider.reloadSlider({
        maxSlides: 2,
      });
    };
}

/* Counter 

var time = 2, cc = 1;
$(window).scroll(function() {
    $('.facts-item').each(function(){
        var
        cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if(cPos < topWindow + 200) {
            if(cc < 2) {
                $('.facts-number').addClass('.viz');
                $('div').each(function(){
                    var
                    i =1,
                    num = $(this).data('num'),
                    step = 1000 * time / num,
                    that = $(this),
                    int = setInterval(function(){
                        if (i <= num) {
                            that.html(i);
                        } else {
                            cc = cc + 2;
                            clearInterval(int);
                        }
                        i++;
                    },step);
                });
            }
        }
    });
});
*/


