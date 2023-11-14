jQuery(document).ready(function() {
  "use strict";
  kanha_tm_portfolio();

  jQuery(window).on('resize', function() {
  });
});

  jQuery('.popup-youtube').each(function() {
    jQuery(this).magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  });


function kanha_tm_portfolio() {
  $(document).ready(function() {
    $(".current").trigger('click');
  });
  "use strict";
  if (jQuery().isotope) {
    var list = jQuery('.kanha_tm_portfolio_list');
    var filter = jQuery('.kanha_tm_portfolio_filter');
    if (filter.length) {
      filter.find('a').on('click', function() {
        var selector = jQuery(this).attr('data-filter');
        list.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      });
      filter.find('a').on('click', function() {
        filter.find('a').removeClass('current');
        jQuery(this).addClass('current');
        return false;
      });
    }
  }
}
