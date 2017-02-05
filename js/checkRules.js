// new state is complement of that of left-hand neighbor.
// otherwise if cell and right-hand neighbor are both 0 
function decimalToBinary(argument) {
	var result = parseInt(argument, 10).toString(2);
	return result;
}				

function binaryToDecimal(argument) {
	var result = parseInt(argument, 2).toString(10);
	return result;
}				

function reverseString(str) {
    return str.split("").reverse().join("");
}


// then new state of cell = state of left-hand neighbor; 
//get binary rule
function getBinaryRule(argument) {
	ruleBinary = (parseInt(rule, 10).toString(2));
	var ruleBinaryTemp = ruleBinary;
	// console.log("ruleBinary : " + ruleBinary);
	// console.log("ruleBinary.length : " + ruleBinary.length);
	for (var i = 0; i < (8 - (ruleBinary.length)); i++) {
		ruleBinaryTemp = "" + 0 + ruleBinaryTemp;
	}
	ruleBinary = ruleBinaryTemp;
	// console.log("ruleBinary : " + ruleBinary);
	ruleBinary =  reverseString(ruleBinary) ;
	// console.log("ruleBinaryReversed : " + ruleBinary);
	// console.log("ruleDec[2] : " + ruleBinary[2]);
	// var numeroBinario = (parseInt(6, 10).toString(2));
	var numeroBinario = decimalToBinary(2);
	// console.log("ruleBinary[" + numeroBinario + "] : " + ruleBinary[numeroBinario]);
	
}

function checkRules(argument) {
	
	//check neighbourhood rules
	for (var i = 1; i < canvasWidth-1; i++) {
		// console.log("getBinaryRule() :");
		getBinaryRule();
		// console.log("grid1[" + (i - 1) + "] + grid1[" + i + "] + grid1[" + (i+1) + "] : " + grid1[(i - 1)] + grid1[i] + grid1[i+1]);
		neighbours = "" + grid1[(i - 1)] + grid1[i] + grid1[i+1];
		// console.log("neighbours : " + neighbours);
		// console.log("neighboursDecimal : " + binaryToDecimal(neighbours));
		// console.log("ruleBinary[binaryToDecimal] : " + ruleBinary[binaryToDecimal(neighbours)]);
		grid2[i] = ruleBinary[binaryToDecimal(neighbours)];
			
	}
	jCoord++;
}

//esta es la checkrules del primer rule30
// function checkRules(argument) {
// 	//check neighbourhood rules
// 	for (var i = 1; i < canvasWidth-1; i++) {
// 		// if (grid1[i-1] == 0) {grid2[i] = 1}
// 		// else if (grid1[i-1] == 1) {grid2[i] = 0}

// 		// new state is complement of that of left-hand neighbor.
// 		grid2[i] = !grid1[i-1];
// 		 // otherwise if cell and right-hand neighbor are both 0 
// 							// then new state of cell = state of left-hand neighbor; 
// 		if ((grid1[i] == 0) && (grid1[i+1] == 0)) {
// 			grid2[i] = grid1[i-1];
// 		}
// 		// console.log("grid1 : [" + (i-1) + "]= " + grid1[i-1] + ", grid2 : [" + i + "]= " + grid2[i]);
// 	}
// 	jCoord++;
// }
