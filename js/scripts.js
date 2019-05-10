'use strict';


(function (o, $, h) {
  if (o) {
    var $o = $(o),
      $het = $(o.querySelector('.sta-header-bt_abs')),
      $lis = o.querySelectorAll('.sta-header-bt_list > li');

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
      var $a = $('a', e);
      if ($a.length) {
        var href = $a.attr('href');
        if (href && href.indexOf('#') == 0) {
          $a.click(function (e) {
            s(e, $(href))
            change($(this));
          });
        };
      };
    });

    //control actual
    function change(e) {
      $(o.querySelectorAll('.sta-header-bt_list > .sta-actual')).removeClass('sta-actual');
      e.parent().addClass('sta-actual');
    };

    //control fixed
    h.controlTop($(o));
  };
})(document.querySelector('.tpl-header-bt'), jQuery, hotusa())
