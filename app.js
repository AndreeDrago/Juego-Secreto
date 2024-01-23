//Variables
let intentos = 1;
let intentosTotales = 1;
let numeroSecreto = 0;
let listaNumeroSecreto = [];
let numeroMaximo = 3;

//funciones
function estadoInicial() {
    cambiarTexto("h1","Juego del Número Secreto");
    cambiarTexto("p",`Elige un Número del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumero();
    intentos = 1;
    console.log(numeroSecreto);
}

function generarNumero() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumeroSecreto.includes(numeroGenerado)){
    return generarNumero();
  } else {
    listaNumeroSecreto.push(numeroGenerado);
    return numeroGenerado;
  }
}

function cambiarTexto(eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja() {
   document.querySelector("#inputNumeroUsuario").value = '' ;
}

function verificaValor() {
    let numeroUsuario = parseInt(document.getElementById("inputNumeroUsuario").value);
    console.log(numeroUsuario);
    if(numeroUsuario === numeroSecreto){
        cambiarTexto("p",`Lo lograste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled','true');
        limpiarCaja();
    } else {
        intentos++;
        limpiarCaja();
        if (numeroUsuario < numeroSecreto) {
            cambiarTexto("p","El número es mayor");
        } else {
            cambiarTexto("p","El número es menor");
        }
    }
}

function reiniciarJuego() {
    if (listaNumeroSecreto.length == numeroMaximo) {
        cambiarTexto('p',`¡Felicidades!, se terminaron los números en ${intentosTotales} intentos`);
        document.getElementById('intentar').setAttribute('disabled','true');
        document.getElementById('reiniciar').setAttribute('disabled','true');
    } else {
        estadoInicial();
        intentosTotales++;
        document.getElementById('reiniciar').setAttribute('disabled','true');
        document.getElementById('intentar').removeAttribute('disabled');

    }
}
//Texto Web
estadoInicial();


