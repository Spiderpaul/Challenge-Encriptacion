function esconder(){
    document.getElementById("imagen").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("mensaje-encriptado").style.display = "block";
    document.getElementById("boton-copiar").style.display = "block";
}

function mostrar(){
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
let mensajeEncriptado = []; //Servirá para guardar el mensaje a desencriptar. 

const parrafo = document.getElementById("mostrar-encriptado"); //Parrafo para mostrar resultado.
let textofinal; //Creamos e inicializamos como vacía la cadena de texto que guarda el encriptado. 

let copiado = false;
let terminar = false;
mostrar()

const encriptar = e => {
    textofinal = "";
    mensajeEncriptado = [];
    mensajePuro = textarea.value.toLowerCase(); //Guardamos el texto ingresado en la variable mensajePuro.
    for(let i = 0; i < mensajePuro.length; i++){
        
        if(mensajePuro[i] == "e"){
            textofinal = textofinal + "enter"; //Guardamos la letra codificada en la variable.
            mensajeEncriptado.push("enter"); //Guardamos "enter" en arreglo que servirá para desencriptar.
        }else if(mensajePuro[i] == "i"){
            textofinal = textofinal + "imes";
            mensajeEncriptado.push("imes");
        }else if(mensajePuro[i] == "a"){
            textofinal = textofinal + "ai";
            mensajeEncriptado.push("ai");
        }else if(mensajePuro[i] == "o"){
            textofinal = textofinal + "ober";
            mensajeEncriptado.push("ober");
        }else if(mensajePuro[i] == "u"){
            textofinal = textofinal + "ufat";
            mensajeEncriptado.push("ufat");
        }else{
            textofinal = textofinal + mensajePuro[i];
            mensajeEncriptado.push(mensajePuro[i]);
        }
    }
    esconder();
    parrafo.innerHTML = textofinal; //Mostrar resultado.
    textarea.value = ""; //Borrar texto de textarea.
} 

const desencriptar = e => {

    if(copiado == true){
        textofinal = ""; //Reseteamos valores de variable texto final.

        for(let i = 0; i < mensajeEncriptado.length; i++){
            
            if(mensajeEncriptado[i] == "enter"){
                textofinal = textofinal + "e";
            }else if(mensajeEncriptado[i] == "imes"){
                textofinal = textofinal + "i";
            }else if(mensajeEncriptado[i] == "ai"){
                textofinal = textofinal + "a";
            }else if(mensajeEncriptado[i] == "ober"){
                textofinal = textofinal + "o";
            }else if(mensajeEncriptado[i] == "ufat"){
                textofinal = textofinal + "u";
            }else{
                textofinal = textofinal + mensajeEncriptado[i];
            }
        }
        copiado = false;

    }else if(copiado == false){
        textofinal = "";
        mensajePuro = textarea.value; //Guardamos el texto ingresado en la variable mensajePuro.
       
        for(let i = 0; i < mensajePuro.length; i++){
            
            if(mensajePuro[i] == "e" && mensajePuro[i+1] == "n" && 
            mensajePuro[i+2] == "t" && mensajePuro[i+3] == "e" && mensajePuro[i+4] == "r"){
                textofinal = textofinal + "e"; //Guardamos la letra codificada en la variable.
                i=i+4;
            }else if(mensajePuro[i] == "i" && mensajePuro[i+1] == "m" && 
            mensajePuro[i+2] == "e" && mensajePuro[i+3] == "s"){
                textofinal = textofinal + "i";
                i=i+3;
            }else if(mensajePuro[i] == "a" && mensajePuro[i+1] == "i"){
                textofinal = textofinal + "a";
                i=i+1;
            }else if(mensajePuro[i] == "o" && mensajePuro[i+1] == "b" && 
            mensajePuro[i+2] == "e" && mensajePuro[i+3] == "r"){
                textofinal = textofinal + "o";
                i=i+3;
            }else if(mensajePuro[i] == "u" && mensajePuro[i+1] == "f" && 
            mensajePuro[i+2] == "a" && mensajePuro[i+3] == "t"){
                textofinal = textofinal + "u";
                i=i+3;
            }else{
                textofinal = textofinal + mensajePuro[i];
            }
        }
        console.log(mensajeEncriptado);
        parrafo.innerHTML = textofinal; //Mostrar resultado.
        textarea.value = ""; //Borrar texto de textarea.
        terminar = true;
    }

    esconder();
    parrafo.innerHTML = textofinal; //Mostrar resultado.
    textarea.value = ""; //Borrar texto de textarea.
}

const copiar = e => {
    
    if(terminar == false){
        textarea.value = textofinal;  //copia el texto encriptado y lo muestra en el textarea.
        parrafo.innerHTML = "";
        mostrar();
        copiado = true;
    }else{
        alert("Ingrese un nuevo mensaje para encriptar");
    }
}

btnEncriptar.onclick = encriptar; //Evento para detectar click en botón.
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;