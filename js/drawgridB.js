function drawPixels2 (argument) {
	// console.log("FIN");
	//draw grid2
	// for (var i = 1; i < canvasWidth ; i++) {
	// 	for (var j = 1; j < canvasWidth ; j++) {
	// 		// console.log("BUCLE2");
	// 		 // console.log("bucle2 : [" + i +"]["+j+"]= "+ grid2[i][j]);

	// 		if ((grid1[i][j] == 0) && (grid2[i][j] == 1) ){
	// 			// console.log("bucle2: " + i +","+ j);
	// 			// console.log(i);
	// 			// console.log("grid1[" + i+ "]["+ j + "] : " + grid1[i][j] +", grid2[" + i+ "]["+ j + "] : " + grid2[i][j] );
	// 			ctx.fillRect(i*factorAumento,j*factorAumento,factorAumento,factorAumento); // fill in the pixel(1x1) at (0,0)
	// 			// console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i][j]);
				
	// 		}else if((grid1[i][j] == 1) && (grid2[i][j] == 0)){  //pattern = "ooo$oobbbbbb!"
	// 			grid2[i][j] = 0;
	// 			ctx.clearRect(i*factorAumento,j*factorAumento,factorAumento,factorAumento);
	// 			// ctx.clearRect(0,0,canvasWidth*factorAumento-1, canvasHeight*factorAumento-1);
	// 		}
	// 		//copiar la grid2 a la grid1
	// 		grid1[i][j] = grid2[i][j];
	// 	};
	// };

	drawGrid();


	// var algunaViva = false;
	// //parar cuando no haya ninguna viva
	// for (var i = 0; i < grid2.length; i++) {
	// 	for (var j = 0; j < grid2.length; j++) {
	// 		if (grid2[i][j] == 1) {
	// 			algunaViva = true;
	// 			// console.log("algunaViva : " + algunaViva);
				
	// 		}
	// 		// console.log("grid1 : [" + i +"]["+j+"]= "+ grid1[i][j]);
	// 	};
	// };
	// if (algunaViva == true) {
	// 	// document.title = "Generation: " + numGenerations++;
	// 	// window.setTimeout(drawPixels1,interval);
	// }

	document.title = "Generation: " + numGenerations++;
	window.setTimeout(drawPixels1,interval);



}