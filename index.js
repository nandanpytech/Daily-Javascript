// console.log("hi")
// "use strict";
// x=4;
// console.log(x)
//"use strict not working here. Becoz its not in the top scope."


//x must be declared before initiliazation
// x=7;
// let x;
// console.log(x)


//var is function scope.
// function amith(){
//     var a=3;
// }
// amith()
// console.log(a)                   //it shows error



// (function() {
// 	'use strict';
// 	var person = {
// 		name: 'John'
// 	};
// 	person.salary = '10000$';
// 	person['country'] = 'USA';

// 	Object.defineProperty(person, 'phoneNo', {
// 		value: '8888888888',
// 		enumerable: false                  //Here 'phoneNo' is excluded becoz it is false
// 	})
// 	console.log(Object.keys(person)); 
// })();



// console.log(1 === 1); // Output: true
// console.log(1 === '1'); // Output: false
// console.log(true === 1); // Output: false



// //memory allocation not checking here.
// var a=5;
// var b=5;
// console.log(a==b)               //ans:true
// //memory location will be check here.
// var a=[5]
// var b=[5]
// console.log(a==b)               //ans:false



//it check the datatype of objA
// var objA = Object.create({
//     foo: 'foo'
// });
// console.log(objA.toString())           //[object Object]     

// --------------------------------------------------------------------------------------------------

// console.log(b)              //it doesn't exists in any of the scope untill initialiazation
// b=0;


// var objA = Object.create({
//     foo: 'foo'
// });
// console.log(objA)                //It creates foo:"foo" in prototype



// var objA = Object.create({
//     foo: 'foo'                       // it creates in protoype
// });
// objA.s="nandan"                      //it creates outside
// var objB = objA;
// objB.foo = 'bar';
// console.log(objA)



//ARRAYS:
// (function() {
// 	var array1 = [];
// 	var array2 = new Array(100);                             //it shows [empty*100]
// 	var array3 = new Array(['1',2,'3',4,5.6]);              //It creates 2D array like [['1',2,'3']]
// 	console.log(array1);
// 	console.log(array2);
// 	console.log(array3);
// 	console.log(array3.length);                             //1
// }());


// (function () {
//     var array = new Array('a', 'b', 'c', 'd', 'e');
//     array[10] = 'f';                                    //it creates 11 space
//     delete array[10];                                   //delete doesn't modify the length
//     console.log(array.length);
//   }());


// console.log(array.indexOf(2,3));                 first one is value to search and second one starting index



// var numbers = [2,3,4,8,9,11,13,12,16];
// 	var even = numbers.map(function(element, index){
// 		return element % 2 === 0; 
// 	});
// console.log(even)                           //it return boolean for all values [true, false, true, true, false, false, false, true, true]


// var numbers = [2,3,4,8,9,11,13,12,16];
// 	var even = numbers.filter(function(element, index){
// 		return element % 2; 
// 	});
// console.log(even)                           //it return true boolean for all values  [3, 9, 11, 13]



// var containers = [2,0,false,"", '12', true];
// 	var containers = containers.filter(Boolean);        //it only return value with True value
// 	console.log(containers);


// var containers = [2,0,false,"", '12', true];
// 	var containers = containers.filter(Number);
// 	console.log(containers);


// const one=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{resolve("foo")},1000)
// })
// const two=new Promise((resolve,reject)=>{
// 	setTimeout(()=>{resolve("foo")},2000)
// })
// var handle=Promise.all([one,two]).then(()=>console.log("hi"))


// let x;
// console.log(x)			//it gives undefine

// console.log(x)
// let x;					//it is hoisted, but not initialized

// console.log(x)
// var x					//it is hoisted , and initialized

// x=10;
// let x
// console.log(x)					//it shows error, because it should be declare first before initialization.

// function amith(){
// 	console.log(b)				//it tries to findout 'b' inside function scope first
// }
// var b=10;
// amith() 



// var obj = {
// 	message: "Hello",
// 	innerMessage: !(function() {
// 		console.log(this.message);                  //this is undefine here. becoz IIFE
// 	})()
// };
// console.log(obj.innerMessage);               


// var obj = {
// 	message: "Hello",
// 	innerMessage: function amith() {
// 		console.log(this.message);                  //it shows output here.
//     }
    
// };
// console.log(obj.innerMessage());

// console.log(!undefined)         //true
// console.log(undefined)          //false


