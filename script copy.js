let container = document.querySelector('.container');
let curreny = document.querySelector('.curreny');
let currenciesButton = document.querySelectorAll('.rightBorder');
let currencies = document.querySelectorAll('.currencies');
let currenyLeft = document.querySelector('.currenyLeft');
let currenyRight = document.querySelector('.currenyRight');
let rightBorder = document.querySelector('.rightBorder');
let letfborders = document.querySelector('.letfborders');
let rates = document.querySelector('.rates');
let rates1 = document.querySelector('.rates1');
let olo = document.querySelector('.olo');

let val1 = 'RUB';
let val2 = 'USD';

function updateRatesText() {
    fetch(`https://api.ratesapi.io/api/latest?base=${val1}&symbols=${val2}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            rates.innerText = `1 ${data.base} = ${data.rates[val2].toFixed(4)} ${val2}`;
            fetch(`https://api.ratesapi.io/api/latest?base=${val2}&symbols=${val1}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    rates1.innerText = `1 ${val2} = ${data.rates[val1].toFixed(4)} ${val1}`;
                })
        })

}





rightBorder.addEventListener('change', (e) => {
    val1 = e.target.value;
    updateRatesText();
});

letfborders.addEventListener('change', (e1) => {
    val2 = e1.target.value;
    updateRatesText();
});

// letfborders.addEventListener('change', (e1) => {
//     fetch(`https://api.ratesapi.io/api/latest?base=${e1.target.value}`)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             val2 = data.base;
//         })
// });

// fetch(`https://api.ratesapi.io/api/latest?base=${val1}&symbols=${val2}`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })











fetch('https://api.ratesapi.io/api/latest?base')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let a = Object.keys(data.rates);
        a.forEach(cName => {
            currenciesButton.forEach(item => {
                let b = document.createElement('option');
                b.textContent = cName;
                item.append(b);
            })
        })
    });

currenyLeft.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
        currenyLeft.querySelectorAll('button').forEach((item) => {
            item.style.backgroundColor = 'white';
            item.style.color = '#9F9F9F';
        });
        item.style.backgroundColor = '#833AE0';
        item.style.color = 'white';
    })
})

currenyRight.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
        currenyRight.querySelectorAll('button').forEach((item) => {
            item.style.backgroundColor = 'white';
            item.style.color = '#9F9F9F';
        });
        item.style.backgroundColor = '#833AE0';
        item.style.color = 'white';
    })
})


// currencies.forEach(item => {
//         item.addEventListener('click', () => {
//             if (item.innerText === 'RUB') {
//                 console.log('RUB');
//             } else if (item.innerText === 'USD') {
//                 console.log('USD');
//             } else if (item.innerText === 'EUR') {
//                 console.log('EUR');
//             } else if (item.innerText === 'GBP') {
//                 console.log('GBP');
//             }
//         })
//     })
// currenciesButton.forEach(item => {

//     item.addEventListener('click', () => {
//         let a = document.createElement('option');
//         a.textContent = 'udst'
//         item.append(a);
//     })
// })