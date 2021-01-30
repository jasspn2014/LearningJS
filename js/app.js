// "use strict";
// //Example of Using Functions and also showing callback function

const large = document.getElementById("large-txt");
const med = document.getElementById("med-txt");
const small = document.getElementById("small-txt");


// Objects

/*

let user = new Object(); // Constructor Syntax
let user = {}; // Literal Syntax

let user = {
    name : 'Jasmeet Singh',
    age : 21,
    isAdmin : true
}

// If want space in between
user['salary intake'] = 10000;

//TO Delete
delete user['salary intake'];
console.log(user);

// To User Computed Value

let fruit = prompt("Which fruit Do you want?");
let qty = prompt(`How many ${fruit} do you want?`);
grocery = {
    [fruit] : qty
};

console.log(grocery);

//// Property Value Shorthand

function makeUser(name,age,salary){
    return {
        name : name,
        age : age,
        salary : salary
    };
}


// let user = makeUser("Jasmeet",21,1000000);

// console.log(user);


//// We can also optimize it using

function makeUser(name,age,salary){
    return {
        name,
        age,
        salary
    };
}


let user = makeUser("Jasmeet",21,1000000);

console.log(user);


We can also use reseved keywords in this above return statement
it wont give any error it is valid in only short hand property value.


//// Property existence test, “in” operator

// We can use in operator to check whether a property exist inside an
// Object or Not

let user = {};
alert( user.noSuchProperty === undefined ); // true means "no such property"

// Long Method Above But can also use : 
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist


// // for .. in in objects 

// Used to print all the values or property names:

let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }

*/

// Objects uses reference while copying or assigning
// So change in one also changes others.

/*

let user = {
    name : 'jasmeet',
    age : 21
};

let user2 = user;

console.log(user.name);
console.log(user2.name);

user.name = 'singh';

console.log(user.name);
console.log(user2.name);

*/

// can also use

// let user = {
//     name : 'jasmeet',
//     age : 21
// };

// let clone = {};

// for(key in user){
//     clone[key] = user[key];
// }

// console.log(user);
// console.log(clone);

// clone.name = "Singh";

// console.log(user);
// console.log(clone);

// // or can also use assign method

// let user = {
//     name : 'Jasmeet',
//     age : 21
// };

// // let clone = Object.assign({},user);
// // //or
// // let clone = {};
// // Object.assign(clone,user);

// console.log(user);
// console.log(clone);

// clone.name = "Singh";

// console.log(user);
// console.log(clone);

// Problem

// let user = {
//     name : 'Jasmeet',
//     age : 21,
//     other:{
//         isAdmin : true,
//         isUser : false,
//         isOk : 'Yes'
//     }
// };

// let clone = Object.assign({},user);

// console.log(user);
// console.log(clone);

// user.name = "Singh";
// user.other.isAdmin = false;
// user.other.isUser = true;

// console.log(user);
// console.log(clone);

// To Counter this Problem we can we set a condition to check if a property is
// Object if it is a object then again copy it using assign.

// Deep Copying or Assigning if object inside a object
// let user = {
//     name : 'Alpha',
//     age : 21,
//     other:{
//         fatherName : "Beta",
//         mothername : "Omega"
//     }
// };

// let clone = {};

// for(key in user){
//     if((typeof user[key]) === 'object'){
//         clone[key] = Object.assign({},user[key]);

//     }else{
//         clone[key] = user[key];
//     }
// }

// console.log(user);
// console.log(clone);

// clone.name = "Alpha2";
// clone.other.fatherName = "Beta2";
// clone.other.mothername = "Omega2";

// console.log(user);
// console.log(clone);

// this keyword

/*

const user = {
    name : 'Jasmeet',
    age : 21,
    salary : 150000,
    display : function(){
        return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
    }
};

document.write(user.display());

*/

// Function in a Object

// const user = {
//     name : 'Jasmeet',
//     age : 21,
//     salary : 150000,
//     display() {
//         return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
//     }
// };

// // Another Way

// const user = {
//     name : 'Jasmeet',
//     age : 21,
//     salary : 150000,
//     display : function() {
//         return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
//     }
// };

// // Another Way

// const user1 = {
//     name : 'Jasmeet',
//     age : 21,
//     salary : 150000,

// };

// user1.display = function() {
//     return `Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`;
// }

// document.write(user.display() + "<br>");
// document.write(user1.display());

