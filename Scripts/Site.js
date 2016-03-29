$(document).ready(function(e){
  $('#Home').hide();
  $('#Nosotros').hide();
  $('#Otros').hide();
  $('#Aviso').hide();

  alert('Si funciona');
  $('#menu1').on('click',function(){
    $('#Home').show('slow');
    $('#Nosotros').hide();
    $('#Otros').hide();
    $('#Aviso').hide();
  });

  $('#menu2').on('click',function(){
    $('#Nosotros').show('slow');
    $('#Otros').hide();
    $('#Home').hide();
    $('#Aviso').hide();
  });

  $('#menu3').on('click',function(){
    $('#Otros').show('slow');
    $('#Nosotros').hide();
    $('#Home').hide();
    $('#Aviso').hide();
  });

  $('#menu4').on('click',function(){
    $('#Aviso').show('slow');
    $('#Nosotros').hide();
    $('#Home').hide();
    $('#Otros').hide();
  });
});
