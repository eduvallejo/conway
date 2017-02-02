

//darle valor 0 a las grids una vez sabemos el tamaño del canvas 
function initGrids(argument) {
	//los dos loops se pueden hacer en uno solo
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

//grid temporal para hacer resize en marcha
function temporalGrid(newWidth, newHeight) {
	console.log("newWidth : " + newWidth);
	
	//iniciamos la grid TEmporal	
	for (var i = 0; i < newWidth; i++) {
		temporalGrid[i]=[];
		for (var j = 0; j < newHeight; j++) {
			temporalGrid[i][j] = 0;
		};
	}
	//copiamos la grid 1 en la temporal(aunq sobre espacios)
	for (var i = 0; i < canvasWidth; i++) {
		for (var j = 0; j < canvasHeight; j++) {
			temporalGrid[i][j] = grid1[i][j];
			// console.log("grid1 : [" + i + "][" + j + "]= " + grid1[i][j] + ", temporalGrid : [" + i + "][" + j + "]= "+ temporalGrid[i][j]);				
		};
	}
	// //show grid temporal debug	
	// for (var i = 0; i < newWidth; i++) {
	// 	for (var j = 0; j < newHeight; j++) {
	// 		console.log("gridTemporal : [" + i + "][" + j + "]= " + temporalGrid[i][j]);				
	// 		// console.log("newWidth : " + newWidth);
	// 	};
	// }
}

//emptyGrids , despuesde hacerla creo ver q es la misma q initgrids
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

// function changeInterval(argument) {
// 	clearTimeout(bucle);
   
// 	interval = document.getElementById("interval").value;
// 	console.log("interval : " + interval);	
	
// 	setTimeout(drawPixels1,interval);
// 	console.log("paused : " + paused);
// }

// function changeHeight(argument) {
// 	canvasHeight = document.getElementById("height").value*zoom;
// 	canvasWidth = document.getElementById("height").value*zoom;
// 	canvas.width = canvasWidth*zoom;
// 	canvas.height = canvasHeight*zoom;
// 	console.log("canvasHeight : " + canvasHeight);	
// 	console.log("canvasWidth : " + canvasWidth);	
// }