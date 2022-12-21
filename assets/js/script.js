const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
let shuffledQuestions;
let currentQuestionIndex;
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

startButton.addEventListener('click', runGame);

function runGame(){
    console.log('started-game');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
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
//Questions 
const questions = [
    {
        question: 'The Scudetto is the name given to the league title in which European country?',
            a: 'Portugal',
            b: 'Spain',
            c: 'Italy',
            d: 'England',
            correct: 'c'
        
        
    },
    {
        question: 'Red Bull own a football club based in which Austrian city?',
            a: 'Leipzig',
            b: 'Vienna',
            c: 'Graz',
            d: 'Salzburg',
            correct: 'a'

    },
    {
        question: 'Which 2 teams play in The Barcelona Derby?',
            a: 'FC Barcelona and Real Madrid',
            b: 'FC Barcelona and RCD Espanyol',
            c: 'RCD Espanyol and Villareal',
            d: 'Elche and Celta Vigo',
            correct: 'b'

    },
    {
        question: 'What stadium is home to Bayern Munich?',
            a: 'Allianz Arena',
            b: 'Allianz Stadium',
            c: 'Camp Nou',
            d: 'Old Trafford',
            correct: 'a'

    },
    {
        question: 'How many teams play in the group stages of the UEFA Champions League?',
            a: '10 Teams',
            b: '20 Teams',
            c: '25 Teams',
            d: '32 Teams',
            correct: 'd'

    }
];