$(window).scroll(function() {
  if ($(this).scrollTop() > 50) {
    $('.scrolltop:hidden').stop(true, true).fadeIn();
  } else {
    $('.scrolltop').stop(true, true).fadeOut();
  }
});
$(function() {
  $(".scroll").click(function() {
    $("html,body").animate({
      scrollTop: $("body").offset().top
    }, "0");
    return false
  })
})
jQuery(function($) {
  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height() + 200,
      $animatables = $('.animatable');
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    $animatables.each(function(i) {
      var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });
  };
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});
