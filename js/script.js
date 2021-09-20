// Age check. This could be the first screen that meets the user. Brush it up with CSS.
let age = 22;

if (age < 21) {
  console.log("You cannot enter the club!");
} else {
  console.log("Welcome!");
}

// Blackjack game rules

let player = {
  name: "Fredrik",
  chips: 100,
};

// we push new data into the array below through the newCard() function
let cards = [];
let sum = 0;
let hasBlackJack = false;
// not sure if we need to set isAlive = false here. If isAlive isn't set to 'false' to begin with, the game might determine the first two cards beforehand.
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = player.name + ": €" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// startGame() is triggered by an onclick event
function startGame() {
  isAlive = true;
  let cardOne = getRandomCard();
  let cardTwo = getRandomCard();
  sum += cardOne + cardTwo;
  cards.push(cardOne);
  cards.push(cardTwo);
  renderGame();
  // code below enables the NEW CARD button again when startGame() runs, and sets the background color back to the default
  document.querySelector("#new-card").style.backgroundColor = "goldenrod";
  document.querySelector("#new-card").disabled = false;
}

// renderGame() renders the text "Cards: " once and after that the value of randomly generated cards through the for-loop
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  // renderGame() then renders "Sum: " + sum and a custom message based on the value of 'sum'
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

//  disableNewCard() disables the NEW CARD button, and it is enabled again when the START button is pressed
function disableNewCard() {
  if (isAlive === false || hasBlackJack === true) {
    // #new-card is grayed out while disabled
    document.querySelector("#new-card").style.backgroundColor = "gray";
    document.querySelector("#new-card").disabled = true;
  }
}

// newCard() adds the random cards to the 'sum' variable and pushes these randomly generated cards into the 'cards' array
function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    // disableNewCard() runs the function that sets the button's property to disabled = true if the player has gotten Blackjack or is out of the game;
    disableNewCard();
  }
}
