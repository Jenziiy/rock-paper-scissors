let counter = 0;
let winCount = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


function game(){
      const gameInput = ['rock','paper', 'scissors'];
      const playerSelection = prompt(`${gameInput[0]}, ${gameInput[1]} or ${gameInput[2]} ?`,`${gameInput[0]}`).toLowerCase();
      const computerSelection = computerPlay().toLowerCase();
      const gameOutcome = score => alert(gameOutput[score])
      const gameOutput = ['you won!', 'you lost :( ', 'it\'s a tie!!!!'];

      alert(`you chose ${playerSelection}, lets see what the computer chose.. `);

      function computerPlay () { return gameInput[Math.floor(Math.random()*gameInput.length)]; }
      

      function playRound(playerSelection, computerSelection) {
        switch(true) {
          case playerSelection === computerSelection :
        gameOutcome(2);
        break;
        case playerSelection == gameInput[1]  && computerSelection == gameInput[0] ||
        playerSelection == gameInput[0]  && computerSelection == gameInput[2] ||
          playerSelection == gameInput[2]  && computerSelection == gameInput[1] :
          gameOutcome(0);
          winCount ++;
        break;
        default:
        gameOutcome(1);
        }
        return winCount;
      }
    
      computerPlay();
      alert(computerSelection);
      playRound(playerSelection, computerSelection);
      counter ++;
  }

game();




