const numero = 25;
const texto = 'Textos';
const boolean = true;
const arreglo = [1,2,'dato', true, { nombre: 'Jesus', edad: 35 }];
const objeto = { nombre: 'Jesus', edad: 35 };

const tipoNumero = document.querySelector('.number');
const tipoTexto = document.querySelector('.texto');
const tipoBoolean = document.querySelector('.boolean');
const tipoArreglo = document.querySelector('.arreglo');
const tipoObjeto = document.querySelector('.objeto');

const typeofNumber = document.querySelector('.typeof-number');
const typeofTexto = document.querySelector('.typeof-texto');
const typeofBoolean = document.querySelector('.typeof-boolean');
const typeofArreglo = document.querySelector('.typeof-arreglo');
const typeofObjeto = document.querySelector('.typeof-objeto');

tipoNumero.innerText = ` ${numero}.`;
tipoTexto.innerText = `${texto}.`;
tipoBoolean.innerText = `${boolean}.`;
tipoArreglo.innerText = `[1, 2, 'dato', true, { nombre: 'Jesus', edad: 35 }].`;
tipoObjeto.innerText = `{ nombre: 'Jesus', edad: 35 }.`;

typeofNumber.innerText = `  ${typeof numero}.`;
typeofTexto.innerText = `  ${typeof texto}.`;
typeofBoolean.innerText = ` ${typeof boolean}.`;
typeofArreglo.innerText = ` ${typeof arreglo}.`;
typeofObjeto.innerText = ` ${typeof objeto}.`;
