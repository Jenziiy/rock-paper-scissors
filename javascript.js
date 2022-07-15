let counter = 0;
let winCount = 0;

function game(){

      const gameInput = ['rock','paper', 'scissors'];
      //const playerSelection = prompt(`${gameInput[0]}, ${gameInput[1]} or ${gameInput[2]} ?`,`${gameInput[0]}`).toLowerCase();
      
      function getPlayerChoice () {
       document.querySelectorAll('button').forEach(btn => btn.addEventListener('click', async () => { console.log(`you chose ${btn.textContent}, lets see what the computer chose.. `)}));
      }

      function getComputerChoice() { return console.log(gameInput[Math.floor(Math.random()*gameInput.length)]);}
      

      function playRound(playerSelection, computerSelection) {
        const gameOutput = ['you won!', 'you lost :( ', 'it\'s a tie!!!!'];
        const gameOutcome = score => console.log(gameOutput[score]);
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
      const playerSelection_btn = getPlayerChoice();
      const computerSelection = getComputerChoice();
      playRound(playerSelection_btn, computerSelection);
      counter ++;
      console.log(`This was try ${counter} out of 5 total, you won a total of ${winCount}`);

}

game();




