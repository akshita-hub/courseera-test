// fuction and scope example
            // var x,y,z;
            // x=5;
            // y=6;
            // z=3;
        //     function a() {
        //         var z= x+y;

        //         document.write("addition:"+z);
        //         b();
                
               
                
        //     }
            
        //     function b(){
                
               
        //         document.write("<br/>value of z:" +z);
        //     }
        //     a();

        //     // string example
        //     // var x= "<br/>my name is javascript";
            
        //     document.write(x);

        //    object example
        //     var person ={
        //     name:{
        //         firstName : "akshita",
        //         lastName : "nerella"
        //     },
        //         age : 26 ,
        //         number :7715847576
            
        //     };
        //     document.write("<br/> person details:");
        // document.write("<br/>name:"+person.name.firstName +" " +person.name.lastName, "<br/> age:"+person.age ,"<br/> phone number:"+person.number );
        
        // // concatination strings

        // var string1 = "hello";
        // // var string2 = string1 + " world";
        // string1 += " world";
        // document.write("<br/>"+string1 + " !" );

        // operators (+,-,*,/) and undefined value
        // var x=5 , y=6 , z=10;
        // document.write((x+z)/y);
        // document.write("<br/>" (null/z));

        // equality(==)
//         var x=5 , y=5;
//         if(x==y){
//             document.write("x=5 is equal to y=5");
//         }
//         var x="5"
//          if (x==y){
//             document.write("<br/>x='5' is equal to y=5");
//         }
// // strict equality(===)
// if (x===y){
//     document.write("<br/>x='5' is equal to y=5");
// }

// else {
//     document.write("<br/> x='5' is not equal to y=5");

// }

// function addition(x,y){
//     return (x+y);
// };
// document.write(addition(4,5));

// passing as an abject 

//  addition.version= 'v1.2';
// document.write(addition.version);

// // function factory
// function addition(add){
//     var myfunc= function(x){
//         return add + x;
//     };
//     return myfunc;
// };
// var addby3 = addition(3);  
// document.write("<br/>", addby3(10));
// var doubleadd = addition(2*10);
// document.write("<br/>" , doubleadd(10));

// // passing function as an argument
//  function dooperation(x,operation) {
//      return operation(x);
//  };
// //  here we have passed addby3= addition(x) function defined above as argument operation 
//  var result= dooperation(5,addby3)
//  document.write("<br/>",result);


// // functions passing by value
// function passbyvalue (value1){

//   document.write("<br/> before <br/> value1: " +value1);
//   document.write("<br/> value2: " +value2);

// value1 = 5;
// document.write("<br/> after <br/> value1: " +value1);
 
// };
// var value2=7
  
// passbyvalue(value2)
// document.write("<br/> after changing value1 to 5 value2 is still:")
// document.write("<br/>" ,value2);

// // object passing by reference
// function changeobject(objvalue){
//     document.write("<br/> before <br/> objvalue:" +objvalue.x);
//     document.write("<br/> value: " +value.x);

//     objvalue.x=5;
//     document.write("<br/> after <br/> objvalue: " +objvalue.x);
// };

// value={x : 7};
// changeobject(value);
// document.write("<br/> after changing objvalue to 5 the value: " +value.x);

// // function constructors,prototype and this 
// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     };
// };
// Circle.prototype.getarea= function(){
//     return Math.PI * Math.pow(this.radius,2);

// };

// var mycircle = new Circle(10);
// document.write("<br/> radius of circle: " +mycircle.radius); 
// document.write("<br/> area of circle: " +mycircle.getarea());

// //another example of square
// class Square {
//     constructor(length, breadth) {
//         this.length = length;
//         this.breadth = breadth;
//         this.area = function(){
//             return length * breadth;
//         };
//     };
// };

 
// var mysquare = new Square(10,5);

// document.write("<br/> length: " +mysquare.length);
// document.write("<br/> breadth: " +mysquare.breadth);
// document.write("<br/> area of square: " +mysquare.area());
// var mysquare1 =  new Square(5,5);

// document.write("<br/> length: " +mysquare1.length);
// document.write("<br/> breadth: " +mysquare1.breadth);
// document.write("<br/> area of square: " +mysquare1.area());

// //this keyword in normal function points to global window
function test(){
    console.log(globalThis);
};
test();

// array
// var details = new Array();
// details[0] = "akshita";
// details[1] = 26;
// details[2] = function (lastname){
//   document.write("lastname:" +lastname);
// };
// details[3] ={hobbies:"reading , watching tv"};
// // document.write(details);
// details[2]("nerella");
// document.write("<br/> name :"  +  details[0]);
// document.write("<br/>", details[3].hobbies);

// another short declaration of array
// var details = ["nerella" ,"akshita",26];
// document.write("<br/>",details);
// for (var i=0;i<details.length;i++)
// {
// document.write("<br/>", details[i]);
// }
// to add element into array
// details[5]="27/02/1993";
// for (var i=0;i<details.length;i++)
// {
// document.write("<br/>", details[i]);
// }


// another type of for loop for arrays

// for(var detail in details){
//     document.write ("<br/>", details[detail]);
// }
// to add object in to array
// details.hobbies="reading,playing";
// for(var detail in details){
//     document.write ("<br/>", details[detail]);
// }

// closures

// gobally declared multiplier
// function makemultiplier(multiplier){
//     function a(){
//         // multiper is not defined within function so it will take from global declaration
//         document.write("<br/> multiplier :" +multiplier);
//     };
//  a();
//     return (
//         function (x){
// // here also it will take multiplier from global declaration
//         return multiplier*x;

//         }
//     );
// };

// var multiplyby4 = makemultiplier(4);

// document.write("<br/>", multiplyby4(5));
