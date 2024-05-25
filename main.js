// Variables generales

const palabras = [
  ["shanghai", "tokyo", "miami", "madrid", "paris"],
  ["gato", "perro", "elefante", "tigre", "caballo"],
  ["pizza", "hamburguesa", "pasta", "ensalada", "sushi"],
]
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

let palabra = ""; // Palabra a adivinar
let categorySelected; // Categoria de la palabra
let contador = 6; // Contador de vidas

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
  const chosenCategory = palabras[Math.floor(Math.random() * palabras.length)];
  const chosenWord = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
  console.log(chosenWord);
  palabra = chosenWord;
  document.getElementById("palabra").innerHTML = "_ ".repeat(palabra.length);
  document.getElementById("intentos").innerHTML = contador;
  mostrarImagen(contador);
}

// Seleccionar categoria
function seleccionarCategoria() {
  if (categorySelected === palabras[0]) {
    category.innerHTML = "Categoria: Ciudades";
  } else if (categorySelected === palabras[1]) {
    category.innerHTML = "Categoria: Animales";
  } else if (categorySelected === palabras[2]) {
    category.innerHTML = "Categoria: Comida";
  }
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

  if (!acierto) {
    contador = contador - 1;
    document.getElementById("intentos").innerHTML = contador;
    mostrarImagen(contador);
  }
}

function main() {
  contador = 6;
  generarPalabra();
  buttonLetters();
  seleccionarCategoria();
  document.querySelectorAll("#letter").forEach((boton) => {
    boton.disabled = false;
    boton.addEventListener("click", (e) => {
      tomarLetra(e.target.innerHTML);
      boton.disabled = true;
    });
  });
}

document.getElementById('reset').onclick = function() {
  letters.parentNode.removeChild(letters);
  main();
}

window.onload = main;