// name = "Jasmeet";

// let user = {
//     name : 'Singh',
//     age : 21
// }

// let user2 = {
//     name : 'Arora',
//     age : 25
// }

// function sayHi(){
//     document.write(this.name + "<br>");
// }

// user.sayHi = sayHi;
// user2.sayHi = sayHi;

// sayHi();
// user.sayHi();
// user2.sayHi();

// Cannot use this in arrow function it will show undefined.

// name = "Jasmeet";

// let fun = (age) => {
//     document.write(age + "<br>");
// }

// fun(21);

// Constructors

// function CreateUser(name){
//     this.name = name;
//     this.age = 21;
// }

// let user1 = new CreateUser('Jasmeet');
// console.log(user1);

// // we can check if function is called with new keyword or not
// // to check it we can use new.target

// function User(name) {
//     if (!new.target) { // if you run me without new
//       return new User(name); // ...I will add new for you
//     }

//     this.name = name;
//   }

//   let john = User("John"); // redirects call to new User
//   alert(john.name); // John

// Constructor Task 1

// let obj = {};
// function A() {
//     return obj;
// }
// function B() {
//     return obj;
//   }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

// Constructor Task 2

// function Calculator(){

//     this.read = function() {
//         this.a =  prompt("Enter first Number");
//         this.b =  prompt("Enter Second Number");
//     }

//     this.sum = function(){
//         return Number(this.a) + Number(this.b);
//     }

//     this.mul = function(){
//         return this.a * this.b;
//     }

// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// Constructor Task 3

// function Accumulator(a){
//     this.value = a;
//     this.read = function() {
//         this.inp = prompt("Enter Value: ");
//         this.value += Number(this.inp);
//     }
// }

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value); // shows the sum of these values

// The optional chaining ?. stops the evaluation if the part before ?. is undefined or null and returns that part.

// Further in this article, for brevity, we’ll be saying that something “exists” if it’s not null and not undefined.

// In other words, value?.prop:

// is the same as value.prop if value exists,
// otherwise (when value is undefined/null) it returns undefined.
// Here’s the safe way to access user.address.street using ?.:

// let user = {}; // user has no address

// alert( user?.address?.street ); // undefined (no error)
// The code is short and clean, there’s no duplication at all.

// Reading the address with user?.address works even if user object doesn’t exist:

// let user = null;

// alert( user?.address ); // undefined
// alert( user?.address.street ); // undefined

// let a = prompt("Enter a Number");

// function isPrime(a){

//     for(let i=2;i<a;i++){
//         if(a%i == 0){
//             return false;
//         }
//     }

//     return true;

// }

// if(isPrime(a)){
//     large.innerHTML = `${a} is a Prime Number`;
// }else{
//     large.innerHTML = `${a} is Not a Prime Number`;
//}



// Primitive Datatypes in JS:
// 1. Number
// 2. String
// 3. BigInt
// 4. undefined
// 5. null
// 6. Boolean
// 7. Symbol

// 1. Object

//// JS Methods

//1. String Methods

/* 
 * 1. toUpperCase() = returns string to uppercase.
                        let str = 'jasmeet';
                        str = str.toUpperCase();
                        console.log(str);
 * 2. toLowerCase()
 * 3. 
 * 
 * 
 * 
 * 
 *
 * 
 * 
*/

//2. Number Methods

/* 
 * 1. toFixed() = To set precision in Decimal Values by Rounding it..
                  It ALways returns a String
                let a = 324234.55532342;
                console.log(a.toFixed(2));
 * 2. Number("123") : Typecase string to number
                        let n = Number("123");
                        console.log(n);
                        console.log(typeof n)
 */

// let user = {
//     name : 'Jasmeet',
//     age : 21,
//     salary : 200000,

// }

// let json = JSON.stringify(user);
// let obj = JSON.parse(json);
// alert(obj);

// let a = 100;

// function x(){
//     let a = 100;
//     function y(){
//         let a = 1000;
//         function z(){
//             console.log(a);
//         }
//         return z;
//     }
//     return y();
// }

// let m = x();

// m();

// let x = 10;

// function f(){
//     console.log("Hoisting");
// }
// f();
// console.log(x)

// function f() {
//     for (var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, 1000);
//         }

//         close(i);
//     }
// }

// f();

// function outer(){
//     let a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// let inner = outer();
// inner();

