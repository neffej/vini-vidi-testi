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
var results = document.querySelector('.results');

// var currentQuestion = 0;
time.textContent = 0;
scores.textContent = "View Highscores";

let currentQuestion = -1;
const currentAnswer = [""];
let runs = -1;

var card = document.querySelector('.card');

// card.style.display = 'none';
quiz.style.display = 'none';


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


start.addEventListener('click', startGame)


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
    results.style.display = 'block';
    results.textContent = "Congratulations! You have reached the end of the quiz. Please enter your initials to log your score!";
    }



 

// This controls what is displayed on the screen
// function beginQuiz(){
//     console.log('you clicked the button');
//     intro.setAttribute('display','none');
//     let currentQuestion = 0;
//     countDown();
//     quizGame();


// };

// The script below is what I wrote; it's to be returned to/altered

// function next(){
//     console.log ('next');
//     currentQuestion++;
//     if (currentQuestion === 5){
//         console.log("end of quiz");
//         prompt.innerHTML = "Congrats! That's the end of the quiz. Log your score!";
//         card.style.display = 'none';
//         return;
//     }else {
//         buttons[0].addEventListener('click',function(){
//             if(currentQuestion < questions.length){
//             console.log("clicked 0 button");
//             if(questions[currentQuestion].answers[0].answer === true){
//                 next();
//                 console.log(currentQuestion+" true")
//             }else if(questions[currentQuestion].answers[0].answer === false){
//                 console.log(currentQuestion+" false");
//                 next();
//             }
//             return;
//         }
//         });
//     }  
// };


// function quizGame(){
    

//     buttons[0].addEventListener('click',function(){
//         if(currentQuestion < questions.length){
//         console.log("clicked 0 button");
//         if(questions[currentQuestion].answers[0].answer === true){
//             next();
//             console.log(currentQuestion+" true")
//         }else if(questions[currentQuestion].answers[0].answer === false){
//             console.log(currentQuestion+" false");
//             next();
//         }
//         return;
//     }
//     });
//     // else{
//     //     console.log("reset currentQuestions");
//     //     if(questions[currentQuestion].answers[0].answer === true){
//     //         currentQuestion = 0;
//     //     }else if(questions[currentQuestion].answers[0].answer === false){
//     //         currentQuestion = 0;
//     //         console.log(questions[currentQuestion].answers[0].answer);
//     //     }}
//     // buttons[1].addEventListener('click',function(){
//     //     if(currentQuestion < questions.length-1){
//     //     console.log("clicked 1 button");
//     //     if(questions[currentQuestion].answers[1].answer === true){
//     //         currentQuestion ++;
//     //         console.log(currentQuestion+" true")
//     //     }else{
//     //         currentQuestion ++;
//     //         console.log(currentQuestion+" false");
//     //     }
//     // }else{
//     //     console.log("reset currentQuestions");
//     //     if(questions[currentQuestion].answers[1].answer === true){
//     //         currentQuestion = 0;
//     //     }else{
//     //         currentQuestion = 0;
//     //         console.log(questions[currentQuestion].answers[0].answer);
//     //     }}
//     // });
//     // buttons[2].addEventListener('click',function(){
//     //     if(currentQuestion < questions.length-1){
//     //     console.log("clicked 2 button");
//     //     if(questions[currentQuestion].answers[2].answer === true){
//     //         currentQuestion ++;
//     //         console.log(currentQuestion+" true")
//     //     }else{
//     //         currentQuestion ++;
//     //         console.log(currentQuestion+" false");
//     //     }
//     // }else{
//     //     console.log("reset currentQuestions");
//     //     if(questions[currentQuestion].answers[2].answer === true){
//     //         currentQuestion = 0;
//     //     }else{
//     //         currentQuestion = 0;
//     //         console.log(questions[currentQuestion].answers[0].answer);
//     //     }}
//     // });
//     // buttons[3].addEventListener('click',function(){
//     //     if(currentQuestion < questions.length-1){
//     //     console.log("clicked 3 button");
//     //     if(questions[currentQuestion].answers[3].answer === true){
//     //         currentQuestion ++;
//     //         console.log(currentQuestion+" true")
//     //     }else{
//     //         currentQuestion ++;
//     //         console.log(currentQuestion+" false");
//     //     }
//     // }else{
//     //     console.log("reset currentQuestions");
//     //     if(questions[currentQuestion].answers[3].answer === true){
//     //         currentQuestion = 0;
//     //     }else{
//     //         currentQuestion = 0;
//     //         console.log(questions[currentQuestion].answers[0].answer);
//     //     }}
//     // });
// return;
// }
// quizGame();

// function showResults(){

                
// }


// function countDown(){
//     var timeLeft = 75;
//     var timeInterval = setInterval(function(){
//         if(timeLeft > 1){
//             time.textContent = timeLeft;
//             timeLeft --;
//         } else if (timeLeft === 1){
//             time.textContent = timeLeft;
//             timeLeft--;
//         } else {
//             localStorage.setItem('record',record);
//             console.log('quiz over');
//             clearInterval(timeInterval);
//             // showResults();
//         }
//     },1000);
// }



// start.addEventListener('click',beginQuiz());

// beginQuiz();
