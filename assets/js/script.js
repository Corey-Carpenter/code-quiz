const questions = [
   {
      question: 'What does HTML stand for?',
      choices: ['Hyperlinks and Text Markup Language', 'Hyper Text Markup Language', 'Home Tool Markup Language'],
      answer: 'Hyper Text Markup Language',
   },
   {
      question: 'Choose the correct HTML tag for the largest heading',
      choices: ['&lt;heading&gt;', '&lt;h6&gt;', '&lt;head&gt;', '&lt;h1&gt;'],
      answer: '&lt;h1&gt;',
   },
   {
      question: 'What is the correct HTML tag for inserting a line break?',
      choices: ['&lt;br&gt;', '&lt;lb&gt;', '&lt;break&gt;'],
      answer: '&lt;br&gt;',
   },
   {
      question: 'What is the correct HTML for creating a hyperlink?',
      choices: ['&lt;a url="http://www.w3schools.com"&gt;W3Schools.com&lt;/a&gt;', '&lt;a name="http://www.w3schools.com"&gt;W3Schools.com&lt;/a&gt;', '&lt;a href="http://www.w3schools.com"&gt;W3Schools&lt;/a&gt;', '&lt;a&gt;http://www.w3schools.com&lt;/a&gt;'],
      answer: '&lt;a href="http://www.w3schools.com"&gt;W3Schools&lt;/a&gt;',
   },
   {
      question: 'Which of these tags are all <table> tags?',
      choices: ['&lt;table&gt;&lt;head&gt;&lt;tfoot&gt;', '&lt;table&gt;&lt;tr&gt;&lt;td&gt;', '&lt;thead&gt;&lt;body&gt;&lt;tr&gt;', '&lt;table&gt;&lt;tr&gt;&lt;tt&gt;'],
      answer: '&lt;table&gt;&lt;tr&gt;&lt;td&gt;',
   },
   {
      question: 'What is the correct HTML for inserting an image?',
      choices: ['&lt;img alt="MyImage"&gt;image.gif&lt;/img&gt;', '&lt;img src="image.gif" alt="MyImage"&gt;', '&lt;image src="image.gif" alt="MyImage"&gt;', '&lt;img href="image.gif" alt="MyImage"&gt;'],
      answer: '&lt;img src="image.gif" alt="MyImage"&gt;',
   },
   {
      question: 'How can you make a numbered list?',
      choices: ['&lt;ol&gt;', '&lt;ul&gt;', '&lt;dl&gt;', '&lt;list&gt;'],
      answer: '&lt;ol&gt;',
   },
   {
      question: 'What is the correct HTML for making a checkbox?',
      choices: ['&lt;checkbox&gt;', '&lt;input type="checkbox"&gt;', '&lt;check&gt;', '&lt;input type="check"&gt;'],
      answer: '&lt;input type="checkbox"&gt;',
   },
   {
      question: 'What does CSS stand for?',
      choices: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
      answer: 'Cascading Style Sheets',
   },
   {
      question: 'What is the correct HTML for referring to an external style sheet?',
      choices: ['&lt;stylesheet&gt;mystyle.css&lt;/stylesheet&gt;', '&lt;style src="mystyle.css"&gt;', '&lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;'],
      answer: '&lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;',
   },
   {
      question: 'Which is the correct CSS syntax?',
      choices: ['body {color: black;}', '{body:color=black;}', 'body:color=black;', '{body;color:black;}'],
      answer: "body {color: black;}",
   },
   {
      question: 'Which property is used to change the background color?',
      choices: ['color', 'background-color', 'bgcolor'],
      answer: "background-color",
   },
   {
      question: 'How do you add a background color for all <h1> elements?',
      choices: ['h1 {background-color:#FFFFFF;}', 'h1.all {background-color:#FFFFFF;}', 'all.h1 {background-color:#FFFFFF;}'],
      answer: "h1 {background-color:#FFFFFF;}",
   },
   {
      question: 'Which property is used to change the left margin of an element?',
      choices: ['padding-left', 'margin-left', 'indent'],
      answer: "margin-left",
   },
   {
      question: 'jQuery uses CSS selectors to select elements',
      choices: ['True', 'False'],
      answer: "True",
   },
   {
      question: 'Which sign does jQuery use as a shortcut for jQuery?',
      choices: ['the ? sign', 'the # sign', 'the $ sign'],
      answer: "the # sign",
   },
   {
      question: 'With jQuery, look at the following selector: $("div"). What does it select?',
      choices: ['All div elements', 'The first div element'],
      answer: "All div elements",
   },
   {
      question: 'What is the correct jQuery code to set the background color of all p elements to red?',
      choices: ['$("p").css("background-color","red");', '$("p").manipulate("background-color","red");', '$("p").layout("background-color","red");', '$("p").style("background-color","red");'],
      answer: '$("p").css("background-color","red")',
   },
   {
      question: 'With jQuery, look at the following selector: $("div.intro"). What does it select?',
      choices: ['All div elements with id="intro"', 'The first div element with id="intro"', 'The first div element with class="intro"', 'All div elements with class="intro"'],
      answer: 'All div elements with class="intro"',
   },
   {
      question: 'Which jQuery method is used to hide selected elements?',
      choices: ['hidden()', 'visible(false)', 'hide()', 'display(none)'],
      answer: "hide()",
   },
   
 ];
 
 const quizContainer = document.getElementById("quiz-container");
 const questionContainer = document.getElementById("question-container");
 const choicesContainer = document.getElementById("choices-container");
 const timerContainer = document.getElementById("timer-container");
 const startButton = document.getElementById("start-btn");
 const gameOverContainer = document.getElementById("game-over-container");
 const initialsInput = document.getElementById("initials-input");
 const saveButton = document.getElementById("save-btn");
 const finalScore = document.getElementById("final-score");
 const highScoresList = document.getElementById("high-scores-list");
 const highScoresContainer = document.getElementById("high-scores-container");
 const tryAgainButton = document.getElementById("try-again-btn"); // Added
 
 let currentQuestionIndex = 0;
 let score = 0;
 let timeLeft = 100;
 let timerInterval;
 
 function startTimer() {
   timerInterval = setInterval(function () {
     timeLeft--;
     timerContainer.textContent = "Time: " + timeLeft;
 
     if (timeLeft <= 0) {
       endQuiz();
     }
   }, 1000);
 }
 
 function showQuestion() {
   if (currentQuestionIndex < questions.length) {
     const currentQuestion = questions[currentQuestionIndex];
     questionContainer.textContent = currentQuestion.question;
     choicesContainer.innerHTML = "";
 
     currentQuestion.choices.forEach(function (choice) {
       const choiceElement = document.createElement("label");
       const inputElement = document.createElement("input");
       inputElement.type = "radio";
       inputElement.name = "choice";
       inputElement.value = choice;
       choiceElement.appendChild(inputElement);
       choiceElement.innerHTML += choice; 
       choicesContainer.appendChild(choiceElement);
     });
 
     choicesContainer.addEventListener("change", checkAnswer);
   } else {
     endQuiz();
   }
 }
 
 
 function checkAnswer() {
   const selectedChoice = document.querySelector('input[name="choice"]:checked');
 
   if (selectedChoice) {
     const selectedAnswer = selectedChoice.value;
     const currentQuestion = questions[currentQuestionIndex];
 
     if (selectedAnswer === currentQuestion.answer) {
       score++;
     } else {
       timeLeft -= 5; 
       if (timeLeft < 0) {
         endQuiz();
         return;
       }
     }
 
     currentQuestionIndex++;
 
     if (currentQuestionIndex < questions.length) {
       showQuestion();
     } else {
       endQuiz();
     }
   }
 }
 
 function endQuiz() {
   clearInterval(timerInterval);
 
   const percentage = (score / questions.length) * 100;
   quizContainer.style.display = "none";
   gameOverContainer.style.display = "block";
   finalScore.textContent = percentage;
 
   tryAgainButton.style.display = "block";
   startButton.style.display = "none";
 
   currentQuestionIndex = 0;
   score = 0;
   timeLeft = 100;
 }
 
 
 function displayHighScores() {
   const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
 
   highScoresList.innerHTML = "";
 
   const table = document.createElement("table");
   table.classList.add("high-scores-table");
 
   const headers = ["Initials", "Score"];
   const headerRow = document.createElement("tr");
   headers.forEach(function (header) {
     const th = document.createElement("th");
     th.textContent = header;
     headerRow.appendChild(th);
   });
   table.appendChild(headerRow);
 
   highScores.forEach(function (score) {
     const row = document.createElement("tr");
     const initialsCell = document.createElement("td");
     const scoreCell = document.createElement("td");
 
     initialsCell.textContent = score.initials;
     scoreCell.textContent = score.score;
 
     row.appendChild(initialsCell);
     row.appendChild(scoreCell);
 
     table.appendChild(row);
   });
 
   highScoresList.appendChild(table);
 }
 
 
 startButton.addEventListener("click", startQuiz);
 
 saveButton.addEventListener("click", function () {
   const initials = initialsInput.value.trim();
 
   if (initials !== "") {
     const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
 
     const newScore = {
       initials: initials,
       score: finalScore.textContent,
     };
 
     highScores.push(newScore);
     localStorage.setItem("highScores", JSON.stringify(highScores));
 
     initialsInput.value = "";
 
     displayHighScores();
   }
 });
 
 function startQuiz() {
   quizContainer.style.display = "block";
   gameOverContainer.style.display = "none";
   tryAgainButton.style.display = "none";
   startButton.style.display = "none";
   startTimer();
   showQuestion();
 
   currentQuestionIndex = 0;
   score = 0;
   timeLeft = 100;
   finalScore.textContent = "";
 }
 
 displayHighScores();
 
 tryAgainButton.addEventListener("click", function () {
   startQuiz();
 });
 
 
 displayHighScores();
 
 tryAgainButton.addEventListener("click", function () {
   startQuiz();
   gameOverContainer.style.display = "none"; 
 });
 