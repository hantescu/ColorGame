var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// input
var butonSubmit = "#buttonSubmit";
var checkbox1 = "#textButon1";
var checkbox2 = "#textButon2";
var checkbox3 = "#textButon1";

// maxim culori
var maxColors = 4;

function drawCircle(color){
	ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
	ctx.beginPath();
	ctx.arc(myCanvas.width / 2, myCanvas.height / 2, 40, 0, 2*Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.stroke();
}

function uncheckAllCheckboxes(){
	$(checkbox1).prop("checked", false);
	$(checkbox2).prop("checked", false);
	$(checkbox3).prop("checked", false);
}

function generateRandomNumberUntilMax(){
	return Math.floor(Math.random() * maxColors);  
}