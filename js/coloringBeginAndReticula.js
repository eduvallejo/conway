function coloringCells(argument) {
	if (grid1[gridX][gridY] == 1){
    // grid1[gridX][gridY] = 0;  
    // deleteRect(gridX, gridY);
    }else{
    	if (write == true) {
    		grid1[gridX][gridY] = 1;
    		fillRect(gridX, gridY);
    	}
    }
    writeMessage(canvas, message);
}

//esta es la rejilla q sale al principio para dibujar con precision
function drawReticula(argument) {
 for (var i = 1; i <= canvasWidth-1; i++) {
  //verticales
  ctx.beginPath();
  ctx.moveTo(i*zoom, zoom);
  ctx.lineTo(i*zoom, canvasHeight*zoom-zoom);
  ctx.stroke();
  //horozontales
  ctx.beginPath();
  ctx.moveTo(zoom, i*zoom);
  ctx.lineTo(canvasHeight*zoom-zoom, i*zoom);
  ctx.stroke();
  console.log("reticula : " );
 }
}


function begin (argument) {
	for (var i = 1; i < canvasWidth ; i++) {
			for (var j = 1; j < canvasWidth ; j++) {
				// console.log("BUCLE2");
				 // console.log("bucle2 : [" + i +"]["+j+"]= "+ grid2[i][j]);

				if (grid1[i][j] == 1){
					// console.log("bucle2: " + i +","+ j);
					// console.log(i);
					//ctx.fillRect(i*zoom,j*zoom,zoom,zoom); // fill in the pixel(1x1) at (0,0)
					fillRect(i,j);
				}else{
					grid1[i][j] = 0;
				}
			};
		};
}

function consoleGrid(argument) {
  for (var i = 1; i < canvasWidth ; i++) {
    for (var j = 1; j < canvasWidth ; j++) {
      console.log("grid1[" + i+ "]["+ j + "] : " + grid1[i][j] +", grid2[" + i+ "]["+ j + "] : " + grid2[i][j] );
    };
  };
}