$(document).ready(function() {

    function blueasyMenu() {
        var $trigger = $('.hamburger_menu'),
            $menu = $('nav ul.menu');

        $trigger.click( function() {
            $menu.slideToggle();
            /*$menu.css({"position": "absolute", "width": "100%"});
            $menu.css({"background-color": "#475159", "z-index": "1"});*/
        });

        $(window).resize(function() {
            if((window).width > '550') {
                $menu.removeAtrr('style');
            };
        });
    };

    blueasyMenu();
    
});

