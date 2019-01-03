/* Draw tree */
var canvas = document.getElementById('myTree');
var ctx = canvas.getContext('2d');
var eduPoints;
var fitPoints;
var healthPoints;

/* Education leaves */
var eduLeaves = new Image();
eduLeaves.src = '../img/eduleaves.png'

/* Fitness Leaves */
var fitLeaves = new Image();
fitLeaves.src = '../img/fitnessleaves.png';

/* Health leaves */
var healthLeaves = new Image();
healthLeaves.src = '../img/leaves.svg';

firebase.auth().onAuthStateChanged(function (user) {
	var eduRef = firebase.database().ref('users/' + user.uid + '/eduPoints');
	var fitRef = firebase.database().ref('users/' + user.uid + '/fitPoints');
	var healthRef = firebase.database().ref('users/' + user.uid + '/healthPoints');

	/* Loads education leaves */
	eduRef.once('value').then(function(snap) {
		eduPoints = parseInt(snap.val());
		getPoints(eduPoints, 'education');
		if (eduPoints == 1) {
			ctx.drawImage(eduLeaves, 90, 295);
		} else if (eduPoints == 2) {
			ctx.drawImage(eduLeaves, 90, 295);
			ctx.drawImage(eduLeaves, 134, 369);
		} else if (eduPoints >= 3) {
			ctx.drawImage(eduLeaves, 90, 295);
			ctx.drawImage(eduLeaves, 134, 369);
			ctx.drawImage(eduLeaves, 175, 295);
		}
	});

	/* loads fitness leaves */
	fitRef.once('value', function(snap) {
		fitPoints = parseInt(snap.val());
		getPoints(fitPoints, 'fitness');
		if (fitPoints == 1) {
			ctx.drawImage(fitLeaves, 450, 180);
		} else if (fitPoints == 2) {
			ctx.drawImage(fitLeaves, 450, 180);
			ctx.drawImage(fitLeaves, 365, 182);
		} else if (fitPoints >= 3) {
			ctx.drawImage(fitLeaves, 450, 180);
			ctx.drawImage(fitLeaves, 365, 182);
			ctx.drawImage(fitLeaves, 408, 255);
		}
		
	});

	/* loads health leaves */
	healthRef.once('value', function(snap) {
		healthPoints = parseInt(snap.val());
		getPoints(healthPoints, 'health');
		if (healthPoints == 1) {
			ctx.drawImage(healthLeaves, 265, 50);
		} else if (healthPoints == 2) {
			ctx.drawImage(healthLeaves, 265, 50);	
			ctx.drawImage(healthLeaves, 222, 112);
		} else if (healthPoints >= 3) {
			ctx.drawImage(healthLeaves, 265, 35);
			ctx.drawImage(healthLeaves, 222, 105);
			ctx.drawImage(healthLeaves, 309, 105);
		}

	});
})

/* Tree base */
var baseTree = new Image();
baseTree.onload = function() {
  ctx.drawImage(baseTree, 0, 0);
};
baseTree.src = '../img/main-tree.svg';

function getPoints(points, type) {
	var eduDiv = document.getElementById("eduPoints");
	var fitDiv = document.getElementById("fitPoints");
	var hDiv = document.getElementById("healthPoints");
	if (type == 'education') {
		eduDiv.innerHTML = points;
	} else if (type == 'fitness') {
		fitDiv.innerHTML = points;
	} else if (type == 'health') {
		hDiv.innerHTML = points;
	}
	
}

