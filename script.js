const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

function showQuestion(index) {
    const question = questions[index];
    questionElement.textContent = question.question;
}

prevButton.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
});

// Initial question display
showQuestion(currentQuestionIndex);
