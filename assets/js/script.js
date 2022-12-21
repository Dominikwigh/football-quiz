const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions;
let currentQuestionIndex;
let shuffleAnswers;

startButton.addEventListener('click', startGame);

function startGame(){
    console.log('started-game');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    shuffleAnswers = shuffleQuestions[0].answers.sort(() => Math.random() - .5);
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    
    
}

function showQuestion(question){
     questionElement.innerText = question.question;
     question.answers.forEach(answer => {
        const button = createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer-correct) {
            button.dataset.correct = answer.correct 
        };
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
     })
    };

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

function selectAnswer(){

}
//Quiz questions 
const questions = [
    {
        question: 'The Scudetto is the name given to the league title in which European country?',
        answers: [ { text:'Portugal', correct:'false'},
                   { text:'Spain', correct:'false'},
                   { text:'Italy', correct:'true'},
                   { text:'England', correct:'false'},
                 ] 
    
    },
    {   
        question: 'Red Bull own a football club based in which Austrian city?',
        answers: [ { text:'Leipzig', correct:'true'},
                   { text:'Vienna', correct:'false'},
                   { text:'Graz', correct:'false'},
                   { text:'Salzburg', correct:'false'},
                 ] 

    },
    {
        question: 'Which 2 teams play in The Barcelona Derby?',
        answers: [ { text:'FC Barcelona and Real Madrid', correct:'false'},
                   { text:'FC Barcelona and RCD Espanyol', correct:'true'},
                   { text:'RCD Espanyol and Villareal', correct:'false'},
                   { text:'Elche and Celta Vigo', correct:'false'},
                ] 
            
    },
    {
        question: 'What stadium is home to Bayern Munich?',
        answers: [ { text:'Allianz Arena', correct:'true'},
                   { text:'Allianz Stadium', correct:'false'},
                   { text:'Camp Nou', correct:'false'},
                   { text:'Old Trafford', correct:'false'},
                 ] 
    },
    {
        question: 'How many teams play in the group stages of the UEFA Champions League?',
        answers: [ { text:'10 Teams', correct:'false'},
                   { text:'20 Teams', correct:'false'},
                   { text:'25 Teams', correct:'false'},
                   { text:'32 Teams', correct:'true'},
                 ] 


    },
];