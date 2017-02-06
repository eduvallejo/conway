function changeRuleByReference(argument) {
// //solo se aplica para hacer más grande el tablero
	eraseBoard();
	var newRule = argument;
	console.log("newRule : " + argument);

	if (paused == false) {pause();}
	
	// canvasHeight = document.getElementById("rule").value;
	rule = newRule;
	// emptyGrids();
	resume();
}


function changeRule(argument) {
// //solo se aplica para hacer más grande el tablero
	eraseBoard();
	var newRule = document.getElementById("rule").value;
	console.log("newRule : " + newRule);

	if (paused == false) {pause();}
	
	// canvasHeight = document.getElementById("rule").value;
	rule = newRule;
	// emptyGrids();
	resume();
}

function changeZoom(argument) {
	eraseBoard();
	zoom = document.getElementById("zoom").value/zoom;
	changeHeightReference();
// //solo se aplica para hacer más grande el tablero
	// canvasHeight = canvasHeight/zoom;
	// canvasWidth = canvasWidth/zoom;
	// zoom = document.getElementById("zoom").value;
	// canvasHeight = canvasHeight * zoom;
	// canvasWidth = canvasWidth * zoom;
	console.log("canvasHeight : " + canvasHeight);
	console.log("canvasWidth : " + canvasWidth);
	console.log("zoom : " + zoom);
	
	zoom = newZoom;
	document.getElementById("zoom").value = zoom;
	document.getElementById("height").value = canvasHeight;
	// emptyGrids();
	emptyGrids();
	resume();
	
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
		resume();
}

function changeWidth(argument) {
	console.log("argumentNewWidth : " + argument*zoom);
	
	canvasWidth = argument * 2;
	canvas.width = canvasWidth * zoom;
}

function changeInterval(argument) {
	clearTimeout(bucle);
   
	interval = document.getElementById("interval").value;
	console.log("interval : " + interval);	
	
	setTimeout(drawPixels1,interval);
	console.log("paused : " + paused);
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