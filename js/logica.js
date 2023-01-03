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

const parrafo = document.getElementById("mostrar-encriptado"); //Parrafo para mostrar resultado.
let textofinal; //Creamos e inicializamos como vacía la cadena de texto que guarda el encriptado. 

mostrar()

const encriptar = e => {
    textofinal = "";
    let acentosA = textarea.value.toLowerCase();  //Para convertir mayúsculas en minúsculas.
    let acentosE = acentosA.replace(/[áäâà]/g,'a'); //Para quitar acentos.
    let acentosI = acentosE.replace(/[éëêè]/g,'e');
    let acentosO = acentosI.replace(/[íïîì]/g,'i');
    let acentosU = acentosO.replace(/[óöôò]/g,'o');
    mensajePuro = acentosU.replace(/[úüûù]/g,'u'); //Guardamos el texto ingresado en la variable mensajePuro.

    console.log(mensajePuro);
    for(let i = 0; i < mensajePuro.length; i++){
        
        if(mensajePuro[i] == "e" && mensajePuro[i+1] != "n" && mensajePuro[i+2] != "t"
        && mensajePuro[i+3] != "e" && mensajePuro[i+4] != "r"){
            textofinal = textofinal + "enter"; //Guardamos la letra codificada en la variable.
        }else if(mensajePuro[i] == "i" && mensajePuro[i+1] != "m" && 
        mensajePuro[i+2] != "e" && mensajePuro[i+3] != "s"){
            textofinal = textofinal + "imes";
        }else if(mensajePuro[i] == "a" && mensajePuro[i+1] != "i"){
            textofinal = textofinal + "ai";
        }else if(mensajePuro[i] == "o" && mensajePuro[i+1] != "b" && 
        mensajePuro[i+2] != "e" && mensajePuro[i+3] != "r"){
            textofinal = textofinal + "ober";
        }else if(mensajePuro[i] == "u" && mensajePuro[i+1] != "f" && 
        mensajePuro[i+2] != "a" && mensajePuro[i+3] != "t"){
            textofinal = textofinal + "ufat";
        }else{
            textofinal = textofinal + mensajePuro[i];
        }
    }

    esconder();
    parrafo.innerHTML = textofinal; //Mostrar resultado.
    textarea.value = ""; //Borrar texto de textarea.

} 


const desencriptar = e => {


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

    esconder();
    parrafo.innerHTML = textofinal; //Mostrar resultado.
    textarea.value = ""; //Borrar texto de textarea.

}

const copiar = e => {
    
    textarea.value = textofinal;  //copia el texto encriptado y lo muestra en el textarea.
    parrafo.innerHTML = "";
    mostrar();
    
}

btnEncriptar.onclick = encriptar; //Evento para detectar click en botón.
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;