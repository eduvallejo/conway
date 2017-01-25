function fillRect (i,j) {
	ctx.fillRect(i*factorAumento,j*factorAumento,factorAumento,factorAumento);//principioX, principioY, longitud, altura)
}

function deleteRect (i,j) {
	// ctx.fillRect(i*factorAumento,j*factorAumento,factorAumento,factorAumento);//principioX, principioY, longitud, altura)
	ctx.clearRect(i*factorAumento,j*factorAumento,factorAumento,factorAumento);
}
