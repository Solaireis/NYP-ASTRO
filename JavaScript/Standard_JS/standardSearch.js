/*

    Welcome to Standard JS used for Nyp Astronomy webpage
    Here will be every JS used for all Astronomy webpages
    I. Structure
    |
    ├─ 1.Search Bar
    ├─ 2.Search page


*/

/* --------------------------------------------------------------------------
    1.Search Bar
-------------------------------------------------------------------------- */
function uSearch() { //shows the results
  document.getElementById("myDropdown").classList.toggle("show1"); // toggles show1
}

function filterFunction() { //filter function

  var input, filter, ul, li, a, i;


  input = document.getElementById("myInput");

  filter = input.value.toUpperCase();

  div = document.getElementById("myDropdown");

  a = div.getElementsByTagName("a");

  for (i = 0; i < a.length; i++) {  //for loop
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) { // index of searches for the string which has the first occurance, if found display
      a[i].style.display = "";



    }
    else {
      a[i].style.display = "none"; //else dont display
    }
  }


}

/* --------------------------------------------------------------------------
    2.Search page
-------------------------------------------------------------------------- */
function userSearch() { // user input data
	var uQuery=document.getElementById("myInput").value;
  sessionStorage.setItem("Query", uQuery);

}

function qResults(){ // retrieve data
  document.getElementById("myInput2").value = sessionStorage.getItem("Query");
}


/*
 Alternative Search Function
*/
function uSearch2() { // shows the results
  document.getElementById("myDropdown2").classList.toggle("show1");
}


function filterFunction2() { // search function for search page

  var input, filter, ul, li, a, i;


  input = document.getElementById("myInput2");

  filter = input.value.toUpperCase();

  div = document.getElementById("myDropdown2");

  a = div.getElementsByTagName("a");

  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) { // index of searches for the string which has the first occurance
      a[i].style.display = "";
      a[i].setAttribute("class","counter"); //adds counter class


    }
    else {
      a[i].style.display = "none";
      a[i].classList.remove("counter"); //removes counter class
    }
  }
  document.getElementById("results").innerText = document.getElementsByClassName("counter").length; // shows counter

}

window.addEventListener("load", qResults()); //loads page with this functions
window.addEventListener("load", uSearch2());
window.addEventListener("load", filterFunction2());
