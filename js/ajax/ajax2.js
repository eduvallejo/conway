//ajax.js
function ajax(fileName) {
 // console.log("ajax: " + fileName);
var url = "js/ajax/echo.php?name=" + fileName;
// console.log("url : " + url);

//ajax
var http = new XMLHttpRequest();
http.open("GET", url, true);
http.send();

http.onreadystatechange = function() {//Call a function when the state changes.
    // console.log("statechange");
    console.log("http.readyState: " + http.readyState);
    if(http.readyState == 4 && http.status == 200) {
        console.log("http.response: " + http.response);
      // console.log("http.readyState: " + http.readyState);
    }else{
    }
}

// var url = "js/ajax/echo.php?name=blinker";

// var params = "name=nombre";

//Send the proper header information along with the request
// http.setRequestHeader("Content-type", "text/plain");
     

}
