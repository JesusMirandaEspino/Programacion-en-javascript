const primos = () => {

    const primoContenedor = document.querySelector('#primo-contenedor');
    for(let i = 1; i < 100; i+=2) {
        let numeros = document.createElement('span');
        numeros.classList.add('numero-primo');
        numeros.innerText =  `  ${i}   `;
        primoContenedor.appendChild(numeros);
    }
}




primos();
