const background = document.getElementById("background");
const modal_selection = document.querySelector(".modal_selection");
const show_modal = document.querySelector(".show_modal")
const close_modal = document.getElementsByClassName(".close_modal")
const modal_container = document.querySelector(".modal_container")
const modal_body = document.querySelector(".modal_body")
const about = document.getElementById("about")
const choises = document.querySelector(".choises");
const result = document.getElementById("result");
const user_img = document.getElementById("user");
const ai_img = document.getElementById("ai");
const score_user = document.getElementById("user-points");
const score_ai = document.getElementById("ai-points");
var restart = document.getElementById("reset");
var spanish = document.getElementById("spanish");
var english = document.getElementById("english")
const background_users = document.getElementById("background_users")
const background_ai = document.getElementById("background_ai")
const tie_background__users  = document.getElementById("tie_background__users")
const tie_background__ai  = document.getElementById("tie_background__ai")
var usersImages = ["./img/hum/09.png","./img/hum/10.png","./img/hum/04.png","./img/hum/05.png","./img/hum/07.png","./img/hum/06.png","./img/hum/03.png","./img/hum/08.png"]
var iaImages = ["./img/rob/01.png","./img/rob/02.png","./img/rob/03.png","./img/rob/04.png","./img/rob/05.png","./img/rob/06.png","./img/rob/07.png","./img/rob/08.png"]
var index = 0;

var bookmark_user = 0;
var bookmark_ai = 0;

//pressi

const game = () => {

  //Play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".user");
    const aiHand = document.querySelector(".ai");

    //AI Options
    const aiOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function (e) {
        // console.log(this);

        //AI Choise
        const AIrandomNumber = Math.floor(Math.random() * 3);
        const aiChoise = aiOptions[AIrandomNumber];

        //winner //ganador
        modal_selection.style.display = 'block';

        // Here is where call compare hands
        compareHands(this.textContent, aiChoise);

        //Update images
        playerHand.src = `./img/${this.textContent}.png`;
        aiHand.src = `./img/${aiChoise}.png`;

        e.preventDefault();
      });

    });

  };


  function user_win() {
    bookmark_user++;
    console.log("=================   USER WIN   ============> " + bookmark_user);
    document.getElementById("user-points").innerText = bookmark_user;
  }

  function machine_win() {
    bookmark_ai++;
    console.log("================   MACHINE WIN ============> " + bookmark_ai);
    document.getElementById("ai-points").innerText = bookmark_ai;
  }

  function empate() {
    console.log("<=========---======>  TIE  <=======---======> ");
  }


  const compareHands = (userChoise, aiChoise) => {

    // console.log("userChoise ======> " + userChoise);
    // console.log("aiChoise ========> " + aiChoise);


    if (userChoise === aiChoise) {

      index++;
      index = index % iaImages.length;
      tie_background__ai.src = iaImages[index];
      tie_background__ai.style.display = 'block'

      index++;
      index = index % usersImages.length;
      tie_background__users.src = usersImages[index]; 
      tie_background__users.style.display = 'block'
      // background.style.visibility = 'visible'

      result.innerHTML = `
      <img id="tie" class="tie" src="./img/X5NX.gif" alt="tie">
      <h1 class="tie_message">Tie!</h1>
      `;

      empate();
      return;
    } else if (userChoise === "rock" && aiChoise === "paper" || userChoise === "paper" && aiChoise === "scissors" || userChoise === "scissors" && aiChoise === "rock") {
      // console.log("You lost Champions, the AI ​​won you");
      // choises.textContent = "You lost Champions, the AI ​​won you";
      index++;
      index = index % iaImages.length;
      background_ai.src = iaImages[index];
      background_ai.style.display = 'block'
      // background_ai.src = `./img/rob/rob.png`;
      // background.style.visibility = 'visible'

      result.innerHTML = `
      <img id="loser" class="loser" src="./img/6ob.gif" alt="loser">
      <h1 class="ai_won">You Lost Champion, the A. I. ​​won you</h1>
     
      `;

      machine_win();
      return;
    } else if (userChoise === "rock" && aiChoise === "scissors" || userChoise === "paper" && aiChoise === "rock" || userChoise === "scissors" && aiChoise === "paper") {
      // console.log("You won Champions")
      // choises.textContent = "You won Champions";
      index++;
      index = index % usersImages.length;
      background_users.src = usersImages[index]; 
      background_users.style.display = 'block'
      // background.style.visibility = 'visible'
      // background_human.src = `./img/hum/women.png`;
      result.innerHTML = `
      <img id="winner" class="winner" src="./img/6SSp.gif" alt="ai_won">
      <h1 class="user_won">You Won Champion, Good hand</h1>
     
      `;

      user_win();
      return;
    }
  }

  //Is call all the tineer function
  playMatch();
};

