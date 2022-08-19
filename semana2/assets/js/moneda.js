const dollarValue = document.querySelector('#dollarValue');
const updateDollar = document.querySelector('#updateDollar');


dollarValue.innerText = '20';

console.log(dollarValue);


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



const convert = () => {
    
}


updateDollar.addEventListener( 'click',  getValorDollar);
