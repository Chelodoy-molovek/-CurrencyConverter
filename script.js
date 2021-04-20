let container = document.querySelector('.container');
let curreny = document.querySelector('.curreny');
let currenciesButton = document.querySelectorAll('.rightBorder');
let currencies = document.querySelectorAll('.currencies');
let currenyLeft = document.querySelector('.currenyLeft');
let currenyRight = document.querySelector('.currenyRight');
console.log(currenyLeft)


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