/*

    Welcome to Standard JS used for Nyp Astronomy webpage
    Here will be every JS used for all Astronomy webpages
    I. Structure 
    |
    ├─ 1.Random Generator


*/

/* --------------------------------------------------------------------------
    1.random gen
-------------------------------------------------------------------------- */
const imgs = [ // array to declare the imgs ill be using
  "1997img1",
  "1997img2",
  "1997img3",
  "1997img4",
  "1997img5",
  "1997img6",
  "1997img7",
  "1997img8"
]
function imgGen(){ //random generator function
    var index=Math.floor(Math.random() * (imgs.length-1))+1;
    document.getElementById("imgRanGen").src = "../Multimedia/images/timeMachine/" + imgs[index] + ".jpeg";
}
window.addEventListener("load", imgGen());
