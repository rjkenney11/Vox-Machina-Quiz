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


var myQuestions = [
    {
        question: "What are the names of the half-elves in the party?",
        answers: ['Grog, Yasha and Keyleth','Keyleth, Vex and Vax','Pike, Beau and Vax'],
        correctAnswer: 'Keyleth, Vex and Vax'
    },    
    {
        question: "What is Grog's intelligence score?",
        answers: ["10","20","6"],
        correctAnswer: 2
    },
    {
        question: "What is the name and kind of Vex's animal companion?",
        answers: ['Naga the Giant Serpent','Trinket the Bear','Sprinkle the Crimson Weasel'],
        correctAnswer: 1
    },
    {
        question: "How did Pike meet Grog?",
        answers: ['She saved his life.','They met in a bar.','He kidnapped her.'],
        correctAnswer: 0
    },
    {
        question: "What is Grog's famous catchphrase?",
        answers: ['I am super angry!','Where is my ale?','I would like to rage!'],
        correctAnswer: 2
    },
    {
        question: "How many NPCs are named Jameson?",
        answers: ['4','3','2'],
        correctAnswer: 1
    },
];

startButton.addEventListener("click", generateQuiz);

function generateQuiz() {
    console.log("hey, does this work");
    document.querySelector(".startBtn").classList.add("hide");
    document.querySelector(".instructions").classList.add("hide");

    // document.querySelector(".question-container").classList.remove("hide");

    var questionNum = 0;
    // Call (or Invoke) our Function
    showQuestions();
}


function showQuestions() {
    // Clearing out or Empty our <div id="choices">     
    choices.textContent = '';

    console.log(currentQuestion);
/*
    newTitle.textContent = myQuestions[currentQuestion].question;
    choiceA.textContent = myQuestions[currentQuestion].answers[0];
    choiceB.textContent = myQuestions[currentQuestion].answers[1];
    choiceC.textContent = myQuestions[currentQuestion].answers[2];
*/   
    // We want to keep track of what question OBJECT we are currently lookin gat
    // Dynamically Create our questions and answer choices
    title.textContent = myQuestions[currentQuestion].question

    // 1) Create a new HTML ELEMENT
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");
   // console.log(btn1);

    // 2) Add and TEXT or ATTRIBUTES to our new HTML ELEMENT
    btn1.textContent = myQuestions[currentQuestion].answers[0];
    btn1.setAttribute("value", myQuestions[currentQuestion].answers[0]);
    btn1.addEventListener("click", checkAnswer);
    // Think about adding a button (click) listener 

    btn2.textContent = myQuestions[currentQuestion].answers[1];
    btn2.setAttribute("value", myQuestions[currentQuestion].answers[1]);
    btn2.addEventListener("click", checkAnswer);

    btn3.textContent = myQuestions[currentQuestion].answers[2];
    btn3.setAttribute("value", myQuestions[currentQuestion].answers[2]);
    btn3.addEventListener("click", checkAnswer);
    // 3) We need to add this NEW ELEMENT to the DOM (or Browser window)
    choices.append(btn1, btn2, btn3);


    // Increment the currentQuestion
 

 //   currentQuestion++;

    // Create a function thats controlles 
 //   showNextQuestion();
}


function checkAnswer(event){
    console.log("click");
    // Log the EVENT 
    //console.log(event);
    console.log(event.target);
    console.log(event.target.value);  // --> this the BUTTON ELEMENT itself

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
        // this is the same as above
        currentQuestion = currentQuestion + 1;
    }
    showQuestions();
}


// Think about how we are going to know when we get to our last question?  --> What do you want to happen

