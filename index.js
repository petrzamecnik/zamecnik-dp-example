const express = require('express');
const app = express();
const port = 3000;



const api_key = "AbCdEfGhIjKlMnOpQrStUvWxYz0123456789-_-"
const SECRET_ACCESS_TOKEN = "zYxWvUtSrQpOnMlKjIhGfEdCbA9876543210.=foo"



app.get('/search', (req, res) => {
    const query = req.query.q || "Nebylo zadáno";

    const resultsHtml = `<div>Výsledky pro: ${query}</div>`;
    res.setHeader('Content-Type', 'text/html');
    const container = { innerHTML: '' };
    container.innerHTML = resultsHtml;
    res.send(`<h1>Vyhledávání</h1>${container.innerHTML}`);
});


function executeDynamicCode(codeString) {
    console.log("Spouštím kód:", codeString);
    eval(codeString);
}


executeDynamicCode("console.log('Dynamický kód byl spuštěn!');");


function checkValue(input) {
    if (input == 0) {
        console.log("Hodnota je (volně) rovna nule.");
    } else {
        console.log("Hodnota není (volně) rovna nule.");
    }
}

checkValue("0");


const complexRegex = /^([a-z]+)+$/;
const testString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!";
console.time('regexTest');
complexRegex.test(testString);
console.timeEnd('regexTest');

console.log(api_key);
console.log(SECRET_ACCESS_TOKEN);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Příklad aplikace běží na http://localhost:${port}`);
    console.log(`Použitý API klíč (NEVKLÁDAT DO PRODUKCE!): ${api_key}`);
});