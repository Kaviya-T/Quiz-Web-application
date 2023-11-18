const quiz = [
    {
        question: "What does HTML stand for?",
        ans1text: "Hyper Transfer Markup Language",
        ans2text: "Hyper Text Makeup Language",
        ans3text: "Hyperlink and Text Markup Language",
        ans4text: "Hyper Text Markup Language",
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Which programming language is primarily used for adding interactivity to web pages?",
        ans1text: "CSS",
        ans2text: "Javascript",
        ans3text: "Python",
        ans4text: "Ruby",
        answer: "Javascript",
    },{
        question: "Which of the following is NOT a valid HTTP status code?",
        ans1text: "200 OK",
        ans2text: "404 Not Found",
        ans3text: "503 Service Unavailable",
        ans4text: "100 Redirection",
        answer: "100 Redirection",
    },
    {
        question: "What does CSS stand for?",
        ans1text: "Computer Style Sheets",
        ans2text: "Creative Style Sheets",
        ans3text: "Cascading Style Sheets",
        ans4text: "Content Style Sheets",
        answer: "Cascading Style Sheets",

    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        ans1text: "<link>",
        ans2text: "<a>",
        ans3text: "<href>",
        ans4text: "<url>",
        answer: "<a>",
 
    },
    {
        question: "Which of the following is not a commonly used web development framework/library for JavaScript?",
        ans1text: "React",
        ans2text: "Angular",
        ans3text: "Django",
        ans4text: "Vue.js",
        answer: "Django",
 
    },
    {
        question: "Which file type is commonly used for server-side scripting in web development?",
        ans1text: ".HTML",
        ans2text: ".CSS",
        ans3text: ".JS",
        ans4text: ".PHP",
        answer: ".PHP",
 
    },
    {
        question: "What does HTTP stand for in the context of web communication?",
        ans1text: "Hyper Text Transfer Protocol",
        ans2text: "Hyperlink Text Transmission Protocol",
        ans3text: "High Tech Transfer Protocol",
        ans4text: "Hyper Transfer Text Protocol",
        answer: "Hyper Text Transfer Protocol"
 
    }

]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});

