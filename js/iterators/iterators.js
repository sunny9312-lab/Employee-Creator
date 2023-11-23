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
// ...
//무슨 말인지 잘 이해가 않됨.
const map = (arr, func) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];
    const newVal = func(currentItem);
    newArr.push(newVal);
  }
  return newArr;
};

const numbers3 = [2, 3, 4];
const incBy4 = (num) => num + 4;
console.log(map(numbers3, incBy4), "새로운 방법의 map 사용, 4씩 증가");

const stringArr = ["hello", "hi", "nology"];
const mappedStringArr = stringArr.map((element, index, arr) => {
  console.log(element, "first param of my callback");
  console.log(
    index,
    "this is the current index I am at, the second param of map"
  );
  console.log(
    arr,
    "This is the entire array I am calling map on, the third param of map"
  );
});

// map returns a whole new array, it doesn't modify the original array
// ... spread syntax [...array]

// filter
// returns a new array
// returns items that meet a certain condition
// takes in a callback function
// the function we pass to filter returns a single TRUE or FALSE for each element of the array
// returns an array where the result was truthy

const numbersToFilter = [2, 3, 4, 5, 9];

function isEven(num) {
  return num % 2 === 0;
}

const filteredNumbers = numbersToFilter.filter(isEven);
console.log(filteredNumbers, "배열중에서 짝수인것을 찾는것");

const numsGreaterThanFour = numbersToFilter.filter((num) => num > 4);
console.log(numsGreaterThanFour, "한줄로 함수 만들어서 filter한것");

const words = ["apple", "table", "pen", "cup"];
const threeLetterWords = words.filter((word, i, wholeArr) => {
  console.log(word);
  console.log(i);
  console.log(wholeArr);
  return word.length === 3;
});
console.log(threeLetterWords, "세글자인 배열");

// some more useful methods

// FIND  find와 filter의 차이는 find는 조건에 맞는 첫번째, 그것만, filter는 해당 되는 조건모두
// returns a first (single) value that matches our condition

const fruit = ["pear", "banana", "grape", "apple", "kiwi"];
const fourLetterFruit = fruit.find((f) => f.length === 4);
console.log(
  fourLetterFruit,
  "4글자 과일 find로 찾음,조건에 걸리는 첫번째 값 반환"
);

const allFiveLetterFruit = fruit.filter((f) => f.length === 5);
console.log(allFiveLetterFruit, "모든 5글자 과일");

// EVERY
// check if all elements in an array meet a certain condition
// 해당 배열에 모든 값이 조건을 모두 만족하는지
const veg = ["leek", "corn", "kale", "cucumber"];
const areAll4Letters = veg.every((item) => item.length === 4);
console.log(areAll4Letters); //true 혹은 false로 반환, 여기서는 cucumber가 아니다.

// SOME
// checks if at least one element meets a certain condition
// 한 조건만 만나면 true
const atLeastOne4LettersLong = veg.some((el) => el.length === 4);
console.log(
  atLeastOne4LettersLong,
  "some을 이용한 최소 4글자길이만 있으면 true"
);

const longerThan12Letters = veg.some((el) => el.length > 12);
console.log(
  longerThan12Letters,
  "some 을 이용한 12글자보다 많은 값이 있으면 true"
);

// forEach

// iterates through every element of an array
// it doesn't return anything
const veggies = veg.forEach((el) => {
  console.log(el);
  // even though I am returning here, for each will always return undefined
  //사실 forEach만 잘 이해가 않됨.
  return el;
});
console.log(veggies, "for each");
