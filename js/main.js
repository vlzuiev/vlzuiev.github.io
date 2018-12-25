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

    $('.carousel').slick({ 
        infinite: true,
        centerMode: true,
        autoplay: false,
        autoplaySpeed: 2000, 
        nextArrow: '<i class="fas fa-angle-right"></i>',
        prevArrow: '<i class="fas fa-angle-left"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: { 
                    arrows: false,
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 770,
                settings: {
                    arrows: false,
                    centerPadding: '0' 
                }
            }
        ]
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