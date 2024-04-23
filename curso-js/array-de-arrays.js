const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]; /*como as variaveis são arrays, elas entram
no novo array como array dentro de array */

//console.log(lista);

//para acessar apenas um item de um array dentro de outro array:

console.log(
    `a aluna na posição 1 é: ${lista[0][1]}.
    a nota dela é: ${lista[1][1]}` //ao declarar um template string com o acento grave, podemos concatenar informações
    // o simbolo &{} indica um valor variavel que vai ser entregue 

)
