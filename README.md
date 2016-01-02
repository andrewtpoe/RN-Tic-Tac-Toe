# Tic Tac Toe with React Native

I love tic tac toe, I also love learning new skills like React Native. This is a project for me to play with both things.

To run Android version locally:
  1. Follow React Native install directions and setup for Android found
  [here](https://facebook.github.io/react-native/docs/getting-started.html)
  2. Clone this repository, navigate to it, and run ```npm install```.
  2. From the terminal run ```android avd```, and start your android emulator.
  3. From the terminal again, navigate to the root directory of this repository and run ```react-native run-android```.

## Current Status:

### 2016/01/02:
  - Android app Alpha is now complete. On app opening, user is taken to input screen to add player names. Opening screen will be changed to game type menu when 1 player mode is enabled. When game is won, a banner pops up across grid that says who won, and the 'Clear' button changes to 'New Game'.
### 2015/12/29:
  - Android App opens to main menu (with one button), allows users to enter their name, and displays a blank "Game" screen. iOS not currently operational.

## Project plan:
  - Build the two player version of Tic Tac Toe first. Include a score counter, a turn highlighter.
  - Starting turn alternates to winner of previous match.
  - Build the one player version next, using a random selector to place the computer's marks.
  - Build an algorithm that makes the best turn for the computer.
  - Implement difficulty levels for the computers turn.

## Game flow:
  - Open to a menu screen that allows the user to select the 2 player version (this will be used later on when 1 player mode is created).
  - Once player mode is selected, allow users to enter names and select their marks.
  - Game begins once the 'Start Game' button is selected.

## Contributing:

Contributions are welcome.

Please fork the repository, create a new branch with your updates, push it to GitHub, and submit a pull request to master.

You can also submit an Issue if you find something that doesn't work quite right.

## ToDo:

  - Animations on changes need improvement
  - Add score counter to names
  - Improve navigation
  - Refactor and/or Test code
