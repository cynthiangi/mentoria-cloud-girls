const alunos = ["João", "Juliana", "Caio", "Ana"];
const notas = [10, 8, 7.5, 9];

const lista = [alunos, notas];

function exibeNotaEAluno(aluno) {
//Nessa condição a função 'includes' indica se o parametro esta dentro do array (retorna TRUE ou FALSE)
    if (lista[0].includes(aluno)) {
        //existe uma forma de desestruturar array de arrays que pode ser usado para simplificar todo o processo da função
        const [alunos, medias] = lista;
        //utilizamos a função 'indexOf' para retornar a primeira ocorrencia do parametro em indice (posição no array)
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem media ${mediaAluno}`);

    }else{
        console.log("Estudante não existe na lista!")
    }
}

exibeNotaEAluno("Ricardo");