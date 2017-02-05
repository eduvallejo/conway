var canvas;
var ctx;
//para wolfram
var jCoord = 1;
var numMaxIterations = 15;

var grid1 = [];//en wolfram las grids son array de una dimension
var grid2 = [];
var temporalGrid = [];//para lo del resize en marcha

var mousePos;
var count = 0;
var interval = 30;
// console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i][j]);				

var canvasHeight = numMaxIterations;
//zoom = zoom
var zoom = 2;
var origenPatternsImportadosX = 1;
var origenPatternsImportadosY = 1;
var canvasWidth = canvasHeight*2;

var neighboursAlive;
var numGenerations = 0;
var gridX; var gridY; var message;
//true o false para escribir o solo mover
var write = false;

//para clear time out
var bucle;
// #N Block
// #C An extremely common 4-cell still life.
// #C www.conwaylife.com/wiki/index.php?title=Block
// x = 2, y = 2, rule = B3/S23
// 2o$2o!
var block1 = "";//la variable pattern en el indice
var pattern;
// var origenPatternsImportados = canvasHeight/4;

// var paused = false;
var paused = true;

