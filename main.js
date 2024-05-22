const palabras = ["hoja", "caballo", "calamar", "hombre"];

let palabra = "";
let contador = 6;

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
  let acierto = false;
  let vacio = "";
  let palabraActual = document.getElementById("palabra").innerHTML.split(" "); 

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      vacio += letra + ' ';
      acierto = true;
    } else {
      vacio += palabraActual[i] + " ";
    }
  }

  document.getElementById("palabra").innerHTML = vacio.trim(); 

  if (!acierto) {
    contador = contador - 0.5;
    document.getElementById("intentos").innerHTML = contador;
    mostrar_imagen(contador);
  }



  
}

function main() {
  contador = 6; 
  generar_palabra();
  document.querySelectorAll(".letra").forEach((boton) => {
    boton.disabled = false; 
    boton.addEventListener("click", (e) => {
      tomar_letra(e.target.innerHTML);
      boton.disabled = true;
    });
  });
}

window.onload = main;
