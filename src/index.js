import './assets/images/SC.png';
import './assets/fonts.css';
import './css/styles.css';
import Currency from './currency';


function currencyExecutor(baseCurrency, amount, exchangeCurrency) {
    Currency.currencyExecutor(baseCurrency)
        .then(function (response) {
            const conversionRates = response.conversion_rates;
            if (conversionRates) {
                const conversionRate = conversionRates[exchangeCurrency];
                if (!conversionRate) {
                    console.log(`Conversion rate for ${exchangeCurrency} not found.`);
                    return;
                }
            } else {
                console.log(response);
            }
        });
}

function submission(event) {
    event.preventDefault();
    const baseCurrency = document.getElementById("baseCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const exchangeCurrency = document.getElementById("exchangeCurrency").value;

    currencyExecutor(baseCurrency, amount, exchangeCurrency);
}

window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", submission);
});















