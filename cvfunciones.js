//Esto esconde la entrada y muestra el contenido
document.getElementById("enter-here").addEventListener("click", function(){
  document.getElementById("entrada").style.display = "none";
});

document.getElementById("enter-here").addEventListener("click", function(){
  document.getElementById("contenido").style.display = "block";
});

//Esto esconde y muestra el menu superior en RWD
document.getElementById("menu-icon").addEventListener("click", function myFunction() {
    var x = document.getElementById("menu-carpetas");
    if (x.className === "menu-carpetas") {
      x.className += " responsive";
    } else {
      x.className = "menu-carpetas";
    }
});

//Esto show/hide el buscador
document.getElementById("lupa").addEventListener("click", function(){
  var barra = document.getElementById("barra");
  if (barra.style.display === "none") {
    barra.style.display = "inline-block";
  } else {
    barra.style.display = "none";
  }
})

//Al clickear en el avatar aparece la foto 
document.getElementById("avatar").addEventListener("click", function mostrarfoto() {
  var x = document.getElementById("foto-de-perfil");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
});

var ventana = document.getElementById("foto-de-perfil");
document.getElementsByClassName("cerrar-foto")[0].addEventListener("click", function cerrarfoto(){
  if (ventana.style.display === "block"){
    ventana.style.display ="none";
  }
})
 
document.onclick = function(event) {
  if (event.target == ventana) {
    ventana.style.display = "none";
  }
}

/** CONTENIDO: PROYECTOS: GALERIA MODAL BOX */
var galeria = document.getElementById("galeria-proyectos");
var btn = document.getElementById("btn-open");
var span = document.getElementsByClassName("cerrar-modal")[0];
var modal = document.getElementById("modal");

// Cerrar al clickear la cruz
span.onclick = function() {
  galeria.style.display = "none";
}
//  Cerrar al clickear fuera del modal
document.onclick = function(event) {
  if (event.target == modal) {
    galeria.style.display = "none";
  }
}
// Abrir el modal
btn.onclick = function() {
  galeria.style.display = "block";
}


//SCROLL TO TOP
let mybutton = document.getElementById("totop");

// Si bajas 20px, se muestra el boton
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// tocas la flecha y va arriba de todo
document.getElementById("totop").addEventListener("click", function topFunction(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
);


/** VENTANITA DE ALERTA 
window.alert("Hi! Welcome. This is me");
*/
