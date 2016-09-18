// These are the cards available in the game.
var cards = ['queen', 'queen', 'king', 'king'];

// This is the blank array that cards will be added to once they are clicked.
var cardsInPlay = [];


var board = document.getElementById('game-board');

//This function creates the game's board.
var createBoard = function() {
	for (var i = 0; i < cards.length; i ++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);	
		board.appendChild(cardElement);
	}
}

// This creates the cards in play (the two cards being clicked on) and
// adds them to the array CardsInPlay. When two cards are clicked, isMatch
// will run. After, cardsInPlay will be cleared.
var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = '<img class="img" src= "KingofHearts.png" alt="King of Hearts">';
		} else 
			{ this.innerHTML = '<img class="img" src= "QueenofSpades.png" alt="Queen of Spades">';
		}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

// This function determines whether the two cards in play are a match.
var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

// Creates the board.
createBoard();