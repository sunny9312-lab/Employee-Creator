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

//switch statement : 중간에 break문 않쓰면 뒤에 줄줄이 조건문을 탄다.

let fruit = "raspberry";

switch (fruit) {
  case "apple":
    console.log("This is an apple");
    break;
  case "orange":
    console.log("The fruit is orange");
    break;
  case "strawberry":
  case "raspberry":
    console.log("The fruit is a berry");
    break;
  default:
    console.log("I don't know what fruit it is");
}

//ternary 두가지 조건문 비교할때 많이 사용된다.  조건문이 참이면, 앞에 문장실행, 아니면 뒤에 문장 실행
let value = 2;

const stringToPrint =
  value > 0 ? "Value is greater than 0" : "Value is 0 or less than 0";

console.log(stringToPrint);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

// Days of week challenge

let dayNumber = prompt("Please enter a number");
if (dayNumber >= 0) {
  dayNumber %= 7;
  if (dayNumber == 0) {
    dayNumber = 7;
  }
}
switch (dayNumber) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Please enter a positive integer.");
}
