// Age check. This could be the first screen that meets the user. Brush it up with CSS.
let age = 22;

if (age < 21) {
  console.log("You cannot enter the club!");
} else {
  console.log("Welcome!");
}

// Blackjack game rules

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

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

function startGame() {
  isAlive = true;
  let cardOne = getRandomCard();
  let cardTwo = getRandomCard();
  sum += cardOne + cardTwo;
  cards.push(cardOne);
  cards.push(cardTwo);
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    // code below makes NEW CARD grayed out and disables it, but should be moved outside this function
    document.getElementById("new-card").style.backgroundColor = "gray";
    const newCardButton = document.querySelector("#new-card");
    newCardButton.disabled = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    // code below makes NEW CARD grayed out and disables it, but should be moved outside this function
    document.getElementById("new-card").style.backgroundColor = "gray";
    const newCardButton = document.querySelector("#new-card");
    newCardButton.disabled = true;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}

// This is code for disabling a button. The idea is for the START-button to become disabled after the player's first press, and then enabled again after the player clicks the 'PLAY AGAIN' button.
// const button = document.querySelector('button')
// button.disabled = true;

// Code a 'PLAY AGAIN' button.

// Disable the 'NEW CARD' button when the player has achieved blackjack or lost the game.

// Fix so that the ace card can have both values 1 and 11.
