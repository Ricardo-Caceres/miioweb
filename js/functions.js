$(document).ready(function() {
  console.log("ready!");


  const enviar = () => {
    const nombre = $('#nombre').val(),
      asunto = $('#asunto').val(),
      correo = $('#email').val(),
      numero = $('#numero').val(),
      comentarios = $('#comentarios').val()


    var data = new Object({
      nombre,
      asunto,
      correo,
      numero,
      comentarios
    })
    // console.log(nombre);
    // console.log(asunto);
    // console.log(correo);
    // console.log(comentarios);
    request = $.ajax({
      url: "enviar.php",
      type: "POST",
      dataType: 'json',
      crossDomain: true,
      data: data
    });

    request.done((data) => {
      const res = (data == 1) ?
        'El correo ha sido enviado satisfactoriamente' :
        'Hubo un error al mandar el correo';
      console.log(res);
      alert(res)
    })

    request.fail((error) => {
      alert("Error, intentalo mas tarde");
    })
  }

  $("#submit").click(function(e) {
    e.preventDefault();
    enviar()
  });

  // $("#show").click(function() {
  //   let width = $("#mySidenav").width()
  //   let total = (width > 0) ? 0 : 250
  //   $("#show").toggleClass("change");
  //   $("#mySidenav").animate({
  //     width: total.toString() + "px"
  //   }, "fast");
  // });


  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  $("#vermas, #vermas-1").click(function() {
    $('html, body').animate({
      scrollTop: $("#section").offset().top + (-80)
    }, 1000);
  });

  $( "#left" ).hide();
  $( "#right" ).hide();

  $(window).scroll(function() {
    if ($(window).scrollTop() > 700 && $(window).scrollTop() < 1900) {
      $("#left").fadeIn(100);
      $("#right").fadeIn(100);
    } else {
      $("#left").fadeOut(100);
      $("#right").fadeOut(100);
    }
  });


});
