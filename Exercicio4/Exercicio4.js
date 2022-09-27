const faturamentoEstado = require('./faturamentoEstados')
// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado
// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro 
// do valor total mensal da distribuidora.

function calculaPercentual(faturamento) {
    let somaTotal = 0
   for(let i = 0; i < faturamento.length; i++){
       somaTotal = somaTotal + faturamento[i].faturamento
    }
    for(let i = 0; i < faturamento.length;i++){ 
        console.log(`Porcentagem do faturamento de ${faturamento[i].estado} : ${(100 * faturamento[i].faturamento / somaTotal).toFixed(2)} %`)
    }
}
calculaPercentual(faturamentoEstado)