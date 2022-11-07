//Lines 3 to 31 are the variables that I created for the questions and answers

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

var answers3 = ["True", "False", "True or False", "All of the Above"];

var answers4 = [
  "Code to be executed if condition is true",
  "the condition",
  "else if",
  "an element",
];

//Lines 33 to 52 are variables for the Elements that I am adding to the HTML document
let body = document.body;
let btn = document.getElementById("button");

const elementh1 = document.createElement("h1");
const elementh2 = document.createElement("h2");
elementh1.textContent = "Welcome to Rutgers Bootcamp Coding Quiz!!";
elementh2.textContent =
  "Here are the rules: Choose the best answer for each question. IF you pick a wrong answer your time will decrease.";

body.appendChild(elementh1);
body.appendChild(elementh2);

//this creates the element "ul" and container of the answers to pick from
const unorderedList = document.createElement("ul");

//this creates the "li" elements which will hold the answers
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

//this creates the "h3" element which will hold the questions
const h3 = document.createElement("h3");

//this assigns "id" to each "li" elements
li1.setAttribute("id", "li1");
li2.setAttribute("id", "li2");
li3.setAttribute("id", "li3");
li4.setAttribute("id", "li4");

let index = 0;
let timer = 60;

function startQuiz() {
  btn.setAttribute("style", "display: none");
  body.appendChild(h3);

  body.appendChild(unorderedList);
  unorderedList.appendChild(li1);
  unorderedList.appendChild(li2);
  unorderedList.appendChild(li3);
  unorderedList.appendChild(li4);

  h3.textContent = questions[index];
  li1.textContent = answers1[0];
  li2.textContent = answers1[1];
  li3.textContent = answers1[2];
  li4.textContent = answers1[3];

  //if the user clicks on the children of the "ul" element, which hold the answers, then it moves to the next question
  unorderedList.addEventListener("click", function (event) {
    switch (index) {
      case 0:
        h3.textContent = questions[1];
        li1.textContent = answers2[0];
        li2.textContent = answers2[1];
        li3.textContent = answers2[2];
        li4.textContent = answers2[3];
        if (event.target != li1) {
          count = count - 10;
          console.log(event.target);
          console.log(count);
          console.log(index);
        }
        break;
      case 1:
        h3.textContent = questions[2];
        li1.textContent = answers3[0];
        li2.textContent = answers3[1];
        li3.textContent = answers3[2];
        li4.textContent = answers3[3];

        break;
      case 2:
        h3.textContent = questions[3];
        li1.textContent = answers4[0];
        li2.textContent = answers4[1];
        li3.textContent = answers4[2];
        li4.textContent = answers4[3];
        if (event.target != li1) {
          count = count - 10;
          console.log(event.target);
          console.log(count);
          console.log(index);
          break;
        }
    }
    index++;
    console.log(index);
  });
}

btn.addEventListener("click", startQuiz);
