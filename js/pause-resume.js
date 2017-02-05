function pause(argument) {
	clearTimeout(bucle);
	paused = true;
	console.log("paused : " + paused);
}
	      
function resume(argument) {
	console.log("resume?");
  drawVeryFirstGrid();
	setTimeout(drawPixels1, interval); //drawPixels=check and draw
	paused = false;
	console.log("paused : " + paused);
}

//run after manual insert
function run(argument) {
  drawVeryFirstGrid();
  drawPixels1();
}

//pause/resume button
function togglePause(argument) {
	if (paused == false) {
      // clearTimeout(bucle);
      // paused = true;
      // console.log("should be paused : " + paused);
      pause();
    }else if (paused == true){
      // setTimeout(drawPixels1,interval);
      // paused = false;
      // console.log("paused : " + paused);
      resume();
    }
}


