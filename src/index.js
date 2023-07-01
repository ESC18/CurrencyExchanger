import './assets/images/SC.png';
import './assets/fonts.css';
import './css/styles.css';
import Currency from './currency';

// Business Logic
function currencyExecutor(baseCurrency, amount, exchangeCurrency) {
    return Currency.currencyExecutor(baseCurrency)
        .then(function (response) {
            const conversionRates = response.conversion_rates;
            if (conversionRates) {
                const conversionRateNumber = conversionRates[exchangeCurrency];
                if (!conversionRateNumber) {
                    throw new Error(`Conversion rate for "${exchangeCurrency}" not found.`);
                }
                return amount * conversionRateNumber;
            } else {
                throw new Error('Response does not contain conversion rates.');
            }
        })
        .catch(function (error) {
            displayError(error);
        });
}

// UI Logic
function displayError(error) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = error;
}

function submission(event) {
    event.preventDefault();
    const baseCurrency = document.getElementById("baseCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const exchangeCurrency = document.getElementById("exchangeCurrency").value;

    currencyExecutor(baseCurrency, amount, exchangeCurrency)
        .then(function (convertedAmount) {
            if (convertedAmount !== undefined) {
                const resultElement = document.getElementById("result");
                resultElement.innerText = `Converted amount: ${convertedAmount} ${exchangeCurrency}`;
            }
        });
}

window.addEventListener("load", function () {
    document.querySelector("form").addEventListener("submit", submission);
});













