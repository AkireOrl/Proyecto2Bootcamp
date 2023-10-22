function cambiarFondo() {
    // Obtén el elemento div con la clase "screen"
    var divScreen = document.querySelector(".screen");

    // Cambia el fondo del div
    divScreen.style.backgroundImage = 'url("./img/EntradaNintendo.png")';
    divScreen.style.backgroundSize = "cover";
    // Crea un elemento de audio
    var audio = new Audio("./Sounds/gameboy.mp3");
    // Reproduce el sonido
    audio.play();
  }