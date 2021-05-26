$(function () {

//header height
$("header").height($(window).height());
//dynamic resize header height
$(window).resize(function () {
  $("header").height($(window).height());
});

//trigger arrow navigation
$(".nav-item, .fa-chevron-down").click(function () {
  $("html, body").animate({
    scrollTop: $($(this).data('class')).offset().top
  }, 500);
});

//customize slider
$('.main-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  prevNextButtons: false
});

});
