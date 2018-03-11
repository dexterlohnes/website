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

    $(".scrolltonext").on("click", function() {
        $('html, body').animate({
            scrollTop: $(this).closest('section').next().offset().top
        }, 800);
        return false;
    });
});