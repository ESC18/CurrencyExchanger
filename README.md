# Currency Converter

#### By Elijah Shawn Cartwright
## Technologies used:
* HTML
* CSS
* JS
* Webpack
* Webpack CLI
* Webpack Dev-Server
* CSS Loader
* Style Loader
* HTML-Webpack-Plugin
* EsLint
* Dotenv
* Dotenv-webpack
* EsLint Webpack-Plugin
* Clean Webpack-Plugin
* Babel/core
* Babel/plugin transform modules
* HTML Loader
* File Loader
### Additional technologies:
* Google fonts
* Chrome & Firefox Devtools
* Visual Studio Code

## Description of Application:
This web application is a Currency converter, you can input any currency code (EX: USD) and state how much of said currency you want to convert (EX:200) and then convert it to another currency (EX: EUR) to get a result in how much of said currency you would have from converting your initial currency.

## Setup and installation requirements/guide:
1. First download the repository _"CurrencyExchanger"_ to your device.
2. Proceed to navigate to the highest level of your directory.
3. Open _"CurrencyExchanger in VSCODE through your terminal (Or Git Bash)"_
4. Install all packages with _$ npm install_
5. Build the project using webpack with _$ npm run build_
6. Starting a development server with _$ npm run start_
7. Lint JS files in the src folder with _$ npm run lint_
8. Create a .env file with a variable of _API_KEY_ inside of it. Make sure the .env file is within the root of your directory
9. Create a .gitignore file and add the appropiate files/folders to it as well as the .env file
10. Sign up for an API Key at _https://www.exchangerate-api.com/_ and give the _API_KEY_ variable from within the .env file the value of the key you recieved from exchangerate-api.com.

## Known Bugs:
* Will not accept lowercase inputs for the currency types - you must write in all caps. (EX: "usd" doesn't work but "USD" does).
* Small things that would be nice to add; commas added to long numbers. A list of different currencies.

## Licensing:
MIT
Copyright (c) 2023 _Elijah Shawn Cartwright_



