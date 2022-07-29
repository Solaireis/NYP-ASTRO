/*

    Welcome to Standard JS used for Nyp Astronomy webpage
    Here will be every JS used for all Astronomy webpages
    I. Structure 
    |
    ├─ 1.Accordian


*/

/* --------------------------------------------------------------------------
    1.Accordian
-------------------------------------------------------------------------- */

var acc = document.getElementsByClassName("accordionButton"); //var to declare button
var i; // counter though unecesary

for (i = 0; i < acc.length; i++) {  // for loop
  acc[i].addEventListener("click", function() {  // event listener waiting for user to click
    this.classList.toggle("activeButton");  // toggles this class *note find this in standard.css
    var panel = this.nextElementSibling; // panel is basically the "container" holding the content, changes depending on which panel i clicked
    if (panel.style.maxHeight) {  // if i set a max height this will set a maximum height
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
