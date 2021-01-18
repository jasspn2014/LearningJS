let users = [
  {
    eid: 100,
    fname: "Alpha",
    lname: "Unit",
  },
  {
    eid: 101,
    fname: "Bravo",
    lname: "Unit",
  },
  {
    eid: 103,
    fname: "Charlie",
    lname: "Unit",
  },
];

// Function Declaration & Statements
function printFDFS(users) {
  for (let user of users) {
    for (key in user) {
      console.log(`${key} : ${user[key]}`);
    }
  }
}

// printFDFS(users);

// Function Expression
let printFE = function (users) {
  for (let user of users) {
    for (key in user) {
      console.log(`${key} : ${user[key]}`);
    }
  }
};

// printFE(users);

// Anonymous Functions
// A function without a name is called anonymous function.
// Usually used in Function Expressions.

/*

function (users) {
    for (let user of users) {
      for (key in user) {
        console.log(`${key} : ${user[key]}`);
      }
    }
}

*/

// NFE - Named Function Expression

let printNFE = function nf(user) {
  if (user != undefined) {
    console.log(`Hello, ${user}`);
  } else {
    // printNFE("Guest"); // Will Produce error if this whole function is allocated to other variable and this is now deleted. so using nfe is better option
    nf("Guest");
  }
};

// Benefit of NFE
// let newFunction = printNFE;
// printNFE = null;
// newFunction("Jasmeet");

// params and args
function sum(a /* param1 */, b /* param2 */) {
  //Parameters
  return a + b;
}

// let s = sum(10, 20); // Arguments
// console.log(s);

// First Class Functions
/* 
    First Class functions is the property of the functions that
    they can be used as a variable arguments and used as a Object
    this property is collectively known as first class functions.
*/

// IIFE (Self Invoking Functions)

// A function invoking itself on compilation present in global scope is known as IIFE
// IIFE means Immediately Invoked Function Expression

// Example:
// (function printHello(){
//     console.log('Hello World');
// })();

// Advantages:

/* 
    1. Avoid Global scope of Being Pollutated.
       Which means that they are not hoisted at the beginning
       They are invoked when encountered and then gone
       Collected by Garbage Collector
    2. Manage Minimum Browser memory
    3. Minification Optimization


*/

// Arrow Functions

// Points to Remember

// 1. Arrow Function has no this.
// 2. Can’t be called with new
// 3. They also don’t have super

// Arrow Function Example

let func = (a, b) => {
  return a + b;
};

// console.log(func(10,20));

// let user = {
//   eid: 104,
//   fname: "Delta",
//   lname: "Unit",
//   fullName: function () {
//     (() => {
//       console.log(`${this.fname} ${this.lname}`);
//     })();
//   },
// };

// user.fullName();
