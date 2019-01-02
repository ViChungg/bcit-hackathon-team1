var edupopup = document.getElementById('educationPopup');
var fitpopup = document.getElementById('fitnessPopup');
var healthpopup = document.getElementById('healthPopup');

var btn1 = document.getElementById("education");
var btn2 = document.getElementById("fitness");
var btn3 = document.getElementById("health");

var edusubmit = document.getElementById("edusubmit");
var fitsubmit = document.getElementById("fitsubmit");
var healthsubmit = document.getElementById("healthsubmit");

var eduspan = document.getElementById("closeeducation");
var fitspan = document.getElementById("closefit");
var healthspan = document.getElementById("closehealth");

/*Reveals the add task page*/
btn1.onclick = function () {
  edupopup.style.display = "block";
}

btn2.onclick = function() {
  fitpopup.style.display = "block";
}

btn3.onclick = function() {
  healthpopup.style.display = "block";
}

/*Closes the task page*/
eduspan.onclick = function() {
  edupopup.style.display = "none";
}

fitspan.onclick = function() {
  fitpopup.style.display = "none";
}

healthspan.onclick = function() {
  healthpopup.style.display = "none";
}

/*Closes the task page when submitting*/

edusubmit.onclick = function() {
  edupopup.style.display = "none";
}

fitsubmit.onclick = function() {
  fitpopup.style.display = "none";
}

healthsubmit.onclick = function() {
  healthpopup.style.display = "none";
}

/*Closes the task page when clicking outside window*/
window.onclick = function(event) {
  if (event.target == edupopup) {
    edupopup.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == fitpopup) {
    fitpopup.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == healthpopup) {
    healthpopup.style.display = "none";
  }
}