const notas = [10, 9.5, 8, 7, 6];

//a função map, diferente do forEach, retorna algo
// const notasAtualizadas = notas.map(function (nota){
//     return nota++;
// })
// é muito comum utilizar o formato de arrow function em callbacks
// => representa uma SETA
// em casos de apenas uma instrução, podemos suprimir as {} e o 'return', não precisando mais do ;
// queremos por uma condição de não imprimir notas maiores que 10, podemos usar o if, ou o operador ternario, como no exemplo
const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1); //interpretamos a função map 'se nota + 1 >= 10 retorna 10, senão retorna nota + 1'

console.log(notasAtualizadas);

//a função map retorna um array com os resultados, pois ela sempre retorna algo
