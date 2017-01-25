
function changeInterval(argument) {
	clearTimeout(bucle);
   
	interval = document.getElementById("interval").value;
	console.log("interval : " + interval);	
	
	setTimeout(drawPixels1,interval);
	console.log("paused : " + paused);
}

function changeHeight(argument) {
	canvasHeight = document.getElementById("height").value*factorAumento;
	canvasWidth = document.getElementById("height").value*factorAumento;
	canvas.width = canvasWidth*factorAumento;
	canvas.height = canvasHeight*factorAumento;
	console.log("canvasHeight : " + canvasHeight);	
	console.log("canvasWidth : " + canvasWidth);	
}

function changeZoom(argument) {
	factorAumento = document.getElementById("zoom").value ;
	console.log("zoom : " + factorAumento);
	// borrarPantalla();//sin borrar grids
	// init();
	document.getElementById("zoom").value = factorAumento;
	// drawVeryFirstGrid();
}