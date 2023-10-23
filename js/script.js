function cambiarFondo() {
    
    var divScreen = document.querySelector(".screen");

    // Cambia el fondo del div
    divScreen.style.backgroundImage = 'url("./img/EntradaNintendo.png")';
    divScreen.style.backgroundSize = "cover";
    // Crea un elemento de audio
    var audio = new Audio("./Sounds/gameboy.mp3");
    // Reproduce el sonido
    audio.play();
  }

  document.querySelector("#buttonA").addEventListener("click", function () {
    
    var divScreen = document.querySelector(".screen");

    // Cambia el fondo del div
    divScreen.style.backgroundImage = 'url("./img/tetris.jpg")';
    divScreen.style.backgroundSize = "cover";
    
    // Crea un elemento de audio
    var audio = new Audio("./Sounds/tetrisgameboy1-gameboy.mp3");
    // Reproduce el sonido
    audio.play();
});

document.querySelector("#buttonB").addEventListener("click", function () {
  
  var divScreen = document.querySelector(".screen");

  // Cambia el fondo del div
  divScreen.innerHTML = '<video id="myVideo" autoplay loop muted poster="./img/poster.jpg"><source src="./img/video_2023-10-23_12-32-17.mp4" type="video/mp4"></video>';
  divScreen.style.backgroundSize = "cover";
  
  // Crea un elemento de audio
  var audio = new Audio(""); 
  audio.play();

  // Aplica estilos al video
  var video = document.getElementById("myVideo");
  video.style.width = "100%";
  video.style.height = "100%";
});
