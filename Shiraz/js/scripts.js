$(document).ready(function() {
    $('.testemonials').each(function(){
        var $this = $(this),
            $slick = $('.testemonials_items', $this);
    $($slick).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: '.left-arrow',
        nextArrow: '.right-arrow',
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1450,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 350,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    }).on('afterChange', function(a, b, c, f){
		console.log('afterChange', b, c, f);
	}).on('beforeChange', function(a, b, c, f){
		console.log('beforeChange', b, c, f);
  });
});



    /* Script for changing active links in the menu */
    var linkContainer = document.getElementsByTagName("ul");
    var navbarlinks = linkContainer[0].getElementsByClassName("link");

    for (var i = 0; i < navbarlinks.length; i++) {
        navbarlinks[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("checked");
            current[0].className = current[0].className.replace(" checked", "");
            this.className += " checked";
        });
    }
});

