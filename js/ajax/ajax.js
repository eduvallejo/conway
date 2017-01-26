//ajax.js
function ajax(fileName) {
 console.log("ajax: " + fileName);

var http = new XMLHttpRequest();

var url = "js/ajax/echo.php?name=" + fileName;
console.log("url : " + url);

// var url = "js/ajax/echo.php?name=blinker";

// var params = "name=nombre";
http.open("GET", url, true);

//Send the proper header information along with the request
// http.setRequestHeader("Content-type", "text/plain");
http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log("http.response: " + http.response);
    }else{
      console.log(http.status);
    }
}
http.send();
     

}
