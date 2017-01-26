/*conseguido toroide vertical aparte del ya realizado horizontal*/
/*primero se da valor al primer array(grid1), luego se checkean las reglas y se asigna valor a la grid2*/
//checking neighbourhood
function checkRules(argument) {
	//check neighbourhood rules
	// console.log("interval : " + interval);
	
	//limites izquierda a derecha
	for (var j = 1; j < canvasHeight; j++) {

		// for (var i = 1; i < 2; i++) {
		var i = 1;
	    neighboursAlive = 0;

	    neighboursAlive = grid1[canvasWidth-2][j-1] + grid1[i][j-1] + grid1[i+1][j-1] + grid1[canvasWidth-2][j] + grid1[i+1][j] + grid1[canvasWidth-2][j+1] + grid1[i][j+1] + grid1[i+1][j+1];
   	    // neighboursAlive = grid1[NWi][NWj] + grid1[Ni][Nj] + grid1[NEi][NEj] +    grid1[Ei][Ej] + grid1[SEi][SEj] + grid1[Si][Sj] + grid1[SWi][SWj] + grid1[Wi][Wj];
	    // neighboursAlive = grid1[i0][j0] + grid1[i1][j1] + grid1[i2][j2] +    grid1[i3][j3] + grid1[i4][j4] + grid1[i5][j5] + grid1[i6][j6] + grid1[i7][j7];

	    //rule4-Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	    if ( grid1[i][j]==0 && neighboursAlive == 3){
	      grid2[i][j] = 1;
	    }
	    //3-Any live cell with more than three live neighbours dies, as if by overpopulation.
	    if ((grid1[i][j]==1 && neighboursAlive > 3) || (grid1[i][j]==1 && neighboursAlive < 2)){
	      grid2[i][j] = 0;
	    }
	    //rule2-Any live cell with two or three live neighbours lives on to the next generation
	    if (grid1[i][j]==1 && (neighboursAlive == 3 || neighboursAlive ==2)){
	      grid2[i][j] = 1;
	    }
	    //Rule1-Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
	    //la he juntado con la rule3
	    // if (grid1[i][j]==1 && neighboursAlive < 2){
	    //  grid2[i][j] = 0;
	    // }
	  // };  
	};
	//limites derecha a izquierda
	for (var j = 1; j < canvasHeight; j++) {
		var i = canvasWidth -2 ;
	    neighboursAlive = 0;

	    neighboursAlive = grid1[i-1][j-1] + grid1[i][j-1] + grid1[1][j-1] + grid1[i-1][j] + grid1[1][j] + grid1[i-1][j+1] + grid1[i][j+1] + grid1[1][j+1];
   	    // neighboursAlive = grid1[NWi][NWj] + grid1[Ni][Nj] + grid1[NEi][NEj] +    grid1[Ei][Ej] + grid1[SEi][SEj] + grid1[Si][Sj] + grid1[SWi][SWj] + grid1[Wi][Wj];
	    // neighboursAlive = grid1[i0][j0] + grid1[i1][j1] + grid1[i2][j2] +    grid1[i3][j3] + grid1[i4][j4] + grid1[i5][j5] + grid1[i6][j6] + grid1[i7][j7];

	    //rule4-Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	    if ( grid1[i][j]==0 && neighboursAlive == 3){
	      grid2[i][j] = 1;
	    }
	    //3-Any live cell with more than three live neighbours dies, as if by overpopulation.
	    if ((grid1[i][j]==1 && neighboursAlive > 3) || (grid1[i][j]==1 && neighboursAlive < 2)){
	      grid2[i][j] = 0;
	    }
	    //rule2-Any live cell with two or three live neighbours lives on to the next generation
	    if (grid1[i][j]==1 && (neighboursAlive == 3 || neighboursAlive ==2)){
	      grid2[i][j] = 1;
	    }
	    //Rule1-Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
	    //la he juntado con la rule3
	    // if (grid1[i][j]==1 && neighboursAlive < 2){
	    //  grid2[i][j] = 0;
	    // }
	};

	//limites norte a sur
	 for (var i = 1; i < canvasWidth - 1; i++) {
	 	var j = 1 ;
	    neighboursAlive = 0;

	    neighboursAlive = grid1[i-1][canvasWidth - 2] + grid1[i][canvasWidth - 2] + grid1[i+1][canvasWidth - 2] + grid1[i-1][j] + grid1[i+1][j] + grid1[i-1][j+1] + grid1[i][j+1] + grid1[i+1][j+1];

	    //rule4-Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	    if ( grid1[i][j]==0 && neighboursAlive == 3){
	      grid2[i][j] = 1;
	    }
	    //3-Any live cell with more than three live neighbours dies, as if by overpopulation.
	    if ((grid1[i][j]==1 && neighboursAlive > 3) || (grid1[i][j]==1 && neighboursAlive < 2)){
	      grid2[i][j] = 0;
	    }
	    //rule2-Any live cell with two or three live neighbours lives on to the next generation
	    if (grid1[i][j]==1 && (neighboursAlive == 3 || neighboursAlive ==2)){
	      grid2[i][j] = 1;
	    }
	    //Rule1-Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
	    //la he juntado con la rule3
	    // if (grid1[i][j]==1 && neighboursAlive < 2){
	    //  grid2[i][j] = 0;
	    // }
	 };
	 //sur a norte
	  for (var i = 1; i < canvasWidth - 1; i++) {
	 	var j = canvasHeight - 2 ;
	    neighboursAlive = 0;

	    neighboursAlive = grid1[i-1][j-1] + grid1[i][j-1] + grid1[i+1][j-1] + grid1[i-1][j] + grid1[i+1][j] + grid1[i-1][1] + grid1[i][1] + grid1[i+1][1];

	    //rule4-Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	    if ( grid1[i][j]==0 && neighboursAlive == 3){
	      grid2[i][j] = 1;
	    }
	    //3-Any live cell with more than three live neighbours dies, as if by overpopulation.
	    if ((grid1[i][j]==1 && neighboursAlive > 3) || (grid1[i][j]==1 && neighboursAlive < 2)){
	      grid2[i][j] = 0;
	    }
	    //rule2-Any live cell with two or three live neighbours lives on to the next generation
	    if (grid1[i][j]==1 && (neighboursAlive == 3 || neighboursAlive ==2)){
	      grid2[i][j] = 1;
	    }
	    //Rule1-Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
	    //la he juntado con la rule3
	    // if (grid1[i][j]==1 && neighboursAlive < 2){
	    //  grid2[i][j] = 0;
	    // }
	 };	

	 //normales no boundaries
	for (var i = 2; i < canvasWidth - 2; i++) {
	  for (var j = 2; j < canvasHeight - 2; j++) {
	    neighboursAlive = 0;

	    neighboursAlive = grid1[i-1][j-1] + grid1[i][j-1] + grid1[i+1][j-1] + grid1[i-1][j] + grid1[i+1][j] + grid1[i-1][j+1] + grid1[i][j+1] + grid1[i+1][j+1];
   	    // neighboursAlive = grid1[NWi][NWj] + grid1[Ni][Nj] + grid1[NEi][NEj] +    grid1[Ei][Ej] + grid1[SEi][SEj] + grid1[Si][Sj] + grid1[SWi][SWj] + grid1[Wi][Wj];
	    // neighboursAlive = grid1[i0][j0] + grid1[i1][j1] + grid1[i2][j2] +    grid1[i3][j3] + grid1[i4][j4] + grid1[i5][j5] + grid1[i6][j6] + grid1[i7][j7];

	    //rule4-Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
	    if ( grid1[i][j]==0 && neighboursAlive == 3){
	      grid2[i][j] = 1;
	    }
	    //3-Any live cell with more than three live neighbours dies, as if by overpopulation.
	    if ((grid1[i][j]==1 && neighboursAlive > 3) || (grid1[i][j]==1 && neighboursAlive < 2)){
	      grid2[i][j] = 0;
	    }
	    //rule2-Any live cell with two or three live neighbours lives on to the next generation
	    if (grid1[i][j]==1 && (neighboursAlive == 3 || neighboursAlive ==2)){
	      grid2[i][j] = 1;
	    }
	    //Rule1-Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
	    //la he juntado con la rule3
	    // if (grid1[i][j]==1 && neighboursAlive < 2){
	    //  grid2[i][j] = 0;
	    // }
	  };  
	};
	for (var i = 0; i < canvasWidth; i++) {
		for (var j = 0; j < canvasHeight; j++) {
			// temporalGrid[i][j] = grid1[i][j];
			// console.log("grid1 : [" + i + "][" + j + "]= " + grid1[i][j] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i][j]);
		};
	}
}

