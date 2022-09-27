// 1) Observe o trecho de código abaixo:
let INDICE = 13, SOMA = 0, K = 0;
while (K < INDICE) 
{
K = K + 1;  // 0 = 0 + 1 // 1 = 1 + 1 // 2 = 2 + 1 // 3 = 3 + 1 // 4 = 4 + 1
SOMA = SOMA + K; // 0 = 0 + 1 // 1 = 1 + 2 // 3 = 3 + 3 // 6 = 6 + 4 // 10 = 10 + 5//
}
console.log(SOMA)

//   Ao final do processamento, qual será o valor da variável SOMA?  = 91