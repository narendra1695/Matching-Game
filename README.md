# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Introduction](#introduction)
* [Working](#working)

## Instructions

In order to start playing this game, one must have to do the following:
1. Clone the project, where you want to locally keep the files.
2. Once cloned, start the game using the index.html file.
3. Running the game requires internet (to fetch the icons displayed on the cards as well as for the fonts).
4. The game has been optimized for various screen sizes.

Works on 3 different screen sizes (making the UI responsive). The screen sizes and devices are as follows:

1. Google Nexus 5 - 360px width (1080 x 1920 pixels)
2. Apple iPad - 768px width (1536x2048 pixels)
3. Laptop Screen - 1556px width (1920x1080 pixels)

## Introduction

Works as a concentration game. The player is given a 4x4 matrix, which have a total of 16 cards. 8 set of cards are present in total. Player will try to memorize the card's icon and then match with their respective pair in order to complete the game.

## Working

Player opens a card, then simultaneously opens another card. As, soon as the player opens the second card, a timer will start. If both the card matches, they will remain open and the color of both the cards will change. But, if the cards does not match, both of them will be closed.

This goes on until all card are matched with their respective pair.

As soon as the game is complete, the timer will stop. A pop-up will appear which will display the total number of moves made by the player to complete the game, time taken and based on the number of moves taken by the player, it will resperent a rating.

Player can play again, clicking on the play again button on the bottom of the pop-up itself (or can simply refresh the website itself).
