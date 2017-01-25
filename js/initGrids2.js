function initGrids(argument) {
	for (var i = 0; i < canvasWidth; i++) {
		grid1[i]=[];
		for (var j = 0; j < canvasHeight; j++) {
			grid1[i][j] = 0;
		};
	}
	// var grid2 = [];
	for (var i = 0; i < canvasWidth; i++) {
		grid2[i]=[];
		for (var j = 0; j < canvasHeight; j++) {
			grid2[i][j] = 0;
		};
	}
}

//emptyGrids
function emptyGrids(argument) {
	for (var i = 0; i < canvasWidth; i++) {
		for (var j = 0; j < canvasHeight; j++) {
			grid1[i][j] = 0;
		};
	}
	// var grid2 = [];
	for (var i = 0; i < canvasWidth; i++) {
		for (var j = 0; j < canvasHeight; j++) {
			grid2[i][j] = 0;
		};
	}
}

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