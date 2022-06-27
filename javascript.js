let playAgain = "yes";
  while (playAgain === 'yes') {
      const gameInput = ['Rock','Paper', 'Scissors'];
      const userInput = prompt(`${gameInput[0]}, ${gameInput[1]} or ${gameInput[2]} ?`,`${gameInput[0]}`);
      let compInput = undefined;
      const gameOutput = ['you won!', 'you lost :( ', 'it\'s a tie!!!!'];

      alert(`you chose ${userInput}, lets see what the computer chose.. `);

      function computerPlay () {
      return compInput = gameInput[Math.floor(Math.random()*gameInput.length)];
      }

      function calculateWinner() {
        switch(true) {
          case userInput == compInput :
        gameOutcome(2);
        break;
        case userInput == gameInput[1]  && compInput == gameInput[0] ||
        userInput == gameInput[0]  && compInput == gameInput[2] ||
          userInput == gameInput[2]  && compInput == gameInput[1] :
          gameOutcome(0);
        break;
        default:
        gameOutcome(1);
        }
      }

      let gameOutcome = score => alert(gameOutput[score])

      computerPlay();
      alert(compInput);
      calculateWinner();

      playAgain = prompt("Would you like to play again? (yes/no)");
  }




