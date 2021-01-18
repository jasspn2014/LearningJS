let emp1 = {
    firstName: "Jasmeet",
    lastName: "Singh",
  };
  
  let emp2 = {
    firstName: "Simran",
    lastName: "Kaur Arora",
  };
  
  let printDetails = function (city, state) {
    console.log(`${this.firstName} ${this.lastName} from ${city} in ${state}`);
  };
  // Function Borrowing
  
  // Call method
  printDetails.call(emp1, "Shahjahanpur", "Uttar Pradesh");
  printDetails.call(emp2, "Lucknow", "Uttar Pradesh");
  
  // Apply Methods Same as Call but uses array list
  printDetails.apply(emp1, ["Shahjahanpur", "Uttar Pradesh"]);
  printDetails.apply(emp2, ["Shahjahanpur", "Uttar Pradesh"]);
  
  //Bind method Same as call but it binds the methods to the object and returns the ref
  // to that method of the object
  
  let f = printDetails.bind(emp1, "Shahjahanpur", "Uttar Pradesh");
  console.log(f);
  f();