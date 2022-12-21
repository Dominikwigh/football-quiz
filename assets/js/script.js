const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElment = document.getElementById('question')
const answerButtonsElemnt = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)

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
}

function showQuestion(question){
     questionElment.innerText = question.question 
}

function selectAnswer(){

}

const questions = [
    {
        question: "The Scudetto is the name given to the league title in which European country?",
        answers: {
            a:'Portugal',
            b:'Spain',
            c:'Italy',
            d:'England'
        },
        correctanswer: 'c'
    },
]