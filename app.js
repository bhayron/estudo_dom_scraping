const { JSDOM } = require("jsdom");
const fs = require("fs");

const htmlContent = fs.readFileSync("pagina.html", "utf8");
const dom = new JSDOM(htmlContent);

const document = dom.window.document;

const title = document.querySelector("title");
console.log(title.textContent);

const tituloPrincipal = document.querySelector('h1');
console.log(tituloPrincipal.textContent);

const tituloPrincipal2 = document.getElementById('tituloPrincipal');
console.log(tituloPrincipal2.textContent);

const divsSecundarias = document.getElementsByClassName('itemMenu');
for (let i = 0; i < divsSecundarias.length; i++) {
    console.log(divsSecundarias[i].textContent);
}

const secao1 = document.getElementById('secao1');
const titulo = secao1.querySelector('h2').textContent;
const paragrafo = secao1.querySelector('p').textContent;
console.log(titulo);
console.log(paragrafo);

const secao2 = document.getElementById('secao2');
const titulo2 = secao2.querySelector('h2').textContent;
const paragrafo2 = secao2.querySelector('p').textContent;
const detalhes = secao2.getElementsByClassName('listaDetalhes');
console.log(titulo2);
console.log(paragrafo2);
for (let i = 0; i < detalhes.length; i++) {
    console.log(detalhes[i].textContent);
}

const secao3 = document.getElementById('secao3');
const titulo3 = secao3.querySelector('h2').textContent;
const paragrafo3 = secao3.querySelector('p').textContent;
const textoLink = secao3.querySelector('a').textContent;
const link = secao3.querySelector('a').href;
console.log(titulo3);
console.log(paragrafo3);
console.log(textoLink);
console.log(link);



