$(document).ready(function() {
  console.log("ready!");


  const enviar = () => {
    const nombre = $('#nombre').val(),
      asunto = $('#asunto').val(),
      correo = $('#email').val(),
      comentarios = $('#comentarios').val()


    var data = new Object({
      nombre,
      asunto,
      correo,
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

  $("#show").click(function() {
    let width = $("#mySidenav").width()
    let total = (width > 0) ? 0 : 250
    $("#show").toggleClass("change");
    $("#mySidenav").animate({
      width: total.toString() + "px"
    }, "fast");
  });
  //

  // $("#mySidenav").width(total.toString(), "px");

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


  // Get the modal
  var modalMiio = document.getElementById('myModal-form-miio');
  var hcuenta = document.getElementById('cuenta');
  var htarjeta = document.getElementById('tarjeta');
  var hchip = document.getElementById('chip');
  var formMiio = document.getElementById('cuenta-m');
  var formTarjeta = document.getElementById('tarjeta-m');
  var formChip = document.getElementById('chip-m');

  // Get the button that opens the modal
  var btnMiio = document.getElementById("myBtn-1");
  var btnTarjeta = document.getElementById("myBtn-2");
  var btnTelefonia = document.getElementById("myBtn-3");

  // Get the <span> element that closes the modal
  var spanMiio = document.getElementsByClassName("close-miio")[0];

  // When the user clicks on the button, open the modal
  btnMiio.onclick = function() {
    modalMiio.style.display = "block";
    hcuenta.style.display = "block";
    // formMiio.style.display = "block";
    htarjeta.style.display = "none";
    hchip.style.display = "none";
    // formTarjeta.style.display = "none";
    // formChip.style.display = "none";
    document.getElementById("asunto").value = "SOLICITUD DE CUENTA";
  }

  btnTarjeta.onclick = function() {
    modalMiio.style.display = "block";
    htarjeta.style.display = "block";
    // formTarjeta.style.display = "block";
    hcuenta.style.display = "none";
    hchip.style.display = "none";
    // formMiio.style.display = "none";
    // formChip.style.display = "none
    document.getElementById("asunto").value = "SOLICITUD DE TARJETA";
  }

  btnTelefonia.onclick = function() {
    modalMiio.style.display = "block";
    hchip.style.display = "block";
    // formChip.style.display = "block";
    htarjeta.style.display = "none";
    hcuenta.style.display = "none";
    // formTarjeta.style.display = "none";
    // formMiio.style.display = "none";
    document.getElementById("asunto").value = "SOLICITUD DE TELEFONIA";
  }

  var btncuentaMiio = document.getElementById("myBtn-11");
  var btntarjetaMiio = document.getElementById("myBtn-21");
  var btntelefoniaMiio = document.getElementById("myBtn-31");

  btncuentaMiio.onclick = function() {
    modalMiio.style.display = "block";
    hcuenta.style.display = "block";
    // formMiio.style.display = "block";
    htarjeta.style.display = "none";
    hchip.style.display = "none";
    // formTarjeta.style.display = "none";
    // formChip.style.display = "none";
    document.getElementById("asunto").value = "SOLICITUD DE CUENTA";
  }

  btntarjetaMiio.onclick = function() {
    modalMiio.style.display = "block";
    htarjeta.style.display = "block";
    // formTarjeta.style.display = "block";
    hcuenta.style.display = "none";
    hchip.style.display = "none";
    // formMiio.style.display = "none";
    // formChip.style.display = "none
    document.getElementById("asunto").value = "SOLICITUD DE TARJETA";
  }

  btntelefoniaMiio.onclick = function() {
    modalMiio.style.display = "block";
    hchip.style.display = "block";
    // formChip.style.display = "block";
    htarjeta.style.display = "none";
    hcuenta.style.display = "none";
    // formTarjeta.style.display = "none";
    // formMiio.style.display = "none";
    document.getElementById("asunto").value = "SOLICITUD DE TELEFONIA";
  }

  // When the user clicks on <span> (x), close the modal
  spanMiio.onclick = function() {
    modalMiio.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modalMiio) {
      modalMiio.style.display = "none";
    }
  };






  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    $('#modal-video').each(function() {
      var el_src = $(this).attr("src");
      $(this).attr("src", el_src);
    });
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $('#modal-video').each(function() {
        var el_src = $(this).attr("src");
        $(this).attr("src", el_src);
      });
    }
  };




  $("#comentarios").focus(function() {
    $("#comentarios").val("+52");
    $("#comentarios").unbind();
  });

  // $("#celular-tarjeta").focus(function() {
  //   $("#celular-tarjeta").val("+52");
  //   $("#celular-tarjeta").unbind();
  // });
  //
  // $("#celular-telefonia").focus(function() {
  //   $("#celular-telefonia").val("+52");
  //   $("#celular-telefonia").unbind();
  // });

});
