//
// var slideOne = 1;
// showSlider(slideOne);
//
// function plusSlider(p) {
//   showSlider(slideOne += p);
// }
//
// function currentSlider(p) {
//   showSlider(slideOne = p);
// }
//
// function showSlider(p) {
//   var i;
//   var slides = document.getElementsByClassName("mySlider");
//   var dots = document.getElementsByClassName("dot");
//   if (p > slides.length) {slideOne = 1}
//     if (p < 1) {slideOne = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//   slides[slideOne-1].style.display = "block";
//   dots[slideOne-1].className += " active";
// }


var mc = new Hammer.Manager(document.getElementById("main-slider"));
mc.add(new Hammer.Swipe({
  direction: Hammer.DIRECTION_HORIZONTAL
}));

mc.on('swipeleft', function () {

$("#flecha_left").click();

});

mc.on('swiperight', function () {

$("#flecha_right").click();

});
