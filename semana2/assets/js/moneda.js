
const getValorDollar = () => {

    const apiKey = '46fca747b70f45b5b543a4d076126be7';
    const url = 'https://api.currencyfreaks.com/latest?apikey=';


    fetch(`${url}${apiKey}`)
        .then(response => response.json())
        .then(data => console.log(data.rates.MXN));

}

