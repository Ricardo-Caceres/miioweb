$("#show").click(function() {
  let width = $("#mySidenav").width()
  let total = (width > 0) ? 0 : 250
  $("#show").toggleClass("change");
  $("#mySidenav").animate({width:total.toString()+"px"},"fast");
});
//

  // $("#mySidenav").width(total.toString(), "px");

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

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
$('.close').click(function() {
      modal.style.display = "none";
      $('#modal-video').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $('#modal-video').each(function(){
      var el_src = $(this).attr("src");
      $(this).attr("src",el_src);
    });
  }
}


// EMPIEZA SLIDER 2 Y 3
var slideIndex = [1,1];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "flex";
}


$("#submit").click(function() {
alert("¡Muchas gracias por tu mensaje! Te daremos una respuesta en breve.");
});
