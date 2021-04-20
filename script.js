let container = document.querySelector('.container');
let curreny = document.querySelector('.curreny');
let currenciesButton = document.querySelectorAll('.rightBorder');
let currencies = document.querySelectorAll('.currencies');
console.log(currencies)

fetch('https://api.ratesapi.io/api/latest?base')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let a = Object.keys(data.rates);
        console.log(a);
        a.forEach(cName => {
            currenciesButton.forEach(item => {
                let b = document.createElement('option');
                b.textContent = cName;
                item.append(b);
            })
        })
    });


currencies.forEach(item => {
        item.addEventListener('click', () => {
            if (item.innerText === 'RUB') {
                console.log('RUB');
            } else if (item.innerText === 'USD') {
                console.log('USD');
            } else if (item.innerText === 'EUR') {
                console.log('EUR');
            } else if (item.innerText === 'GBP') {
                console.log('GBP');
            }
        })
    })
    // currenciesButton.forEach(item => {

//     item.addEventListener('click', () => {
//         let a = document.createElement('option');
//         a.textContent = 'udst'
//         item.append(a);
//     })
// })