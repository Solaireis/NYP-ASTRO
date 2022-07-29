/*

    Welcome to Standard JS used for Nyp Astronomy webpage
    Here will be every JS used for all Astronomy webpages
    I. Structure of standard.js
    |
    ├─ 1.Get Back to Top


*/

/* --------------------------------------------------------------------------
    1.Get back to top
-------------------------------------------------------------------------- */


/* Button Js */
var mybutton = document.getElementById("GBTT"); // looks for Id GBTT
window.onscroll = function() {scrollFunction()}; // when user scroll use function

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
  mybutton.style.display = "block";  // checks whether scrolling is at 1000px
}  // if scrolling is >1000px show button
  else {
  mybutton.style.display = "none";  //hides button
  }
}

function topFunction() {  // moves user back to top
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
