//This is the main JS file - Not recommended to delete imports.
import './assets/images/SC.png';
import './assets/fonts.css';
import './css/styles.css';
import Currency from './currency.js';
//EX: import Blank from '/.js/secondary.js';
//Business Logic
function currencyExecutor(type) {
    Currency.currencyExecutor(type)
        .then(function (response) {
            if (response.main) {
                console.log(response, type);
            } else {
                console.log(response, type);
            }
        });
}

currencyExecutor("USD");






































//UI Logic