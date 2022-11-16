var startButton = document.getElementById('start-button');
var questionForm = document.getElementById('question-form');
var answerButton = document.getElementsByClassName('answer-button')
var startScreen = document.getElementById('start');
var timerElement = document.getElementById('time');
var initialEntry = document.getElementById('all-done');
var question = document.getElementById('question');

var currentQuestion;
var correctAnswers = 0;
var timer;
var timerCount;
var correctAnswer;
var inputButton;
var i = 0;
var questions = [
    'How many inches are in a foot?',
    "cats",
    'dogs'
];

//listens for clicks on start button which the transitions to questions
startButton.addEventListener('click', startGame);

//removes the start screen and transitions to first question
function startGame () {
    timerCount = 30;
    startScreen.setAttribute('class', 'hide');
    questionForm.removeAttribute('class', 'hide');
    questionForm.setAttribute('class', 'card');
    startTimer();
    nextQuestion();
}

//starts the timer for the duration of 30 seconds
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
          if (correctAnswer && timerCount >= 0) {
            // Clears interval and stops timer
            clearInterval(timer);
          }
        }
        // Tests if time has run out
        if (timerCount === 0) {
          // Clears interval
          clearInterval(timer);
          gameOver();
        }
      }, 1000);
}


function nextQuestion() {
    if (i < questions.length){
      i++
        currentQuestion = questions[i];
        question = currentQuestion;
}
}

function question() {
    question.textContent = 'How many inches are in a foot?';
    correctAnswer = answerButton[0];
    answerButton[0].textContent = '12';
    answerButton[1].textContent = '6';
    answerButton[2].textContent = '4';
    answerButton[3].textContent = '1';

    answerButton.addEventListener('click', nextQuestion());

    if ( correctAnswer === true) {
        correctAnswer++;
        console.log(correctAnswer);
    }else {
        wrongAnswer()
    }
}


function gameOver() {
    questionForm.setAttribute('class', 'hide');
    initialEntry.removeAttribute('class', 'hide');
    timeLeft = timer;
    clearInterval(timer);
}

function wrongAnswer () {
    timer = timer -5
}

// function storeData() {
//     localStorage.setItem("initals", initialEntry);
//     localStorage.setItem('correct-answers', correctAnswer);
//     localStorage.setItem('time-left', timer);
// }
