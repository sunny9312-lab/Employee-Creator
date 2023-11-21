const coach1 = "Martyna";
const coach2 = "Alex";
const coach3 = "Cal";

console.log(coach1);
console.log(coach2);
console.log(coach3);
const coaches = [coach1, coach2, coach3];
console.log(coaches);

console.log(coaches.length);
const arr = new Array(1, 2, 3);
console.log(arr);
const arr2 = new Array(5);
console.log(arr2);
console.log(arr2.length);

const cities = ["Melbourne", "Sydney", "Brisbane"];
cities[3] = "Adelaide";
console.log(cities);
cities[0] = "Woolongong";
console.log(cities);

// cities = ["aaa", "bbb", "ccc"];   전체를 바뀰수는 없다. 하나하나씩 value변경가능
// console.log(cities);
cities.push("Darwin");
console.log(cities);
cities.unshift("new castle"); //맨 앞에서 넣는것
console.log(cities);
cities[cities.length] = "pakenham";
console.log(cities);
cities.shift(); //앞에것 빼는것
console.log(cities);
cities.push("Woolongong"); //맨 뒤에서 넣는것
console.log(cities);
cities.pop();
console.log(cities.indexOf("Darwin")); //indexOf :몇 번째 있는지 찾을때.
console.log(cities.includes("Melbourne"), "is Melbourne one of the cities?"); //해당 value가 있는지 확인할때
console.log(cities.includes("Darwin"), "is Darwin one of the cities?");
console.log(cities);
console.log(`Some Australian cities are ${cities.join(", ")}`);
