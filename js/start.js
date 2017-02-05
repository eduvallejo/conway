//primer script on load
function init(argument) {

	canvas = document.getElementById("myCanvas");
	canvas.width = canvasWidth*zoom;
	canvas.height = canvasHeight*zoom;
	ctx = canvas.getContext("2d");
	// console.log("width : " + canvasWidth);
	// console.log("zoom : " + zoom);	
	// console.log("paused : " + paused);	

	//debugging file uopload.
	// document.getElementById("fileId").click();
	// document.getElementById("populateSelect").click();

	//para cuando se abra nuevo archivo 
	// document.getElementById('fileId').onchange = function () {
	//   // alert('Selected file: ' + this.value);
	//   ajax(this.value);
	//   // console.log("pattern : " + test);
	// };

	initGrids();//darle valor cero a las grids cuando ya sabemos el width
	
	// console.log("test");
	// console.log("grid["+ (canvasWidth/2) + "] : " + grid1[canvasWidth/2]);
	
	 //la punta de la pirámide
	//pattern() coloca el pattern sobre el tablero
	// pattern();

	//empezar en marcha(resume) o parado(comentado el resume)
	resume();
	
	//poner la altura en el input de la altura
	document.getElementById("height").value = canvasHeight;
	//poner el intervalo en el input del intervalo
	document.getElementById("interval").value = interval;
	//poner la rule en el input rule
	document.getElementById("rule").value = rule;

	

	//eventos asociados a teclas
	 window.onkeyup = function(e) {
	  var key = e.keyCode ? e.keyCode : e.which;
	   //13 enter, 8 backspace, 37left
	   //$resultado = ($a>$b) ? "A es Mayor que B":"B es Mayor que A";
	  if (key == 81) {//"q" para escribir o solo moverse
	    if (write == false) {
	      write = true;
	      // console.log("write : " + write);
	    }else{
	      write = false;
	      // console.log("write : " + write);
	    }
	  }else if (key == 80 ) {//Enter or pause P
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
	  }else if (key == 69) {//reiniciar (tecla s))
	    clearTimeout(bucle);
	    emptyGrids();
	    drawVeryFirstGrid();
	    // history.go(0);
	    numGenerations = 0;
	    pattern = 0;
	    paused = true;
	    // console.log("numGenerations : " + numGenerations);
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

	// //event listener para dibukar el canvas a base de clicks
	// // canvas.addEventListener('mousemove', function(evt) {
	canvas.addEventListener('click', function(evt) {
		console.log("click event");
			
		mousePos = getMousePos(canvas, evt);
		console.log('Mouse position: ' + (Math.round((mousePos.x)/zoom)-1) + ',' + (Math.round((mousePos.y)/zoom)-1));
		message = 'Mouse position: ' + (Math.round((mousePos.x)/zoom)-1) + ',' + (Math.round((mousePos.y)/zoom)-1);
	  // gridX = (Math.round( (mousePos.x) / zoom )-1);
		gridX = (Math.round( (mousePos.x) / zoom )-1);
		gridY = (Math.round( (mousePos.y) / zoom )-1);
		
		if (grid1[gridX][gridY] == 1){
			console.log("grid1[gridX][gridY] : " + grid1[gridX][gridY]);
			grid1[gridX][gridY] = 0;  
			console.log("grid1[gridX][gridY] : " + grid1[gridX][gridY]);
			console.log("gridX : " + gridX);
			console.log("gridY : " + gridY);
			deleteRect(gridX, gridY);
			// drawReticula();
			writeMessage(canvas, message);
		}else{ //else if (grid1[gridX][gridY] == 0)
			console.log("grid1[gridX][gridY] : " + grid1[gridX][gridY]);
			grid1[gridX][gridY] = 1;
			console.log("grid1[gridX][gridY] : " + grid1[gridX][gridY]);
			fillRect(gridX, gridY);
		}
		writeMessage(canvas, message);
	}, false);
}