// function Counter(){
//     let count = 0;
//     this.inc = function(){
//         count++;
//         console.log(count);
//     }

//     this.dec = function(){
//         count--;
//         console.log(count);
//     }
// }
// // console.log(count);

// let obj = new Counter();
// obj.inc();
// obj.inc();
// obj.inc();
// obj.inc();

// obj.dec();
// obj.dec();
// obj.dec();

// function printSeries() {
//     for (var i = 1; i <= 5; i++) {
//         function count(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, x * 1000);
//         }
//         count(i);
//     }
// }

// printSeries();

//JS Events

// console.log(1);

// function loadTime(){
//     this.innerHTML = Date();
// }

// const loadTime2 = function(){
//     document.getElementById('med-txt').innerHTML = Date();
// }

// const loadTime3 = () =>{
//     document.getElementById('small-txt').innerHTML = Date();
// }

// const btn1 = document.getElementById('btn');
// // console.log(btn1)

// btn1.onmouseover = function(){
//     this.innerHTML = Date();
// }

// btn1.onmouseout = function(){
//     this.innerHTML = "Mouse Out";
// }

// btn1.addEventListener('keydown', function(){
//     this.innerHTML = "Key Down";
// });

// btn1.keydown =  function(){
//     this.innerHTML = "Key Down";
// // };
// let x = "We are the so-called \'Vikings' \v from the north.";
// const large = document.getElementById('large-txt');
// large.innerHTML = x;

// let user = {
//   fname: "Jasmeet",
//   lname: "Singh",
//   age: 21,
//   salary: 1000000,

//   get fullName() {
//     return `${this.fname} ${this.lname}`;
//   },

//   set SeperateFullName(value) {
//     [fname, lname] = value.split(" ");
//   },
// };

// console.log(user.fname);
// console.log(user.lname);
// console.log(user.fullName);

// user.seperateFullName = "Riya Sharma";

// console.log(user.fname);
// console.log(user.lname);
// console.log(user.fullName);

// let a = 10;

// IIFE

// 1. Avoid Global scope of Being Pollutated.
//      Which means that they are not hoisted at the beginning
//      They are invoked when encountered and then gone
//      Collected by Garbage Collector
// 2. Manage Minimum Browser memory
// 3. Minification Optimization

// (function(){
//     let a = 10;
//     console.log('Hello' + a);
// })();

// // Benefit of NFE
// let sayHi = function func(who){
//     if(who){
//         console.log(`Hello ${who}!`);
//     }else{
//         func('Guest')
//     }
// }

// let c = sayHi;
// sayHi = null;
// c();

// function sayHello(fname,lname){
//     console.log(`Hello ${fname} ${lname}`);
// }

// let tid = setInterval(sayHello,1000,'Jasmeet','Singh');

// setTimeout(() => clearTimeout(tid), 5000);

// let delay = 5000;

// setTimeout( function req() {
//     if(true){
//         delay *= 2;
//     }
//     setTimeout(req,delay);
//     console.log('Downloading....');
// },delay);

// let i = 1;
// setInterval(function func() {
//   func(i++);
// }, 100);

// function func(i){
//     console.log(i);
// }

// let i = 1;
// setTimeout(function run() {
//   func(i++);
//   setTimeout(run, 100);
// }, 100);

// setTimeout(() => console.log('World'))

// console.log('Hellow')

// function printNumbers(from, to) {
//   // let tid = setInterval(() => {
//   //     if(from == to){
//   //         clearInterval(tid);
//   //     }
//   //     console.log(from++);
//   // }, 1000);

//   let tid = setTimeout(function f(){
//       console.log(from)
//       if(from < to){
//         setTimeout(f,1000);
//       }
//       from++;
//   }, 1000);
// }

// printNumbers(10, 20);

// let i = 0;

// setTimeout(() => alert(i), 100); // ?

// // assume that the time to execute this function is >100ms
// for(let j = 0; j < 100000000; j++) {
//   i++;
// }

// function cacheDecorator(func){

//     let cache = new Map();

//     return function(x){
//         if(cache.has(x)){
//             return cache.get(x);
//         }

//         let result = func(x);

//         cache.set(x,result);
//         return result;
//     }
// }

// slow = cacheDecorator(slow);

// console.log('Halt');

// setTimeout(() => {
//     console.log('Time out');
// },5000);

// console.log('Halt again')




