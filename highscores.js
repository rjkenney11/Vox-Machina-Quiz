var highScore = document.querySelector("#scoreList");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
var quizScore = localStorage.getItem("quizScore");
var timeLeft = document.querySelector("#timeLeft");
var highScores = localStorage.getItem("highScores");
var submitBtn = document.querySelector("#submitBtn");
var initials = document.querySelector("#initials");

timeLeft.innerText = quizScore;

submitBtn.addEventListener("click", function() {
    highScores.push({name: initials.value, score: quizScore});
    listHighScores();
});
// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage
highScores = JSON.parse(highScores);

if (highScores !== null) {
    listHighScores();
}

function listHighScores(){
    highScore.innerHTML = "";
    for (var i = 0; i < highScores.length; i++) {

        var createList = document.createElement("li");
        createList.textContent = highScores[i].name + " " + highScores[i].score;
        highScore.appendChild(createList);

    }
}


// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});