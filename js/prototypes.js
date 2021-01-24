// user __proto__ is Object.prototype and __proto__ of an Object is null
let user = {
    fname : 'Jasmeet',
    lname : 'Singh',
    city : 'Shahjahanpur'
}


// fun __proto__ is Function whose __proto__ is Object.prototype and __proto__ of an Object is null
function fun(){
    //
}

// a's __proto__ is Number whose __proto__ is Object.prototype and __proto__ of an Object is null
let a = 10;


// a's __proto__ is Array whose __proto__ is Object.prototype and __proto__ of an Object is null
let arr = [11,5,9,322,123,42];

// Object.prototype.printDetails = function(){
//     return `${this.fname} ${this.lname} from ${this.city}`;
// }

// console.log(user);
// console.log(user.printDetails());

let animal = {
    eats : true,
    walk(){
        console.log("Animal is Walking");
    }
}

function CreateUser(name,city){
    this.name = name;
    this.city = city;
}


let user1 = new CreateUser('Jasmeet', 'Shahjahanpur');

