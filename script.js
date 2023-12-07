var questions = [
    {
        question: "What is pseudocode?",
        answers: [
            { text: "Fake code", correct: false}
            { text: "Notation resembling a programming language", correct: true}
            { text: "Imaginary code", correct: false}
            { text: "Fauly code", correct: false}
        ]
    },
    {
        question: "What is HTML?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true}
            { text: "Honest Turkeys Making a Living", correct: false}
            { text: "Hyper Turbo Marketing Language", correct: false}
            { text: "Hyper Texture Makeup Look", correct: false}
        ]
    },
    {
        question: "What is CSS?",
        answers: [
            { text: "Carismatic Senior Senators", correct: false}
            { text: "Cascading Style Shifts", correct: false}
            { text: "Cascading Style Sheets", correct: true}
            { text: "Computer Science Styles", correct: false}
        ]
    },
    {
        question: "What is Javascript?",
        answers: [
            { text: "A written form of coffee", correct: false}
            { text: "The skeleton of code", correct: false}
            { text: "Scripting language used to develop web pages", correct: true}
            { text: "Language used for only styling web pages", correct: false}
        ]
    }
];

var questionElement = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");

let currentQuestionIndex  = 0;
let score = 0;

// function to start quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
// function to show questions and select them from the index
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
// code to show answer when selected 
    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    })
}
// Function to remove all previous answers
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();