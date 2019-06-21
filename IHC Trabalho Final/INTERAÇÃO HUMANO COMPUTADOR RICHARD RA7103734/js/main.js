// Side Menu
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});

    // Slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });

    // Scrollspy
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});

    // Material Boxed
    const mb = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(mb, {});

    // Auto Complete
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
          "Hamburger": null,
          "Pizza": null,
          "Feijoada": null,
          "Sorvete": null,
          "Café": null,
          "Massa": null,
          "Lasanha": null,
          "Chocolate": null,
          "Filé de Frango à Milenesa": null,
          "Pudim": null,
          "Comida Japonesa": null,
          "MC Donalds": null,
          "Burger King": null,
          "Madeiro": null,
          "Tradi": null,
          "Burger Map": null,
          "Vivano": null,
          "Lasanha": null,
          "Chocolate": null,
          "Podim": null,
          "Comida Japonesa": null,
        },
        onAutocomplete: function(txt) {
          console.log(txt);
          switch (txt) {
            case 'MC Donalds':
              var win = window.open('https://www.mcdonalds.com.br', '_blank');
              win.focus();
              break;
            default:

          }
        },
      });


$( document ).ready(function() {

  var SPMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  spOptions = {
    onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
      }
  };
  $('#form-contato #phone').mask(SPMaskBehavior, spOptions);

  $("#mobile-demo > li").on("click", function(e){
    $(".sidenav-overlay").trigger("click");
  });

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function validaNome(){
    var nameTxt = $('#form-contato #name').val();
    if(nameTxt.length < 5){
      return false;
    }
    if($.isNumeric( nameTxt )){
      return false;
    }
    return true;
  }

  function validaEmail(){
    var emailTxt = $('#form-contato #email').val();
    if(!isEmail(emailTxt)){
      return false;
    }
    return true;
  }

  function validaTel(){
    var phoneTxt = $('#form-contato #phone').val();
    if(phoneTxt.length < 14){
      return false;
    }
    return true;
  }

  function validaMenssage(){
    var messageTxt = $('#form-contato #message').val();
    if(messageTxt.length < 5){
      return false;
    }
    return true;
  }

  function actions(){
    if(validaNome() && validaEmail() && validaTel() && validaMenssage()){
      $('#form-contato .btn').removeAttr('disabled');
    }else{
      $('#form-contato .btn').attr('disabled','disabled');
    }
  }

  $('#form-contato input').on('change', function(){
    actions();
  })
  $('#form-contato textarea').on('change', function(){
    actions();
  })


  $('#form-contato #name').on('keypress', function(){
    setTimeout(function(){
      if(!validaNome()){
        $('#form-contato #name').parents('.input-field').find('.error').attr('style','display:block');
      }else{
        $('#form-contato #name').parents('.input-field').find('.error').attr('style','display:none');
      }
    }, 1000);
  })
  $('#form-contato #email').on('keypress', function(){
    setTimeout(function(){
      if(!validaEmail()){
        $('#form-contato #email').parents('.input-field').find('.error').attr('style','display:block');
      }else{
        $('#form-contato #email').parents('.input-field').find('.error').attr('style','display:none');
      }
    }, 1000);
  })
  $('#form-contato #phone').on('keypress', function(){
    setTimeout(function(){
      if(!validaTel()){
        $('#form-contato #phone').parents('.input-field').find('.error').attr('style','display:block');
      }else{
        $('#form-contato #phone').parents('.input-field').find('.error').attr('style','display:none');
      }
    }, 1000);
  })
  $('#form-contato #message').on('keypress', function(){
    setTimeout(function(){
      if(!validaMenssage()){
        $('#form-contato #message').parents('.input-field').find('.error').attr('style','display:block');
      }else{
        $('#form-contato #message').parents('.input-field').find('.error').attr('style','display:none');
      }
    }, 1000);
    actions();
  })
});

document.getElementById("form-contato").addEventListener("submit", function(event){
  event.preventDefault();
  swal({
    title: "Mensagem Enviada!",
    text: "Sucesso!",
  });
});
