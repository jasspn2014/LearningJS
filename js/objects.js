// 'use strict';

// Objects

let user = {
  eid: 101,
  fname: "Jasmeet",
  mname: "Singh",
  lname: "Arora",

  //Creating Functions
  // Methods 1
  getFullName: function () {
    console.log(`${this.fname} ${this.mname} ${this.lname}`);
  },

  // Method 2
  getFullName2() {
    console.log(`${this.fname} ${this.mname} ${this.lname}`);
  },
};

//Using call or Apply
//Methods 3

let getFullName3 = function () {
  console.log(`${this.fname} ${this.mname} ${this.lname}`);
};

// user.getFullName();
// user.getFullName2();

// getFullName3.call(user); // Extra Args with comma
// getFullName3.apply(user); // Array of Extra Args

let f = getFullName3.bind(user);
// f();

// Function to Create Objects
let createUser = function (fname, lname, age) {
  return {
    fname,
    lname,
    age,
  };
};

//Constructor to Create Object with New

function CreateNewUser(fname, lname, isAdmin) {
  this.fname = fname;
  this.lname = lname;
  this.isAdmin = isAdmin;
}

let getFullName = function () {
  console.log(`${this.fname} ${this.lname}, ${this.isAdmin}`);
};

// let user2 = createUser('Jasmeet','Singh',21);
// getFullName.call(user2);

let user3 = new CreateNewUser("Jasmeet", "Singh", true);

// getFullName.call(user3);

// Property flags and Descriptors
/*

There are Three Property Flags:
1. writable
2. enumerable
3. configurable

By Default all are true so some methods are used to see them
1. Object.getOwnPropertyDescriptor(user4 (Object) ,'fname' (Property of that Object));
2. Object.defineProperty(obj,property,attrib to prop i.e value,writable,enumerable,configurable);
3. Object.defineProperties() // Can Clone with Properties
*/

let user4 = {
  fname: "Jasmeet",
  lname: "Singh",
  age: 21,
};

let nameProp = Object.getOwnPropertyDescriptor(user4, "fname");
// console.log(JSON.stringify(nameProp,null,2));

Object.defineProperty(user4, "empid", { value: "101" });
let idProp = Object.getOwnPropertyDescriptor(user4, "empid");
// console.log(JSON.stringify(idProp,null,2));

// console.log(user4);

user4.empid = "102"; // Error in Strict mode and will not change in normal mode Because empid all flags are false.
// console.log(user4);

Object.defineProperty(user4, "fname", { writable: false });

// user4.fname = 'Singh';
// console.log(user4);

// No user id because enumarable is false
// for (key in user4){
//     console.log(`${key} : ${user4[key]}`);
// }

let user5 = {
  fname: "Jasmeet",
  lname: "Singh",
  toString() {
    return `${this.fname} ${this.lname}`;
  },
};

// To String Methods is Generally Present and its enumarable is false
// console.log(user5.toString());

// If we again override this methods to our needs then it will be again showing in for .. in loop.
// Making its enumerable again false
Object.defineProperty(user5, "toString", {
  enumerable: false,
  configurable: false,
});

// for (key in user5){
//     console.log(`${key} : ${user5[key]}`)
// }

// delete user5.toString;

// console.log(user5.toString());

let user6 = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(user5)
);
// console.log(user6)

// Getters and Setter

// get is used for getter
// set is used for setter

let obj = {
  fname: "Jasmeet",
  lname: "Singh",

  get fullName() {
    return `${this.fname} ${this.lname}`;
  },

  set flname(name) {
    [this.fname, this.lname] = name.split(" ");
  },
};

// console.log(obj.fullName);

// obj.flname = "Simran Kaur";

// console.log(obj.fullName);

let obj2 = {
  get fname() {
    return this._fname;
  },

  set fname(name) {
    this._fname = name;
  },
};

obj2.fname = 'Jasmeet';

console.log(obj2.fname);


export const user10 = {
  name : 'objects.js'
}