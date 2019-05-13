'use strict';


(function (o, $, h) {
  if (o) {
    var $o = $(o),
      $het = $(o.querySelector('.sta-header-key_abs')),
      $lis = o.querySelectorAll('.sta-header-key_list > li'),
      domi = location.origin + location.pathname;

    //control resize
    function c() {
      $o.addClass('sta-complete');
      var h = $($lis[0]).offset().top;
      $.each($lis, function (i, e) {
        if ($(e).offset().top > h) {
          $o.removeClass('sta-complete');
          return !!0;
        };
      });
    };
    c();
    $(window).resize(c);

    //control scroll
    function s(e, id) {
      e.preventDefault();
      if (id.length)
        $("html,body").animate({ scrollTop: id.offset().top - $het.innerHeight() }, 1e3);
    };

    $.each($lis, function (i, e) {
      var $b = $('button', e);
      if ($b.length) {
        var href = $b.data('url');
        if ( href && href.indexOf(domi) >= 0 ) {
          $b.parent().addClass('sta-actual')
        };
      };
    });

    //control fixed
    h.controlTop($(o));
  };
})(document.querySelector('.tpl-header-key'), jQuery, hotusa())
