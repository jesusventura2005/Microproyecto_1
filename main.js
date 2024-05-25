// Variables generales

const categories = [
  ["shanghai", "tokyo", "miami", "madrid", "paris"],
  ["gato", "perro", "elefante", "tigre", "caballo"],
  ["pizza", "hamburguesa", "pasta", "ensalada", "sushi"],
]
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

let palabra = ""; // Palabra a adivinar
let categorySelected; // Categoria de la palabra seleccionada
let contador = 6; // Contador de vidas
let guesses; // Intentos de adivinar la palabra
let score; // Puntaje

// Elementos del DOM
let lives = document.getElementById("intentos");

// Crea los botones del alfabeto
function buttonLetters() {
  letterButtons = document.getElementById("letterButtons");
  letters = document.createElement("div");

  for (var i = 0; i < alphabet.length; i++) {
    letters.id = "alphabet";
    list = document.createElement("button");
    list.id = "letter";
    list.innerHTML = alphabet[i];
    letterButtons.appendChild(letters);
    letters.appendChild(list);
  }
}

// Generador de palabra 
function generarPalabra() {
  categorySelected = categories[Math.floor(Math.random() * categories.length)];
  palabra = categorySelected[Math.floor(Math.random() * categorySelected.length)];
  document.getElementById("palabra").innerHTML = "_ ".repeat(palabra.length);
  document.getElementById("intentos").innerHTML = contador;
  mostrarImagen(contador);
}

// Seleccionar categoria
function seleccionarCategoria() {
  if (categorySelected === categories[0]) {
    category.innerHTML = "Categoria: Ciudades";
  } else if (categorySelected === categories[1]) {
    category.innerHTML = "Categoria: Animales";
  } else if (categorySelected === categories[2]) {
    category.innerHTML = "Categoria: Comida";
  }
}

// Mostrar vidas
function commentsAndLifes () {
  lives.innerHTML = "Tienes: " + contador + " oportunidades";
  if (contador < 1) {
    lives.innerHTML = "Se acabo el juego!";
  }
}

// Mostrar puntaje del usuario en la partida
function showScore() {
  document.getElementById("score").innerHTML = "Puntaje: " + score;
}
 
// Actualizar la imagen del ahorcado
function mostrarImagen(intentos) {
  for (let i = 0; i <= 6; i++) {
    document.getElementById(`image${i}`).style.display =
      i === intentos ? "block" : "none";
  }
}

// Tomar letra cuando se clickea el boton
function tomarLetra(letra) {
  let acierto = null;
  let vacio = "";
  let palabraActual = document.getElementById("palabra").innerHTML.split(" ");

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      vacio += letra + " ";
      acierto = true;
    } else {
      vacio += palabraActual[i] + " ";
    }
  }

  document.getElementById("palabra").innerHTML = vacio.trim();

  if (acierto) {
    score += 10 * contador;
  }

  if (!acierto) {
    contador = contador - 1;
    document.getElementById("intentos").innerHTML = contador;
    mostrarImagen(contador);
  }

  if (contador === 0) {
    document.querySelectorAll('#letter').forEach((boton) => {
      boton.disabled = true;
    }
    );
  }
}


// Iniciador del juego
function main() {
  contador = 6;
  score= 0;

  generarPalabra();
  buttonLetters();
  showScore();
  seleccionarCategoria();
  commentsAndLifes();
  document.querySelectorAll("#letter").forEach((boton) => {
    boton.disabled = false;
    boton.addEventListener("click", (e) => {
      tomarLetra(e.target.innerHTML);
      boton.disabled = true;
      commentsAndLifes();
      showScore()
    });
  });
}

// Funcion para resetear el juego
document.getElementById('reset').onclick = function() {
  letters.parentNode.removeChild(letters);
  console.log(category.innerHTML)
  main();
}

window.onload = main;
