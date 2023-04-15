const questions [
    {
       question: "question 1",
       answers: {
        1: "answer 1",
        2: "answer 2",
        3: "answer 3",
        4: "answer 4",
       },
       correctAnswer: "1"
    },

    {
        question: "question 1",
        answers: {
         1: "answer 1",
         2: "answer 2",
         3: "answer 3",
         4: "answer 4",
        },
        correctAnswer: "1"
     },

     {
        question: "question 1",
        answers: {
         1: "answer 1",
         2: "answer 2",
         3: "answer 3",
         4: "answer 4",
        },
        correctAnswer: "1"
     },

     {
        question: "question 1",
        answers: {
         1: "answer 1",
         2: "answer 2",
         3: "answer 3",
         4: "answer 4",
        },
        correctAnswer: "1"
     },

     {
        question: "question 1",
        answers: {
         1: "answer 1",
         2: "answer 2",
         3: "answer 3",
         4: "answer 4",
        },
        correctAnswer: "1"
     },

     {
        question: "question 1",
        answers: {
         1: "answer 1",
         2: "answer 2",
         3: "answer 3",
         4: "answer 4",
        },
        correctAnswer: "1"
     },
]

var win = document.querySelector(".win")
var lose = document.querySelector(".lose")
var startButton = document.querySelector("#start-button")
var timerElement = document.querySelector(".timer-count")
var WordBlank = document.querySelector(".word-blanks")

var winCounter = 0;
var loseCounter = 0;
var numBlanks = 0;
var timer;
var timerCount; 

//calls start game functionS
function startGame() {
   document.getElementById("#start-button").click();
   timerCount = 100;
   startTimer;
}

function startTimer() {

}

//hides main page and shows quiz
startButton.addEventListener("click", function () {
   document.querySelector("#main").setAttribute("class", "show");
   document.querySelector("#top-page").setAttribute("class", "hide");
});