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
let counter = 6; // Contador de vidas
let guesses; // Intentos de adivinar la palabra
let correctGuesses // Adivinadas correctas
let multiplier // Multiplicador de puntaje
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
function generateWord() {
  categorySelected = categories[Math.floor(Math.random() * categories.length)];
  palabra = categorySelected[Math.floor(Math.random() * categorySelected.length)];
  document.getElementById("palabra").innerHTML = "_ ".repeat(palabra.length);
  document.getElementById("intentos").innerHTML = counter;
  displayImage(counter);
}

// Seleccionar categoria
function selectCategory() {
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
  lives.innerHTML = "Tienes: " + counter + " oportunidades";
  if (counter < 1) {
    lives.innerHTML = "Se acabo el juego!";
  }
  for (var i = 0; i < palabra.length; i++) {
    console.log(correctGuesses, palabra.length)
    if (correctGuesses === palabra.length) {
      lives.innerHTML = "You Win!";
      document.querySelectorAll('#letter').forEach((boton) => {
        boton.disabled = true;
      });
    }
  }
}

// Mostrar puntaje del usuario en la partida
function showScore() {
  document.getElementById("score").innerHTML = "Puntaje: " + score;
}
 
// Actualizar la imagen del ahorcado
function displayImage(intentos) {
  for (let i = 0; i <= 6; i++) {
    document.getElementById(`image${i}`).style.display =
      i === intentos ? "block" : "none";
  }
}

// Tomar letra cuando se clickea el boton
function takeLetter(letra) {
  let acierto = null;
  let vacio = "";
  let palabraActual = document.getElementById("palabra").innerHTML.split(" ");

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      vacio += letra + " ";
      acierto = true;
      correctGuesses += 1;
    } else {
      vacio += palabraActual[i] + " ";
    }
  }

  document.getElementById("palabra").innerHTML = vacio.trim();
  
  // Si acierta el puntaje incrementa segun las vidas restantes y un multiplicador
  if (acierto) {
    score += 10 * counter * multiplier;
    multiplier += 1;
  }

  // Si no aciertas el multiplicador se reinicia y pierdes 1 vida.
  if (!acierto) {
    counter = counter - 1;
    multiplier = 1;
    document.getElementById("intentos").innerHTML = counter;
    displayImage(counter);
  }

  // Si contador llega a 0, se deshabilitan los botones del alfabeto
  if (counter === 0) {
    document.querySelectorAll('#letter').forEach((boton) => {
      boton.disabled = true;
    }
    );
  }
}


// Iniciador del juego
function main() {
  counter = 6;
  score = 0;
  multiplier = 1;
  correctGuesses = 0;

  generateWord();
  buttonLetters();
  showScore();
  selectCategory();
  commentsAndLifes();
  document.querySelectorAll("#letter").forEach((boton) => {
    boton.disabled = false;
    boton.addEventListener("click", (e) => {
      takeLetter(e.target.innerHTML);
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
