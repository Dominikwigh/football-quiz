const startButton = document.getElementById('start-btn')
constQuestionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    constQuestionContainerElement.classList.remove('hide')

}

function setNextQuestion(){

}

function selectAnswer(){

}