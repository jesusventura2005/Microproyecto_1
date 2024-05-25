const palabras = ["hoja", "caballo", "calamar", "hombre"];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

let palabra = "";
let contador = 6;

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

function generar_palabra() {
  const rand = palabras[Math.floor(Math.random() * palabras.length)];
  palabra = rand;
  console.log(palabra);
  document.getElementById("palabra").innerHTML = "_ ".repeat(palabra.length);
  document.getElementById("intentos").innerHTML = contador;
  mostrar_imagen(contador);
}

function mostrar_imagen(intentos) {
  for (let i = 0; i <= 6; i++) {
    document.getElementById(`image${i}`).style.display =
      i === intentos ? "block" : "none";
  }
}

function tomar_letra(letra) {
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
    mostrar_imagen(contador);
  }
}

function main() {
  contador = 6;
  generar_palabra();
  buttonLetters();
  document.querySelectorAll("#letter").forEach((boton) => {
    boton.disabled = false;
    boton.addEventListener("click", (e) => {
      tomar_letra(e.target.innerHTML);
      boton.disabled = true;
    });
  });
}

window.onload = main;
