const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts'   // new HttpRequest instance
var params = 'title=foo&body=bar&userId=1';
http.open('POST', url,true);
//http.send(JSON.stringify({title:"foo", body:"bar",userId:"1"}));
//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

http.onreadystatechange = function() {//Call a function when the state changes.
    console.log(this.readyState);
    console.log(this.status);
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
    }
}
http.send(params);
