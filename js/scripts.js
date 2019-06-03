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
 
var openModalAviso = (function (o, $, h) {
  if (o) {

    var $o = $(o),
      $html = $('html');

    $('.sta-modal-key_cerrar', o).click(close);



    $($o).on("click",function(e) {
                    
      var container = $(".sta-modal-key_content");
         if (!container.is(e.target) && container.has(e.target).length === 0) { 
            close();
         }
  });


    function open() {
      $o.fadeIn(1e3);
      $html.addClass('sta-noScroll');
    }
    function close() {
      $o.fadeOut(1e3);
      $html.removeClass('sta-noScroll');
    }
    $('.fn-openModalAviso').click(open);
    return open;
  } else {
    return new Function;
  };
})(document.querySelector('.tpl-modal-key'), jQuery, hotusa()); 

var openModalPoli = (function (o, $, h) {
  if (o) {

    var $o = $(o),
      $html = $('html');

    $('.sta-modal-key_cerrar', o).click(close);


    $($o).on("click",function(e) {
                    
      var container = $(".sta-modal-key_content");
         if (!container.is(e.target) && container.has(e.target).length === 0) { 
            close();
         }
    });



    function open() {
      $o.fadeIn(1e3);
      $html.addClass('sta-noScroll');
    }
    function close() {
      $o.fadeOut(1e3);
      $html.removeClass('sta-noScroll');
    }
    $('.fn-openModalAviso').click(open);
    return open;
  } else {
    return new Function;
  };
})(document.querySelector('#aviso'), jQuery, hotusa()); 

var openModalCondi = (function (o, $, h) {
  if (o) {

    var $o = $(o),
      $html = $('html');

    $('.sta-modal-key_cerrar', o).click(close);


    $($o).on("click",function(e) {
                    
      var container = $(".sta-modal-key_content");
         if (!container.is(e.target) && container.has(e.target).length === 0) { 
            close();
         }
    });



    function open() {
      $o.fadeIn(1e3);
      $html.addClass('sta-noScroll');
    }
    function close() {
      $o.fadeOut(1e3);
      $html.removeClass('sta-noScroll');
    }
    $('.fn-openModalAviso').click(open);
    return open;
  } else {
    return new Function;
  };
})(document.querySelector('#condiciones'), jQuery, hotusa()); 

