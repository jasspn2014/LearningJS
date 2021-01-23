arr = [45, 100, 9436, 2, 114223, 1, 28, 33, 7112];

arr.sort((a, b) => {
  return a - b;
});

for (let i of arr) {
  //   console.log(i);
}

// for .. of is used for collections like array

// for .. in is used for objects

// Some important js array methods

/* 
    1. find()
    2. concat()
    3. findIndex()
    4. forEach()
    5. indexOf()
    6. join()
    7. map()
    8. lastIndexOf() 
    9. flat()
    10. pop()
    11. flatMap()
    12. push() 
    13. filter() 
    14. sort() 
    15. reverse() 
    16. shift() 
    17. slice()
    18. splice()
    19. toString()
    20. unshift()
    21. split()

*/

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = inventors.filter((inventor) => {
  return inventor.year >= 1500 && inventor.year < 1600;
});
console.log(bornIn1500s);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstName = inventors.map((inventor) => inventor.first);
console.log(firstName);

const lastName = inventors.map((inventor) => inventor.last);
console.log(lastName);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort((a, b) => {
  return a.year - b.year;
});

console.log(inventors);


// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const passedYear = inventors.map((inventor) => inventor.passed);
passedYear.sort((a, b) => a - b);
console.log(passedYear[passedYear.length - 1] - passedYear[0]);


// 5. Sort the inventors by years lived
inventors.sort((a, b) => {
  return b.passed - b.year - (a.passed - a.year);
});
console.log(inventors);


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris



// 7. sort Exercise
// Sort the people alphabetically by last name



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

data.reduce(()=>{
  
})