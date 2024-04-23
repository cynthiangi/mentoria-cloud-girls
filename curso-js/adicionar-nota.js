const notas = [10, 6, 8]; 

notas.push(7); /*a função 'push' serve para adicionar um novo elemento
    a um array
    mesmo sendo uma const, é possivel adicionar numeros, não podemos
    trocar*/

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

/*'const' é uma variavel de valor que nao pode ser mudado (constante)
'let' é uma variavel de escopo de bloco, se ela for declarada dentro de
uma funçao e chamada fora dela, terá um erro
'var' uma variavel mais generica, onde podemos declarar ela para todo
o JS*/