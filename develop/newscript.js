let questions = [
  {
    question: "What does CSS stand for?",
    answers: [
      "cascading style sheet",
      "computer software systems",
      "cyber systems software",
      "coding style sheet",
    ],
    correctanswer: "cascading style sheet",
  },
  {
    question: "Where in the HTML document does the link to an external CSS go?",
    answers: [
      "inside the body tag",
      "inside the head tag",
      "after the HTML tag",
      "Between the head and body tag",
    ],
    correctanswer: "inside the head tag",
  },
  {
    question: "Which of the following is a boolean value?",
    answers: ["True", "False", "True or False", "All of the Above"],
    correctanswer: "All of the Above",
  },
  {
    question: "In an if/else statment, what is written the parentheses?",
    answers: [
      "Code to be executed if condition is true",
      "the condition",
      "else if",
      "an element",
    ],
    correctanswer: "the condition",
  },
];

let count = 60;
let score = 0;
let length = questions.length;
let index = 0;

let body = document.body;

//creates the text explaining the rules of the quiz
const elementh1 = document.createElement("h1");
const elementh2 = document.createElement("h2");
elementh1.textContent = "Welcome to Rutgers Bootcamp Coding Quiz!!";
elementh2.textContent =
  "Here are the rules: Choose the best answer for each question. IF you pick a wrong answer your time will decrease.";

body.appendChild(elementh1);
body.appendChild(elementh2);

//created an element that hold the countdown timer
let time = document.createElement("p");
let timer = body.appendChild(time);
timer.setAttribute("id", "timer");

//creates div container which will have the questions and answers as its children
const container = document.createElement("div");
container.setAttribute("id", "qacontainer");
body.appendChild(container);

//This function creates the container for the user to be able to enter their name and score.
function SaveName() {
  //instructions on how to save score
  let instructions = document.createElement("h2");
  body.appendChild(instructions);
  instructions.textContent =
    "Enter your name and Press the Button to save score";

  //This creates the form element
  let form = document.createElement("form");
  body.appendChild(form);

  //Div container that will be the container forthe user name input
  let holder = document.createElement("div");
  form.appendChild(holder);

  let label = document.createElement("label");
  holder.appendChild(label);
  label.textContent = "Your name: ";

  //input box where user will put their name
  let input = document.createElement("input");
  holder.appendChild(input);
  input.setAttribute("id", "username");

  //button the user can press to save score
  let buttonname = document.createElement("button");
  holder.appendChild(buttonname);
  buttonname.setAttribute("id", "buttonname");
  let pressme = document.getElementById("buttonname");
  buttonname.setAttribute("style", "width:50px; height: 20px;");
  buttonname.textContent = "Add!";

//
  var info = JSON.parse(localStorage.getItem("names")) || [];

  //add eventlister to the button so that user can submit their name
  pressme.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();

    //EVERY PLAYER NAME WILL BE PUT INTO AN ARRAY AFTER THEY CLICK THE BUTTON
    let player = document.getElementById("username").value;

    info.push({
      playername: player,
      scores: score,
    });

    localStorage.setItem("names", JSON.stringify(info));

    //need to set score and player name into local storage

    if (player === "") {
      alert("Please enter a name in the input box");
    } else
      for (i = 0; i < info.length; i++) {
        //creating an a "p" element so that with every loop a new p element is created
        let lists = document.createElement("p");

        //the "p" element has an class of listname
        lists.setAttribute("class", "listname");

        //the content of the list will be names of the players

        // let storage = localStorage.getItem("names");

        lists.textContent = info[i].playername + " " + info[i].scores;

        body.appendChild(lists);
      }
  });
}

//This function creates the unorderlist which will contain the answers and questions.
function displayQuestion(questions, index) {
  qacontainer.innerHTML = "";

  //this creates the element "ul" and container of the answers to pick from
  const unorderedList = document.createElement("ul");
  unorderedList.setAttribute("id", "qContainer");

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

  qacontainer.appendChild(h3);
  qacontainer.appendChild(unorderedList);
  unorderedList.appendChild(li1);
  unorderedList.appendChild(li2);
  unorderedList.appendChild(li3);
  unorderedList.appendChild(li4);

  console.log(questions[index]);
  h3.textContent = questions[index].question;
  li1.textContent = questions[index].answers[0];
  li2.textContent = questions[index].answers[1];
  li3.textContent = questions[index].answers[2];
  li4.textContent = questions[index].answers[3];

  //added click event to unorderlist so that everytime the user clicks an answer it moves on to the set next set of questions and answers.
  unorderedList.addEventListener("click", function (event) {
    let correctanswer = questions[index].correctanswer;
    if (event.target.innerText != correctanswer) {
      count -= 10;
    } else {
      score += 10;
      console.log(score);
    }

    if (index + 1 < questions.length) {
      displayQuestion(questions, index + 1);
    } else {
      console.log("no more questions");
      qacontainer.innerHTML = "";
      count = null;
      elementh1.textContent = "";
      elementh2.textContent = "";
      SaveName();
      return;
    }
  });
}

let btn = document.getElementById("button");

btn.addEventListener("click", function (event) {
  displayQuestion(questions, 0);
  btn.setAttribute("style", "display:none");
  var Countdown = setInterval(function () {
    if (count > 0) {
      count--;
      timer.textContent = count;
    } else {
      timer.textContent = "Game Over";
      clearInterval(Countdown);
      if (count == 0) {
        qacontainer.innerHTML = "";
        elementh1.textContent = "";
        elementh2.textContent = "";
        SaveName();
        return;
      }
      return count;
    }
  }, 1000);
});
