let counter = 0;
let winCount = 0;
let computerWinCount = 0;
let tieCount = 0;
let playerSelection;
let computerSelection;
const para = document.createElement('p');
const textDiv = document.querySelector('#text-container');
const hOne = document.createElement('h1');


function game(){
      const gameInput = ['rock','paper', 'scissors'];

      function getPlayerChoice () {
        const buttons = document.querySelectorAll('.button');
        
          buttons.forEach(btn => btn.addEventListener('click', () => {
            playerSelection = btn.textContent;
            console.log('hello player you played '+ playerSelection);
      }));
      }      
      
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
            tieCount ++;
          break;
          case playerSelection == gameInput[1]  && computerSelection == gameInput[0] ||
              playerSelection == gameInput[0]  && computerSelection == gameInput[2] ||
              playerSelection == gameInput[2]  && computerSelection == gameInput[1] :
            gameOutcome(0);
              winCount ++;
          break;
          default:
            gameOutcome(1);
            computerWinCount ++;
        }
        return winCount, computerWinCount, tieCount;
      }

      function changeColor(){
        textDiv.style.backgroundColor= getRandomColor();
      }

      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

      getPlayerChoice();
      if (!playerSelection || (winCount == 5 || computerWinCount == 5 )) return;
      playRound(playerSelection, computerSelection);
      counter ++;
      textDiv.appendChild(para);
      para.innerHTML += (`Try ${counter} out of ${winCount + tieCount + computerWinCount}. Your score = ${winCount}. The computer's score = ${computerWinCount} :o </br>`);
      if (winCount ==5 || computerWinCount == 5) { computerWinCount == 5 ? hOne.textContent = ('THE COMPUTER WON!! ') :
       hOne.textContent = ('HUMAN YOU WON! (and now you and I lost the game.. ');
      textDiv.removeChild(para);
      textDiv.style = 'border-radius: 25px; border-style: solid;';
      
    intervalColor = setInterval(changeColor,500);
    setTimeout(function() {
      clearInterval(intervalColor)
    }, 5000);

     textDiv.style.backgroundColor = "white";
     hOne.style = 'text-align: center; color: hotpink; font-family:tahoma;';

      textDiv.appendChild(hOne);}
      return;

}
document.querySelector('body').addEventListener('click', game);
game();




