$(function () {

  $('.image-popup').magnificPopup({
    type: 'image'
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
});