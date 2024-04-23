const notas = [10, 6.5, 8, 7.5];

var somaNotas = 0
for(let i = 0; i < notas.length; i++){
    let nota = notas[i];
    somaNotas = somaNotas + notas[i]; 
    //outra forma de fazer seria somaNotas += notas[i]. esse formato significa o mesmo que o anterior

}

const mediaNotas = somaNotas/notas.length;

console.log(mediaNotas);