(function (o, $, h) {
  if(o){

    var _form = {
      $nombrehot : $('.sta-form-key_nombrehot',o),
      $direccion : $('.sta-form-key_direccion',o),
      $poblacion : $('.sta-form-key_poblacion',o),
      $codigo : $('.sta-form-key_codigo',o),
      $provincia : $('.sta-form-key_provincia',o),
      $pais : $('.sta-form-key_pais',o),
      $telefono : $('.sta-form-key_telef',o),
      $nombre : $('.sta-form-key_nombre',o),
      $apellidos : $('.sta-form-key_apellidos',o),
      $cargo : $('.sta-form-key_cargo',o),
      $email : $('.sta-form-key_email',o),
      $repemail : $('.sta-form-key_repemail',o),
      $politicas : $('.sta-form-key_politicas',o),
    },
    errores = {
      $cont : $('.sta-form-key_error',o),
      $conterror : $('.sta-form-key_ko',o),
      $contok : $('.sta-form-key_ok',o),
      $errellena : $('.sta-form-key_error-campos',o).val(),
      $ermail : $('.sta-form-key_error-mail',o).val(),
      $erremail : $('.sta-form-key_error-remail').val(),
      $erpolitic : $('.sta-form-key_error-politicas',o).val(),
      $erregistro : $('.sta-form-key_error-registro',o).val()

    }

    $('input[type=text]',o).change( function () {
      var _t = $(this);
      _t.val().trim() == '' ?
        _t.removeClass('sta-fill') :
        _t.addClass('sta-fill');
    });
    function validar(){
      var _boo = true,
      empty = true,
      mail = true,
      mail2 = true,
      poli = true;

    errores.$conterror.empty().parent().removeClass('sta-ok').removeClass('sta-ko');
      
      for (var key in _form) {
        var i = _form[key];
        if(i.val().trim() == ''){
          _form[key].parent().addClass('sta-ko');
          _boo = false;
          empty = false;
        }else{
          _form[key].parent().removeClass('sta-ko');
        }
      };

      if(!h.mail(_form.$email.val().trim())){
        _form.$email.parent().addClass('sta-ko');
        mail = false;
        _boo = false;
      }else{
        _form.$email.parent().removeClass('sta-ko');
      };

      if(!h.mail(_form.$email.val().trim()) || !h.mail(_form.$repemail.val().trim()) || _form.$email.val().trim() != _form.$repemail.val().trim()){
        _form.$repemail.parent().addClass('sta-ko');
        mail2 =false;
        _boo = false;
      }else{
        _form.$repemail.parent().removeClass('sta-ko');
      };

      if(!_form.$politicas.prop('checked')){
        _form.$politicas.parent().addClass('sta-ko');
        poli = false;
        _boo = false;
      }else{
        _form.$politicas.parent().removeClass('sta-ko')
      };
      
      if(!empty || !mail || !mail2 || !poli){
        errores.$cont.addClass('sta-ko')
        if(!empty){
          errores.$conterror.append(errores.$errellena + '<br />');
        }
        if(!mail){
          errores.$conterror.append(errores.$ermail + '<br />');
        }
        if(!mail2){
          errores.$conterror.append(errores.$erremail + '<br />');
        }
        if(!poli){
          errores.$conterror.append(errores.$erpolitic + '<br />');
        }
      }      

      return _boo;
    };

    $('.sta-form-key_form',o).submit(function(e){
      
      e.preventDefault();
      if( validar() ){
        errores.$cont.removeClass('sta-ko')
        errores.$cont.addClass('sta-ok')

        console.log('enviar')
      }
    });

  }
 })(document.querySelector('.tpl-form-key'), jQuery, hotusa());

 (function (o, $, h) {
  if(o){    

    var _form = {
      $nombre : $('.sta-nombre',o),
      $empresa : $('.sta-empresa',o),
      $cargo : $('.sta-cargo',o),
      $dpto : $('.sta-dpto',o),
      $asunto : $('.sta-asunto',o),
      $politica : $('.sta-politica',o)
    },
    errores = {
      $cont : $('.sta-contactForm-key_error',o),
      $conterror : $('.sta-contactForm-key_ko',o),
      $contok : $('.sta-contactForm-key_ok',o),
      $errellena : $('.sta-contactForm-key_error-campos',o).val(),
      $ermail : $('.sta-contactForm-key_error-mail',o).val(),
      $erremail : $('.sta-contactForm-key_error-remail',o).val(),
      $erpolitic : $('.sta-contactForm-key_error-politicas',o).val(),
      $erregistro : $('.sta-contactForm-key_error-registro',o).val()
    };
    
    function validar(){
      var _boo = true,
      select = true,
      empty = true,
      poli = true;
      
    errores.$conterror.empty().parent().removeClass('sta-ok').removeClass('sta-ko');
      
      for (var key in _form) {
        var i = _form[key];
        if(i.val().trim() == ''){
          _form[key].parent().addClass('sta-ko');
          _boo = false;
          empty = false;
        }else{
          _form[key].parent().removeClass('sta-ko');
        }
      };

      if(_form.$dpto.val() == ''){
        _form.$dpto.parent().addClass('sta-ko');
        select = false;
        _boo = false;
      }else{
        _form.$dpto.parent().removeClass('sta-ko');
      }

      if(_form.$asunto.val() == ''){
        _form.$asunto.parent().addClass('sta-ko');
        _boo = false;
      }else{
        _form.$asunto.parent().removeClass('sta-ko');
      }

      if(!_form.$politica.prop('checked')){
        _form.$politica.siblings().addClass('sta-ko');
        poli = false;
        _boo = false;
      }else{
        _form.$politica.siblings().removeClass('sta-ko');
      };
      
      if(!empty || !poli){
        errores.$cont.addClass('sta-ko');
        if(!empty){
          errores.$conterror.append(errores.$errellena + '<br />');
        }
       
        if(!poli){
          errores.$conterror.append(errores.$erpolitic + '<br />');
        }
      }
      return _boo;
    };

    $('.sta-contactForm-key_form',o).submit(function(e){

      e.preventDefault();
      if( validar() ){
        errores.$cont.removeClass('sta-ko');
        errores.$cont.addClass('sta-ok');

        console.log('enviar')
      }
    });

  }
 })(document.querySelector('.tpl-contactForm-key'), jQuery, hotusa());


