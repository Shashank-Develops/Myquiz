// --->Used comments to explain Javascript<----

// Define the current question index
let currentQuestion = 0;

// Array to store user's answers
const userAnswers = [];

// Array of questions
const questionsData = [
    {
        question: "1 - What is the capital of India?",
        options: ["New Delhi", "Dehradun", "Kolkata"],
        correctAnswer: "New Delhi"
    },
    {
        question: "2 - Which programming language is used to built this quiz?",
        options: ["Java", "Python", "JavaScript"],
        correctAnswer: "JavaScript"
    },
    {
        question: "3 - In whixh state kedarnath is located ?",
        options: ["Tamil Nadu", "Uttarakhand", "Himachal Pradesh"],
        correctAnswer: "Uttarakhand"
    },
    {
        question: "4 - Who is the basketball player among these?",
        options: ["Virat Kohli", "Stephen Curry", "Messi"],
        correctAnswer: "Stephen Curry"
    }
];

// Function to initialize the quiz
function initializeQuiz() {
    displayQuestion();
}

// Function to display the current question
function displayQuestion() {
    const quizForm = document.getElementById("quiz-form");
    const currentQuestionData = questionsData[currentQuestion];

    // Clear previous question
    quizForm.innerHTML = '';

    // Add current question
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = `<p>${currentQuestionData.question}</p>`;

    // Add options
    currentQuestionData.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="checkbox" name="q${currentQuestion + 1}" value="${option}"> ${option}`;
        questionElement.appendChild(label);
    });

    quizForm.appendChild(questionElement);
}

// Function to move to the next question
function nextQuestion() {
    // Get the current question's answer
    const answer = document.querySelector(`input[name="q${currentQuestion + 1}"]:checked`);

    // Check if the user has selected an answer before moving to the next question
    if (!answer) {
        alert("Please select an answer before moving to the next question.");
        return;
    }

    // Save the user's answer
    userAnswers[currentQuestion] = answer.value;

    // Move to the next question
    currentQuestion++;

    // Check if it's the last question
    if (currentQuestion === 3) {
        document.getElementById("nextBtn").style.display = "none"; // Hide next button on the last question
        document.getElementById("submitBtn").style.display = "block"; // Display submit button on the last question
    }

    // Display the next question
    displayQuestion();
}

// Function to submit the quiz
function submitQuiz() {
    // Get the current question's answer
    const answer = document.querySelector(`input[name="q${currentQuestion + 1}"]:checked`);

    // Check if the user has not selected an answer
    if (!answer) {
        alert("Please select an answer before submitting the quiz.");
        return;
    }

    // Save the user's answer
    userAnswers[currentQuestion] = answer.value;

    // Calculate the score
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === questionsData[index].correctAnswer) {
            score++;
        }
    });

    // Display the score
    alert(`Your score is: ${score} out of 4`);
}

// Initialize the quiz when the page loads
initializeQuiz();
