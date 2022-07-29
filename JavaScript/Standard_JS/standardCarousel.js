/*

    Welcome to Standard JS used for Nyp Astronomy webpage
    Here will be every JS used for all Astronomy webpages
    I. Structure 
    |
    ├─ 1.Carousel


*/

/* --------------------------------------------------------------------------
    1.Carousel
-------------------------------------------------------------------------- */
var slideIndex = 0; // set index
showSlides(); // calls function

function showSlides() { // function called show slides
  var i; // to iterate through
  var slides = document.getElementsByClassName("mySlides"); // looks for css class name, my slides
  var dots = document.getElementsByClassName("dot"); // looks for css classname dot
  for (i = 0; i < slides.length; i++) { // for loop to iterate through carousel
    slides[i].style.display = "none"; // hides the display
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} // resets the index
  for (i = 0; i < dots.length; i++) { // replaces dot with another class
    dots[i].className = dots[i].className.replace(" active", ""); //changes css to non active dot
  }
  slides[slideIndex-1].style.display = "block"; // the slide which isnt set to inactive is displayed
  dots[slideIndex-1].className += " active"; // the dot which isnt set to inactive is displayed
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}
