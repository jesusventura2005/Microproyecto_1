const palabras = ['hoja', 'caballo', 'calamar' , 'hombre'];

var palabra = "";

var vacio = document.getElementById("palabra");

var botones = document.getElementById("letra");



function generaPalabra() {

  rand = palabras[Math.floor(Math.random() * palabras.length)];
  palabrita = rand.toUpperCase();
  document.getElementById("palabra").innerHTML=palabrita;
  

}







function intento(letra){

  document.getElementById(letra).disabled = true;
  if(palabra.indexOf(letra) != 1){
    for(var i = 0; i<palabra.length; i++ ){
      if(palabra[i] == letra) oculta[i] = letra;
    }

  }   else{
    cont--;



      
  }





}



window.onload = generaPalabra()













