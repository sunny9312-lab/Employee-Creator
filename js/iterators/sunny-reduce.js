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

// given an array of character codes, convert the codes to letters and reduce it to a single string