// var obj = {
//     message: 'Hello',
//     innerMessage: function () {
//       (function () {
//         console.log(this);
//       }());
//     }
//   };
//   console.log(obj.innerMessage());

// console.log(this)


// var obj = {
//     message: 'Hello',
//     innerMessage:function(){
//        function amith() {
//         var self = this;
//         console.log(self)
//       (function () {
//         console.log(self.message);
//       }());
//     }
//     amith()
// }
//   };
//   console.log(obj.innerMessage());



// function nandan(){
//     function myFunc(){
//         console.log(this);                      //this always refers to the global object
//     }
//     myFunc()
// }
// nandan()


// function myFunc(param1) {
//     console.log(param1)                             //it is 's'
//     console.log(myFunc.length);                     //it calculate the length of parameters
//   }
// myFunc("s","b")


// function myFunc() {  
//     console.log(arguments.length);                   //it calculates the arguments
//   }
//   console.log(myFunc());
//   console.log(myFunc("a","b"));
//   console.log(myFunc("a","b","c","d"));

// ---------------------------------------------------------------------------------------------------------------------------------------------

// let nandan=(a,b)=>{
//     console.log(arguments.length)            //Invalid
// }
// nandan()

// ---------------------------------------------------------------------------------------------------------------------------------------------

// let a = 5;
// let b = a;
// b++;
// console.log(a, b); //5, 6          //primitives are pass by value only

// ---------------------------------------------------------------------------------------------------------------------------------------------

//call method          : It invokes the function along with its given object and we pass arguments seperately here.
// let obj1={name:"nandan"}
// function printaddress(village){
//     return this.name+"is from "+ village
// }
// let x=printaddress.call(obj1,"sureban")
// console.log(x)

// ---------------------------------------------------------------------------------------------------------------------------------------------

//apply mehtod         : : It invokes the function along with its given object and we pass arguments in array format here.
// let obj2={name:"nandan"}
// function printaddress(village){
//     return this.name+"is from "+ village
// }
// let y=printaddress.call(obj2,["sureban"])
// console.log(y)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// bind:               : It returns the function to variable and allow us to pass an argument 
// let obj2={name:"nandan"}
// function printaddress(village,age){
//     return this.name+"is from "+ village +" and his age is "+age
// }
// let y=printaddress.bind(obj2,"sureban")
// console.log(y(21))

// ---------------------------------------------------------------------------------------------------------------------------------------------

// closure:  function along with its lexical environment is called "closure"  
// function x(){
//     var a=5;
//     function y(){
//         console.log(a)
//     }
//     return y;
// }
// let z=x()
// z()

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Eventbubling    : Consider we have element inside the element , and we attached eventlistner to the parent element and when we click one that child , that event bubble upto the top 
// document.querySelector(".grandparent").addEventListener('click',function(){
//     console.log("Grandparent Clicked")
// })
// document.querySelector(".parent").addEventListener('click',function(){
//     console.log("parent clicked")
// })
// document.querySelector(".child").addEventListener('click',function(){
//     console.log("child Clicked")
// })

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Eventcapturing        : Opposite to Evenbubbling 
// document.querySelector(".grandparent").addEventListener('click',function(){
//     console.log("Grandparent Clicked")
// },true)
// document.querySelector(".parent").addEventListener('click',function(){
//     console.log("parent clicked")
// },true)
// document.querySelector(".child").addEventListener('click',function(){
//     console.log("child Clicked")
// },true)



// ---------------------------------------------------------------------------------------------------------------------------------------------

//currying        : It is way of accepting multiple arguments and convert them into different function with each take single argument

//using Bind method
// const multipy=function(x,y){
//         console.log(x*y)
// }
// let z=multipy.bind(this,2)
// z(3)

//using closures
// const a=function(x){
//     return function(y){
//         console.log(x*y)
//     }
// };
// let z=a(5)
// z(6)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Prototype:  Prototypes are the mechanism by which JavaScript objects inherit features from one another.
// Prototype Inheritance : the linking of prototypes of a parent object to a child object to share and utilize the properties of a parent class using a child class.



 


//polyfill for bind method
// let obj1={name:"nandan"}

// let addition=function(x,y){
//     console.log(this.name+" "+x+" "+ y)
// }

// Function.prototype.mybind=function(...args){
//     let self=this
//     let params=args.slice(1)
//     return function(...arg2){
//         self.apply(args[0],[...params,...arg2])
//     }
// }

