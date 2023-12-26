const background = document.getElementById("background");
const modal_selection = document.querySelector(".modal_selection");
const show_modal = document.querySelector(".show_modal")
const close_modal = document.getElementsByClassName(".close_modal")
const modal_container = document.querySelector(".modal_container")
const modal_body = document.querySelector(".modal_body")
const modal_background = document.querySelector(".modal_background")
const about = document.getElementById("about")
const banner = document.querySelector(".banner")
const icon = document.querySelector(".icon")
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
const modal_users = document.getElementById("modal_users")
const background_ai = document.getElementById("background_ai")
const tie_background__users  = document.getElementById("tie_background__users")
const tie_background__ai  = document.getElementById("tie_background__ai")
const usersImages = ["./img/hum/g.png","./img/hum/10.png","./img/hum/11.png","./img/hum/05.png","./img/hum/07.png","./img/hum/06.png","./img/hum/08.png","./img/hum/09.png","./img/hum/03.png","./img/hum/c.png","./img/hum/042.png","./img/hum/aa.png","./img/hum/b.png"]
const iaImages = ["./img/rob/01.png","./img/rob/06.png","./img/rob/03.png","./img/rob/04.png","./img/rob/05.png","./img/rob/02.png","./img/rob/07.png","./img/rob/08.png"]
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
      <img id="winner" class="winner" src="./img/6SSp.gif" alt="ai_won">
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
      <img id="loser" class="loser" src="./img/6ob.gif" alt="loser">
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
  // const randomImageUrl = usersImages[Math.floor(Math.random() * usersImages.length)];
  // modal_users.src = randomImageUrl
  about.classList.toggle('active')
  index++;
  index = index % usersImages.length;
  // modal_users.src = usersImages[index]; 

  show_modal.style.display = 'block';
  modal_container.style.display = 'block';
  modal_body.style.display = 'visible';
  modal_body.innerHTML = `
  <img id="modal_users" src=${usersImages[index]} alt="">
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
  <button class="alertMessage"></button><br>

  <footer class="footer_modal">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
    <a href="https://github.com/brunomaldonado/App" target="_blank"> Rigoberto Bruno Mdo. </a>
  </footer>
      
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
  // modal_users.style.display = 'none'
  tie_background__users.style.display = 'none'
  tie_background__ai.style.display = 'none'
  // background.style.visibility = 'hidden'
  user_img.src = `./img/user.svg`;
  ai_img.src = `./img/rob/sophia.png`;
  // ai_img.src = `./img/user.svg`;
  about.classList.toggle('active')
  icon.classList.toggle('active')
  banner.classList.toggle('active')

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
