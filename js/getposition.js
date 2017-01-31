// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
/*funciones para obtener la coordenada del mouse al clickar para marcar una casilla*/
function writeMessage(canvas, message) {
	// var ctx = canvas.getctx('2d');
	// ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = '18pt Calibri';
	ctx.fillStyle = 'black';
	// ctx.fillText(message, 10, 25);
	console.log(message);
    console.log(" grid1[" + gridX + "][" + gridY + "]: " + grid1[gridX][gridY]);

}
function getMousePos(canvas, evt) {
	console.log("getMousePos()");
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
}

// function clickCanvas(evt) {
// 	console.log("click event");
		
// 	// mousePos = getMousePos(canvas, evt);
// 	getMousePos(canvas, evt);
// 	console.log('Mouse position: ' + (Math.round((mousePos.x)/zoom)-1) + ',' + (Math.round((mousePos.y)/zoom)-1));
// 	message = 'Mouse position: ' + (Math.round((mousePos.x)/zoom)-1) + ',' + (Math.round((mousePos.y)/zoom)-1);
//   // gridX = (Math.round( (mousePos.x) / zoom )-1);
// 	gridX = (Math.round( (mousePos.x) / zoom )-1);
// 	gridY = (Math.round( (mousePos.y) / zoom )-1);
	
// 	if (grid1[gridX][gridY] == 1){
// 		console.log("grid1[gridX][gridY] : " + grid1[gridX][gridY]);
// 		grid1[gridX][gridY] = 0;  
// 		console.log("grid1[gridX][gridY] : " + grid1[gridX][gridY]);
// 		console.log("gridX : " + gridX);
// 		console.log("gridY : " + gridY);
// 		deleteRect(gridX, gridY);
// 		// drawReticula();
// 		writeMessage(canvas, message);
// 	}else{ //else if (grid1[gridX][gridY] == 0)
// 		console.log("grid1[gridX][gridY] : " + grid1[gridX][gridY]);
// 		grid1[gridX][gridY] = 1;
// 		console.log("grid1[gridX][gridY] : " + grid1[gridX][gridY]);
// 		fillRect(gridX, gridY);
// 	}
// 	writeMessage(canvas, message);
// }
