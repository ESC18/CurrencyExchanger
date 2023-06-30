export default class Currency {
    static currencyExecutor(amount) {
        const apiKey = process.env.API_KEY;
        return fetch(
            `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`
        ).then(function (response) {
            if (response.ok != true) {
                const errorMessage = `${response.status} ${response.statusText}`
                throw new Error(errorMessage);
            } else {
                return response.json();
            }
        }).catch(function (error) {
            return "There is an error:" + error;
        });
    }
}