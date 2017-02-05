//bucle de ejcución
function drawPixels1() {
	// console.log("drawPixels1");
	checkRules();
	drawGrid(jCoord);
	//DEBUG
	if ((jCoord - 2) == numMaxIterations ) {
		// console.log("paused?");		
		pause();
	}
};


//draw grid optimizada para imprimir solo cuando pase de 0 a 1 o borrar solo de 1 a 0
function drawGrid(argument) {
		
	for (var i = 1; i < canvasWidth ; i++) {
			// console.log("BUCLE2");
			 // console.log("bucle2 : [" + i +"]["+j+"]= "+ grid2[i][j]);

			if (grid2[i] == 1){
				ctx.fillRect(i*zoom,argument*zoom,zoom,zoom); // fill in the pixel(1x1) at (0,0)
				// console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i]);				
			}else if(grid2[i] == 0 ){  //pattern = "ooo$oobbbbbb!"
				// grid2[i] = 0;
				ctx.clearRect(i*zoom,argument*zoom,zoom,zoom);
				// ctx.clearRect(0,0,canvasWidth*zoom-1, canvasHeight*zoom-1);
			}
			// copiar la grid2 a la grid1
			grid1[i] = grid2[i];
	};

	document.title = "Generations: " + numGenerations++;

	bucle = window.setTimeout(drawPixels1,interval);

}

//draw first grid a lo bruto , es necesario NO optimizar esta primera iteracion
function drawVeryFirstGrid(argument) {
	console.log("canvasWidth : " + canvasWidth);
	
	for (var i = 1; i < canvasWidth ; i++) {
	    if (grid1[i] == 1){
	      ctx.fillRect(i*zoom,jCoord*zoom,zoom,zoom); //1*zoom= en la primera la y=1
	      // console.log("grid1[" + i + "]: " + grid1[i]);	      
	    }else{  //pattern = "ooo$oobbbbbb!"
	      // console.log("grid1[" + i + "]: " + grid1[i]);	      
	      // grid1[i] = 0;
	      // ctx.clearRect(i*zoom,j*zoom,zoom,zoom);
	    }
	  };
	document.title = "Generation: " + numGenerations;
	console.log("first:jCoord : " + jCoord);
	
	// window.setTimeout(drawPixels1,interval);
}

