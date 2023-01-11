function esconder() {
  document.getElementById("imagen").style.display = "none";
  document.getElementById("mensaje").style.display = "none";
  document.getElementById("mensaje-encriptado").style.display = "block";
  document.getElementById("boton-copiar").style.display = "block";
}

function mostrar() {
  document.getElementById("imagen").style.display = "block";
  document.getElementById("mensaje").style.display = "block";
  document.getElementById("mensaje-encriptado").style.display = "none";
  document.getElementById("boton-copiar").style.display = "none";
}

const btnEncriptar = document.getElementById("btn-encriptar"); //Tomando el botón desde HTML.
const btnDesencriptar = document.getElementById("btn-desencriptar"); //Botón desencriptar.
const btnCopiar = document.getElementById("btn-copiar"); //Botón copiar.

let textarea = document.getElementById("texto"); //Tomando datos de textarea.
let mensajePuro = []; //servirá para guardar el texto del textarea.

const parrafo = document.getElementById("mostrar-encriptado"); //Parrafo para mostrar resultado.
let textoFinal; //Creamos e inicializamos como vacía la cadena de texto que guarda el encriptado.

mostrar();

const encriptar = (e) => {
  textoFinal = "";
  let acentos = textarea.value.toLowerCase(); //Para convertir mayúsculas en minúsculas.
  mensajePuro = acentos
    .replace(/[áäâà]/g, "a") //Para quitar acentos y guardar en variable mensajePuro.
    .replace(/[éëêè]/g, "e")
    .replace(/[íïîì]/g, "i")
    .replace(/[óöôò]/g, "o")
    .replace(/[úüûù]/g, "u"); 

  //Reemplazamos las letras.
  textoFinal = mensajePuro
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  esconder();
  parrafo.innerHTML = textoFinal; //Mostrar resultado.
  textarea.value = ""; //Borrar texto de textarea.
};

const desencriptar = (e) => {
  textoFinal = "";

  let acentos = textarea.value.toLowerCase(); //Para convertir mayúsculas en minúsculas.
  mensajePuro = acentos
    .replace(/[áäâà]/g, "a") //Para quitar acentos y guardar en variable mensajePuro.
    .replace(/[éëêè]/g, "e")
    .replace(/[íïîì]/g, "i")
    .replace(/[óöôò]/g, "o")
    .replace(/[úüûù]/g, "u");

  textoFinal = mensajePuro
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  esconder();
  parrafo.innerHTML = textoFinal; //Mostrar resultado.
  textarea.value = ""; //Borrar texto de textarea.
};

const copiar = (e) => {
  textarea.value = textoFinal; //copia el texto encriptado y lo muestra en el textarea.
  parrafo.innerHTML = "";
  mostrar();
};

btnEncriptar.onclick = encriptar; //Evento para detectar click en botón.
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
