# Blackjack game featuring a complete ruleset.

## Table of contents

- [Overview](#overview)
  - [The goal](#the-goal)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The goal

Users should be able to:

- [x] View the optimal layout for the site depending on their device's screen size
- [ ] Enter the game app through age verification
- [x] Play and restart the game as many times as they want

### Screenshot

![](../images/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- JavaScript

### What I learned

- How to work with if/else statements.
- How to work with for-loops.
- Practiced working with logical operators.

I learned that instead of making a nested if-statement where two conditions need to be met, we can use the && operator inside the parentheses.

```js
// Don't use this nesting
if (hasCompletedCourse === true) {
  if (givesCertificate === true) {
    generateCertificate();
  }
}

// Use this instead
if (hasBlackJack && isAlive) {
  gameOver();
}

// Which is the same as
if (hasBlackJack === true && isAlive === false) {
  gameOver();
}

// This is how we get a random integer in any range
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
```

### Continued development

- Code a 'PLAY AGAIN' button.
- Fix so that the ace card can have both values 1 and 11.

### Useful resources

## Author

- Website - [Coming soon!](#)
- GitHub - [@FredrikRidderfalk](https://github.com/FredrikRidderfalk)
- Twitter - [@yourusername](https://twitter.com/Ridderfalk)

## Acknowledgments

My acknowledgements go out to the team at Scrimba. Enrolling in your courses made this project possible. I learned a lot for this project from Kevin Powell.
