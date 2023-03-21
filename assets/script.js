const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const resultsContainer2 = document.getElementById('results-container');
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

function buildQuiz(){
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      const answers = [];

      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}

function showResults(){

  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  localStorage.setItem(numCorrect, resultsContainer.innerHTML)
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

function pastResults() {
  localStorage.getItem('score')
  console.log('score')
}

var count = 20;
var timer = setInterval(function() {
  count--;
  if (count <= 0) {
    clearInterval(timer);
    showResults();
  }
  document.getElementById("timer").innerHTML = count + " seconds";
}, 1000);

buildQuiz();

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

// const answerContainers = quizContainer.querySelectorAll('.answers');
// const storedGameScores = localStorage.getItem("gameScore");
// localStorage.setItem("gameScore", JSON.stringify(answerContainers));

// If there are game scores stored in localStorage, parse the JSON and assign it to a variable
if (storedGameScores) {
  const parsedGameScores = JSON.parse(storedGameScores);
  // Do something with the game scores, such as display them on the screen
  console.log(parsedGameScores);
} else {
  // If there are no game scores stored in localStorage, display an error message or use default values
  console.log("No game scores found in localStorage");
}

// Retrieve highscores
let highScores = localStorage.getItem("highscores");
if (highScores) {
  // if they exist, Parse them
  highScores = JSON.parse(highScores);
} else {
  // If they don't exist set it to an empty array
  highScores = [];
}

// Take the users initials and score and append to our highscores array
// {
//   initials: "TB",
//   score: 2
// }
// stringify the array
// [{"initials": "TB", "score": 2}]
// store in local storage
localStorage.setItem("highscores", JSON.stringify(highScores));