(function (global) {
    document.addEventListener("DOMContentLoaded",
function(event)
{
    function hello(event){
        // console.log(event);
    this.textContent= "said it";

    
    var x=document.getElementById("hello").value;
    var y = "hello " + x;
// document.getElementById("demo").innerHTML= y;
document.getElementById("demo").textContent=y;

// to change or add anyelement in html according to particular value entered by user

if(x==="student"){
    var title= document.querySelector("#title").textContent;
    title += " course";
    document.querySelector("#title").textContent=title;

}
}

// event handling
    
   document.getElementById("btn").addEventListener("click" , hello);
   document.getElementById("title").addEventListener("mouseover", function(event){
       event.target.style.color= "orange";
       setTimeout(function() {
        event.target.style.color = "";
      }, 500);
    }, false);
   
   

}
);
})(window);
