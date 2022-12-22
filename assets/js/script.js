const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
//variables to display questions
let shuffleQuestions;
let currentQuestion;
let shuffleAnswers;
//variables to keep score 
let score;
let totalQuestions = 5;
// eventlisteners to start game and go to next question 
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++
    setNextQuestion();
})
//starts game and shuffels questions and answers
function startGame(){
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    shuffleAnswers = shuffleQuestions[0].answers.sort(() => Math.random() - .5);
    score = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestion]);
    //
    `Current Question: ${currentQuestion + 1} out of ${totalQuestions}`;
    `Correct answers: ${score} out of ${currentQuestion}`;
    
    
}
//show question and click answer 
function showQuestion(question) {
     questionElement.innerText = question.question;
     question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', function() {
            button.classList.add('click');
        });
        if (answer.correct) {
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
     });
 }
/**
 * removes next button until user has clicked answer 
 * code taken from 
 */
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

function selectAnswer(e){
    const selectedAnswer = e.target;
    const correct = selectedAnswer.dataset.correct;
    if (selectedAnswer.dataset.correct) {
        score += 1;
        
    }
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.disabled = true;
    });
    
    if (shuffleQuestions.length > currentQuestion + 1) {
        nextButton.classList.remove('hide');

    } else {
        startButton.innerText = 'Restart Quiz';
        startButton.classList.remove('hide')
        alert(`You got ${score} out of ${totalQuestions} questions right!`);
        
    
    }

}
/**
 * if answer is correct show green color, if wrong show red color 
 */
function setStatusClass(element, correct ) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    
    }
}
// removes color on next question
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
//Quiz questions in a array 
// questions taken from https://kwizzbit.com/football-quiz-questions-and-answers/
const questions = [
    {
        question: 'The Scudetto is the name given to the league title in which European country?',
        answers: [ { text:'Portugal', correct:false},
                   { text:'Spain', correct:false},
                   { text:'Italy', correct:true},
                   { text:'England', correct:false},
                 ] 
    
    },
    {   
        question: 'Red Bull own a football club based in which Austrian city?',
        answers: [ { text:'Leipzig', correct:true},
                   { text:'Vienna', correct:false},
                   { text:'Graz', correct:false},
                   { text:'Salzburg', correct:false}
                 ] 

    },
    {
        question: 'Which 2 teams play in The Barcelona Derby?',
        answers: [ { text:'FC Barcelona and Real Madrid', correct:false},
                   { text:'FC Barcelona and RCD Espanyol', correct:true},
                   { text:'RCD Espanyol and Villareal', correct:false},
                   { text:'Elche and Celta Vigo', correct:false}
                ] 
            
    },
    {
        question: 'What stadium is home to Bayern Munich?',
        answers: [ { text:'Allianz Arena', correct:true},
                   { text:'Allianz Stadium', correct:false},
                   { text:'Camp Nou', correct:false},
                   { text:'Old Trafford', correct:false}
                 ] 
    },
    {
        question: 'How many teams play in the group stages of the UEFA Champions League?',
        answers: [ { text:'10 Teams', correct:false},
                   { text:'20 Teams', correct:false},
                   { text:'25 Teams', correct:false},
                   { text:'32 Teams', correct:true}
                 ] 
    },
];