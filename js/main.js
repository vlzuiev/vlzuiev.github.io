$(document).ready(function () {
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 3000);
    });

    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

    $(".navbar-brand").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });

    $(document).on('click', '.cta', function () {
        $(this).toggleClass('active')
    })

    $('.carousel').slick({  
        slidesToShow: 1,  
        infinite: true, 
        dots: true,
        variableWidth: true,
        variableHeight: true,   
        nextArrow: '<i class="fas fa-angle-right"></i>',
        prevArrow: '<i class="fas fa-angle-left"></i>',
        arrows: false
    });

    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 10) {
            $("#top-navbar").css({
                backgroundColor: 'rgba(245, 245, 245, 0.9)',
                transition: 'background-color .5s ease-in-out'

            });
        } else {
            $("#top-navbar").css({
                backgroundColor: 'transparent',
                transition: 'background-color .5s ease-in-out'

            });
        }
    });

    $(window).bind('scroll', function () {
        if ($(this).scrollTop() > $(this).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        }
    });

    $('.top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        },
            'slow',
            'swing'
        )
    });

    frameLooper();

});

$('.Count').each(function () {
    var $this = $(this);
    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 3000,
        easing: 'swing',
        step: function () {
            $this.text(Math.ceil(this.Counter));
        }
    });
});

var string = "You've baked a really lovely cake, but then you've used dog shit for frosting."; 
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text-typing").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',50); /* change 70 for speed */

}