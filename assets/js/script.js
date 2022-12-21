const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question){
     questionElement.innerText = question.question;
     question.answers.forEach(answer => {
        const button = createElement('button')
        button.innerText = answer.text 
        button.classList.add('btn')
        if (answer-correct) {
            button.dataset.correct = answer.correct 
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
     })
}

function selectAnswer(){

}
//Questions 
const questions = [
    {
        question: "The Scudetto is the name given to the league title in which European country?",
        answers: [
            { text: 'Portugal', correct: false },
            { text: 'Spain', correct: false },
            { text: 'Italy', correct: true },
            { text: 'England', correct: false }
        ]
        
    }
]