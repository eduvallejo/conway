var canvas;
var ctx;
//para wolfram
var grid1 = [];//en wolfram las grids son array de una dimension
var grid2 = [];
// var temporalGrid = [];//para lo del resize en marcha

var mousePos;
var count = 0;
var interval = 30;
// console.log("grid1 : [" + i + "][" + j + "]= "+ grid1[i][j] + ", grid2 : [" + i + "][" + j + "]= " + grid2[i][j]);				

//zoom = zoom
var zoom = 10;
var origenPatternsImportadosX = 1;
var origenPatternsImportadosY = 1;

var neighbours;
var numGenerations = 0;
var gridX; var gridY; var message;
//true o false para escribir o solo mover
var write = false;

//para clear time out
var bucle;
var pattern;
// var origenPatternsImportados = canvasHeight/4;

// var paused = false;
var paused = true;

var jCoord = 1;
var numMaxIterations = 20;
var canvasHeight = numMaxIterations;
var canvasWidth = canvasHeight*2;
//rules
var rule = 90;
var ruleBinary;