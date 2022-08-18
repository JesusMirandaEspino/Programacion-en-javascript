const nombre = prompt('¿Como te llamas?');

// Evitar ver el null de la variable nombre al inicio de la pagina
setTimeout( () => {
    const nombreIngresado = nombre || 'Tu nombre no ha sido ingresado';
    const saludoNombre = document.querySelector('#saludo-nombre');
    saludoNombre.innerText = `Hola ${nombreIngresado}`;
}, 500);

