$(function() {

    $('.slider_inner').slick({
        аccessibility: false,
        // arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev" ><img src="../images/slider/previous.svg" alt=""></button>',
        nextArrow: '  <button class="slick-arrow slick-next"><img src="../images/slider/next.svg" alt=""></button>',
    });

});