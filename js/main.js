$(document).ready(function () {

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-131356343-1');

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

    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 50, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    $(window).on('resize', function () {
        if ($(window).width() < 768) {
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(1)').find('.read-more').attr({
                dataTarget: '#modalOne',
                dataToggle: 'modal'
            });
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(3)').find('.read-more').attr({
                dataTarget: '#modalTwo',
                dataToggle: 'modal'
            });
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(5)').find('.read-more').attr({
                dataTarget: '#modalThree',
                dataToggle: 'modal'
            });
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(7)').find('.read-more').attr({
                dataTarget: '#modalFour',
                dataToggle: 'modal'
            });
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(1)').removeAttr("dataTarget").removeAttr("dataToggle");
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(3)').removeAttr("dataTarget").removeAttr("dataToggle");
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(5)').removeAttr("dataTarget").removeAttr("dataToggle");
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(7)').removeAttr("dataTarget").removeAttr("dataToggle");


        } else if ($(window).width() > 768) {

            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(1)').attr({
                dataTarget: '#modalOne',
                dataToggle: 'modal'
            });
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(3)').attr({
                dataTarget: '#modalTwo',
                dataToggle: 'modal'
            });
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(5)').attr({
                dataTarget: '#modalThree',
                dataToggle: 'modal'
            });
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(7)').attr({
                dataTarget: '#modalFour',
                dataToggle: 'modal'
            });
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(1)').find('.read-more').removeAttr("dataTarget").removeAttr("dataToggle");
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(3)').find('.read-more').removeAttr("dataTarget").removeAttr("dataToggle");
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(5)').find('.read-more').removeAttr("dataTarget").removeAttr("dataToggle");
            $('.s-portfolio .container .row:nth-child(2) .project-full:nth-child(7)').find('.read-more').removeAttr("dataTarget").removeAttr("dataToggle");

        }

    });

});

$(document).scroll(function () {
    if ($('.skills').hasClass("in-view")) {
        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 3000);
        });
    }
})

var string = "You've baked a really lovely cake, but then you've used dog shit for frosting.";
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("text-typing").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 50); /* change 70 for speed */

}
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');

        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');