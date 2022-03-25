/* <---------- Menu Dropdown ------------> */

var dropdown = document.getElementsByClassName("list-item");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}

/* <---------- Menu Toggle ------------> */

var toggle = document.getElementById("toggle01");

function openMenu() {
    this.classList.toggle("active");
    var mobileMenu = document.querySelector(".nav-list");
    console.log("hola");
    console.log(mobileMenu);
    if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    } else {
    mobileMenu.style.display = "block";
    }
}

toggle.addEventListener("click", openMenu);

/* <---------- Tittle Change ------------> */

var linksMenu = document.querySelectorAll(".sub-item");

function cambiarTitulo() {
    let textoTitulo = this.firstChild.innerHTML;
    let campoTitulo = document.getElementById("tittleH2");
    campoTitulo.innerHTML = textoTitulo;
}

function cambiarIframe() {
    let enlace = this.firstChild.href;
    let enlaceIframe = document.getElementById("iframeID");
    enlaceIframe.src = enlace;
    enlace.preventDefault();
}

linksMenu.forEach(link => link.addEventListener("click", cambiarTitulo));
linksMenu.forEach(link => link.addEventListener("click", cambiarIframe));
linksMenu.forEach(link => link.addEventListener("click", (event) => {event.preventDefault()}));

/* <---------- iFrame Change ------------> */

