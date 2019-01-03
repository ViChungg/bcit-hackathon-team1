var edupopup = document.getElementById('educationPopup');
var fitpopup = document.getElementById('fitnessPopup');
var healthpopup = document.getElementById('healthPopup');

var btn1 = document.getElementById("education");
var btn2 = document.getElementById("fitness");
var btn3 = document.getElementById("health");

var containerElement = document.getElementById('content');

var edusubmit = document.getElementById("edusubmit");
var fitsubmit = document.getElementById("fitsubmit");
var healthsubmit = document.getElementById("healthsubmit");

var eduspan = document.getElementById("closeeducation");
var fitspan = document.getElementById("closefit");
var healthspan = document.getElementById("closehealth");

function openBlur() {
  $("#content, #header, #footer").css("-webkit-animation", "image_blur 1s");
  $("#content, #header, #footer").css("filter", "blur(15px)");
}

function closeBlur() {
  $("#content, #header, #footer").css("-webkit-animation", "image_blur_reverse 1s");
  $("#content, #header, #footer").css("filter", "blur(0px)");
}

/*Reveals the add task page*/
btn1.onclick = function () {
  edupopup.style.visibility = "visible";
  edupopup.style.opacity = "1";
  openBlur();
}

btn2.onclick = function () {
  fitpopup.style.visibility = "visible";
  fitpopup.style.opacity = "1";
  openBlur();
}

btn3.onclick = function () {
  healthpopup.style.visibility = "visible";
  healthpopup.style.opacity = "1";
  openBlur();

}

/*Closes the task page*/
eduspan.onclick = function () {
  edupopup.style.opacity = "0";
  edupopup.style.visibility = "hidden";
  closeBlur();
}

fitspan.onclick = function () {
  fitpopup.style.opacity = "0";
  fitpopup.style.visibility = "hidden";
  closeBlur();
}

healthspan.onclick = function () {
  healthpopup.style.opacity = "0";
  healthpopup.style.visibility = "hidden";
  closeBlur();
}

/*Closes the task page when submitting*/

edusubmit.onclick = function () {
  edupopup.style.opacity = "0";
  edupopup.style.visibility = "hidden";
  containerElement.setAttribute('class', null);

  var eduEventName = $("#eduTask").val();
  var eduDate = $("#eduDate").val();
  var dateObj = new Date(eduDate);
  var dateNum = dateObj.toISOString().substring(0, 10).replace(/-/g, "");

  // userId firebase reference
  var userId = firebase.auth().currentUser.uid;
  var newPostKey = dateNum + firebase.database().ref().child('tasks').push().key;

  firebase.database().ref("users/" + userId + "/tasks/" + newPostKey).update({
    "task": eduEventName,
    "date": eduDate,
    "type": "1",
    "status": false,
  })

  location.reload();
}

fitsubmit.onclick = function () {
  fitpopup.style.opacity = "0";
  fitpopup.style.visibility = "hidden";
  containerElement.setAttribute('class', null);

  var fitEventName = $("#fitTask").val();
  var fitDate = $("#fitDate").val();
  var dateObj = new Date(fitDate);
  var dateNum = dateObj.toISOString().substring(0, 10).replace(/-/g, "");

  // userId firebase reference
  var userId = firebase.auth().currentUser.uid;
  var newPostKey = dateNum + firebase.database().ref().child('tasks').push().key;

  firebase.database().ref("users/" + userId + "/tasks/" + newPostKey).update({
    "task": fitEventName,
    "date": fitDate,
    "type": "2",
    "status": false,
  })

  location.reload();

}

healthsubmit.onclick = function () {
  healthpopup.style.opacity = "0";
  healthpopup.style.visibility = "hidden";

  containerElement.setAttribute('class', null);

  var healthEventName = $("#healthTask").val();
  var healthDate = $("#healthDate").val();
  var dateObj = new Date(healthDate);
  var dateNum = dateObj.toISOString().substring(0, 10).replace(/-/g, "");

  // userId firebase reference
  var userId = firebase.auth().currentUser.uid;
  var newPostKey = dateNum + firebase.database().ref().child('tasks').push().key;

  firebase.database().ref("users/" + userId + "/tasks/" + newPostKey).update({
    "task": healthEventName,
    "date": healthDate,
    "type": "3",
    "status": false,
  })

  location.reload();

}

/*Closes the task page when clicking outside window*/
document.onclick = function (event) {
  if (event.target == edupopup) {
    edupopup.style.opacity = "0";
    edupopup.style.visibility = "hidden";
    closeBlur();
  }

  if (event.target == fitpopup) {
    fitpopup.style.opacity = "0";
    fitpopup.style.visibility = "hidden";
    closeBlur();
  }

  if (event.target == healthpopup) {
    healthpopup.style.opacity = "0";
    healthpopup.style.visibility = "hidden";
    closeBlur();
  }
}

document.getElementById("log-out").onclick = function () {

  firebase.auth().signOut();
  location.href = "./login.html";
}

document.getElementById("growthlogo").onclick = function () {
  location.reload();
};

var tree = document.getElementById("tree");
var counter = document.getElementById("counter");

tree.addEventListener("mouseover", mouseOver);
tree.addEventListener("mouseout", mouseOut);

function mouseOver() {
  counter.style.display = "block";
}

function mouseOut(){
  counter.style.display = "none";
}