// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;




const json = require('./dados.json')
let somaTotal = 0
let mediaFaturamento = 0
let faturamentoSuperior = 0
let menorValor = json[1].valor
let maiorValor = 0
for(let i = 0; i < json.length; i++){
    if (!json[i].valor == 0 ){
        mediaFaturamento++
    somaTotal = somaTotal + json[i].valor}
 }
 mediaFaturamento = (somaTotal/ mediaFaturamento).toFixed(4)
for ( let i = 0; i < json.length; i++){
    if (!json[i].valor == 0 ){
        if (json[i].valor > maiorValor){
            maiorValor = json[i].valor
        }
        if (json[i].valor < menorValor){
            menorValor = json[i].valor
        }    
        if(json[i].valor > mediaFaturamento){
            faturamentoSuperior++
        }
    
}   
}
console.log(`Maior valor de faturamento mensal: ${maiorValor}`)
console.log(`Menor valor de faturamento mensal: ${menorValor}`)
console.log(`Dias que o faturamento diário foi superior ao media mensal: ${faturamentoSuperior}`)
