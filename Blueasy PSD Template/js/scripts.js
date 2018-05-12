$(document).ready(function() {

    function blueasyMenu() {
        var $trigger = $('.hamburger_menu'),
            $menu = $('nav ul.menu');

        $trigger.click( function() {
            $menu.slideToggle(); 
        });

        $(window).resize(function() {
            if((window).width() > 550) {
                $menu.removeAtrr('style');
            };
        });
    };

    
});

blueasyMenu();