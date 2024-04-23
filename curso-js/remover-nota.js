const notas = [10, 6, 8, 5.5, 10];

notas.pop(); /*a função 'pop' exclui o ultimo elemento do array */

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2)); /* a função 'toFixed' arredonda a quantidade
    de casas desejada no calculo, no caso 2 casas apos a virgula */