const dollarValue = document.querySelector('#dollarValue');
const updateDollar = document.querySelector('#updateDollar');
const formConvert = document.querySelector('#formConvert');
const dollar = document.querySelector('#monedaDollar');
const peso = document.querySelector('#monedaPeso');
const cantidad = document.querySelector('#cantidad');

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
    let valorActualDollar = Number(updateDollar.innerText);
    console.log(dollar.checked);
    console.log(peso.checked);
    console.log(cantidad.value);

    



}


updateDollar.addEventListener( 'click',  getValorDollar);
convertBtn.addEventListener( 'click',  convert);