function aboutTheGame (){
  show_modal.style.display = 'block';
  modal_container.style.display = 'block';
  modal_body.style.display = 'visible';
  modal_body.innerHTML = `
  <h1 class="title_modal">Welcome to the game.</h1>
  <h2 class="Instruction">Playing “Rock, Paper or Scissors” is not only training, strategy also an important role.</h2>
  <h2 class="Instruction">Where are you the <strong style="color:rgb(14, 68, 230)">"User,"</strong> you play with the “Artificial Intelligence (A. I.)" so that the A. I. will show the images of the hand in a random way.</h2>
  <button class="frameone"></button>
  <h2 class="Instruction">In the frame two you select the hand you want to play with:</h2>
  <ul class="hand">
    <li>Stone: A clenched fist. <button class="frameStone"></button></li>
    <li>Role: All fingers extended with the palm of the hand on the side. <button class="frameRole"></li>
    <li>Scissors: Index and middle fingers extended and separated forming a “V”. <button class="frameScissor"></li>
  </ul>
  <button class="frametwo"></button><br>
  <h2 class="Instruction">The objective is to beat the opponent by selecting the weapon that wins, according to the following rules:</h2>
  
  <ul class="hand">
    <li>The stone crushes the scissors. (Win the stone).
      <button class="frameScissor"></button>
      <button class="frameStone"></button>
    </li>
    <li>The role wraps the stone (Win the role).
    <button class="frameStone"></button>
      <button class="frameRole"></button>
    </li>
    <li>The scissors cut the paper. (Win the scissors).
      <button class="frameScissor"></button>
      <button class="frameRole"></button>
    </li>
  </ul>
  <ul class="hand">
  <li class="hands_tie">In case it is a tie! it is played again. 
    <button class="frameStone"></button>
    <button class="frameStone"></button>
  </li>
  </ul>
  <h2 class="Instruction">For each hand that is played it shows you the message if you won or lost or otherwise, a draw! Like the picture below."Just click on the same message box to play again."</h2>
  <button class="alertMessage"></button>
      
  `;
    console.log("about the game");
    document.getElementById("close_modal").addEventListener("click", close)
    // document.querySelector(".show_modal").addEventListener("click", close)
}

function restartGame() {
  restart.addEventListener('click', function () {

    bookmark_user = 0;
    bookmark_ai = 0;

    score_user.innerHTML = `
    <p id="user-points">0</p>
    `;
    score_ai.innerHTML = `
    <p id="ai-points">0</p>
    `;
  })
}

restartGame();

//clear modal
// function clearModal(e) {
//   if (e.target == modal_selection) {

//     user_img.src = `./img/user.svg`;
//     ai_img.src = `./img/ai.svg`;

//     return false;
//   }
// }

function close() {
  modal_selection.style.display = 'none';
  show_modal.style.display = 'none';
  // modal_container.style.display = 'block'
  console.log("click close");
  background_ai.style.display = 'none'
  background_users.style.display = 'none'
  tie_background__users.style.display = 'none'
  tie_background__ai.style.display = 'none'
  // background.style.visibility = 'hidden'

  user_img.src = `./img/user.svg`;
  ai_img.src = `./img/rob/sophia.png`;
  // ai_img.src = `./img/user.svg`;
}

//Start the game function
game();

//Event Listeners
about.addEventListener('click', aboutTheGame);
// window.addEventListener('click', clearModal);
modal_selection.addEventListener('click', close);
// close_modal.addEventListener("click", close)
// show_modal.addEventListener('click', close);
// modal_container.addEventListener('click', close)
