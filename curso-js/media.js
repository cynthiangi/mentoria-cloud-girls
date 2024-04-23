/*const nota1 = 10;
const nota2 = 6.5;
const nota3 = 8;
const nota4 = 7.5;*/

const notas = [10, 6.5, 8, 7.5];
/*um array em JS pode receber varias informações ao mesmo tempo.
 P.E: var listas = [10, "oi", true, [1, 2], {a:b}]
 Não é comum utilizar esse tipo de forma de array*/
 /*{a:b} é um objeto*/

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);
