// const - 변수명 재할당 할수 없음. stays the same, has the same value, can't reassign the value

const myHeight = "160cm"; // camel case로 변수명은 써준다.
console.log(myHeight);
console.log("My HEIGHT is " + " " + myHeight);
console.log("You are " + myHeight + " tall");

//template string
console.log(`I am ${myHeight} tall. `);
// let -
// var (do not use) copy해서 사용하지 말라.. 다른 사람 코드인거 다 안다. 2013?부터는 않사용하고 있다.

let myName = "Martyna";
console.log("hi " + myName);

myName = "Kate";
console.log("hello, " + myName);

//prompt
// I Want to get two variables from the user
let number1 = prompt("First Number"); // 데이타가 string type으로 들어온다. number type이 아닌것에 주의할것
console.log(number1);

let number2 = prompt("Two Number");
console.log(number2);

let answer;
answer = parseInt(number1) + parseInt(number2);
console.log(answer);
//We want to add two numbers

//print the answer to the console

//var (do not ise)
// it is not scope safe, more will wait for loops to talk more about var
