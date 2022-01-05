$(function(){
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
        vertical: true
    });

    $('.product__name').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 750,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').addClass('menu__list--active');
        $('.menu__btn').addClass('menu__btn--hide');
        $('.menu__close').addClass('menu__close-btn');
    });

    $('.menu__close').on('click', function () {
        $('.menu__list').removeClass('menu__list--active');
        $('.menu__btn').removeClass('menu__btn--hide');
        $('.menu__close').removeClass('menu__close-btn');
    })


});