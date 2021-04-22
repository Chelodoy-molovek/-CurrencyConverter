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
let inpPutLeft = document.querySelector('.inpPutLeft');
let inpPutRight = document.querySelector('.inpPutRight');
let change = document.querySelector('.change');


change.addEventListener('click', () => {

    let c = rates.innerText;
    let d = rates1.innerText;
    rates.innerText = d;
    rates1.innerText = c;

})

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//               Подтягивание курсов валют с сервера и переключение валют по клику                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
let val1 = 'RUB';
let val2 = 'USD';
updateRatesText()
async function updateRatesText() {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (val1 === val2) {
        inpPutRight.oninput = (() => {
            inpPutLeft.value = inpPutRight.value;
        });
        inpPutLeft.oninput = (() => {
            inpPutRight.value = inpPutLeft.value;
        });
        rates.innerText = `1 ${val1} = 1.0000 ${val2}`;
        rates1.innerText = rates.innerText;
        inpPutRight.value = inpPutLeft.value
            /////////////////////////////////////////////////////////////////////////////////////////////////////
    } else {
        const val1ToVal2 = await fetch(`https://api.ratesapi.io/api/latest?base=${val1}&symbols=${val2}`);
        const val1ToVal2Json = await val1ToVal2.json();
        rates.innerText = `1 ${val1} = ${val1ToVal2Json.rates[val2].toFixed(4)} ${val2}`;
        const val2ToVal1 = await fetch(`https://api.ratesapi.io/api/latest?base=${val2}&symbols=${val1}`);
        const val2ToVal1Json = await val2ToVal1.json();
        rates1.innerText = `1 ${val2} = ${val2ToVal1Json.rates[val1].toFixed(4)} ${val1}`;
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let kurs = val1ToVal2Json.rates[val2].toFixed(4);
        inpPutRight.value = kurs * inpPutLeft.value;

        inpPutLeft.oninput = (() => {
            let kurs = val1ToVal2Json.rates[val2].toFixed(4);
            inpPutRight.value = kurs * inpPutLeft.value; //                       конвертер                       //
        });

        inpPutRight.oninput = (() => {
            let kurs = val2ToVal1Json.rates[val1].toFixed(4);
            inpPutLeft.value = kurs * inpPutRight.value;
        });
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    }
}

currenyLeft.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
        val1 = item.innerText;
        updateRatesText();
    });
})

currenyRight.querySelectorAll('button').forEach((item) => {
    item.addEventListener('click', () => {
        val2 = item.innerText;
        updateRatesText();
    });
})

rightBorder.addEventListener('change', (e) => {
    val1 = e.target.value;
    updateRatesText();
});

letfborders.addEventListener('change', (e1) => {
    val2 = e1.target.value;
    updateRatesText();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                Красим и переключаем кнопки                                             //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function currenyStyle(targetObject) {
    targetObject.querySelectorAll('button').forEach((item) => {
        item.addEventListener('click', () => {
            targetObject.querySelectorAll('select').forEach((item) => {
                item.style.backgroundColor = 'white';
                item.style.color = '#9F9F9F';
            })
            targetObject.querySelectorAll('button').forEach((item) => {
                item.style.backgroundColor = 'white';
                item.style.color = '#9F9F9F';
            });
            item.style.backgroundColor = '#833AE0';
            item.style.color = 'white';
        })
    })
}

currenciesButton.forEach((item) => {
    item.addEventListener('change', () => {
        item.style.backgroundColor = '#833AE0';
        item.style.color = 'white';
        item.parentElement.querySelectorAll('button').forEach((item) => {
            item.style.backgroundColor = 'white';
            item.style.color = '#9F9F9F';
        });
    })
})

currenyStyle(currenyRight);
currenyStyle(currenyLeft);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                              Подтягиваем все валюты в наш скролл                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch('https://api.ratesapi.io/api/latest?base')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let a = Object.keys(data.rates);
        a.forEach(cName => {
            currenciesButton.forEach(item => {
                if (cName !== 'RUB' && cName !== 'EUR' && cName !== 'GBP' && cName !== 'USD') {
                    let b = document.createElement('option');
                    b.textContent = cName;
                    item.append(b);
                }
            })
        })
    });