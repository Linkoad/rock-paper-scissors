function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerSelection();
  document.getElementById('status').innerHTML = "<p>You played <strong>" + playerSelection + "</strong>. The bot played <strong>" + computerSelection + "</strong>.</p>";
  if(playerSelection == 'rock') {
    if(computerSelection == 'rock') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    }    
    else if (computerSelection == 'paper') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    }
    else if (computerSelection == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
     playerScore++;
    }
  } 
    else if (playerSelection == 'paper') {
      if(computerSelection == 'rock') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      playerScore++;
    }
      else if (computerSelection == 'paper') {
        document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    } 
      else if (computerSelection == 'scissors') {
        document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
        computerScore++;
    }  
  } 
    else if ( playerSelection == 'scissors') {
      if(computerSelection == 'rock') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
      computerScore++;
    }
    else if (computerSelection == 'paper') {
      document.getElementById('status').innerHTML += "<p>You win! :)</p>";
      playerScore++;
    }
    else if (computerSelection == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You tied. :|</p>";
    }  
    }
  if (playerScore == 5 || computerScore == 5) {
    const play = document.querySelector('#sb');
    const greenBanner = document.querySelector('#banner-green');
    const results = document.querySelector('#sb');

    play.style.display = 'none';
    greenBanner.style.display = 'none';
    lb.style.display = 'none';	  
    youwon.style.display = 'flow-root';	  

    results.scrollIntoView();
  }
  if (playerScore == 5) {
    const youWon = document.querySelector('#youwon');
    youWon.style.display = 'block'; 
  } 
  if (computerScore == 5) {
    const youLost = document.querySelector('#you-lost');
    youLost.style.display = 'block';
  }
  document.getElementById('playerScore').innerHTML = playerScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}

function getComputerSelection() {
  var plays = ['rock', 'paper', 'scissors'];
  var playRound = plays[Math.floor(Math.random() * plays.length)];
  return playRound;
}

var playerScore = 0;
var computerScore = 0;

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

function playRock() {
  playRound("rock");
}
function playPaper() {
  playRound("paper");
}
function playScissors() {
  playRound("scissors");
}

const computerSelection = computerPlay();
const playerSelection = 'rock';
console.log(playRound(playerSelection, computerSelection));
