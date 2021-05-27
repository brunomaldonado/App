const modalC = document.querySelector(".modal-container");
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
var bookmark_user = 0;
var bookmark_ai = 0;

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
        modalC.style.display = 'block';

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
    console.log("<=========---======>  EMPATE  <=======---======> ");

  }


  const compareHands = (userChoise, aiChoise) => {

    // console.log("userChoise ======> " + userChoise);
    // console.log("aiChoise ========> " + aiChoise);


    if (userChoise === aiChoise) {
      // console.log("empate champions");
      // choises.textContent = "Empate";
      result.innerHTML = `
      <h1>Tie!</h1>
      <p class="close">X</p>
      `;

      empate();
      return;
    } else if (userChoise === "rock" && aiChoise === "paper" || userChoise === "paper" && aiChoise === "scissors" || userChoise === "scissors" && aiChoise === "rock") {
      // console.log("You lost Champions, the AI ​​won you");
      // choises.textContent = "You lost Champions, the AI ​​won you";
      result.innerHTML = `
      <h1>You Lost Champion, the A. I. ​​won you</h1>
      <p class="close">X</p>
      `;

      machine_win();
      return;
    } else if (userChoise === "rock" && aiChoise === "scissors" || userChoise === "paper" && aiChoise === "rock" || userChoise === "scissors" && aiChoise === "paper") {
      // console.log("You won Champions")
      // choises.textContent = "You won Champions";
      result.innerHTML = `
      <h1>You Won Champion, Excellent</h1>
      <p class="close">X</p>
      `;

      user_win();
      return;
    }
  }

  //Is call all the tineer function
  playMatch();
};

function aboutTheGame (){
  swal.fire({
  title: '<h2 class="welcome">Welcome to the game</h2>',
  text: 'Rock, Paper or Scissors',
  background: 'rgba(255, 255, 255, 0.9)',
  // background:'url(../img/amdber.jpg)',
  backdrop: true,
  grow: 'fullscreen',
  backdrop: true,
  buttonsStyling: true,
  showConfirmButton: false,
  showCloseButton: true,
  html: '<div class="banner-container"><P class="bannertitle">Playing “Rock, Paper or Scissors” is not only training, strategy also an important role.</P><br><P class="bannertitle">Where you <strong style="color:rgb(14, 68, 230)">"I Humanoid"</strong> you play with the “Artificial Intelligence (A. I.)" so that the A. I. will show the images of the hand in a random way.</P><br><button class="frameone"></button><br><P class="Instructionframe">In the frame two you select the hand you want to play with:</P><ul class="hand"><li>Stone: A clenched fist.</li><li>Role: All fingers extended with the palm of the hand on the side.</li><li>Scissors: Index and middle fingers extended and separated forming a “V”"</li></ul><br><button class="frametwo"></button><br><P class="objetive">The objective is to beat the opponent by selecting the weapon that wins, according to the following rules:</P><ul class="objetive"><li>The stone crushes the scissors. (Win the stone).</li><li>The paper wraps the stone (Win the role).</li><li>The scissors cut the paper. (Win the scissors).</li></ul><P class="objetive">In case it is a tie! it is played again.</P><br><P class="message">For each hand that is played it shows you the message if you won or lost or otherwise, a draw! Like the picture below."Just click on the same message box to play again."</P><br><button class="alertwon"></button><br><a href="https://github.com/brunomaldonado/App" target="_blank">👾 brunomaldonado 🤖</a></div>',
  // imageUrl: './frames/frameonemobile.png',
  // imageUrl: './frames/frametwomobile.png',

})
    console.log("about the game");
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
//   if (e.target == modalC) {

//     user_img.src = `./img/user.svg`;
//     ai_img.src = `./img/ai.svg`;

//     return false;
//   }
// }

function close() {
  modalC.style.display = 'none';
  console.log("click close");

  user_img.src = `./img/user.svg`;
  ai_img.src = `./img/sophiaone.png`;
  // ai_img.src = `./img/user.svg`;
}

//Start the game function
game();

//Event Listeners
// window.addEventListener('click', clearModal);
modalC.addEventListener('click', close);
about.addEventListener('click', aboutTheGame);