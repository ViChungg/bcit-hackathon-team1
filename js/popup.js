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

/*Reveals the add task page*/
btn1.onclick = function () {
  edupopup.style.display = "block";
	containerElement.setAttribute('class', 'blur');
}

btn2.onclick = function() {
  fitpopup.style.display = "block";
	containerElement.setAttribute('class', 'blur');
}

btn3.onclick = function() {
  healthpopup.style.display = "block";
	containerElement.setAttribute('class', 'blur');
}

/*Closes the task page*/
eduspan.onclick = function() {
  edupopup.style.display = "none";
	containerElement.setAttribute('class', null);
}

fitspan.onclick = function() {
  fitpopup.style.display = "none";
	containerElement.setAttribute('class', null);
}

healthspan.onclick = function() {
  healthpopup.style.display = "none";
	containerElement.setAttribute('class', null);
}

/*Closes the task page when submitting*/

edusubmit.onclick = function() {
  edupopup.style.display = "none";
	containerElement.setAttribute('class', null);
  
  var eduEventName = $("#eduTask").val();
  var eduDate = $("#eduDate").val();
  
  // userId firebase reference
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref("users/" + userId + "/tasks").push({
    "task": eduEventName,
    "date": eduDate,
    "type": "1",
    "status": false,
  });

  alert('success');

}

fitsubmit.onclick = function() {
  fitpopup.style.display = "none";
	containerElement.setAttribute('class', null);

  var fitEventName = $("#fitTask").val();
  var fitDate = $("#fitDate").val();

  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref("users/" + userId + "/tasks").push({
    "task": fitEventName,
    "date": fitDate,
    "type": "2",
    "status": false,
  });

  alert('success');

}

healthsubmit.onclick = function() {
  healthpopup.style.display = "none";

	containerElement.setAttribute('class', null);

  var healthEventName = $("#healthTask").val();
  var healthDate = $("#healthDate").val();
  
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref("users/" + userId + "/tasks").push({
    "task": healthEventName,
    "date": healthDate,
    "type": "3",
    "status": false,
  });

  alert('success');

}

/*Closes the task page when clicking outside window*/
document.onclick = function(event) {
  if (event.target == edupopup) {
    edupopup.style.display = "none";
	  containerElement.setAttribute('class', null);
  }

  if (event.target == fitpopup) {
    fitpopup.style.display = "none";
	  containerElement.setAttribute('class', null);
  }

  if (event.target == healthpopup) {
    healthpopup.style.display = "none";
	  containerElement.setAttribute('class', null);
  }
}

document.getElementById("log-out").onclick = function () {
  firebase.auth().signOut();
  location.href = "./login.html";
}