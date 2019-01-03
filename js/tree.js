/* Draw tree */
var canvas = document.getElementById('myTree');
var ctx = canvas.getContext('2d');
var eduPoints = 3;
var fitPoints = 3;
var healthPoints = 3;

/* Contains how many tasks completed in education */
var eduCompleted;

/* Contains how many tasks completed in fitness */
var fitCompleted;

/* Contains how many tasks completed in health */
var healthCompleted;

(function() {
	/* When task is completed, points increases based on category */
	/* leaves show up based on amount of points */
});

/* Education leaves */
var eduLeaves = new Image();

eduLeaves.onload = function() {
	if (eduPoints == 1) {
		ctx.drawImage(eduLeaves, 90, 295);
	} else if (eduPoints == 2) {
		ctx.drawImage(eduLeaves, 90, 295);
		ctx.drawImage(eduLeaves, 134, 369);
	} else if (eduPoints == 3) {
		ctx.drawImage(eduLeaves, 90, 295);
		ctx.drawImage(eduLeaves, 134, 369);
		ctx.drawImage(eduLeaves, 175, 295);
	}
};
eduLeaves.src = '../img/leaves.svg';

/* Fitness Leaves */
var fitLeaves = new Image();

fitLeaves.onload = function() {
	if (fitPoints == 1) {
		ctx.drawImage(fitLeaves, 450, 180);
	} else if (fitPoints == 2) {
		ctx.drawImage(fitLeaves, 450, 180);
		ctx.drawImage(fitLeaves, 365, 182);
	} else if (fitPoints == 3) {
		ctx.drawImage(fitLeaves, 450, 180);
		ctx.drawImage(fitLeaves, 365, 182);
		ctx.drawImage(fitLeaves, 408, 255);
	}
};
fitLeaves.src = '../img/leaves.svg';

/* Health Leaves */
var healthLeaves = new Image();

healthLeaves.onload = function() {
	if (healthPoints == 1) {
		ctx.drawImage(healthLeaves, 265, 50);
	} else if (healthPoints == 2) {
		ctx.drawImage(healthLeaves, 265, 50);	
		ctx.drawImage(healthLeaves, 365, 112);
	} else if (healthPoints == 3) {
		ctx.drawImage(healthLeaves, 265, 35);
		ctx.drawImage(healthLeaves, 222, 105);
		ctx.drawImage(healthLeaves, 309, 105);
	}
};
healthLeaves.src = '../img/leaves.svg';


/* Tree base */
var baseTree = new Image();
baseTree.onload = function() {
  ctx.drawImage(baseTree, 0, 0);
};
baseTree.src = '../img/main-tree.svg';

