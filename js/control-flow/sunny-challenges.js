// let userNumber = prompt("Please enter a number");
let userNumber = 2;
let dayNumber = userNumber % 7;
switch (dayNumber) {
  case 0:
    console.log("Today is Sunday");
    break;
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
    console.log("Today is Thursday");
    break;
  default:
    console.log("Please enter valid number");
    break;
}

// MVP: Tell the user what eye colour their child would have.

// Create two variables parent1 and parent2 Given the eye colour of each parent, it should console log the probability of their child having different eye colours, for example: Your eye colours are brown and blue, the chances of your child having blue eyes is --%, brown is --% and green is --% Use the following image as a reference
// let parent1 = prompt("please enter your eye color");
// let parent2 = prompt("please enter your partner's eye color");
let parent1 = "green";
let parent2 = "brown";
let childEyeColor;

let parentEye = parent1 + parent2;
switch (parentEye) {
  case "brownbrown":
    console.log(
      `your eye color is ${parent1} and ${parent2}, the chance of your child having brown eyes 75%, green eyes 18.75% and blue eyes are 6.25%`
    );
    childEyeColor = "brown";
    break;
  //ysh 여기부터 다시할것
  case "greenbrown":
    console.log(
      `your eye color is ${parent1} and ${parent2}, the chance of your child having brown eyes 50%, green eyes 37.5% and blue eyes are 12.5%`
    );
    childEyeColor = "brown";
    break;
  case "bluebrown":
    console.log(
      `your eye color is ${parent1} and ${parent2}, the chance of your child having brown eyes 50%, green eyes 0% and blue eyes are 50%`
    );
    childEyeColor = "brown";
    break;
  case "greengreen":
    console.log(
      `your eye color is ${parent1} and ${parent2}, the chance of your child having brown eyes 1%, green eyes 75% and blue eyes are 25%`
    );
    childEyeColor = "green";
    break;
  case "greenblue":
    console.log(
      `your eye color is ${parent1} and ${parent2}, the chance of your child having brown eyes 0%, green eyes 50% and blue eyes are 50%`
    );
    childEyeColor = "green";
    break;
  case "blueblue":
    console.log(
      `your eye color is ${parent1} and ${parent2}, the chance of your child having brown eyes 0%, green eyes 1% and blue eyes are 99%`
    );
    childEyeColor = "blue";
    break;
  default:
    console.log("Eye color combination are not recognised");
}
switch (childEyeColor) {
  case "brown":
    console.log("My favourite eye color");
    break;
  case "green":
    console.log("My mediocre eye color");
    break;
  case "blue":
    console.log("My least favourite eye color");
    break;
}

// Bonus: Store the value of the child’s eye colour and write a switch statement - depending on the child’s eye colour consol log if it's your favourite eye colour, your least favourite eye colour or the mediocre colour
