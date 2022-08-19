const dollarValue = document.querySelector('#dollarValue');
const updateDollar = document.querySelector('#updateDollar');
const formConvert = document.querySelector('#formConvert');
const dollar = document.querySelector('#monedaDollar');
const peso = document.querySelector('#monedaPeso');
const cantidad = document.querySelector('#cantidad');
const resultado = document.querySelector('#resultado');

dollarValue.innerText = '20';



const getValorDollar = () => {

    const apiKey = '46fca747b70f45b5b543a4d076126be7';
    const url = 'https://api.currencyfreaks.com/latest?apikey=';


    fetch(`${url}${apiKey}`)
        .then(response => response.json())
        .then(data =>  {
            if(data.rates.MXN){
                const respValor = Number(data.rates.MXN).toFixed(2);
                dollarValue.innerText = respValor.toString();
            }else{
                dollarValue.innerText =  '20';
            }
            
        });

}



const convert = (e) => {
    e.preventDefault();
    let valorActualDollar = Number(dollarValue.innerText);

    if(!dollar.checked && !peso.checked && cantidad.value == '') {
        resultado.innerText = 'Error ingresa los datos correctamente';
        return;
    }

    if(dollar.checked){
        if( Number(cantidad.value)  < 1 ){
            resultado.innerText = 'Error no es posible la conversion a dollares';
            return;
        }

        const conversion = Number(cantidad.value) / valorActualDollar;
        resultado.innerText = `El resultado es ${conversion} Dollar(es)`;
        return;
    }

    if(peso.checked){
        if( Number(cantidad.value)  < 1 ){
            resultado.innerText = 'Error no es posible la conversion a pesos';
            return;
        }

        const conversion = Number(cantidad.value) * valorActualDollar;
        resultado.innerText = `El resultado es ${conversion} Dollar(es)`;

    }


}


updateDollar.addEventListener( 'click',  getValorDollar);
convertBtn.addEventListener( 'click',  convert);