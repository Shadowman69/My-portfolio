
    /*Анимированный счетчик*/
var time = 2, cc = 1; //time это время за которое накручивается счетчик
$(window).scroll(function() {
    $('.my_counters').each(function() {
        var 
        cPos = $(this).offset().top,
        topWindow = $(window).scrollTop();
        if (cPos < topWindow + 600) {
            if (cc < 2) {
                /*$('.numbers').addClass('trans');*/
                $('.numbers').css('opacity', '1');
                $('div').each(function(){
                    var 
                    i = 1,
                    num = $(this).data('num'),
                    step = 1000 * time / num,
                    that = $(this),
                    int = setInterval(function(){
                      if (i <= num) {
                        that.html(i);
                      }
                      else {
                        cc = cc + 2;
                        clearInterval(int);
                      }
                      i++;
                    },step);
                });
            }
        }
    });

    /* Дополнение для скрипта счетчика в случае очень больших чисел */

/*
    var
            i = 1,
            istep = 1,  // создаем переменную для шага увеличения цифр
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this), inter;
            if (num.toString().length > 3) // Если количество цифр больше 3
            istep = 8; // то шаг прокрутки будет равен, например, 8
            inter = setInterval(function () {
            if (i <= num) {
            that.html(i);
            } else {
            cc += 2;
            that.html(num); //! Принудительно устанавливаем конечное значение, 
            тем самым избавляясь от погрешности расчета 
            clearInterval(inter);
        }
        i+=istep; // увеличиваем на заданный шаг переменную
    }, step * istep); // умножаем для ускорения увеличения больших цифр

*/

    /*Анимация при прокрутке*/
    $('.big_font').each(function() {
        var sectionPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (sectionPos < topOfWindow + 600) {
            $(this).addClass('pulse');
        }
    });

    $('.left').each(function() {
        var sectionPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (sectionPos < topOfWindow + 600) {
            $(this).removeClass('unvisible');
            $(this).addClass('bounceInLeft');
        }
    });

    $('.right').each(function() {
        var sectionPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (sectionPos < topOfWindow + 600) {
            $(this).removeClass('unvisible');
            $(this).addClass('bounceInRight');
        }
    });

    $('.top').each(function() {
        var sectionPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (sectionPos < topOfWindow + 600) {
            $(this).removeClass('unvisible');
            $(this).addClass('bounceInDown');
        }
    });

    $('.bottom').each(function() {
        var sectionPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (sectionPos < topOfWindow + 600) {
            $(this).removeClass('unvisible');
            $(this).addClass('bounceInUp');
        }
    });

    $('.fa-map-marker').each(function() {
        var sectionPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (sectionPos < topOfWindow + 600) {
            $(this).removeClass('unvisible');
            $(this).addClass('bounceIn');
        }
    });

    $('.brand').hover(function() {
        $(this).addClass('bounce');
      }, function() {
        $(this).removeClass('bounce');
    });
    
});

/* Слайдеры */

$(document).ready(function(){
    $('.comments').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.fa-chevron-left',
        nextArrow: '.fa-chevron-right'
    });
    $('.comment__2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.fa-arrow-left',
        nextArrow: '.fa-arrow-right'
    });
  });

/* Переключатель стрелочек */
$(document).ready(function(){
    $('.first-chevron-down').click(function(){
        $('.first-chevron-down').addClass('unvisible');
        $('.first-chevron-up').removeClass('unvisible');
        $('.content_1').removeClass('unvisible');
        $('.listing_1').animate({
            height: '250px'
        }, 200);
    });

    $('.first-chevron-up').click(function(){
        $('.first-chevron-up').addClass('unvisible');
        $('.first-chevron-down').removeClass('unvisible');
        $('.content_1').addClass('unvisible');
        $('.listing_1').animate({
            height: '55px'
        }, 200);
    });

    $('.second-chevron-down').click(function(){
        $('.second-chevron-down').addClass('unvisible');
        $('.second-chevron-up').removeClass('unvisible');
        $('.content_2').removeClass('unvisible');
        $('.listing_2').animate({
            height: '250px'
        }, 200);
    });

    $('.second-chevron-up').click(function(){
        $('.second-chevron-up').addClass('unvisible');
        $('.second-chevron-down').removeClass('unvisible');
        $('.content_2').addClass('unvisible');
        $('.listing_2').animate({
            height: '55px'
        }, 200);
    });

    $('.third-chevron-down').click(function(){
        $('.third-chevron-down').addClass('unvisible');
        $('.third-chevron-up').removeClass('unvisible');
        $('.content_3').removeClass('unvisible');
        $('.listing_3').animate({
            height: '250px'
        }, 200);
    });

    $('.third-chevron-up').click(function(){
        $('.third-chevron-up').addClass('unvisible');
        $('.third-chevron-down').removeClass('unvisible');
        $('.content_3').addClass('unvisible');
        $('.listing_3').animate({
            height: '55px'
        }, 200);
    });
}); 

/* Кнопка Наверх */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
};


function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
};
