function loadDoc() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (readyState == 4 && status == 200) {
            document.getElementById("demo").innerHTML = responseText;
        }
        else {
            alert("error found");
        }
    };
    xhttp.open("GET", "ajax.text", true);
    xhttp.send();

};
