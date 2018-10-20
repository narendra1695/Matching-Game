let moves = 0;

let totalSeconds = 0;

//list that holds all cards icons
let icons = ["fa fa-diamond", "fa fa-diamond",
				"fa fa-paper-plane-o", "fa fa-paper-plane-o",
				"fa fa-anchor", "fa fa-anchor",
				"fa fa-bolt", "fa fa-bolt",
				"fa fa-cube", "fa fa-cube",
				"fa fa-leaf", "fa fa-leaf",
				"fa fa-bicycle", "fa fa-bicycle",
				"fa fa-bomb", "fa fa-bomb"];

//dom manipulation variables
let cardContainer = document.querySelector(".deck");

const restartBtn = document.querySelector(".restart");

let movesTitle = document.querySelector(".moves");

movesTitle.innerHTML = moves + " ";

let starsConatiner = document.querySelector(".stars");

starsConatiner.innerHTML = `<li><i class="fa fa-star"></i></li>
							<li><i class="fa fa-star"></i></li>
							<li><i class="fa fa-star"></i></li>
							<li><i class="fa fa-star"></i></li>
							<li><i class="fa fa-star"></i></li>`;

let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");

const gameComplete = document.getElementById("gameComplete");

const closePopup = document.getElementById("closePopup");

let finalMoves = document.getElementById("finalMoves");
let finalMinutes = document.getElementById("finalMinutes");
let finalSeconds = document.getElementById("finalSeconds");
let finalRating = document.getElementById("finalRating");

const playAgainBtn = document.getElementById("playAgain");

let compareCard = [];
let counterCard = [];

//implement the Fisher-Yates shuffle algorithm via modern method
function shuffle(array) {
	var theLength = icons.length - 1;
	var toSwap; //random index number
	var temp; //variable holding the reference to which i is pointing to
	for (i = theLength; i > 0; i--) {
		toSwap = Math.floor(Math.random() * i);
	    temp = icons[i];
	    icons[i] = icons[toSwap];
	    icons[toSwap] = temp;
	}
	return icons;
}

function start() {
	//calling shuffle function to shuffle the cards each time the game starts
	shuffle();

	//function to create cards dynamically
	for(let i = 0; i < icons.length; i++) {
		const card = document.createElement("li");
		card.innerHTML = `<i class="${icons[i]}"></i>`;
		card.classList.add("card");
		cardContainer.appendChild(card);

		click(card);
	}
}

function click(card) {

	card.addEventListener("click", function() {

		const currentCard = this;
		const previousCard = compareCard[0];

		//already have an Open card
		if(compareCard.length === 1) {

			card.classList.add("open", "show", "disable");
			compareCard.push(this);

			//calling Compare function to compare among the 2 opened cards
			compare(currentCard, previousCard);
		} else {
			//no card opened yet
			currentCard.classList.add("open", "show", "disable");
			compareCard.push(this);
		}
	})
}

//comparision among 2 opened cards
function compare(currentCard, previousCard) {
	if(currentCard.innerHTML === previousCard.innerHTML) {
		currentCard.classList.add("match");
		previousCard.classList.add("match");

		counterCard.push(currentCard, previousCard);

		compareCard = [];

		//check if the game is over
		IsOver();

		} else {
		//wait 500ms, then disappear
		setTimeout(function() {
			currentCard.classList.remove("open", "show", "disable");
			previousCard.classList.remove("open", "show", "disable");
		}, 500);
		}

		compareCard = [];

		//counting moves
		addMoves();
}

//functionalities for calculating time
function pad(val) {
  valString = val + "";
  if(valString.length < 2) {
     return "0" + valString;
     } else {
     return valString;
     }
}

//evaluation of the timer
function setTime(minutesLabel, secondsLabel) {
    totalSeconds++;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

//calling function to start the timer
function set_timer() {
    my_int = setInterval(function() {
      setTime(minutesLabel, secondsLabel)
    }, 1000);
}

//calling funtion to stop the timer
function stop_timer() {
  clearInterval(my_int);
  totalSeconds = 0;
  secondsLabel.innerHTML = "00";
  minutesLabel.innerHTML = "00";
}

//moves counter
function addMoves() {
	moves++;

	//calling for start timer function
	if(moves === 1) {
		set_timer();
	}

	//updating the moves title in HTML
	movesTitle.innerHTML = moves + " ";

	//set rating according to the number of moves
	rating();
}

//rating according to the moves
function rating() {
	if(moves <= 10) {
		starsConatiner.innerHTML = `<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>`;
	} else if (moves >= 11 && moves <= 16) {
		starsConatiner.innerHTML = `<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>`;
	} else if (moves >= 17 && moves <= 22) {
		starsConatiner.innerHTML = `<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>`;
	} else if (moves >= 23 && moves <= 28) {
		starsConatiner.innerHTML = `<li><i class="fa fa-star"></i></li>
									<li><i class="fa fa-star"></i></li>`;
	} else {
		starsConatiner.innerHTML = `<li><i class="fa fa-star"></i></li>`;
	}
}

function IsOver() {
	setTimeout(function() {
		if(counterCard.length === icons.length) {
		//alert("GAME OVER!");
		clearInterval(my_int);

		//store the values of the following for the popup
		finalMoves.innerHTML = movesTitle.innerHTML;
		finalMinutes.innerHTML = minutesLabel.innerHTML;
		finalSeconds.innerHTML = secondsLabel.innerHTML;

		finalRating.innerHTML = starsConatiner.getElementsByTagName("li").length;

		//as soon as the game is complete, open the congratulation popup
		gameComplete.style.display = "block";

		}
	}, 200);
}

function restartGame() {
	//delete all the existing cards
	cardContainer.innerHTML = "";

	//call shuffle function again, to start the game
	start();

	//reset all global variable to their default values
	compareCard = [];
	counterCard = [];
	moves = 0;
	movesTitle.innerHTML = moves + " ";
	starsConatiner.innerHTML = `<li><i class="fa fa-star"></i></li>
								<li><i class="fa fa-star"></i></li>
								<li><i class="fa fa-star"></i></li>
								<li><i class="fa fa-star"></i></li>
								<li><i class="fa fa-star"></i></li>`;

	stop_timer();
}
//restart the game
restartBtn.addEventListener("click", function() {
	restartGame();
})

//closing the popup after the game is complete
//When the user clicks on <span> (x), close the popup
closePopup.onclick = function() {
    gameComplete.style.display = "none";
}

//When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == gameComplete) {
        gameComplete.style.display = "none";
    }
}

function playAgain() {
	//restartGame();
	gameComplete.style.display = "none";
	restartGame();
}

playAgainBtn.addEventListener("click", function() {
	playAgain();
})

//start the game
start();