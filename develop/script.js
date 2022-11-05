var questions = [
  "What does CSS stand for?",
  "Where in the HTML document does the link to an external CSS go?",
  "Which of the following is a boolean value?",
  "In an if/else statment, what is written the parentheses?",
];

var answers1 = [
  "cascading style sheet",
  "computer software systems",
  "cyber systems software",
  "coding style sheet",
];
var answers2 = [
  "inside the body tag",
  "inside the head tag",
  "after the HTML tag",
  "Bettween the head and body tag",
];

let body = document.body;
let btn = document.getElementById("button");

const elementh1 = document.createElement("h1");
const elementh2 = document.createElement("h2");
elementh1.textContent = "Welcome to Rutgers Bootcamp Coding Quiz!!";
elementh2.textContent =
  "Here are the rules: Choose the best answer for each question. IF you pick a wrong answer your time will decrease.";

body.appendChild(elementh1);
body.appendChild(elementh2);

const unorderedList = document.createElement("ul");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const h3 = document.createElement("h3");

let index = 0;
