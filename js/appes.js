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
        playerHand.src = `../img/${this.textContent}.png`;
        aiHand.src = `../img/${aiChoise}.png`;

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
      <h1>Empate!</h1>
      <p class="close">X</p>
      `;

      empate();
      return;
    } else if (userChoise === "rock" && aiChoise === "paper" || userChoise === "paper" && aiChoise === "scissors" || userChoise === "scissors" && aiChoise === "rock") {
      // console.log("You lost Champions, the AI ​​won you");
      // choises.textContent = "You lost Champions, the AI ​​won you";
      result.innerHTML = `
      <h1>Perdiste Campeón, la I. A. te ganó</h1>
      <p class="close">X</p>
      `;

      machine_win();
      return;
    } else if (userChoise === "rock" && aiChoise === "scissors" || userChoise === "paper" && aiChoise === "rock" || userChoise === "scissors" && aiChoise === "paper") {
      // console.log("You won Champions")
      // choises.textContent = "You won Champions";
      result.innerHTML = `
      <h1>Ganaste Campeón, Excelente.</h1>
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
  title: '<h2 class="welcome">Bienvenido al juego</h2>',
  text: 'Piedra, Papel o Tijera ',
  background: 'rgba(255, 255, 255, 0.9)',
  // background:'url(../img/amdber.jpg)',
  backdrop: true,
  grow: 'fullscreen',
  backdrop: true,
  buttonsStyling: true,
  showConfirmButton: false,
  showCloseButton: true,
  html: '<div class="banner-container"><P class="bannertitle">Jugar a "Piedra, papel o tijera" no solo es entrenamiento, tambien juega un papel importante la estrategia.</P><br><P class="bannertitle">Donde tu <strong style="color:rgb(14, 68, 230)">"Yo Humanoide"</strong> juegas con la "Inteligencia Artificial (I. A.)" de modo que la I. A. mostrara las imagenes de la mano de forma aleatoria.</P><br><button class="frameonespa"></button><br><P class="Instructionframe">En el frame dos seleccionas la mano con la que quieres jugar:</P><ul class="hand"><li>Piedra: un puño cerrado</li><li>Papel: todos los dedos extendidos con la palma de la mano de lado</li><li>Tijera: dedos índice y corazón extendidos y separados formando una "V"</li></ul><br><button class="frametwospa"></button><br><P class="objetive">El objetivo es vencer al oponente seleccionando el arma que gana, segun las siguientes reglas:</P><ul class="objetive"><li>La piedra aplasta la tijera. ("Gana la piedra")</li><li>El papel envuelve la piedra. ("Gana el papel")</li><li>La tijera corta el papel. ("Gana la tijera")</li></ul><P class="objetive">En caso que es empate! se juega otra vez.</P><br><P class="message">Por cada mano que se juega te muestra el mensaje si ganaste o perdiste o en caso contrario, un empate! como la imagen de abajo. "Solo clickea en el mismo cuadro de mensaje para jugar de nuevo."</P><br><button class="mensaje"></button><br><a href="https://github.com/brunomaldonado/App" target="_blank">👾 brunomaldonado 🤖</a></div>',
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

  user_img.src = `../img/user.svg`;
  ai_img.src = `../img/sophiaone.png`;
  // ai_img.src = `./img/user.svg`;
}

//Start the game function
game();

//Event Listeners
// window.addEventListener('click', clearModal);
modalC.addEventListener('click', close);
about.addEventListener('click', aboutTheGame);