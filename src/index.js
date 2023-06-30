//This is the main JS file - Not recommended to delete imports.
import './assets/images/SC.png';
import './assets/fonts.css';
import './css/styles.css';
import Currency from './currency.js';
//EX: import Blank from '/.js/secondary.js';
//Business Logic
function currencyExecutor(baseCurrency) {
    Currency.currencyExecutor(baseCurrency)
        .then(function (response) {
            if (response.main) {
                console.log(response, baseCurrency);
            } else {
                console.log(response, baseCurrency);
            }
        });
}

//currencyExecutor("USD", 200, "AMD");











function submission(event) {
    event.preventDefault();
    const baseCurrency = document.getElementById("baseCurrency").value;
    

    currencyExecutor(baseCurrency, amount, exchangeCurrency);
}



window.addEventListener("load", function () {
    this.document.querySelector("form").addEventListener("submit", submission)
})






















//UI Logic