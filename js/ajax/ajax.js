//ajax.js
function ajax(fileName) {
	
	var url = "js/ajax/echo.php?name=" + encodeURIComponent(fileName);
	console.log("AJAXfileNameencoded : " + encodeURIComponent(fileName));

	//ajax
	var http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.send();

	http.onreadystatechange = function() {//Call a function when the state changes.
	// console.log("url : " + url);
	    if(http.readyState == 4 && http.status == 200) {
	        console.log("http.response: " + http.response);
	        response = JSON.parse(http.response);
	        console.log("response[0] : " + response[0]);
	        console.log("response[1] : " + response[1]);
	        console.log("pattern : " + response[2]);
	        
	        if(paused == false){pause();}
	        //change board size according to pattern x, y
	        if (response[0] > 100 || response[1] > 100) {
	        	if (response[0] >= response[1]) {
	        		canvasHeight = parseInt(response[0]) + 200;
	        		canvasWidth = parseInt(response[0]) + 200;
	        	}else if (response[1] >= response[0]){
	        		canvasHeight = parseInt(response[1]) + 200;
	        		canvasWidth = parseInt(response[1]) + 200;
	        	}
	        	origenPatternsImportadosX =+ 100;
	        	origenPatternsImportadosY =+ 100;
	        	// console.log("canvasWidth : " + canvasWidth);
	        	zoom = 1;
	        	// console.log("origenPatternsImportadosX : " + origenPatternsImportadosX);
	        	init();
	        	console.log("pattern : " + response[2]);
	        	drawPattern(response[2]);
	        	
	        }
	        // document.getElementById("height").value = canvasHeight;
	        // changeHeight();

	        drawPattern(response[2]);
	       
	    }else{
	      console.log("http.readyState: " + http.readyState);
	    }
	// console.log("ajax: " + fileName);
	}     

}
