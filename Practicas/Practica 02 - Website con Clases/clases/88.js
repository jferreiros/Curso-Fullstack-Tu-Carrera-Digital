function cambiaNumero() {
    var miNumeroString = document.getElementById("miNumero").value;
    var miNumero = parseInt(miNumeroString, 10);
    miNumero = miNumero + 1;
    if (miNumero > 3) {
        miNumero = 0;
    }
    document.getElementById("miNumero").value = miNumero;
    cambiaImagen(miNumero);
}

var gato01 = "https://images.vexels.com/media/users/3/139880/isolated/preview/5c7018165ca328f070d73ea0b92c61e7-gato-corriendo-secuencia-3-by-vexels.png";
var gato02 = "https://images.vexels.com/media/users/3/139884/isolated/preview/7ffed8bcebaa6bbcba2d11bae1d6f5d5-gato-corriendo-secuencia-7-by-vexels.png";
var gato03 = "https://images.vexels.com/media/users/3/139874/isolated/preview/a1ed019282a0573875216eddc0dc697b-gato-corriendo-secuencia-15-by-vexels.png";
var gato04 = "https://images.vexels.com/media/users/3/139878/isolated/preview/ef0393ca5af17e8c22cdbca3fd3889a4-gato-corriendo-secuencia-19-by-vexels.png";

function cambiaImagen(miNumero) {
    var misLinks = [gato01, gato02, gato03, gato04];
    document.getElementById("miImagen").src = misLinks[miNumero];
}

function cambiaNumeroReloj() {

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const segundosDigital = document.querySelector('.segundos');
const minutosDigital = document.querySelector('.minutos');
const horasDigital = document.querySelector('.horas');

let segundos = 0;
let minutos = 0;
let horas = 0;


function setDate() {
    
    segundos ++;

    if (segundos > 59) {
        minutos ++;
        segundos = 0;
    }
    if (minutos > 59) {
        horas ++;
        minutos = 0;
    }
    const secondsDegrees = (segundos * 6) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    segundosDigital.innerHTML = segundos <= 9 ? "0" + segundos : segundos;

    const minsDegrees = (minutos * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    minutosDigital.innerHTML = minutos <= 9 ? "0" + minutos : minutos;

    const hourDegrees = (horas * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    horasDigital.innerHTML = horas <= 9 ? "0" + horas : horas;

    cambiaNumero();
}

setInterval(setDate, 1000);
setDate();

}



