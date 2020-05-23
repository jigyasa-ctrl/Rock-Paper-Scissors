let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result>p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

function getComputerChoice() {
    const choices=['r', 'p', 's'];
    const randomNumber= Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter) {
    if(letter === 'r') return 'rock';
    if(letter === 'p') return 'paper';
    return 'scissors';
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${convert(userChoice)}(user) beats ${convert(computerChoice)}(comp) You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}



function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_div.innerHTML=`${convert(userChoice)}(user) loses to ${convert(computerChoice)}(comp) You lost!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);

    
}

function draw(userChoice, computerChoice) {
   
    result_div.innerHTML=`${convert(userChoice)}(user) beats ${convert(computerChoice)}(comp) it's a draw!`;
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('yellow-glow'), 300);

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
        win(userChoice, computerChoice);
         break;
        case 'rp':
        case 'ps':
        case 'sr':
        lose(userChoice, computerChoice);
         break;
        case 'rr':
        case 'pp':
        case 'ss':
        draw(userChoice, computerChoice);
         break;   
    }
}

function main() {
  rock_div.addEventListener('click',function() {
      game('r');
   })

  paper_div.addEventListener('click',function() {
      game('p');
  })

  scissor_div.addEventListener('click',function() {
      game('s');
  })
}

main();