const numbers = [1, 2, 3, 4, 5];
let sum = numbers[0];
console.log({ sum });
for (let i = 1; i < numbers.length; i++) {
  console.log(numbers.length, "numbers.length");
  console.log(i, ": i");
  console.log(numbers[i], `: numbers[${i}]`);
  sum = sum + numbers[i];
}
console.log(sum);
// here we will only pass one param to reduce
const reduceSum = numbers.reduce((total, current) => {
  console.log({ total, current });
  return total + current;
});

// if we don't pass an initial value to reduce, it defaults to the first element in the array 초기값 설정하지 않으면 첫번째 배열값이 초기값으로 잡힌다.

// we will pass another optional param to reduce
let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum2 = sum2 + numbers[i];
}
const reduceSumWithInitVal = numbers.reduce((acc, curr) => {
  console.log({ acc, curr });
  return acc + curr;
}, 0);
console.log(reduceSumWithInitVal);

//strings
const letters = ["h", "e", "l", "l", "o"];
const word = letters.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return (accumulator = accumulator + current);
}, "");

console.log(word, ": word");

const letterNumbers = numbers.reduce((accumulator, current) => {
  return (accumulator += current);
}, "");
// }, 0);  초기값을 0으로 하면 숫자로 인식해서 다 더해주고, "" empty string으로 하면 글자로 인식해서 한 단어처럼 12345출력한다.
console.log(letterNumbers);
// I want a string with all letters to uppercase without anything between

const lowerCaseLetters = ["n", "o", "l", "o", "g", "y"];
const upperCaseStr = lowerCaseLetters.reduce((acc, curr) => {
  console.log({ acc, curr });
  return (acc + curr).toUpperCase();
}, "Hi, ");
console.log(upperCaseStr, ": UpperCaseStr");

// we can use reduce like we would use map -> to get a new array of the same length back
// reduce를 이용하여 map처럼 사용할수 있다. 그러나 반드시 초기값을 빈 배열로 해줘야 한다. reduce를 할지 map을 할지선택은 내 마음대로..

const numbersToDouble = [4, 5, 8];
const doubledWithReduce = numbersToDouble.reduce((acc, curr) => {
  const doubledItem = curr * 2;
  acc.push(doubledItem);
  return acc;
}, []);
console.log(doubledWithReduce, ":doubled with reduce");

// we can use reduce like we would use filter -> to get an array of elements that fulfilled a certain condition
// I want an array of even numbers
//reduce를 이용해서 filter처럼 쓸수 있다. 그러나 반드시 초기값을 empty array [] 로 해줘야 에러가 나지 않는다.

const numbersToFilter = [12, 45, 62, 57];
const evenNums = numbersToFilter.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(evenNums, ": even numbers");

// given an array of character codes, convert the codes to letters and reduce it to a single string :fromCharCode(숫자):해당숫자에 uncode값에 연결되는 알파벳
const arrOfCodes = [114, 101, 100, 117, 99, 101];
const codesToLetters = arrOfCodes.reduce((acc, curr) => {
  console.log({ acc: acc, charCodeFromCurr: String.fromCharCode(curr) });
  return acc + String.fromCharCode(curr);
}); //초기값을 설정하지 않으면, 첫번째 acc가 114숫자로 잡힌다. 그래서 초기값을 "" 으로 해주어야 "reduce"가 나온다.
console.log(codesToLetters, "codes to letter");

const arrOfCodes2 = [114, 101, 100, 117, 99, 101];
const codesToLetters2 = arrOfCodes2.reduce((acc, curr) => {
  return acc + String.fromCharCode(curr);
}, "");
console.log(codesToLetters2, "내방식대로..");

// given an array of letters, reduce them to get the sum of character codes  : charCodeAt(index) : 해당 index의 unicode값
const lettArr = ["c", "h", "e", "e", "s", "e"];
const sumOfCodes = lettArr.reduce((acc, curr) => acc + curr.charCodeAt(), 0);
console.log(sumOfCodes, ": sum of the character codes");

// use reduce to filter an array to only get numbers greater than 10
const numArr = [1, 345, 545, 2, 5, 7, 907];
const greaterThan10 = numArr.reduce((prev, curr) => {
  if (curr > 10) {
    prev.push(curr);
  }
  return prev;
}, []);
console.log(greaterThan10, ": greaterThan10");

// use reduce to create an array of numbers (use numsArr) to the power of 2
const power2 = numArr.reduce((acc, curr) => {
  acc.push(curr ** 2);
  return acc;
}, []);
console.log("power2 : ", power2);
