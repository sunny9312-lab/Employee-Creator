// 1. What are array iterators?
// built in methods/functions we can call on arrays that operate on each individual element of that array

// 2. Why should we use them?

// a lot less syntax to write, easier to read, easier to debug, less chance of making errors/creating bugs, indexes will be dealt with for us

// MAP

// What are callback functions?

// in js, a function is  a value, which means we pass it as parameter to a different function
function add(num1, num2) {
  return num1 + num2;
}

const subtract = (a, b) => {
  return a - b;
};

function doMath(x, y, callback) {
  return callback(x, y);
}

console.log(doMath(2, 5, add));
console.log(doMath(10, 3, subtract));
// map takes a callback function as a parameter

// I have an array, I want a new array with every element incremented by 1
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.length);
const incrementedNums = [];

for (i = 0; i < numbers.length; i++) {
  incrementedNums.push(numbers[i] + 1);
}

console.log(incrementedNums, "numbers에다가 1씩 더한것");

function addOne(num) {
  return num + 1;
}

const incrementedWithMap = numbers.map(addOne);
console.log(incrementedWithMap, "numbers incremented with map");

function squareNum(num) {
  return num ** 2;
}
const doubleWithMap = numbers.map(squareNum); //map을 통한 -squareNum 함수 이용한 new array 생성
console.log(doubleWithMap, "numbers double with Map");

const numsSquare = [];
for (let i = 0; i < numbers.length; i++) {
  numsSquare.push(squareNum(numbers[i]));
}
console.log(numsSquare, "numbers squared with map");

function doubleNum(num) {
  return num * 2;
}

const doubleArr = numbers.map(doubleNum); //map을 통한 new array 생성
console.log(doubleArr, "map을 통한 new array(doubleNum함수사용)");

const anotherDoubleNums = numbers.map((apple) => {
  console.log(apple, "apple 이라 불리는 인자값 안에 있는 함수");
  return apple * 2;
});
console.log(anotherDoubleNums, "apple 로 불리는 anotherDoubleNums");

const oneLineDoubleNums = numbers.map((num) => num * 3);
console.log(oneLineDoubleNums, "한줄에 쓰는 map, return문 없슴");
// You have an array of names all in lowercase you want a new array with all names but uppercase
const names = ["jack", "rachel", "bella", "anna"];

function upperCaseName(name) {
  return name.toUpperCase();
}

const upperCaseNames = names.map(upperCaseName);
console.log(upperCaseNames);
// You have an array of numbers, you want a new array with each number decremented by 5
const numbers2 = [10, 9, 8, 7, 6];
function decrementNum(num) {
  return num - 5;
}
const decrementNumbers = numbers2.map(decrementNum);
console.log(decrementNumbers);

// 또다른 방법은 함수를 쓰지않고 한줄로 화살표함수 사용하는것. 여기서는 return문이 없다.
const decrementNumbers2 = numbers2.map((num) => num - 5);
console.log(decrementNumbers2, "화살표 함수 사용한것, return문없이");

// write our own map - DO NOT DO THIS IN REAL LIFE
