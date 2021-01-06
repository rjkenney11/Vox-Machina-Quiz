
const startButton = document.querySelector("#startBtn");

const quiz = document.getElementById("quiz");
const qContainer = document.getElementById("question-container")
const question = document.getElementById("question");
const choiceA = document.getElementById("a");
const choiceB = document.getElementById("a");
const choiceC = document.getElementById("a");

startButton.addEventListener("click", generateQuiz);

function generateQuiz(){
    startButton.classList.add("hide");
    qContainer.classList.remove("hide")

	function showQuestions();
    var myQuestions = [
        {
            question: "What are the names of the half-elves in the party?",
            answers: {
                choiceA: 'Grog & Yasha & Keyleth',
                choiceB: 'Keyleth & Vex & Vax',
                choiceC: 'Pike & Beau & Vax'
            },
            correctAnswer: 'b'
        },
        {
            question: "What is Grog's intelligence score?",
            answers: {
                choiceA: '10',
                choiceB: '20',
                choiceC: '6'
            },
            correctAnswer: 'c'
        },
        {
            question: "What is the name and kind of Vex's animal companion?",
            answers: {
                choiceA: 'Naga the Giant Serpent',
                choiceB: 'Trinket the Bear',
                choiceC: 'Sprinkle the Crimson Weasel'
            },
            correctAnswer: 'b'
        },
        {
            question: "How did Pike meet Grog?",
            answers: {
                choiceA: 'She saved his life.',
                choiceB: 'They met in a bar.',
                choiceC: 'He kidnapped her.'
            },
            correctAnswer: 'a'
        },
        {
            question: "What is Grog's famous catchphrase?",
            answers: {
                choiceA: 'I am super angry!',
                choiceB: 'Where is my ale?',
                choiceC: 'I would like to rage!'
            },
            correctAnswer: 'c'
        },
        {
            question: "How many NPCs are named Jameson?",
            answers: {
                choiceA: '4',
                choiceB: '2',
                choiceC: '3'
            },
            correctAnswer: 'c'
        },
    ];

   
	}