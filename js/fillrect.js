function fillRect (i,j) {
	ctx.fillRect(i*zoom,j*zoom,zoom,zoom);//principioX, principioY, longitud, altura)
	console.log("fillrect.js");
}

function deleteRect (i,j) {
	// ctx.fillRect(i*zoom,j*zoom,zoom,zoom);//principioX, principioY, longitud, altura)
	ctx.clearRect(i*zoom,j*zoom,zoom,zoom);
}
