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
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
}
// var canvas = document.getElementById('myCanvas');
// var ctx = canvas.getContext('2d');

// canvas.addEventListener('mousemove', function(evt) {
// 	var mousePos = getMousePos(canvas, evt);
// 	var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
// 	writeMessage(canvas, message);
// }, false);

