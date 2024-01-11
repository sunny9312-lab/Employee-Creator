import { rectPerim, rectangleArea } from "./rectangle.js";
import createEl, { changeColour } from "./dom-utils.js";

//What are modules?
//reusable piece of code

//Why do we ant to use them?
// we divide our js file into modules
// it's easier to maintain/debug/easier to find things, easier for other people to understand what is going on
// testability

//function related to a rectangle, they don't touch the dom, they are some pure function that work with parameters, I'll probably would need to test them

const form = document.querySelector("form");
console.log(form);

//dom function

// selection elements, adding event listeners etc.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const w = document.querySelector("#width").value;
  const h = document.querySelector("#height").value;
  const areaToDisplay = rectangleArea(parseFloat(w), parseFloat(h));
  console.log(areaToDisplay);
  const perimeterToDisplay = rectPerim(parseFloat(w), parseFloat(h));
  console.log(perimeterToDisplay);
  // const createEl = (el, textVal, parent) 다른 정의된 화일에서는 이런형식으로 쓰일것.
  //  계속해서 이렇게..
  createEl("p", areaToDisplay, document.querySelector("#area"));
  createEl("p", perimeterToDisplay, document.querySelector("#perimeter"));
});
