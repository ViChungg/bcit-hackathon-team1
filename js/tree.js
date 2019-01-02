/* Draw tree */
var canvas = document.getElementById('myTree');
var ctx = canvas.getContext('2d');
var baseTree = new Image();

baseTree.onload = function() {
  ctx.drawImage(baseTree, 0, 0);
};
baseTree.src = '../img/main-tree.svg';

/* Adding leaves */
var leaves = new Image();
leaves.onload = function() {
	ctx.drawImage(leaves, 0, 0);
};
leaves.src = '../img/leaves.svg';