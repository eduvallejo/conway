var canvas;
var ctx;

var grid1 = [];
var grid2 = [];
var temporalGrid = [];//para lo del resize en marcha

var count = 0;
var interval = 100;
// console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i][j]);				

var canvasHeight = 19;
//zoom = zoom
var zoom = 3;
var origenPatternsImportadosX = 7;
var origenPatternsImportadosY = 7;
var canvasWidth = canvasHeight;

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

var paused = false;

