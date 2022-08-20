

const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');
const cuatro = document.querySelector('#cuatro');
const cinco = document.querySelector('#cinco');
const seis = document.querySelector('#seis');
const siete = document.querySelector('#siete');
const ocho = document.querySelector('#ocho');
const nueve = document.querySelector('#nueve');
const cero = document.querySelector('#cero');


const resultado = document.querySelector('#resultado');
const reset = document.querySelector('#reset');
const suma = document.querySelector('#suma');
const resta = document.querySelector('#resta');
const multiplicacion = document.querySelector('#multiplicacion');
const division = document.querySelector('#division');
const igual = document.querySelector('#igual');

let limitador = [];

let  operandoX;
let  operandoY;
let  operacion;


const operadorXVista = document.querySelector('#operadorX');
const operadorToVista = document.querySelector('#operadorTo');
const operadorYVista = document.querySelector('#operadorY');



uno.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "1";
});

dos.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "2";
});

tres.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "3";
});

cuatro.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "4";
});

cinco.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "5";
});

seis.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "6";
});

siete.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "7";
});

ocho.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "8";
});

nueve.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "9";
});

cero.addEventListener('click', () => {
    resultado.textContent = resultado.textContent  + "0";
});

reset.addEventListener('click', () => {
    limpiarVista();
    resetear();
});


suma.addEventListener('click', () => {
    operandoX = resultado.textContent;
    operacion = "+";
    operadorXVista.innerText = operandoX;
    operadorToVista.innerText = operacion;
    limitador.push(operacion);
    verificarDobleOperacion();
    limpiar();
});

resta.addEventListener('click', () => {
    operandoX = resultado.textContent;
    operacion = "-";
    operadorXVista.innerText = operandoX;
    operadorToVista.innerText = operacion;
    limitador.push(operacion);
    verificarDobleOperacion();
    limpiar();
});


multiplicacion.addEventListener('click', () => {
    operandoX = resultado.textContent;
    operacion = "*";
    operadorXVista.innerText = operandoX;
    operadorToVista.innerText = operacion;
    limitador.push(operacion);
    verificarDobleOperacion();
    limpiar();
});

division.addEventListener('click', () => {
    operandoX = resultado.textContent;
    operacion = "/";
    operadorXVista.innerText = operandoX;
    operadorToVista.innerText = operacion;
    limitador.push(operacion);
    verificarDobleOperacion();
    limpiar();
});

igual.addEventListener('click', () => {
    operandoY = resultado.textContent;
    operadorYVista.innerText = operandoY;
    resolver();
});




const limpiar = () => {
    resultado.textContent = '';
}


const  resetear = () => {
    resultado.textContent = '';
    operandoX = 0;
    operandoY = 0;
    operacion = '';
    limitador = [];
}



const resolver = () => {
    let res = 0;
    switch(operacion){
        case "+":
        res = parseFloat(operandoX) + parseFloat(operandoY);
        break;
        case "-":
            res = parseFloat(operandoX) - parseFloat(operandoY);
            break;
        case "*":
        res = parseFloat(operandoX) * parseFloat(operandoY);
        break;
        case "/":
        res = parseFloat(operandoX) / parseFloat(operandoY);
        break;
    }
    resetear();
    resultado.textContent = res;
}

const verificarDobleOperacion = () => {
    if(limitador.length > 1 ){
        alert('Por el momento solo se puede realizar una operacion a la vez');
        resetear();
    }
}


const limpiarVista = () => {
    operadorXVista.innerText = '';
    operadorToVista.innerText = '';
    operadorYVista.innerText = '';
}