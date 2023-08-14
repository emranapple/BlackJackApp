// DOM
const messageEl = document.getElementById('message-el')
const cardEl = document.getElementById('card-el')
const sumEl = document.getElementById('sum-el')
const startBtnEl = document.getElementById('start-btn-el')
const newcardEl = document.getElementById('new-card-el')
const playerEL = document.getElementById('player-el')
// Variables
let cards = []
let sum = 0
let message = ''
let hasBlackJack = false
let isAlive = true

let player = {
    name: 'Emran',
    chips: '100'
}

// object name and chips showing
playerEL.textContent = player.name + ": $" + player.chips

// make random number and denoting value 
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber < 10) {
        return 10
    } else if(randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
    
}

// render game 
function renderGame() {
    cardEl.textContent = `Cards: `
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You lost the game!"
        isAlive = false
    }
    sumEl.textContent = `Sum: ${sum}`
    messageEl.textContent = message
}

// new card 
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber()
        cards.push(card)
        sum += card
        renderGame()
    }


}

// start game via render game 
function startGame() {
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]
    renderGame()
}






