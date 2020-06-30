// var name = "john";
// function sayhii(){
//     document.write("<br/>hii " +name);
// };
// create namespace

// var hiigreetings = {};
// hiigreetings.name = "john";
// hiigreetings.sayhii = 
//     function (){
//         document.write("<br/> hii " +hiigreetings.name);

//     }
// to invoke function immediatley without using namespaces for variable greeting

(function (window){
var hiigreetings = {};
hiigreetings.name = "john";
var greeting = "hii";
hiigreetings.sayhii = 
    function (){
        document.write("<br/> " +greeting +" " +hiigreetings.name);

    }
    window.hiigreetings = hiigreetings;
})(window);
