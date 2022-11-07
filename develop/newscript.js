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
      "Bettween the head and body tag",
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

let body = document.body;
const container = document.createElement("div");
container.setAttribute("id", "qacontainer");
body.appendChild(container);

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

  unorderedList.addEventListener("click", function (event) {
    let correctanswer = questions[index].correctanswer;
    if (event.target.value != correctanswer) {
      //Manage Time
    }
    //else then increase score

    if (index + 1 < questions.length) {
      displayQuestion(questions, index + 1);
    } else {
      console.log("no more questions");
      //enter initials and score
    }
  });
}

let btn = document.getElementById("button");

btn.addEventListener("click", function (event) {
  displayQuestion(questions, 0);
  btn.setAttribute("style", "display:none");
});
