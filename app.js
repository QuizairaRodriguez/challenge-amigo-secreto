let listaNombresDeAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarNombreLista(lista, texto){
    let listaHTML = document.querySelector(lista);
    listaHTML.innerHTML += `<li>${texto.toUpperCase()}</li>`;
    return
}

function limpiarInput(input) {
    document.querySelector(input).value = '';
    return
}

function limpiarLista(lista) {
    let listaHTML = document.querySelector(lista);
    while (listaHTML.firstChild) {
        listaHTML.removeChild(listaHTML.firstChild);
    }
    return
}

function agregarAmigo(){
    let nombreDeAmigo = document.getElementById('amigo').value;

    if(nombreDeAmigo === ''){
        asignarTextoElemento('#error',`Debe escribir un nombre`);
        return
    } else if(nombreDeAmigo.length === 1){
        asignarTextoElemento('#error',`El nombre debe tener mas de una letra`);
        return
    } else {
        listaNombresDeAmigos.push(nombreDeAmigo);
        if(listaNombresDeAmigos.length === 1){
            document.querySelector('.button-draw').removeAttribute('disabled');
        }
        agregarNombreLista('#listaAmigos', nombreDeAmigo);
        limpiarInput('#amigo');
        asignarTextoElemento('#error', '');
        return
    }
}

function condicionesIniciales() {
    listaNombresDeAmigos=[]
    limpiarLista('#listaAmigos')
}

function sortearAmigo(){
    let cantidadElementosLista = listaNombresDeAmigos.length;
    let indiceGenerado =  Math.floor(Math.random()*cantidadElementosLista);
    let amigoSecreto = listaNombresDeAmigos[indiceGenerado]
    condicionesIniciales()
    agregarNombreLista('#resultado', `El amigo secreto es ${amigoSecreto}`);
    return
}