let value;
value = 10 + 10;
console.log(value);

value = 10 * 10;
console.log(value);

value = 10 - 2;
console.log(value);

value = 10 / 2;
console.log(value);

console.log(2 ** 5);
console.log(Math.pow(2, 5));
// % <-- remainder, modules
console.log(9 % 7); //나머지를 돌려준다.
//if the modulus gives us 0 -> our number is even
console.log(4 % 2); //짝수
console.log(5 % 2); //홀수|

// assignment operators
console.log("before value : ", value);
value += 2;
console.log("after value : ", value);
value -= 3;
console.log("after2 value : ", value);
value *= 3;
console.log("after2 value : ", value);
value /= 2;
console.log("after2 value : ", value);

console.log("after3 value : ", ++value);
console.log("after4 value : ", value++);
console.log("after2 value : ", value);
console.log(--value);
console.log(value);
console.log(value--);
console.log(value);

let myName = "Martyna";
console.log("hi, " + myName);

const fullNameSentence = `Hi, my name is ${myName}`;
console.log(fullNameSentence);
