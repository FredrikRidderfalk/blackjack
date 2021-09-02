// Age check. This could be the first screen that meets the user. Brush it up with CSS.
let age = 22;

if (age < 21) {
  console.log("You cannot enter the club!");
} else {
  console.log("Welcome!");
}

// Blackjack game rules

// below is an object, and if we put a function inside of it, that function would be called a 'method'
let player = {
  name: "Fredrik",
  chips: 100,
};

// below is an array, and we push new data into this array through the newCard() function
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
  let randomNumer = Math.floor(Math.random() * 13) + 1;
  if (randomNumer > 10) {
    return 10;
  } else if (randomNumer === 1) {
    return 11;
  } else {
    return randomNumer;
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
    // code below makes NEW CARD grayed out and disables it, but should be moved outside this function
    document.querySelector("#new-card").style.backgroundColor = "gray";
    document.querySelector("#new-card").disabled = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    // code below makes NEW CARD grayed out and disables it, but should be moved outside this function
    document.querySelector("#new-card").style.backgroundColor = "gray";
    document.querySelector("#new-card").disabled = true;
  }
  messageEl.textContent = message;
}

// code below isn't working because it can't tell when isAlive === true

// if (!isAlive) {
//   document.getElementById("new-card").style.backgroundColor='gray';
//   const newCardButton = document.querySelector("#new-card")
//   newCardButton.disabled = true;

// newCard() adds the random cards to the 'sum' variable and pushes these randomly generated cards into the 'cards' array
function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// This is code for disabling a button. The idea is for the START-button to become disabled after the player's first press, and then enabled again after the player clicks the 'PLAY AGAIN' button.
// const button = document.querySelector('button')
// button.disabled = true;

// Code a 'PLAY AGAIN' button.

// Disable the 'NEW CARD' button when the player has achieved blackjack or lost the game.

// Fix so that the ace card can have both values 1 and 11.
