const listaEstudantes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 
'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 
'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 
'Daisy', 'Camilo'];

const grupo1 = listaEstudantes.slice(0, (listaEstudantes.length / 2)); 
/*os parametros devem indicar o incio de onde pegaremos a lista e o fim.
o indice passado no fim, como segundo parametro, ele é excluido da 
contagem para a funçao 'slice'*/
const grupo2 = listaEstudantes.slice(listaEstudantes.length / 2);
console.log(grupo1, grupo2);
