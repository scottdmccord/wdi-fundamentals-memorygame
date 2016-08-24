var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen"; 
var cardFour = "queen";


/*if (cardTwo === cardFour) {
	alert("You found a match!")
}
else {
	alert("Sorry, try again.")
} */

var board = document.getElementById('game-board');

var x = 4

var createBoard = function() {
	for (var i = 0; i < x; i += 1) {
		var cards = document.createElement('div');
		cards.className = 'card';
		board.appendChild(cards);
	}
}

createBoard()
