
function changeInterval(argument) {
	clearTimeout(bucle);
   
	interval = document.getElementById("interval").value;
	console.log("interval : " + interval);	
	
	setTimeout(drawPixels1,interval);
	console.log("paused : " + paused);
}

function changeHeight(argument) {
	// //solo se aplica para hacer más grande el tablero
		eraseBoard();
		var newHeight = document.getElementById("height").value;
		console.log("newHeight : " + newHeight);
		changeWidth(newHeight);

		if (paused == false) {pause();}
		
		// canvasHeight = document.getElementById("height").value;
		canvasHeight = newHeight;
		canvas.height = canvasHeight*zoom;
		numMaxIterations = newHeight;
		emptyGrids();
		// drawVeryFirstGrid();
		// resume();
}

function changeWidth(argument) {
	console.log("argumentNewWidth : " + argument*zoom);
	
	canvasWidth = argument * 2;
	canvas.width = canvasWidth * zoom;
}

// function changeZoom(argument) {
// 	zoom = document.getElementById("zoom").value ;
// 	console.log("zoom : " + zoom);
// 	// borrarPantalla();//sin borrar grids
// 	// init();
// 	document.getElementById("zoom").value = zoom;
// 	// drawVeryFirstGrid();
// }

function eraseBoard(argument) {
	console.log("eraseBoard");
	clearTimeout(bucle);
	emptyGrids();
	deleteBoard();
	// drawVeryFirstGrid();
	pattern = 0;
	paused = true;
	console.log("numGenerations : " + numGenerations);
	document.title = "Generation: " + numGenerations;
}

//emptyGrids , despuesde hacerla creo ver q es la misma q initgrids
function emptyGrids(argument) {
	for (var i = 0; i < canvasWidth; i++) {
			grid1[i]= 0;
			grid2[i] = 0;
	}
	// /el punto inicial de la primera fila
	grid1[parseInt((canvasWidth/2))] = 1;
	console.log("grid1[parseInt((canvasWidth/2))] : " + grid1[parseInt((canvasWidth/2))]);
	
}

function deleteBoard(argument) {
	for (var i = 1; i < canvasWidth ; i++) {
		for (var j = 1; j < numGenerations+2; j++) {
			deleteRect(i,j);
		}	    
	};
	numGenerations = 0;
	jCoord = 1;
}