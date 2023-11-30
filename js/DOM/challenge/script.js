// I need to write the logic for this app
// a function that takes in 3 parameters
// returns a boolean

// age >= 21 for USA
// rest of countries  >= 18
//level of Drunk <= 3 to be fine

const checkIfAllowed = (age, country, levelOfDrunk) => {
  return (
    (age >= 21 && levelOfDrunk <= 3) ||
    (age >= 18 && levelOfDrunk <= 3 && country !== "USA")
  );
};

console.log(checkIfAllowed(21, "UK", 2)); // true
console.log(checkIfAllowed(18, "UK", 2)); // true
console.log(checkIfAllowed(18, "USA", 2)); // false
console.log(checkIfAllowed(12, "USA", 2)); // false
console.log(checkIfAllowed(32, "USA", 4)); // false
