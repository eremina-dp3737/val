const currency = document.getElementById('currency')
const currency2 = document.getElementById('currency2')
const inputNumber = document.getElementById('inputNumber')
const button = document.querySelector('#button')
const result = document.getElementById('result')

button.addEventListener('click', () => {
    const num = inputNumber.value
    const first = currency.value
    const second = currency2.value
    if (first === "RUB" && second === "KZT") {
        result.innerHTML = Number(num) / 0.2 + currency2.value
    }
    if (first === "RUB" && second === "USD") {
        result.innerHTML = Number(num) / 90 + currency2.value
    } 
    if (first === "RUB" && second === "EUR") {
        result.innerHTML = Number(num) / 100 + currency2.value
    } 
    if (first === "USD" && second === "RUB") {
        result.innerHTML = Number(num) * 90 + currency2.value
    }
    if (first === "EUR" && second === "RUB") {
        result.innet = Number(num) * 100 + currency2.value
    }
    if (first === "KZT" && second === "RUB") {
        result.innerHTML = Number(num) / 5 + currency2.value
    }
    
});

 