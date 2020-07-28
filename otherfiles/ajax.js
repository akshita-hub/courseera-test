function loadDoc(){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        console.log("on readystatechanged");
        if (this.readyState==4 && this.status ==200){
            console.log("success", this.responseText)
            document.getElementById("demo").innerHTML= this.responseText;
            
        }
    };
    xhttp.open("POST","https://my-json-server.typicode.com/typicode/demo/db" ,true);
    xhttp.send('{"id":4,"title":"post 4"}');

};