$("#show").click(function() {
  if ($(".sidenav").width() !== "0px") {
    $(".container").addClass("change");
    $(".sidenav").width('250px');

  }
  else {
    $(".container").toggleClass("change");
    $(".sidenav").width('0px');

  }

});




// $ ("#show").click(function(){
//  $(".container").addClass("change");
//  // $("#mySidenav").css('width', '250px')
// document.getElementById("mySidenav").style.width = "250px";
// });
//
//
//   $ ("#show").click(function(){
//    $(".container").toggleClass("change");
//   // $("#mySidenav").attr("style" "width: 0")
//   document.getElementById("mySidenav").style.width = "0px";
//   });


// $ (".change").click(function(){
//   console.log("kjkj");
//  $(".container").toggleClass("change");
// document.getElementById("mySidenav").style.width = "0";
// });

// function myFunction(x) {
//   document.getElementById("mySidenav").style.width = "250px";
//   x.classList.toggle("change");
// }
//
//
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
// }






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
