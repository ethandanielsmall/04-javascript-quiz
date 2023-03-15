var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startGame);

function startGame() {
    isWin = false;
    timerCount = 10;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    // render questions ??
    startTimer()
  }

  function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          // winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        // loseGame();
      }
    }, 1000);
  }

// Questions will be asked (should be 15 total??)
const Questions = [{
    id: 0,
    q: "what was javascript built off of?",
    a: [{ text: "typescript", isCorrect: false },
        { text: "python", isCorrect: false },
        { text: "ecmascript", isCorrect: true },
        { text: "java", isCorrect: false }
    ]

},
{
    id: 1,
    q: "what do arrays go inside of?",
    a: [{ text: "double quotes", isCorrect: false,},
        { text: "single quotes", isCorrect: false },
        { text: "parentheses", isCorrect: false },
        { text: "brackets", isCorrect: true }
    ]

},
{
    id: 2,
    q: "what does NaN stand for?",
    a: [{ text: "near area network", isCorrect: false },
        { text: "not a number", isCorrect: true },
        { text: "none as null", isCorrect: false },
        { text: "new alert next", isCorrect: false }
    ]

},
{
    id: 3,
    q: "who made javascript?",
    a: [{ text: "tucker beauchamp", isCorrect: false },
        { text: "brendan eich", isCorrect: true },
        { text: "guido van rossum", isCorrect: false },
        { text: "brent spiner", isCorrect: false }
    ]

},
{
    id: 4,
    q: "when did brendan eich learn programming?",
    a: [{ text: "middle-high school", isCorrect: false },
        { text: "college", isCorrect: true },
        { text: "late 20's", isCorrect: false },
        { text: "early 40's", isCorrect: false }
    ]

},
{
    id: 5,
    q: "what was javascript's original name going to be?",
    a: [{ text: "spock", isCorrect: false },
        { text: "energi", isCorrect: false },
        { text: "mocha", isCorrect: true },
        { text: "eich", isCorrect: false }
    ]

},
{
    id: 6,
    q: "how long did it take to develop javascript?",
    a: [{ text: "10 days", isCorrect: true },
        { text: "10 weeks", isCorrect: false },
        { text: "10 months", isCorrect: true },
        { text: "10 years", isCorrect: false }
    ]

},
{
    id: 7,
    q: "when was javascript released?",
    a: [{ text: "1975", isCorrect: false },
        { text: "1995", isCorrect: true },
        { text: "2010", isCorrect: false },
        { text: "2015", isCorrect: false }
    ]

},
{
    id: 8,
    q: "why was javascript made?",
    a: [{ text: "to improve upon ecmascript", isCorrect: false },
        { text: "to handle more traffic to disneyland's website", isCorrect: false },
        { text: "to help the robot sofia learn language", isCorrect: false },
        { text: "for a specific company's browser", isCorrect: true }
    ]

},
{
    id: 9,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 10,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 11,
    q: "What is the capital of Gujarat",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

},
{
    id: 12,
    q: "last question",
    a: [{ text: "surat", isCorrect: false },
        { text: "vadodara", isCorrect: false },
        { text: "gandhinagar", isCorrect: true },
        { text: "rajkot", isCorrect: false }
    ]

}
];

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");

// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');

// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    selected = op4.value;
})

// Grabbing the evaluate button
// const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
// evaluate[0].addEventListener("click", () => {
//     if (selected == "true") {
//         result[0].innerHTML = "True";
//         result[0].style.color = "green";
//     } else {
//         result[0].innerHTML = "False";
//         result[0].style.color = "red";
//     }
// })

op1.addEventListener("click", () => {
    start = false;
        if (id < 16) {
            id++;
            iterate(id);
            console.log(id);
        }
    });

op2.addEventListener("click", () => {
    start = false;
        if (id < 16) {
            id++;
            iterate(id);
            console.log(id);
        }
    });

op3.addEventListener("click", () => {
    start = false;
        if (id < 16) {
            id++;
            iterate(id);
            console.log(id);
        }
    });
    
op4.addEventListener("click", () => {
    start = false;
        if (id < 16) {
            id++;
            iterate(id);
            console.log(id);
        }
    });

}

if (start) {
iterate("0");
}

// Next button and method
// const next = document.getElementsByClassName('next')[0];
// var id = 0;



// MAKE SURE TO ADD 'setTimeout' and i think 'localstorage' will help with
// the whole 'look at my own answers' thingy :/