//draw grid optimizada para imprimir solo cuando pase de 0 a 1 o borrar solo de 1 a 0
function drawGrid(argument) {
		
	for (var i = 1; i < canvasWidth ; i++) {
		for (var j = 1; j < canvasWidth ; j++) {
			// console.log("BUCLE2");
			 // console.log("bucle2 : [" + i +"]["+j+"]= "+ grid2[i][j]);

			if ((grid1[i][j] == 0) && (grid2[i][j] == 1) ){
				ctx.fillRect(i*zoom,j*zoom,zoom,zoom); // fill in the pixel(1x1) at (0,0)
				// console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i][j]);				
			}else if((grid1[i][j] == 1) && (grid2[i][j] == 0)){  //pattern = "ooo$oobbbbbb!"
				grid2[i][j] = 0;
				ctx.clearRect(i*zoom,j*zoom,zoom,zoom);
				// ctx.clearRect(0,0,canvasWidth*zoom-1, canvasHeight*zoom-1);
			}
			//copiar la grid2 a la grid1
			grid1[i][j] = grid2[i][j];
		};
	};
	document.title = "Generations: " + numGenerations++;
	bucle = window.setTimeout(drawPixels1,interval);
}

//draw first grid a lo bruto , es necesario NO optimizar esta primera iteracion
function drawVeryFirstGrid(argument) {
	for (var i = 1; i < canvasWidth ; i++) {
	  for (var j = 1; j < canvasWidth ; j++) {
	    // console.log("BUCLE2");
	     // console.log("bucle2 : [" + i +"]["+j+"]= "+ grid2[i][j]);

	    if (grid1[i][j] == 1){
	      // console.log("bucle2: " + i +","+ j);
	      // console.log(i);
	      ctx.fillRect(i*zoom,j*zoom,zoom,zoom); // fill in the pixel(1x1) at (0,0)
	      // console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid1 : [" + i + "][" + j + "]= " + grid1[i][j]);
	      
	    }else{  //pattern = "ooo$oobbbbbb!"
	      grid1[i][j] = 0;
	      ctx.clearRect(i*zoom,j*zoom,zoom,zoom);
	      // ctx.clearRect(0,0,canvasWidth*zoom-1, canvasHeight*zoom-1);
	    }
	    // console.log("grid1[" + i+ "]["+ j + "] : " + grid1[i][j] +", grid1[" + i+ "]["+ j + "] : " + grid1[i][j] );
	    //copiar la grid1 a la grid1
	    grid2[i][j] = grid1[i][j];
	  };
	};
	document.title = "Generation: " + numGenerations;
	// window.setTimeout(drawPixels1,interval);
}

