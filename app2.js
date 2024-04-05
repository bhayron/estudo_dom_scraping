const { JSDOM } = require("jsdom");

// Substitua isso pelo seu HTML real
const htmlContent = `
<div style="padding-top: 10px;">
    <h2 class="subtitle">Julgamentos</h2>
</div>
<table style="margin-left:15px; margin-top:1px;" align="center" width="98%" border="0" cellspacing="0" cellpadding="1">
    <tr class="label"> 
        <td align="left" valign="top" width="150" >Data</td>
        <td align="left" valign="top" width="220" >Situação do julgamento</td>
        <td align="left" valign="top" width="*" >Decisão</td>
    </tr>
    <tr class="fundoEscuro" height="2">
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
<table style="margin-left:15px; margin-top:1px;" align="center" width="98%" border="0" cellspacing="0" cellpadding="1"  >
    <tr class="fundoClaro"> 
        <td valign="top" align="left" valign="top" width="150">
          16/12/2019
        </td>
        <td align="left" valign="top" width="220">
          Julgado
        </td>
        <td align="left" valign="top" width="*">
          Conheceram do recurso, para, no mérito, dar-lhe provimento conforme acórdão lavrado. - por unanimidade.
        </td>
    </tr>
</table>
`;

const dom = new JSDOM(htmlContent);
const document = dom.window.document;

const linhas = document.querySelectorAll("table:nth-of-type(2) tr.fundoClaro");

let julgamentosFor = [];
linhas.forEach(linha => {
    const cells = linha.querySelectorAll("td");
    const data = cells[0].textContent.trim();
    const situacao = cells[1].textContent.trim();
    const decisao = cells[2].textContent.trim();
    julgamentosFor.push({ data, situacao, decisao });
});
console.log(julgamentosFor);
