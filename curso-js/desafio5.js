/* 
1) function concatArrays(...arrays) {
    return [].concat(...arrays); // operador spread para concatenar os arrays
}

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
const arraysConcatenados = concatArrays(arr1, arr2, arr3);
console.log(arraysConcatenados); // Saída: [1, 2, 3, 4, 5, 6] 

2) const valores = [1, 2, 3, 4, 5, 6];

const somaDeValores = valores.reduce((acumulador, valorAtual) =>{
    return acumulador + valorAtual
}, 0);

console.log(`A soma dos valores é: ${somaDeValores}`); 

3) const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const todasCores = coresLista1.concat(coresLista2);

const coresGerais = [... new Set(todasCores)];

console.log(coresGerais); 

4) const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const pares = []

for(var i = 0; i < valores.length; i++){
    if(valores[i] % 2 == 0){
        pares.push(valores[i])
    }
}

console.log(pares); 

5) const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const multiplos = valores.filter((valor) => valor % 3 == 0);

const validos = multiplos.filter((numero) => numero > 5);

console.log(validos); 

6) function somaElementosDoArray(arr) {
    return arr.reduce((acum, atual) => acum + atual, 0); // Soma os elementos do array
  }
  
  const listaNumeros = [1, 2, 3, 4, 5];
  const somaTotal = somaElementosDoArray(listaNumeros);
  console.log(somaTotal); // Saída: 15 */