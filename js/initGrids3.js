//primer script on load
function init(argument) {

	canvas = document.getElementById("myCanvas");
	canvas.width = canvasWidth*zoom;
	canvas.height = canvasHeight*zoom;
	ctx = canvas.getContext("2d");
	console.log("canvas.width : " + canvas.width);
	console.log("zoom : " + zoom);	

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
	    if (paused == true){
	      setTimeout(drawPixels1,interval);
	      paused = false;
	      console.log("paused : " + paused);
	    }else if (paused == false) {
	      clearTimeout(bucle);
	      paused = true;
	      console.log("paused : " + paused);
	    }
	  }else if (key == 88) {//reiniciar (tecla x))
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
	  }else if (key == 8) {//refresh backspac
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

	//para hacer el toro intento darle valores diferenciaddos a los [0], 
	//antes simplmente eran 0. de esta manera sabre si estan arriba aabajo etc..
	for (var i = 0; i < canvasWidth; i++) {
		grid1[i][0] = 12; // norte
		grid1[0][i] = 9;  //oeste
		grid1[canvasHeight-1][i] = 3;//este
		grid1[i][canvasHeight-1] = 6; //sur
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
	canvasHeight = document.getElementById("height").value*zoom;
	canvasWidth = document.getElementById("height").value*zoom;
	canvas.width = canvasWidth*zoom;
	canvas.height = canvasHeight*zoom;
	console.log("canvasHeight : " + canvasHeight);	
	console.log("canvasWidth : " + canvasWidth);	
}