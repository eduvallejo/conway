

//darle valor 0 a las grids una vez sabemos el tamaño del canvas 
function initGrids(argument) {
	//los dos loops se pueden hacer en uno solo
	for (var i = 0; i < canvasWidth; i++) {
		grid1[i] = 0;
		// console.log("grid1[" + i + "] : " + grid1[i]);
	}
	// var grid2 = [];
	for (var i = 0; i < canvasWidth; i++) {
		grid2[i]=0
	}
	//el punto inicial de la primera fila
	grid1[parseInt((canvasWidth/2))] = 1;
}

//grid temporal para hacer resize en marcha
function temporalGrid(newWidth, newHeight) {
	console.log("newWidth : " + newWidth);
	
	//iniciamos la grid TEmporal	
	for (var i = 0; i < newWidth; i++) {
		temporalGrid[i]= 0;
	}
	//copiamos la grid 1 en la temporal(aunq sobre espacios)
	for (var i = 0; i < canvasWidth; i++) {
			temporalGrid[i] = grid1[i];
			// console.log("grid1 : [" + i + "][" + j + "]= " + grid1[i][j] + ", temporalGrid : [" + i + "][" + j + "]= "+ temporalGrid[i][j]);				
	}
}


