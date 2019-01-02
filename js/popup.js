var popup = document.getElementById('popup1');

var btn1 = document.getElementById("educationButton");
var btn2 = document.getElementById("fitnessButton");
var btn3 = document.getElementById("healthButton");

var span = document.getElementsByClassName("close")[0];

btn1.onclick = function () {
  popup.style.display = "block";
}

btn2.onclick = function() {
  popup.style.display = "block";
}

btn3.onclick = function() {
  popup.style.display = "block";
}

span.onclick = function() {
  popup.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}