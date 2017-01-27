//ajax.js
function ajax(fileName) {
	var url = "js/ajax/echo.php?name=" + fileName;

	//ajax
	var http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.send();

	http.onreadystatechange = function() {//Call a function when the state changes.
	// console.log("url : " + url);
	    if(http.readyState == 4 && http.status == 200) {
	        console.log("http.response: " + http.response);
	        pattern = http.response;
	        // pattern = response;
	        console.log("pattern : " + pattern);
	        
	        // pattern();
	        drawPattern(pattern);
	    }else{
	      console.log("http.readyState: " + http.readyState);
	    }
	// console.log("ajax: " + fileName);
	}     

}
