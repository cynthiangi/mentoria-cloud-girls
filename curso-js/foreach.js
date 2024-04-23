const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

// forEach é uma função que retorna outra função, essa função é acionada até terminar o parametro
//assim como o forOf, a função forEach chama o elemento e não o indice do array
//ele não retorna nada, apenas executa a função dentro dele
/*notas.forEach (function (nota) {
    somaNotas += nota;
})*/
//essa forma tambem funciona, pois a função é chamada para dentro do forEach, e então é executada
notas.forEach(somaNotas);

function somaNotas (nota) {
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media}`);