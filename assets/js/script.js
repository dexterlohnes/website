$(document).ready(function() {
    var navigation = document.querySelector(".fnd-header");
    var headroom = new Headroom(navigation, {
        tolerance: 5,
        classes: {
            top: "navbar-dark",
            notTop: "navbar-light"
        }
    });
    headroom.init();

    $('.js_horizontal').lightSlider({
        autoWidth: true,
        loop: false,
        controls: false,
        item: 5,
        slideMargin: 25,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    item: 4,
                    slideMargin: 10,
                    slideMove: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    item: 2,
                    slideMargin: 0,
                    slideMove: 1
                }
            }
        ]
    });

    $('.fnd-header a[href^="#"]').on('click', function(e) {
        nav = $('.navlinks');
        e.preventDefault();
        $('a').each(function() {
            $(this).removeClass('active');
        });

        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });

    $(".scrolltonext").on("click", function() {
        $('html, body').animate({
            scrollTop: $(this).closest('section').next().offset().top
        }, 800);
        return false;
    });

    document.addEventListener('click', function(e) {
        var x = e.target;
        if (x.nodeName === 'A') {
            var href = x.getAttribute('href');

            if (href && href.charAt(0) !== '#') {
                href += (/\?/.test(href) ? '&' : '?') + window.location.search.substring(1);
                x.setAttribute('href', href);
            }
        }
    }, false);
});