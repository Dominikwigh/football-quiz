// quiz functions
// partly built using web dev simplified and https://www.sitepoint.com/simple-javascript-quiz/
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
//timer variabels 
let timer = document.getElementById('timer');
let gameTimer;
// eventlisteners to start game and go to next question 
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++;
    setNextQuestion();
});
//starts game and shuffels questions and answers
function startGame(){
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    shuffleAnswers = shuffleQuestions[0].answers.sort(() => Math.random() - 0.5);
    score = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    startTimer();

}
// takes a random question and answer from the array and log as correct or wrong when user answers
function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[currentQuestion]);
    const score =`Current Question: ${currentQuestion + 1} out of ${totalQuestions}`;
    shuffleAnswers = `Correct answers: ${score} out of ${currentQuestion}`;
    
    
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
 * code for this taken from "web dev simplified"
 */
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
/**
 * Code for this taken from web dev simplified 
 * checks if selected answer is correct and if it is,  its incremented by one 
 * checks for questions and if there is no more to display, a alert message is shown 
 */
function selectAnswer(e){
    const selectedAnswer = e.target;
    
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
        startButton.classList.remove('hide');
        alert(`You got ${score} out of ${totalQuestions} questions right!`);
        stopTimer();
        
        
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

// Timer to let user known how much they have left to complete quiz 
// if time runs out there is a option to restart
function startTimer (){
    let currentTime = 60;
    gameTimer = setInterval(function () {
    currentTime--;
    if (currentTime > 0 ) {
        timer.classList.remove('hidden');
        timer.innerText = `Time Left:${currentTime}`;
    } else if (currentTime === 0) {
    alert('Sorry You Ran Out Of Time, Restart Quiz to Play Again!');
    startButton.innerText = 'Restart Quiz';
    startButton.classList.remove('hide');
    questionContainerElement.classList.add('hide');    
   stopTimer();
   }
  }, 600);
}
function stopTimer() {
    clearInterval(gameTimer);
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
        answers: [ { text:'Salzburg', correct:true},
                   { text:'Vienna', correct:false},
                   { text:'Graz', correct:false},
                   { text:'Innsbruck', correct:false}
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