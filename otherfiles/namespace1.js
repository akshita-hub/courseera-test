// var name = "akshita";
// function sayhello(){
//     document.write("hello " +name);
// };
// name as been over return so now name as value john
// create namespace 

// var hellogreetings = {};
// hellogreetings.name = "akshita";
// hellogreetings.sayhello = 
//     function(){
//         document.write("hello " +hellogreetings.name);
//     }

    // to invoke function immediatley without using namespaces for variable greeting
    // as now variable greeting is global variable so we defined window value in function 

   (function (window){ 
       var hellogreetings = {};
hellogreetings.name = "akshita";
var greeting = "hello";
hellogreetings.sayhello = 
    function(){
        document.write( greeting +" " +hellogreetings.name);
    }
    // hellogreeting is exposed globally bcz it is in function window which is global
    window.hellogreetings = hellogreetings;
    // here we are executing function  window in ()
})(window);


