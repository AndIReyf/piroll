$(function () {

  $('.image-popup').magnificPopup({
    type: 'image',
  });
// =========================================
  $('.work__content-video a').fancybox({});
// =========================================
  $('.feedback__slider').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
// =========================================
  $('a').on('click', function () {
    $(this).toggleClass('active');
  });
// =========================================
  $('.single-project__slider').slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev">Previous Project</button>',
    nextArrow: '<button type="button" class="slick-next">Next Project</button>',
  });

  $('.gallery__image').on('click', function () {
    $('.single-project').addClass('active');
    $('.gallery.home').removeClass('active');
  });
  $('.btn').on('click', function () {
    $('.gallery.home').addClass('active');
    $('.single-project').removeClass('active');
  });
});