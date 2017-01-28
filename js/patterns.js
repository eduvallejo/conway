// he quitado la de getpattern, de cara a leer archivos directamente

//para debugear con body onload y no tener q clickar un boton cada vez
function pattern(argument) {
  //tagalong
  //pattern = "21bo3b$18b4o3b$13bo2bob2o5b$13bo11b$4o8bo3bob2o5b$o3bo5b2ob2obobob5o$o9b2obobobo2b5o$bo2bo2b2o2bo3b3o2bob2ob$6bo2bob2o12b$6bo4b2o12b$6bo2bob2o12b$bo2bo2b2o2bo3b3o2bob2ob$o9b2obobobo2b5o$o3bo5b2ob2obobob5o$4o8bo3bob2o5b$13bo11b$13bo2bob2o5b$18b4o3b$21bo!";
//lighjtweight
  // pattern = "bo2bo$o$o3bo$4o!";
  console.log("pattern : " + pattern);
  
  drawPattern(pattern);
}

function drawPattern(pattern) {
  console.log("drawPattern : " + pattern);
  decodeRle(pattern);
 
  drawVeryFirstGrid();
  // //despues de imprimir la primera gen se empieza el bucle de grid1 grid2
  // drawPixels1();
  //drawPixels es las dos de abajo: check y draw
  // checkRules();
  // //
  // drawGrid();
}
