/*

    Welcome to Standard JS used for Nyp Astronomy webpage
    Here will be every JS used for all Astronomy webpages
    I. Structure
    |
    ├─ 1.forms


*/

/* --------------------------------------------------------------------------
    1.forms
-------------------------------------------------------------------------- */
function userForm(){ // the function to hold user data
	var uName=document.getElementById("username").value; // collects name
	var uEmail=document.getElementById("email").value; // collects email
  var uSubj= document.getElementById("subject").value; //collects subj
	var uMsg = document.getElementById("message").value; // collects msg
  sessionStorage.setItem("Name", uName); // create object name, with name attached
  sessionStorage.setItem("Email", uEmail); // create object email, with email attached
  sessionStorage.setItem("Subject", uSubj); // create object subject, with subject value attached
  sessionStorage.setItem("Message", uMsg); // creates message object, with message attached
}

function formResults(){ // function to call out the saved session storage
  document.getElementById("name").innerText = sessionStorage.getItem("Name"); //retrieves the data puts in the id inner test
  document.getElementById("email").innerText = sessionStorage.getItem("Email"); // retrieves data puts in id inner text
  document.getElementById("subj").innerText = sessionStorage.getItem("Subject");
	//retrieves data puts in id inner text
  document.getElementById("msg").innerText = sessionStorage.getItem("Message");
	//retrieves data puts in id inner text
}
window.addEventListener("load", formResults());
// i use session storage as its better, i dont have to clear the localstorage
