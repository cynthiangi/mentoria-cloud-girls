const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//'Set' é um conjunto que armazena apenas dados distintos, não pode ter nada repetido
//Parece um Array mas não é
//const nomesAtualizados = new Set(nomes);

//para transformar um Set em Array:
//const novoNomes = [...nomesAtualizados];

const novoNomes = [...new Set(nomes)];

//console.log(nomesAtualizados);
console.log(novoNomes);