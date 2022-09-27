// 2) Dado a sequência de Fibonacci, 
// onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
// escreva um programa na linguagem que desejar onde, informado um número, 
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
let arrFibo = [0,1];
const geradorFibo = (tamanhoFibo, numeroInformado)  => {
for (let i = arrFibo.length; i < tamanhoFibo; i++) {
    //aumenta indice        //logica para fibo
    arrFibo[i] = arrFibo[i - 2] + arrFibo[i - 1];
    // 1        =     //0          +   //1 
    //arrFibo[2] = 1
    //3         =    // 1         +    //2
    //arrFibo[3] = 3
    // 5          =   //2           +   //3 
    //arrFibo[4] = 5
    //8                 //3          + //5       
    //arrFibo[5] = 8         
}
if(arrFibo.includes(numeroInformado)){
    return  `${arrFibo}\nO valor está presente na sequência`
}else{
    return `${arrFibo}\nO valor ${numeroInformado} não está presente na sequência`
}

}
console.log(geradorFibo(15, 35));