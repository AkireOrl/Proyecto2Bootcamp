var fondoCambiado = false;
var videoReproducido = false;

function cambiarFondo() {
    var divScreen = document.querySelector(".screen");

    if (!fondoCambiado) {
        // Cambia el fondo del div
        divScreen.style.backgroundImage = 'url("./img/EntradaNintendo.png")';
        divScreen.style.backgroundSize = "cover";
        // Crea un elemento de audio
        var audio = new Audio("./Sounds/gameboy.mp3");
        // Reproduce el sonido
        audio.play();

        // Cambia el estado a true para indicar que el fondo ha sido cambiado
        fondoCambiado = true;
    } else {
        // Vuelve al fondo original
        divScreen.style.backgroundImage = 'url("./img/fondo-original.jpg")';

        // Restablece el estado a false para la próxima vez que se haga clic
        fondoCambiado = false;
    }
}

document.querySelector("#buttonA").addEventListener("click", function () {
    if (fondoCambiado) {
        var divScreen = document.querySelector(".screen");

        // Cambia el fondo del div
        divScreen.style.backgroundImage = 'url("./img/tetris.jpg")';
        divScreen.style.backgroundSize = "cover";

    } else {
        var divScreen = document.querySelector(".screen");

        // Cambia el fondo del div
        divScreen.style.backgroundImage = 'url("./img/fondo-original.jpg")';

        // Restablece el estado a false para la próxima vez que se haga clic
        fondoCambiado = false;
    }
});

document.querySelector("#buttonB").addEventListener("click", function () {
    if (fondoCambiado) {
        var divScreen = document.querySelector(".screen");

        // Cambia el fondo del div
        divScreen.style.backgroundImage = 'url("./img/juego-iniciado.png")';
        divScreen.style.backgroundSize = "cover";

    } else {
        var divScreen = document.querySelector(".screen");

        // Cambia el fondo del div
        divScreen.style.backgroundImage = 'url("./img/fondo-original.jpg")';

        // Restablece el estado a false para la próxima vez que se haga clic
        fondoCambiado = false;
    }
});

document.querySelector("#buttonStart").addEventListener("click", function () {
    if(fondoCambiado) {
        var divScreen = document.querySelector(".screen");

        divScreen.style.backgroundImage = 'url("./img/EntradaNintendo.png")';
        divScreen.style.backgroundSize = "cover";
    } else {}

});