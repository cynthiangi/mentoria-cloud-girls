/*
1) const arrayNums = [1, 2, 3, 4]

arrayNums.forEach(function (num, indice) {
    console.log(`Índice: ${indice} e Número: ${num}`)
}) 

2) function executaOperacaoEmArray(array, funcaoCallback) {
    return array.map(funcaoCallback); // Executa a função de callback em cada elemento do array
}

function dobraNumero(num) {
    return num * 2; // Função de exemplo para dobrar o número
}

const listaNumeros = [1, 2, 3];
const listaNumerosDobrados = executaOperacaoEmArray(listaNumeros, dobraNumero);
console.log(listaNumerosDobrados); // Saída: [2, 4, 6] 

3) const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8];

const numeroProcurado = 3;

let posição = -1;

for(var i = 0; i < arrayNums.length; i++){
    if(arrayNums[i] === numeroProcurado){
        posição = i;
        break;
    } 
}
console.log(`A posição do número ${numeroProcurado}: ${posição}`); 

4) const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];

  const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
  const alunoProcurado = todosAlunos.find(nome => nome === 'Cynthia');

if(alunoProcurado) {
    console.log('Aluno encontrado:', alunoProcurado);
} else{
    console.log('Aluno não encontrado.');
} 

5) const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(function (numero){
    console.log(numero * 3);
})

const indiceDoNumero18 = numeros.findIndex(numero => numero === 18);

if (indiceDoNumero18 !== -1) {
  console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
} else {
  console.log('O número 18 não está presente no array.');
} */