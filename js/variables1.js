var canvas;
var ctx;

var grid1 = [];
var grid2 = [];

var count = 0;
var interval = 1000;

var canvasHeight = 10;
//zoom = zoom
var zoom = 5;
var origenPatternsImportadosX = 1;
var origenPatternsImportadosY = 3;
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

var paused = true;

