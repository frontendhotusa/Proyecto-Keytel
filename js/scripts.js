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
})(document.querySelector('.tpl-header-key'), jQuery, hotusa());




(function (o, $, h) {
  if(o){
     function nameFind(url) {
       var aSrc = url.split("/");
       return aSrc[ aSrc.length - 1 ];
     };
     function cargarImg(b,_c){
       var img = new Image();
       img.src = b;
       img.onload = function(){
         _c
           ? $pGaleria.append( $("<div></div>",{class:"sta-cabecera-key_imgActual",style:"background-image:url('"+this.src+"')"}) )
           : $("<div></div>",{class:"sta-cabecera-key_imgActual",style:"background-image:url('"+this.src+"');display:none"}).appendTo( $pGaleria ).fadeIn(1e3, function () {
               $(this).siblings().remove();
             });
         if ( fotos.length > 1) {
           _cont++;
           if (!fotos[_cont]) _cont=0;

           setTimeout(function () {
             cargarImg(fotos[_cont]);
           },5e3);
         };
       };
       img.onerror = function(){
         var rem = nameFind(this.src);
         fotos.splice(fotos.findIndex(function(e){
           return nameFind(e) == rem
         }),1);
         if (!fotos[_cont]) _cont = 0;
         if(fotos.length) cargarImg(fotos[_cont],_c);
       };
     };

     var $o = $(o),
     $pGaleria = $(o.querySelector(".sta-cabecera-key_galeria")),
     _cont = 0,
     fotos = ["images/fondo-cabecera-slide-1.jpg","images/fondo-cabecera-slide-2.jpg","images/fondo-cabecera-slide-3.jpg","images/fondo-cabecera-slide-4.jpg","images/fondo-cabecera-slide-5.jpg","images/fondo-cabecera-slide-6.jpg","images/fondo-cabecera-slide-7.jpg","images/fondo-cabecera-slide-8.jpg","images/fondo-cabecera-slide-9.jpg"];

     cargarImg(fotos[_cont],true);
  }
 })(document.querySelector('.tpl-cabecera-key'), jQuery, hotusa());









 
var openModalAviso = (function(o,$,h){
  if(o){

  var $o = $(o),
  $html = $('html');

  $('.sta-modal-key_cerrar', o).click(close);

  function open(){
  $o.fadeIn(1e3);
  $html.addClass('sta-noScroll');
  }
  function close(){
  $o.fadeOut(1e3);
  $html.removeClass('sta-noScroll');
  }
  $('.fn-openModalAviso').click(open);
  return open;
  } else {
  return new Function;
  };
})(document.querySelector('.tpl-modal-key'), jQuery, hotusa()); 






(function (o, $, h) {
  if(o){

    

    var _form = {
      $nombrehot : $('.sta-form-key_nombrehot'),
      $direccion : $('.sta-form-key_direccion'),
      $poblacion : $('.sta-form-key_poblacion'),
      $codigo : $('.sta-form-key_codigo'),
      $provincia : $('.sta-form-key_provincia'),
      $pais : $('.sta-form-key_pais'),
      $telefono : $('.sta-form-key_telef'),
      $nombre : $('.sta-form-key_nombre'),
      $apellidos : $('.sta-form-key_apellidos'),
      $cargo : $('.sta-form-key_cargo'),
      $email : $('.sta-form-key_email'),
      $repemail : $('.sta-form-key_repemail')
    },
    contr = [],
    valid = 1,
    mail = 0,
    remail = 0;
    $('input[type=text]',o).change( function () {
      var _t = $(this);
      _t.val().trim() == '' ?
        _t.removeClass('sta-fill') :
        _t.addClass('sta-fill');
    });
    function validar(){
      
      for (var key in _form) {
        var i = _form[key],
        e = 0;
        
        if(i.val().trim() == ''){
          _form[key].parent().addClass('sta-ko');
          contr.push('0');
        }else{
          _form[key].parent().removeClass('sta-ko');
          contr.push('1');
        }
      };

      if(!h.mail(_form.$email.val().trim())){
        _form.$email.parent().addClass('sta-ko');
        mail = 0;
      }else{
        _form.$email.parent().removeClass('sta-ko');
        mail = 1;
      };
      if(!h.mail(_form.$email.val().trim()) || !h.mail(_form.$repemail.val().trim()) || _form.$email.val().trim() != _form.$repemail.val().trim()){
        _form.$repemail.parent().addClass('sta-ko');
        remail=0;
      }else{
        _form.$repemail.parent().removeClass('sta-ko');
        remail=1;
      };
      e++
      if(contr[e] == '0'){
        valid = 0;
      };


    };
    $('.sta-form-key_enviar').click(function(){
      contr = [],
      
      validar();
      if(valid && remail && mail){
        console.log('enviar')
      }else{
        console.log('ERROR')
        valid = 1;
      }
    });

  }
 })(document.querySelector('.tpl-form-key'), jQuery, hotusa());

