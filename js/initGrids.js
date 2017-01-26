//primer script on load
function init(argument) {

	canvas = document.getElementById("myCanvas");
	canvas.width = canvasWidth*zoom;
	canvas.height = canvasHeight*zoom;
	ctx = canvas.getContext("2d");
	console.log("width : " + canvasWidth);
	console.log("zoom : " + zoom);	
	console.log("paused : " + paused);	

	//para cuando se abra nuevo archivo 
	document.getElementById('fileId').onchange = function () {
	  // alert('Selected file: ' + this.value);
	  ajax(this.value);
	};

	initGrids();//darle valor cero a las grids cuando ya sabemos el width
	pattern();

	//poner la altura en el input de la altura
	document.getElementById("height").value = canvasHeight;

	//event listener para dibukar el canvas a base de clicks
	// canvas.addEventListener('mousemove', function(evt) {
	canvas.addEventListener('click', function(evt) {
		var mousePos = getMousePos(canvas, evt);
		message = 'Mouse position: ' + (Math.round((mousePos.x)/zoom)-1) + ',' + (Math.round((mousePos.y)/zoom)-1);
	  // gridX = (Math.round( (mousePos.x) / zoom )-1);
		gridX = (Math.round( (mousePos.x) / zoom )-1);
		gridY = (Math.round( (mousePos.y) / zoom )-1);
		
	  if (grid1[gridX][gridY] == 1){
			grid1[gridX][gridY] = 0;  
	    console.log(" : " + grid1[gridX][gridY]);
	    deleteRect(gridX, gridY);
	    // drawReticula();
	  }else{
	    grid1[gridX][gridY] = 1;
			fillRect(gridX, gridY);
		}
		writeMessage(canvas, message);
	}, false);

	//eventos asociados a teclas
	 window.onkeyup = function(e) {
	  var key = e.keyCode ? e.keyCode : e.which;
	   //13 enter, 8 backspace, 37left
	   //$resultado = ($a>$b) ? "A es Mayor que B":"B es Mayor que A";
	  if (key == 81) {//"q" para escribir o solo moverse
	    if (write == false) {
	      write = true;
	      console.log("write : " + write);
	    }else{
	      write = false;
	      console.log("write : " + write);
	    }
	  // }else if (key == 13 && pattern != "" && paused == true) {//begin execution (enter)unless blank grid
	  //      // consoleGrid();
	  //      paused = false;
	  //      console.log("paused : " + paused);
	       
	  //      drawVeryFirstGrid();
	  //      checkRules();
	  //      drawPixels1();
	  }else if (key == 80 && pattern != "" ) {//Enter or pause P
	   	if (paused == false) {
	      // clearTimeout(bucle);
	      // paused = true;
	      // console.log("paused : " + paused);
	      pause();
	    }else if (paused == true){
	      // setTimeout(drawPixels1,interval);
	      // paused = false;
	      // console.log("paused : " + paused);
	      resume();
	    }
	  }else if (key == 83) {//reiniciar (tecla s))
	    clearTimeout(bucle);
	    emptyGrids();
	    drawVeryFirstGrid();
	    // history.go(0);
	    numGenerations = 0;
	    pattern = 0;
	    paused = true;
	    console.log("numGenerations : " + numGenerations);
	    document.title = "Generation: " + numGenerations;
	  }else if (key == 37) {//left arrow
	    gridX--;
	    coloringCells();
	  }else if (key == 39) {//right arrow
	    gridX++;
	    coloringCells();
	  }else if (key == 38) {//up arrow
	    gridY--;
	    coloringCells();
	  }else if (key == 40) {//down arrow
	    gridY++;
	    coloringCells();
	  }else if (key == 82) {//refresh r
	    history.go(0);
		}
	}
}

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