// Optional Chaining Example

let user = {
    name : 'Jasmeet',
    age : 21,
    salary : 200000,
    // address : {
    //     house: '681',
    //     street1: 'Near Malhar Cinema, Baduzai First',
    //     street2: '',
    //     city: 'Shahjahanpur',
    //     pincode: '242001'
    // }
}

console.log(user?.address?.street1);

// For Function

let user = {
    name : 'Jasmeet',
    age : 21,
    salary : 200000,
    // address : {
    //     house: '681',
    //     street1: 'Near Malhar Cinema, Baduzai First',
    //     street2: '',
    //     city: 'Shahjahanpur',
    //     pincode: '242001'
    // }

    // display : function(){
    //     return `${this.name}, ${this.age}, ${this.salary}`;
    // }
}

// For Functions if function is not available we can use optional chaining
large.innerHTML = user.display?.();