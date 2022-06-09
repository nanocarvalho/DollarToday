const real = document.querySelector('[data-js="real-value"]')
const dolar = document.querySelector('[data-js="dolar-value"]')
const actualDolar = document.querySelector('[data-js="actual-dolar"]')
const url = "https://economia.awesomeapi.com.br/last/USD-BRL"
const minutes = 5 * (60 * 1000)

let apiResponse = ''

const dolarToday = () => {
    fetch(url)
    .then(response => response.json())
    .then(response => {
        //Stores to use globally
        apiResponse = response.USDBRL.bid
        dolarNow()
    })

    //Update every 5 minutes
    const updateTimer = setInterval(()=> {
       dolarToday()
    }, minutes)
}

const dolarNow = () => {
    const apiFormated = Number.parseFloat(apiResponse).toFixed(2)
    actualDolar.textContent = `R$${apiFormated}`

    //Update the brazilian real value at every call
    real.setAttribute('value', apiFormated)
}

const updateInput = event => {
    //Stores the actual element that called
    const actualElement = event.target.getAttribute('data-js')
    const responseFormated = Number.parseFloat(apiResponse).toFixed(2)

    const dolarCalc =  Number.parseFloat(dolar.value  * responseFormated).toFixed(2)
    const realCalc = Number.parseFloat(real.value / responseFormated).toFixed(2) 
    
    switch(actualElement) {
        case "real-value":
            dolar.value = realCalc
            break
        case "dolar-value":
            real.value = dolarCalc
            break
    }    
}

document.addEventListener('DOMContentLoaded', dolarToday)

real.addEventListener('change', updateInput)
dolar.addEventListener('change', updateInput)
