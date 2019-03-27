

$("#show").click(function() {
  let width = $("#mySidenav").width()
  let total = (width > 0) ? 0 : 250
  $("#show").toggleClass("change");
  $("#mySidenav").width(total.toString(), "px");
});


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


var slideHover = 1;
showSlides(slideHover);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideHover += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideHover = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideHover = 1
  }
  if (n < 1) {
    slideHover = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideHover - 1].style.display = "block";
  dots[slideHover - 1].className += " active";
}




// EMPIEZA SLIDER 2 Y 3

// var slideIndex = [1,1];
// /* Class the members of each slideshow group with different CSS classes */
// var slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);
//
// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }
//
// function showSlides(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }
