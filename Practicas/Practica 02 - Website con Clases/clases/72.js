function myFunction01() {
    document.getElementById("pruebas").innerHTML = "Función 1";
}
function myFunction02() {
    document.getElementById("pruebas").innerHTML = "Función 1";
}

function bulbOn() {
    document.getElementById('myImage').src='../images/pic_bulbon.gif';
}

function bulbOff() {
    document.getElementById('myImage').src='../images/pic_bulboff.gif';
}

function biggerText() {
    document.getElementById('styleText').style.fontSize='35px';
}
function smallText() {
    document.getElementById('styleText').style.fontSize='9px';
}

function hideElement() {
    document.getElementById('hide-element').style.display='none'
}
function showElement() {
    document.getElementById('hide-element').style.display='block'
}