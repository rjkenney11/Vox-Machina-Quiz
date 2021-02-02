const startButton = document.querySelector(".startBtn");

const quiz = document.getElementById("quiz");

const questions = document.getElementById("questions");
const title = document.getElementById("question-title");
const choices = document.getElementById("choices");

const newTitle = document.querySelector("question-holder")
const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");

var questionsDiv = document.querySelector("#questionsDiv");
var currentQuestion = 0;

var initials = document.querySelector("#initials");

var score = 0;
var timeLeft = 0;
var timer;
var localStorge = window.localStorage;

var myQuestions = [
    {
        question: "What are the names of the half-elves in the party?",
        answers: ['Grog, Yasha and Keyleth','Keyleth, Vex and Vax','Pike, Beau and Vax'],
        correctAnswer: 'Keyleth, Vex and Vax'
    },    
    {
        question: "What is Grog's intelligence score?",
        answers: ["10","20","6"],
        correctAnswer: "6"
    },
    {
        question: "What is the name and kind of Vex's animal companion?",
        answers: ['Naga the Giant Serpent','Trinket the Bear','Sprinkle the Crimson Weasel'],
        correctAnswer: 'Trinket the Bear'
    },
    {
        question: "How did Pike meet Grog?",
        answers: ['She saved his life.','They met in a bar.','He kidnapped her.'],
        correctAnswer: 'She saved his life.'
    },
    {
        question: "What is Grog's famous catchphrase?",
        answers: ['I am super angry!','Where is my ale?','I would like to rage!'],
        correctAnswer: 'I would like to rage!'
    },
    {
        question: "How many NPCs are named Jameson?",
        answers: ['4','3','2'],
        correctAnswer: '3'
    },
];

startButton.addEventListener("click", generateQuiz);


function generateQuiz() {
    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver(); 
        }
    }, 1000);


    console.log("hey, does this work");
    document.querySelector(".startBtn").classList.add("hide");
    document.querySelector(".instructions").classList.add("hide");

    var questionNum = 0;
    // Call (or Invoke) our Function
    showQuestions();
}


function showQuestions() {
    // Clearing out or Empty our <div id="choices">     
    choices.textContent = '';

    console.log(currentQuestion);

    // Dynamically Create our questions and answer choices
    title.textContent = myQuestions[currentQuestion].question;

    // Create a new HTML ELEMENT
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");

    // Add and TEXT or ATTRIBUTES to our new HTML ELEMENT
    btn1.textContent = myQuestions[currentQuestion].answers[0];
    btn1.setAttribute("value", myQuestions[currentQuestion].answers[0]);
    btn1.addEventListener("click", checkAnswer);

    btn2.textContent = myQuestions[currentQuestion].answers[1];
    btn2.setAttribute("value", myQuestions[currentQuestion].answers[1]);
    btn2.addEventListener("click", checkAnswer);

    btn3.textContent = myQuestions[currentQuestion].answers[2];
    btn3.setAttribute("value", myQuestions[currentQuestion].answers[2]);
    btn3.addEventListener("click", checkAnswer);
    // add this NEW ELEMENT to the DOM (or Browser window)
    choices.append(btn1, btn2, btn3);

}


function checkAnswer(event){
    console.log("click");

    console.log(event.target);
    console.log(event.target.value);  

    var answer = event.target.value;
    var correctAnswer = myQuestions[currentQuestion].correctAnswer;

    if(answer == correctAnswer){
        //get element by class, change text based on the current question
        currentQuestion++;
        console.log("user answered correctly");
    }
    else{
        console.log("user answered incorrectly");
        currentQuestion++;
        // this is the same as above (forgive me, graders, I'm learning and keeping this as a note)
        currentQuestion = currentQuestion + 1;
        timeLeft = timeLeft - 10;
    }
    if(currentQuestion < myQuestions.length){
    showQuestions();
    }
    else{
        gameOver();
    }
}

function gameOver(){
    score = timeLeft;
    console.log(score);
    clearInterval(timer);
    setScore();
    window.location.href = "highscores.html";
}

function setScore() {
    localStorage.setItem("quizScore", score);
}

