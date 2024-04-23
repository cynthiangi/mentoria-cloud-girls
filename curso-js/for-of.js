const notas = [10, 8, 6.5, 7.5];

let somaNotas = 0;

//como queremos somar todas as notas do array, podemos utilizar o forOf
//'let nota' irá guardar o elemento e não o indice do array pelo 'nota of notas' (do ingles - nota de notas)
//ele trabalha pegando nota por nota e realiza o comando dentro do nosso laço, até acabar o array
for(let nota of notas) {
    
    somaNotas += nota;

}

media = somaNotas / notas.length;

console.log(media);