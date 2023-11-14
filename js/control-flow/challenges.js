// Challenge: Comparing Numbers

// MVP:
// Check for the smallest value

// Create two variables x & y
// Write an if / else block
// It should compare a number x to another number y
// It should print ("x is greater than y") in the console
// Or "x is smaller than y"
// Or "x is equal to y"
// Depending on the value of x and y

let x = 5;
let y = 3;

if (x > y) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("x is smaller than y");
} else {
  console.log("x is equal to y");
}

// MVP:
// Console log the user's input depending on the data type

// Create a variable userInput
// Write an if / else block
// If the input is a number, it should console log that number but squared
// If the input is a string, it should console log that input
// If the input is anything else, the console should say "invalid input"

let userInput = "222";

if (parseInt(userInput)) {
  console.log("this is a number");
} else {
  console.log("this is string");
}
