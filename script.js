// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


// Declare a set of associative objects contained arrays inside 'questions' variable
const questions = [
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is",
        choices: ["loop", "javascript", "console log", "terminal"],
        answer: "console log"
    },
    {
        question: "Arrays in Javascript can be used to store.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    
    
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["onclick", "onchange", "onmouseover", "onmouseclick"],
        answer: "onclick"
    }
];


// trigger timer
var timer = document.querySelector("#startTiming");
var addTimer = 0;
var timeLeft = 5;
var totalTime = document.querySelector("#totalTime");

timer.addEventListener("click", function () {
    
    if (addTimer === 0) {
        addTimer = setInterval(function () {
            timeLeft--;
            totalTime.textContent = "Time: " + timeLeft;
        }, 1000);
    }

});