const axios = require('axios');
const { JSDOM } = require("jsdom");

const request = async () => {
    try {
        const response = await axios.get("https://esaj.tjce.jus.br/cposg5/search.do?conversationId=&paginaConsulta=0&cbPesquisa=NUMPROC&numeroDigitoAnoUnificado=0003917-04.2017&foroNumeroUnificado=0094&dePesquisaNuUnificado=0003917-04.2017.8.06.0094&dePesquisaNuUnificado=UNIFICADO&dePesquisa=&tipoNuProcesso=UNIFICADO");
        return response.data;
    } catch (error) {
        console.error("Erro ao fazer request:", error);
        return null;
    }
}
let codigoProcesso = '';
const request2 = async (value) => {
    try {
        const response = await axios.get(`https://esaj.tjce.jus.br/cposg5/show.do?processo.codigo=${value}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao fazer request:", error);
        return null;
    }
}

const parseHTML = async () => {
    const htmlContent = await request();

    if (htmlContent) {
        const dom = new JSDOM(htmlContent);
        const document = dom.window.document;
        const title = document.querySelector("title");
        if (title) {
            console.log(title.textContent);
        } else {
            console.log("Título não encontrado.");
        }
        const h5 = document.querySelector('h5').textContent;
        console.log(h5);
        if (h5 == 'Selecione o processo') {
            console.log('processo com pupup');
            const processoSelecionado = document.querySelector('#processoSelecionado');
            if (processoSelecionado) {
                const valorProcessoSelecionado = processoSelecionado.getAttribute('value');
                console.log('Valor do processo selecionado:', valorProcessoSelecionado);
                codigoProcesso = valorProcessoSelecionado;
            }
        }
    }
    const htmlContent2 = await request2(codigoProcesso);
    if (htmlContent2) {
        const dom2 = new JSDOM(htmlContent2);
        const document2 = dom2.window.document;
        const title2 = document2.getElementById("numeroProcesso").textContent;
        if (title2) {
            console.log(title2.trim());
        }
    }
}

parseHTML();
