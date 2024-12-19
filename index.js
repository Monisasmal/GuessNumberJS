const Form = document.getElementById("form");
const Input = document.getElementById("input");
const Submit = document.getElementById("submit");
const StartGame = document.getElementById("startGame");
const Output = document.getElementById("output");
const NumberDisplay = document.getElementById("numberDisplay");

let userArray = [];
let computerGuess;


  
function startGames(){
Output.textContent = '';
NumberDisplay.textContent = '';
userArray = [];
computerGuess = Math.round(Math.random() * 100);
Input.disabled = false;
Submit.disabled = false;
StartGame.disabled = true;
Input.focus();
}

function endGame(message){
    Output.textContent = message;
    Input.disabled = true;
    Submit.disabled = true;
    StartGame.disabled = false;
    StartGame.focus();
}

function onInput(e){
    e.preventDefault();
   const guess = Input.value;
   Input.value='';
   userArray.push(guess);
   NumberDisplay.textContent =  `Your guesses: ${userArray.join(', ')}`;

   if(guess > computerGuess){
    Output.textContent = "Too High";
   }
   else if(guess < computerGuess){
    Output.textContent = "Too Low";
   }else{
    endGame('You got it! Congrats');
    return;
   }
   Input.focus();

    if(userArray.length >= 10){
        endGame('You lost! The number was ' + computerGuess);
    }

}

Form.addEventListener('submit', onInput);
StartGame.addEventListener('click', startGames);
startGames();

