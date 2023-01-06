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
var quiz = document.querySelector('.quiz');
var submission = document.querySelector('.submission');
var results = document.querySelector('#results');
var resultsList = document.querySelector('#resultsList');
var card = document.querySelector('.card');
var initialInput = document.querySelector('#initials');
var submitButton = document.querySelector('#submit');
var msgDiv = document.querySelector("#msg");

const records = [];
const initials = [];
const times = [];
let obj = [];

scores.textContent = "View Highscores";
time.textContent = 75;

let x = 0;
var secondsLeft = 75;
var timerInterval=0

let currentQuestion = -1;
const currentAnswer = [""];
let runs = -1;


quiz.style.display = 'none';
submission.style.display = 'none';

// List of questions
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
            {option: "2. parentheses", answer: true},
            {option: "3. curly brackets", answer: false},
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

// This function populates the obj array with localStorage items so that the highscores can persist.
function init() {
    var storedRecords = JSON.parse(localStorage.getItem("record"));

    if (storedRecords !== null) {
        obj = storedRecords;
    }
}

// This function provides feedback in the submission page
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
  };

//   This button begins the game; the callback function hides the start page and displays the 1st quiz question
start.addEventListener('click', startGame);

// This button records the user's initials and scores in localStorage and navigates away from submission page
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var submission = document.querySelector('#initials').value
    console.log(submission);


    if (submission === "") {
        displayMessage("error", "Submission cannot be blank");
      } 
      else if (submission.length != 3) {
        displayMessage("error", "Must enter 3 letters");
      }
       else {
        // Push results into obj array
        var user = (document.querySelector('#initials').value);
        obj.push({user, secondsLeft});
        displayMessage("success", "High Score recorded successfully");

        // Stringify and store results
        localStorage.setItem("record",JSON.stringify(obj));

        // Check progress
        console.log(localStorage.getItem("record"));
        console.log(obj);

        // Render results page and hide submission page

        showScores()

        return;
       }
    });

// View Highscores link logic
function showScores(){
    results.style.display = 'block';
    quiz.style.display = 'none';
    submission.style.display = 'none';
    intro.style.display = 'none';

    // Grab records from localStorage
    var recordList = JSON.parse(localStorage.getItem('record'));
    console.log(recordList[0].user);
    console.log(recordList[0].secondsLeft);

    // Sort record list
    let sortedRecords = recordList.sort(
        (p1,p2)=>(p1.secondsLeft < p2.secondsLeft)? 1 : (p1.secondsLeft > p2.secondsLeft) ? -1 :0);

    console.log(sortedRecords[0]);
    console.log(recordList[0]);

    // Display record list in li in the OL provided in the HTML
    for(var i=0; i< recordList.length; i++){
        var user = recordList[i].user;
        var score = recordList[i].secondsLeft;

        var li = document.createElement("li");
        li.textContent = user + "    " + score;
        li.setAttribute = ("data-index",i);

        resultsList.appendChild(li);
    }
}

scores.addEventListener('click',showScores
// Commented out logic has migrated to a declared function:

    // results.style.display = 'block';
    // quiz.style.display = 'none';
    // submission.style.display = 'none';
    // intro.style.display = 'none';

    // // Grab records from localStorage
    // var recordList = JSON.parse(localStorage.getItem('record'));
    // console.log(recordList[0].user);
    // console.log(recordList[0].secondsLeft);

    // // Sort record list
    // let sortedRecords = recordList.sort(
    //     (p1,p2)=>(p1.secondsLeft < p2.secondsLeft)? 1 : (p1.secondsLeft > p2.secondsLeft) ? -1 :0);

    // console.log(sortedRecords[0]);
    // console.log(recordList[0]);

    // // Display record list in li in the OL provided in the HTML
    // for(var i=0; i< recordList.length; i++){
    //     var user = recordList[i].user;
    //     var score = recordList[i].secondsLeft;

    //     var li = document.createElement("li");
    //     li.textContent = user + "    " + score;
    //     li.setAttribute = ("data-index",i);

    //     resultsList.appendChild(li);
    // }
    );

// Answer button logic
// The following 4 eventListeners provide logic for the 4 answer choices in the test game
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
    let count = currentAnswer.push(questions[currentQuestion].answers[answer].answer);
    console.log(count);
    checkAnswer();  
});

// Functions 
// setTime controls the timing function of the game, which coincidentally is also the scoring function of the game. Variables here will be seen in the record storage process.
function setTime(){
    let timerInterval = setInterval(function(){
        secondsLeft--;
        time.textContent = secondsLeft;

        if(secondsLeft === 0 || quiz.style.display === 'none'){
            console.log('time stopped '+secondsLeft);
            clearInterval(timerInterval);
            showResults();
        }},1000)
    };

// This function refers to the questions object to validate whether the user's choice was correct. CurrentAnswer variable introduced in answer buttons.
function checkAnswer(){
    console.log(currentAnswer[currentAnswer.length - 1]);
    if(currentAnswer[currentAnswer.length - 1] === true){
        console.log ('true');
    }else{console.log('false');
            secondsLeft -= 10;}
            setNextQuestion();
    return;
    };

// This function cycles the webpage from its homepage to display the quiz.
function startGame(){
    console.log('started');
    setTime();
    if (quiz.style.display = 'none'){
        quiz.style.display = 'block';
        if( intro.style.display = 'block'){
            intro.style.display = 'none';
        }
    }
    setNextQuestion();
    return;
};

// This function verifies whether the user is at the end of the exam; if he/she is, the quiz ends and results are given. If not, the next question is shown.
function setNextQuestion(){
    if(currentQuestion < 4){
    currentQuestion +=  1;
    showQuestion();
    }else{
        console.log ('ended');
        // clearInterval(timerInterval);
        // timerInterval = null;
        // console.log(timerInterval);
        showResults();
    }
};

// This function controls the display of the quiz section of the webpage. It might be superfluous and these relationships could be declared at the top, but it's something I started with and don't have the time/energy to edit out at this point.
function showQuestion(){
    prompt.textContent = questions[currentQuestion].question;
    answer1.textContent = questions[currentQuestion].answers[0].option;
    answer2.textContent = questions[currentQuestion].answers[1].option;
    answer3.textContent = questions[currentQuestion].answers[2].option;
    answer4.textContent = questions[currentQuestion].answers[3].option;
    };

// This function transitions the webpage to its submission form when the end of the questions have been reached.
function showResults(){
    quiz.style.display = 'none';
    submission.style.display = 'block';
    }


init();

 

