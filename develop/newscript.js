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
// kittenEl.setAttribute("style", "font-size:25px; text-align:center;")
body.setAttribute(
  "style",
  "max-width: 100%; max-height: 100%; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center;"
);

//creates the text explaining the rules of the quiz
const elementh1 = document.createElement("h1");
const elementh2 = document.createElement("h2");
elementh1.textContent = "Welcome to Rutgers Bootcamp Coding Quiz!!";
elementh2.textContent =
  "Here are the rules: Choose the best answer for each question. IF you pick a wrong answer your time will DECREASE.";

body.appendChild(elementh1);
body.appendChild(elementh2);

//div element that will contain the start button
let box = document.createElement("div");
let boxcontainer = box.setAttribute("id", "box");
box.setAttribute("style", "position:relative; top: 150px");
body.appendChild(box);

//This is the button the user will press to start the game.
let btn = document.createElement("button");
let btnelement = btn.setAttribute("id", "button");
btn.textContent = "Click Me To Start";
btn.setAttribute(
  "style",
  "background-color: aqua; padding: 50px; font-size: 30px"
);

box.appendChild(btn);

//created an element that hold the countdown timer
let time = document.createElement("p");
time.setAttribute("style", "font-size:30px; color: red;");
let timer = body.appendChild(time);
timer.setAttribute("id", "timer");

//creates div container which will have the questions and answers as its children
const container = document.createElement("div");
container.setAttribute("id", "qacontainer");
container.setAttribute(
  "style",
  "display: flex; flex-direction: column; justify-content: center; align-items: center;"
);
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

  //info will contain all the user info (names and score).
  var info = [];
  let infos = JSON.parse(localStorage.getItem("names"));

  //this is done so that info won't be an empty every time a user puts add their information.
  info = infos;

  //add eventlister to the button so that user can submit their name
  pressme.addEventListener("click", function (event) {
    event.stopPropagation();
    event.preventDefault();

    //player is the input of what the user writes for their name
    let player = document.getElementById("username").value;

    //the player's name and their score will be added to the variable info
    info.push({
      playername: player,
      scores: score,
    });

    //the user's name and score is added to local storage
    localStorage.setItem("names", JSON.stringify(info));

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
  unorderedList.setAttribute(
    "style",
    "width: 600px; list-style: none; text-align: center; padding: 20px; display: flex; flex-direction: column; align-items: center; justify-content: center;"
  );

  //this creates the "li" elements which will hold the answers
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  const allist = document.querySelectorAll("li");

  //this creates the "h3" element which will hold the questions
  const h3 = document.createElement("h3");
  h3.setAttribute("style", "font-size: 35px; color: navy;");

  //this assigns "id" to each "li" elements
  li1.setAttribute("id", "li1");
  li1.setAttribute(
    "style",
    "width: 100%; padding: 10px; font-size: 25px; border-style: solid; margin: 5px; border-radius: 20px; background-color: aqua;"
  );
  li2.setAttribute("id", "li2");
  li2.setAttribute(
    "style",
    "width: 100%; padding: 10px; font-size: 25px; border-style: solid; margin: 5px; border-radius: 20px; background-color: aqua;"
  );
  li3.setAttribute("id", "li3");
  li3.setAttribute(
    "style",
    "width: 100%; padding: 10px; font-size: 25px; border-style: solid; margin: 5px; border-radius: 20px; background-color: aqua;"
  );
  li4.setAttribute("id", "li4");
  li4.setAttribute(
    "style",
    "width: 100%; padding: 10px; font-size: 25px; border-style: solid; margin: 5px; border-radius: 20px; background-color: aqua;"
  );

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

btn.addEventListener("click", function (event) {
  displayQuestion(questions, 0);
  btn.setAttribute("style", "display:none");
  var Countdown = setInterval(function () {
    if (count > 0) {
      count--;
      timer.textContent = " Time: " + count;
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
