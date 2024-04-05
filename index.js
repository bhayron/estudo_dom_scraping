const axios = require('axios');
const { JSDOM } = require('jsdom');

// URL da página de onde queremos extrair as citações
const url = 'https://quotes.toscrape.com/';

axios.get(url)
    .then(response => {

        const dom = new JSDOM(response.data);
        const document = dom.window.document;

        const quotesElements = document.querySelectorAll('.quote');

        quotesElements.forEach(quoteElement => {
            const text = quoteElement.querySelector('.text').textContent;
            const author = quoteElement.querySelector('.author').textContent;
            console.log(`Texto`)
            console.log(text)
            console.log(`Autor`)
            console.log(author)

        });
    })
    .catch(error => {
        console.error('Erro ao fazer scraping:', error);
    });
