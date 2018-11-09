const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/posts/1';
Http.open("GET", url);
Http.send();
Http.onreadystatechange=function(){
    console.log(this.status)

    if(this.readyState==4&&this.status==200)
    {console.log(Http.responseText)
        let inp = JSON.parse(Http.responseText);
        console.log(inp);
        var json = inp;
        console.log(json.userId);

    }

}

