// Prevent form submit from refreshing the page
const userform = document.getElementById("name-form");
const gameform = document.getElementById("game-form");
userform.addEventListener('submit',function(e){
	e.preventDefault();
});
gameform.addEventListener('submit',function(e){
	e.preventDefault();
});

// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors(userName.value);

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  const username = game.username;
  let userScore = game.score.user;
  let cpuScore = game.score.cpu;
  if (userScore > cpuScore) {
    scoreParagraph.innerHTML = username + ": " + userScore + " v CPU: " + cpuScore;
  } else {
    scoreParagraph.innerHTML = "CPU: " + cpuScore + " v " + username + ": " + userScore;
  }
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  // Clear content
  gameHistoryParagraph.innerHTML = "";

  // Add content
  let history = game.gameHistoryLog;
  for (let i = 0; i < history.length; i++) {
    // Overrides the current history. Switch = to += to display every move during the match.
    gameHistoryParagraph.innerHTML = history[i] + "<br />";
  }
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  // Complete
  const username = userName.value;
  game = new RockPaperScissors(username);
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  let selection = userSelection.value;
  game.play(selection);
  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });