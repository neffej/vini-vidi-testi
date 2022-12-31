var answer1 = document.getElementById("q1");
var answer2 = document.getElementById("q2");
var answer3 = document.getElementById("q3");
var answer4 = document.getElementById("q4");
var buttons = [answer1,answer2,answer3,answer4];
var prompt = document.getElementById("question-text");
var start = document.querySelector('#start');
var intro = document.getElementsByClassName('intro')[0];
var time = document.querySelector('.time');
var scores = document.querySelector('.scores');
var record = localStorage.getItem('record');
var quiz = document.querySelector('.quiz');
var submission = document.querySelector('.submission');
var results = document.querySelector('#results');
var resultsList = document.querySelector('#resultsList');
// var form = document.querySelector('form');
var card = document.querySelector('.card');
var initialInput = document.querySelector('#initials');
var submitButton = document.querySelector('#submit');
var msgDiv = document.querySelector("#msg");

scores.textContent = "View Highscores";
time.textContent = 0;


let currentQuestion = -1;
const currentAnswer = [""];
let runs = -1;


// card.style.display = 'none';
quiz.style.display = 'none';
submission.style.display = 'none';

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers:[
            {option:"1. strings", answer: false},
            {option:"2. booleans", answer: false},
            {option:"3. alerts", answer: true},
            {option:"4. numbers", answer: false},
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ______.",
        answers:[
            {option: "1. quotes", answer: false},
            {option: "2. curly brackets", answer: true},
            {option: "3. parentheses", answer: false},
            {option: "4. square brackets", answer: false},
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers:[
            {option: "1. numbers and strings", answer: false},
            {option: "2. other arrays", answer: false},
            {option: "3. booleans", answer: false},
            {option: "4. all of the above", answer: true},
        ]
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            {option: "1. commas", answer: false},
            {option: "2. curly brackets", answer:false},
            {option: "3. quotes", answer: true},
            {option: "4. parentheses", answer: false},
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {option: "1. JavaScript", answer: false},
            {option: "2. terminal / bash", answer: false},
            {option: "3. for loops", answer: false},
            {option: "4. console log", answer: true},
        ]
    }
];

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  };

start.addEventListener('click', startGame);

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var initials = document.querySelector('#initials').value

    if (initials === "") {
        displayMessage("error", "Email cannot be blank");
      } else if (initials.length != 3) {
        displayMessage("error", "Must enter 3 letters");
      } else {
        displayMessage("success", "High Score recorded successfully");

    localStorage.setItem("initials",initials);
    console.log(localStorage.getItem("initials"));

      }
    });

scores.addEventListener('click',function(){
    results.style.display = 'block';
    quiz.style.display = 'none';
    submission.style.display = 'none';
    intro.style.display = 'none';

    var username = localStorage.getItem('initials');

    resultsList.textContent = username;
    console.log(resultsList.textContent);
});

// Answer button logic
answer1.addEventListener('click',function(){
    console.log(questions[currentQuestion].answers[0].answer);
    let count = currentAnswer.push(questions[currentQuestion].answers[0].answer);
    console.log(count);
    checkAnswer();
});

answer2.addEventListener('click',function(){
    let answer = 1;
    console.log(questions[currentQuestion].answers[answer].answer);
    let count = currentAnswer.push(questions[currentQuestion].answers[answer].answer);
    console.log(count);
    checkAnswer();    
});
answer3.addEventListener('click',function(){
    let answer = 2;
    let count = currentAnswer.push(questions[currentQuestion].answers[answer].answer);
    console.log(count);
    checkAnswer();    
});
answer4.addEventListener('click',function(){
    let answer = 3;
    console.log(questions[currentQuestion].answers[answer].answer);
    let count = currentAnswer.push(questions[currentQuestion].answers[answer].answer);
    console.log(count);
    checkAnswer();  
});

// Functions 
function checkAnswer(){
    console.log(currentAnswer[currentAnswer.length - 1]);
    if(currentAnswer[currentAnswer.length - 1] === true){
        console.log ('true');
    }else{console.log('false')};
    setNextQuestion();
    return;
};


function startGame(){
    console.log('started');

    if (quiz.style.display = 'none'){
        quiz.style.display = 'block';
        if( intro.style.display = 'block'){
            intro.style.display = 'none';
        }
    }
    setNextQuestion();
    return;
};

function setNextQuestion(){
    if(currentQuestion < 4){
    currentQuestion +=  1;
    showQuestion();
    }else{
        console.log ('ended');
        showResults();
    }
};

function showQuestion(){
    prompt.textContent = questions[currentQuestion].question;
    answer1.textContent = questions[currentQuestion].answers[0].option;
    answer2.textContent = questions[currentQuestion].answers[1].option;
    answer3.textContent = questions[currentQuestion].answers[2].option;
    answer4.textContent = questions[currentQuestion].answers[3].option;
    };

function showResults(){
    quiz.style.display = 'none';
    submission.style.display = 'block';
    }



 

