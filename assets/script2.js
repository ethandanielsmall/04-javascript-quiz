var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;

function startGame() {
  isWin = false;
  timerCount = 10;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  startTimer()
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        console.log("time is going??")
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      console.log("time ran out")
    }
  }, 1000);
  
}

function buildQuiz(){
  // variable to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide === 0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "what was javascript built off of?",
    answers: {
      a: "typescript",
      b: "python",
      c: "ecmascript",
      d: "java"
    },
    correctAnswer: "c"
  },
  {
    question: "what do arrays go inside of?",
    answers: {
      a: "double quotes",
      b: "single quotes",
      c: "parenthases",
      d: "brackets"
    },
    correctAnswer: "d"
  },
  {
    question: "what does NaN stand for?",
    answers: {
      a: "near area network",
      b: "not a number",
      c: "none as null",
      d: "new alert next"
    },
    correctAnswer: "b"
  },
  {
    question: "who made javascript?",
    answers: {
      a: "tucker beauchamp",
      b: "brendan eich",
      c: "guido van rossum",
      d: "brent spiner"
    },
    correctAnswer: "b"
  },
  {
    question: "when did brendan eich learn programming?",
    answers: {
      a: "middle-highschool",
      b: "college",
      c: "late 20's",
      d: "early 40's"
    },
    correctAnswer: "b"
  },
  {
    question: "what was javascript's original name going to be?",
    answers: {
      a: "spock",
      b: "energi",
      c: "mocha",
      d: "eich"
    },
    correctAnswer: "c"
  },
  {
    question: "how long did it take to develop javascript?",
    answers: {
      a: "10 days",
      b: "10 weeks",
      c: "10 months",
      d: "10 years"
    },
    correctAnswer: "a"
  },
  {
    question: "when was javascript released?",
    answers: {
      a: "1975",
      b: "1995",
      c: "2010",
      d: "2015"
    },
    correctAnswer: "b"
  },
  {
    question: "why was javascript made?",
    answers: {
      a: "to improve upon ecmascript",
      b: "to handle more traffic to dinsneyland's website",
      c: "to help the robot sofia learn to speak",
      d: "for a specific company's browser"
    },
    correctAnswer: "d"
  },
];

// display quiz right away
buildQuiz();

// Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Show the first slide
showSlide(currentSlide);

// on submit, show results
// listen for the click of the start button, then execute the timer
startButton.addEventListener("click", startGame);
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);