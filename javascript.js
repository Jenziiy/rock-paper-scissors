let counter = 0;
let winCount = 0;
let playerSelection;
let computerSelection;

function game(){
  
      const gameInput = ['rock','paper', 'scissors'];
      //const playerSelection = prompt(`${gameInput[0]}, ${gameInput[1]} or ${gameInput[2]} ?`,`${gameInput[0]}`).toLowerCase();
      
      function getPlayerChoice () {
        const buttons = document.querySelectorAll('.button');
        
          buttons.forEach(btn => btn.addEventListener('click', () => {
            playerSelection = btn.textContent;
            console.log('hello player you played '+ playerSelection);

      }))
      playRound(playerSelection, computerSelection);
    };
      
      
      function getComputerChoice() { return gameInput[Math.floor(Math.random()*gameInput.length)];}
      

      function playRound(playerSelection, computerSelection) {
        computerSelection = getComputerChoice();
        console.log(' the computer played ' + computerSelection)
        //playerSelection = getPlayerChoice();
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

      getPlayerChoice();
      counter ++;
      console.log(`This was try ${counter} out of 5 total, you won a total of ${winCount}`);

}
document.querySelector('body').addEventListener('click', game);
//game();




