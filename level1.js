// create an empty set
const empty = new Set();
console.log(empty);

// Create a set containing 0 to 10 using loop
const numArr = new Set();
for (i = 0; i <= 10; i++) {
  numArr.add(i);
}
console.log(numArr);
// Remove an element from a set
numArr.delete(Math.round(Math.random() * 10));
console.log(numArr);
// Clear a set
numArr.clear();
// Create a set of 5 string elements from array
const str = ["a", "b", "c", "d", "e"];
const fiveStrings = new Set(str);
console.log(fiveStrings);
// Create a map of countries and number of characters of a country
const countries = ["Finland", "Sweden", "Norway"];
const countriesAndNumberMap = new Map();
countries.forEach((el) => {
  countriesAndNumberMap.set(el, el.length);
});

// ALTERNATIVELY
// for (i = 0; i < countries.length; i++){
//     countriesAndNumberMap.set(countries[i], countries[i].length);
// }

console.log(countriesAndNumberMap);
const a = [ 4, 5, 8, 9];
const b = [3, 4, 5, 7];
// Exercises:Level 2
// Find a union b
const c = new Set([...a, ...b]);//or basicaly store them in a variable;
console.log(c);
// Find a intersection b


// Find a with b
