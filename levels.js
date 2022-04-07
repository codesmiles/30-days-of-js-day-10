// create an empty set
const empty = new Set();
// console.log(empty);

// Create a set containing 0 to 10 using loop
const numArr = new Set();
for (i = 0; i <= 10; i++) {
  numArr.add(i);
}
// console.log(numArr);

// Remove an element from a set
numArr.delete(Math.round(Math.random() * 10));
// console.log(numArr);

// Clear a set
numArr.clear();
// Create a set of 5 string elements from array
const str = ["a", "b", "c", "d", "e"];
const fiveStrings = new Set(str);
// console.log(fiveStrings);

// Create a map of countries and number of characters of a country
const countries = ["Finland", "Sweden", "Norway"];
const countriesAndNumberMap = new Map();
countries.map((el) => {
  countriesAndNumberMap.set(el, el.length);
});
// console.log(countriesAndNumberMap);

// ALTERNATIVELY
// for (i = 0; i < countries.length; i++){
//     countriesAndNumberMap.set(countries[i], countries[i].length);
// }
// console.log(countriesAndNumberMap);

const a = [ 4, 5, 8, 9];
const b = [3, 4, 5, 7];

// Exercises:Level 2
// Find a union b
const c = new Set([...a, ...b]);//or basicaly store them in a variable;
// console.log(c);

// Find a intersection b

let A = new Set(a);
let B = new Set(b);

let interset = a.filter((num) => B.has(num));

console.log(interset);

// Find a with b

// Exercises:Level 3
// How many languages are there in the countries object file.


// *** Use the countries data to find the 10 most spoken languages:

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 10))[
//   ({ English: 91 },
//   { French: 45 },
//   { Arabic: 25 },
//   { Spanish: 24 },
//   { Russian: 9 },
//   { Portuguese: 9 },
//   { Dutch: 8 },
//   { German: 7 },
//   { Chinese: 5 },
//   { Swahili: 4 },
//   { Serbian: 4 })
// ]

// // Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
// [ {'English':91}, {'French':45}, {'Arabic':25} ]