const { JSDOM } = require("jsdom");
const fs = require("fs");

const htmlContent = fs.readFileSync("apagar.html", "utf8");
const dom = new JSDOM(htmlContent);

const document = dom.window.document;

const title = document.querySelector("title");
console.log(title.textContent);

const tituloPrincipal = document.querySelector('h1');
console.log(tituloPrincipal.textContent);

const linhasFundoClaro = document.querySelectorAll("tr.fundoClaro");

// Verifica se existe pelo menos um elemento e seleciona o último
if (linhasFundoClaro.length > 0) {
    const ultimoFundoClaro = linhasFundoClaro[linhasFundoClaro.length - 1];

    // Agora você pode processar esse último elemento como necessário
    const cells = ultimoFundoClaro.querySelectorAll("td");
    const data = cells[0]?.textContent.trim() || "Data não disponível";
    const situacao = cells[1]?.textContent.trim() || "Situação não disponível";
    const decisao = cells[2]?.textContent.trim() || "Decisão não disponível";

    // Coloca em um array se necessário ou processa diretamente
    let julgamentoUltimo = [{ data, situacao, decisao }];

    console.log("Último Julgamento com fundoClaro:");
    console.log(julgamentoUltimo);
}

const linhaFundoEscuro = document.querySelectorAll("tr.fundoEscuro");

// Verifica se existe pelo menos um elemento e seleciona o último
if (linhaFundoEscuro.length > 0) {
    const ultimoFundoEscuro = linhaFundoEscuro[linhaFundoEscuro.length - 1];

    // Agora você pode processar esse último elemento como necessário
    const cells = ultimoFundoEscuro.querySelectorAll("td");
    const data = cells[0]?.textContent.trim() || "Data não disponível";
    const situacao = cells[1]?.textContent.trim() || "Situação não disponível";
    const decisao = cells[2]?.textContent.trim() || "Decisão não disponível";

    // Coloca em um array se necessário ou processa diretamente
    let julgamentoUltimo = [{ data, situacao, decisao }];

    console.log("Último Julgamento com fundoEscuro:");
    console.log(julgamentoUltimo);
}