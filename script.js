var questions = [
    {
        question: "What is pseudocode?",
        answers: [
            { text: "Fake code", correct: false},
            { text: "Notation resembling a programming language", correct: true},
            { text: "Imaginary code", correct: false},
            { text: "Fauly code", correct: false}
        ]
    },
    {
        question: "What is HTML?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true},
            { text: "Honest Turkeys Making a Living", correct: false},
            { text: "Hyper Turbo Marketing Language", correct: false},
            { text: "Hyper Texture Makeup Look", correct: false}
        ]
    },
    {
        question: "What is CSS?",
        answers: [
            { text: "Carismatic Senior Senators", correct: false},
            { text: "Cascading Style Shifts", correct: false},
            { text: "Cascading Style Sheets", correct: true},
            { text: "Computer Science Styles", correct: false}
        ]
    },
    {
        question: "What is Javascript?",
        answers: [
            { text: "A written form of coffee", correct: false},
            { text: "The skeleton of code", correct: false},
            { text: "Scripting language used to develop web pages", correct: true},
            { text: "Language used for only styling web pages", correct: false}
        ]
    }
];

var questionElement = document.getElementById("question");
var answerButton = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var endContainer = document.querySelector(".end-container");
var quizContainer = document.querySelector(".quiz");
var scoreEl = document.getElementById("score");
var inputField = document.getElementById("input");
var submitButton = document.getElementById("submit-btn");

let currentQuestionIndex  = 0;
let score = 0;

// function to start quiz
function startQuiz(){
    endContainer.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(0);
}
// function to show questions and select them from the index
function showQuestion(i){
    resetState();
    let currentQuestion = questions[i]
    let questionNo = i + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

// code to show answer when selected 
    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.setAttribute("correct", answer.correct)
        answerButton.appendChild(button);
        button.addEventListener("click", function(){
            console.log(button)
        verifyAnswer(button)
        })
    })
}
// Function to remove all previous answers
function resetState(){
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function verifyAnswer(button){
    console.log(button)
    var check = button.getAttribute("correct")
    console.log(check)
    if(check === "true"){
        score = score + 5
    }
    currentQuestionIndex++
    nextButton.addEventListener("click", function(){
        if(currentQuestionIndex < questions.length){
            showQuestion(currentQuestionIndex)
        }
        else{
            console.log("Game Over")
            quizContainer.style.display = "none"
            endContainer.style.display = "block"
            scoreEl.innerHTML = "score: "+ score
        }
    })
}

// Function to change color of answered question background 
function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}
startQuiz();