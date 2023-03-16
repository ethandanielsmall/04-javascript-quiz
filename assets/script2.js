const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];

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
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// const Questions = [{
//   id: 0,
//   q: "what was javascript built off of?",
//   a: [{ text: "typescript", isCorrect: false },
//       { text: "python", isCorrect: false },
//       { text: "ecmascript", isCorrect: true },
//       { text: "java", isCorrect: false }
//   ]

// },
// {
//   id: 1,
//   q: "what do arrays go inside of?",
//   a: [{ text: "double quotes", isCorrect: false,},
//       { text: "single quotes", isCorrect: false },
//       { text: "parentheses", isCorrect: false },
//       { text: "brackets", isCorrect: true }
//   ]

// },
// {
//   id: 2,
//   q: "what does NaN stand for?",
//   a: [{ text: "near area network", isCorrect: false },
//       { text: "not a number", isCorrect: true },
//       { text: "none as null", isCorrect: false },
//       { text: "new alert next", isCorrect: false }
//   ]

// },
// {
//   id: 3,
//   q: "who made javascript?",
//   a: [{ text: "tucker beauchamp", isCorrect: false },
//       { text: "brendan eich", isCorrect: true },
//       { text: "guido van rossum", isCorrect: false },
//       { text: "brent spiner", isCorrect: false }
//   ]

// },
// {
//   id: 4,
//   q: "when did brendan eich learn programming?",
//   a: [{ text: "middle-high school", isCorrect: false },
//       { text: "college", isCorrect: true },
//       { text: "late 20's", isCorrect: false },
//       { text: "early 40's", isCorrect: false }
//   ]

// },
// {
//   id: 5,
//   q: "what was javascript's original name going to be?",
//   a: [{ text: "spock", isCorrect: false },
//       { text: "energi", isCorrect: false },
//       { text: "mocha", isCorrect: true },
//       { text: "eich", isCorrect: false }
//   ]

// },
// {
//   id: 6,
//   q: "how long did it take to develop javascript?",
//   a: [{ text: "10 days", isCorrect: true },
//       { text: "10 weeks", isCorrect: false },
//       { text: "10 months", isCorrect: true },
//       { text: "10 years", isCorrect: false }
//   ]

// },
// {
//   id: 7,
//   q: "when was javascript released?",
//   a: [{ text: "1975", isCorrect: false },
//       { text: "1995", isCorrect: true },
//       { text: "2010", isCorrect: false },
//       { text: "2015", isCorrect: false }
//   ]

// },
// {
//   id: 8,
//   q: "why was javascript made?",
//   a: [{ text: "to improve upon ecmascript", isCorrect: false },
//       { text: "to handle more traffic to disneyland's website", isCorrect: false },
//       { text: "to help the robot sofia learn language", isCorrect: false },
//       { text: "for a specific company's browser", isCorrect: true }
//   ]

// },
// {
//   id: 9,
//   q: "What is the capital of Gujarat",
//   a: [{ text: "surat", isCorrect: false },
//       { text: "vadodara", isCorrect: false },
//       { text: "gandhinagar", isCorrect: true },
//       { text: "rajkot", isCorrect: false }
//   ]

// },
// {
//   id: 10,
//   q: "What is the capital of Gujarat",
//   a: [{ text: "surat", isCorrect: false },
//       { text: "vadodara", isCorrect: false },
//       { text: "gandhinagar", isCorrect: true },
//       { text: "rajkot", isCorrect: false }
//   ]

// },
// {
//   id: 11,
//   q: "What is the capital of Gujarat",
//   a: [{ text: "surat", isCorrect: false },
//       { text: "vadodara", isCorrect: false },
//       { text: "gandhinagar", isCorrect: true },
//       { text: "rajkot", isCorrect: false }
//   ]

// },
// {
//   id: 12,
//   q: "last question",
//   a: [{ text: "surat", isCorrect: false },
//       { text: "vadodara", isCorrect: false },
//       { text: "gandhinagar", isCorrect: true },
//       { text: "rajkot", isCorrect: false }
//   ]

// }
// ];