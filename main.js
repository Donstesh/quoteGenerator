let randomQuotes = [
    [
        "The greatest glory in living lies not",
        "The way to get started",
        "Your time is limited",
        "If life were predictable ",
        "If you look at what you have in life you'll never have enough",
        "If you set your goals ridiculously high ",
        "Life is what happens when "
      ],
      [
        "in never falling, but in rising",
        "is to quit talking",
        "and begin doing.",
        "Don't be trapped by dogma",
        "you'll always have more",
        "If you look at what you don't have in life",
        "and it's a failure"
    ],
    [
        "every time we fall.",
        "which is living with the results of other people's thinking.",
        "it would cease to be life",
        "and be without flavor",
        "you will fail above everyone else's success",
        "so don't waste it living someone else's life.",
        "you're busy making other plans."
    ]
  ];

let generalQuotes = [
    [
        "Compromise where you can, but where you can’t, don’t.",
        "It is your duty to plant yourself like a tree,",
        "doesn’t mean it can’t be improved.",
        "That you will stay who you are. ",
        "I can’t control their fear,",
        "Losers… I mean like, folks who have lost stuff. ",
        "It is giving us a chance."
      ],
    [
        "Even if everyone is telling you that something wrong is something right.",
        "to look them in the eye and say, no, you move.",
        "Whatever happens tomorrow,",
        "Not a perfect soldier, but a good man.",
        "only my own.",
        "And you think life takes more than it gives,",
        "It’s an imperfect world but"
    ],
    [
        "Even if the whole world is telling you to move.",
        "Just because something works, ",
        "you must promise me one thing. ",
        "I would rather be a good man",
        "I look around at us and you know what I see? ",
        "but not today. Today it’s giving us something.",
        "Always has been. "
    ]
  ];
//get the button that will generated quotes
const generateQuoteBtn = document.querySelector("#generateQuote");

//get the input used to select the number of quotes
const numberOfQuotes = document.querySelector("#quote-number");

//get the button that will clear the page
const reset = document.querySelector("#resetBtn");

//get the div that holds generated quotes
const quoteContainer = document.querySelector("#quote-container");


  /// Event listener that generates quotes on click
  generateQuoteBtn.addEventListener("click", (e) => {
    //prevent page from reloading 
    e.preventDefault();
    //variable to hold the type of quote selected
    let quoteType;
    
    //set the quoteType variable to either randomQuotes or generalQuotes
    if (document.querySelector("#random").checked){
      quoteType = randomQuotes;
    } else {
      quoteType = generalQuotes;
    }

    //variable to set the number of generated quotes
    let qNum = numberOfQuotes.value;
    
    //loop through the selected quote array and returns the quotes by joining three sentence fragments
    for (let i = 0; i < qNum; i++){
      let randomBeginning = [Math.floor(Math.random() * quoteType[0].length)];
      let randomMiddle = [Math.floor(Math.random() * quoteType[1].length)];
      let randomEnd = [Math.floor(Math.random() * quoteType[2].length)];

      //create a new paragraph element for each quote
      let quoteSentence = document.createElement("p");
      quoteSentence.innerHTML = 
      `${quoteType[0][randomBeginning]} ${quoteType[1][randomMiddle]} ${quoteType[2][randomEnd]}`;
      quoteContainer.append(quoteSentence);
    }
  });

  // Button to reset the page
reset.addEventListener("click", (e) => {
  //prevent page from reloading
  e.preventDefault();
  // reset the quote container to be empty
  quoteContainer.innerHTML= "";
})
