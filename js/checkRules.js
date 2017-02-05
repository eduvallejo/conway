// new state is complement of that of left-hand neighbor.
// otherwise if cell and right-hand neighbor are both 0 
							// then new state of cell = state of left-hand neighbor; 

function checkRules(argument) {
	//check neighbourhood rules
	for (var i = 1; i < canvasWidth-1; i++) {
		// if (grid1[i-1] == 0) {grid2[i] = 1}
		// else if (grid1[i-1] == 1) {grid2[i] = 0}

		// new state is complement of that of left-hand neighbor.
		grid2[i] = !grid1[i-1];
		 // otherwise if cell and right-hand neighbor are both 0 
							// then new state of cell = state of left-hand neighbor; 
		if ((grid1[i] == 0) && (grid1[i+1] == 0)) {
			grid2[i] = grid1[i-1];
		}
		// console.log("grid1 : [" + (i-1) + "]= " + grid1[i-1] + ", grid2 : [" + i + "]= " + grid2[i]);
	}
	jCoord++;
}