// let x=addition.mybind(obj1,"bilagi")
// x("21")





//Reduce  : which is used to iterate over the array and it takes two paramete those are accumulator and current
// Accumulator : Which stores the result 
// let arr=[1,2,3,4,5]
// let duplicate=arr.reduce((acc,curr)=>{
//     return acc+curr
// })
// console.log(duplicate)



// Max number using Map method  
// let arr=[1,2,10,3,4,5]
// let maxnumber=arr.reduce((acc,curr)=>{
//     if(curr>acc){
//         acc=curr
//     }
//     return acc
// })
// console.log(maxnumber)


//Findout occurance using Reduce
// let obj=[
//     {name:"rajesh",age:26},
//     {name:"Manju",age:26},
//     {name:"Nandna",age:52},
//     {name:"Amitih",age:2},
//     {name:"darshan",age:52},
// ]

// let res=obj.reduce((acc,curr)=>{

//     if(acc[curr.age]){
//         acc[curr.age]= ++acc[curr.age]
//     }else{
//         acc[curr.age]=1
//     }
//     return acc

// },{})
// console.log(res)

//People with less than 30 age using reduce
// let obj=[
//     {name:"rajesh",age:26},
//     {name:"Manju",age:26},
//     {name:"Nandna",age:52},
//     {name:"Amitih",age:2},
//     {name:"darshan",age:52},
// ]

// let res=obj.filter((name)=>{
//     return name.age<30
// })
// console.log(res.map((e)=>e.name))           //using map

// let ans=res.reduce((acc,curr)=>{            //using Reduce
//     acc.push(curr.name)
//     return acc
// },[])
// console.log(ans)


// ---------------------------------------------------------------------------------------------------------------------------------------------

// function getNumber(){
// 	return (2,4,5);                                     //it returns 5 only becoz it is in tuple.
// }

// var numb = getNumber();
// console.log(numb);  

// ---------------------------------------------------------------------------------------------------------------------------------------------


// function mul(x){
// 	return function(y){
// 		return [x*y, function(z){
// 			return x*y + z;
// 		}];
// 	}
// }
// console.log(mul(2)(3));                         //it return [6,function(z)]
// console.log(mul(2)(3)[0]);                      //it return 6          

// ---------------------------------------------------------------------------------------------------------------------------------------------






// ---------------------------------------------------------------------------------------------------------------------------------------------

// lexical environment is scope of function along with its lexical environment of parent 
// Chain of lexical environment is Scope chain. 
// Temporal Dead Zone is the period of time during which the let and const declarations cannot be accessed 

// what is html:
// HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. 

// what is javascript:
// JavaScript is a scripting or programming language that allows you to implement complex features on web pages



// ---------------------------------------------------------------------------------------------------------------------------------------------

//callback 

// function a(message){
//     setTimeout(()=>{
//         message (`It is a`)
//     },2000)
// }

// function b(message2){
//     setTimeout(()=>{
//         message2("it is b")
//     },1000)
// }
// let res=a(function message(res){
//     console.log(res)
//     b(function message2(res){
//         console.log(res)
//     })
// })


// ---------------------------------------------------------------------------------------------------------------------------------------------

//Promise

// function a(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("it is a")
//         },2000)
//     })
// }
// function b(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("it is b")
//         },1000)
//     })
// }

// a().then(res=>{
//     console.log(res)
//     b().then((res)=>{
//         console.log(res)
//     })
// })


// Promise.race() //it executes promise which completes the first
// Promise.all() // it doesn't execute code if any promise fails
// Promise.allSettled() //it doesn't look for fulfilled or rejecteds
// Promise.any()  //it is like race and it only executes the first and ignore the all.

// ---------------------------------------------------------------------------------------------------------------------------------------------


//No resolve means no then() method execution.
// const promise=new Promise((res,rej)=>{
//     console.log("hi")
// })
// promise.then(()=>{
//     console.log("No resolved happened")
// })

// ---------------------------------------------------------------------------------------------------------------------------------------------


//Class Constructor
class Employee{
    constructor(name,age){
        this.name=name;
        this.age=age
    }
}
class Person extends Employee{
    constructor(name){
        super(name)
    }
}


let a=new Person("Nandna",21)
console.log(a.age)

// ---------------------------------------------------------------------------------------------------------------------------------------------
