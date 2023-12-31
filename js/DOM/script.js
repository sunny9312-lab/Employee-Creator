// 1. What is DOM?
// Document Object Model

// 2. Why do we use it?
// to make our web pages interactive

// MVP
// 1. When the user clicks the change mode btn, the background color changes to dark, texts, borders and btn bg change to light

// 2. when the user enters a task and clicks "add task" btn, we want to add that task to the task div

// 3. when the first task is added, the "You have no tasks" para should disappear

// 4. Clear the input when a task is added /add btn is clicked

// 5. handle empty input - show some error message when the user clicks add btn with a blank input

// What is the first step?

// we need to elect the elements that user will interact with and elements we want to update

// different methods we can use to select elements

const taskInput = document.getElementById("taskInput");
console.log("taskInput: ", taskInput);

// HTML collection - an array-like list
const containers = document.getElementsByClassName("container");
console.log(containers[0]);
console.log(containers.length);

//Node List
const buttons = document.querySelectorAll("button");
console.log(buttons);

//this still works but returns only the first element
const btn = document.querySelector("button");
console.log(btn);

const nothingPara = document.querySelector("#nothingPara");
console.log(nothingPara);

const bodyE1 = document.querySelector("body");
console.log(bodyE1);
const heading = document.querySelector("h1");
const addTaskBtn = document.querySelector("#addBtn");
const taskDiv = document.querySelector("#task");

// to change styling, we could use style property
// or if we are changing a lot of things, we can create a class and style it in css, and add it/remove it when the user clicks the button

// identify which element the user will interact with, add an event listener to it

// some common ones:
// click
// mouseover
// mouseout
// submit - forms

const modeButton = document.querySelector("#modeBtn");
console.log(modeButton);

function logSomething() {
  console.log("button clicked");
}

modeButton.addEventListener("click", () => {
  console.log("you clicked the button");
  // what elements do I want to update? // both buttons
  // buttons - variable where I store all buttons

  // buttons is a Node List - we have a forEach method
  buttons.forEach((btn) => {
    btn.classList.toggle("btn--dark-mode");
    console.log(btn.classList);
  });

  //containers in an HTML Collection - no forEach Method
  for (let i = 0; i < containers.length; i++) {
    containers[i].classList.toggle("container--dark-mode");
    console.log(containers[i].classList);
  }

  bodyE1.classList.toggle("body--dark-mode");
  heading.classList.toggle("heading--dark-mode");
});

const createNewTextE1 = (element, text, parent) => {
  //I need to create an element
  const newE1 = document.createElement(element);
  const textNode = document.createTextNode(text);
  // I need to put the text inside the element
  newE1.appendChild(textNode);
  //I need to tell my paragraph where to go on the page
  parent.appendChild(newE1);
};

addTaskBtn.addEventListener("click", () => {
  //I need to access text inside my input
  //if no input value -display an error message
  //alert
  if (taskInput.value === "") {
    return alert("please enter a task");
  }

  // I need to select it fresh to see if it's still there
  if (document.getElementById("nothingPara")) {
    taskDiv.removeChild(nothingPara);
  }

  console.log(taskInput.value);
  createNewTextE1("p", taskInput.value, taskDiv);
  taskInput.value = "";
});
