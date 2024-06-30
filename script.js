let intentos = 6;
let palabra = ""

window.addEventListener('load', init)

function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}

const button = document.getElementById("guess-button");

const API = "https://random-word-api.herokuapp.com/word?length=5"

fetch(API)
    .then((response)=> response.json())
    .then((response)=> {
        palabra = response[0].toUpperCase();
        button.disabled = false;
        console.log (palabra);
    })
    .catch((err)=>{
        console.log(err);
        let random = Math.floor(random() * LIBRERO.length);
        palabra = LIBRERO[random];
        button.disabled = false;
});

function intentar(){
    
    const INTENTO = leerIntento();
    if(INTENTO === palabra){
        terminar("<h1>GANASTE!</h1>")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';

    for(let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';

        if(INTENTO[i] === palabra[i]){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#74b72e';
        
        }else if(palabra.includes(INTENTO[i])){
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#ffff00';
        }else{
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = '#a7a7a7';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)

             intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!</h1>")
    }         
    console.log(INTENTO)
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

button.addEventListener("click", intentar);

const input = document.getElementById("guess-input");
const valor = input.value;

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase();
    return intento;
}
for (let i in palabra){
	console.log(palabra[i]);
}
const GRID = document.getElementById("grid");
const ROW = document.createElement('div');
ROW.className = 'row';

console.log(palabra);


