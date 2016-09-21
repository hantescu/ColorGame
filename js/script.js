var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function drawCircle(color){
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
	ctx.beginPath();
	ctx.arc(myCanvas.width / 2, myCanvas.height / 2, 40, 0, 2*Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.stroke();
}