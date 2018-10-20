# Memory Game Project

## Table of Contents

* [Basic Knowledge](#basic)
* [Game Requirements](#requirements)
* [Working Explained](#explaination)

## Basic Knowledge

	Works as a concentration game. The player is given a 4x4 matrix, which have a total of 16 cards. 8 set of cards are present in total. Player will try to memorize the card's icon and match with their consecutive pair in order to complete the game.

## Game Requirements

	Works on 3 different screen sizes (responsive). The screen sizes and devices are as follows:
	1. Google Nexus 5 - 360px width (1080 x 1920 pixels)
	2. Apple iPad - 768px width (1536x2048 pixels)
	3. Laptop Screen - 1556px width (1920x1080 pixels)

	It needs working internet connection to fetch the icons displayed on the cards as well as for the fonts.

## Working Explained

	Player opens a card, then simultaneously opens another card. As, soon as the player opens the second card, a timer will start. If both the card matches, they will remain open and the color of both the cards will change. But, if the cards does not match, both of them will closed.
	This goes on until all the card are matched with their consecutive pair.
	As soon as this is complete, the timer will stop. A pop-up will appear which will display the total number of moves made by the player to complete the game. Time taken to do the same. And, based on the number of moves taken by the player, it will resperent a rating.
	Player can play again, clicking on the play again button on the bottom of the pop-up itself.