const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, "Rodrigo") /*'splice' consegue alterar(tirar e 
adicionar) o proprio array (inicia tirando os elementos, quantos elementos tira, 
e elementos que vai colocar)*/

console.log(listaEstudantes);

animaisDoAquario = ['baleia', 'polvo', 'golfinho', 'tubarão']

animaisDoAquario.splice(1, 0, 'sardinha')
animaisDoAquario.splice(3, 2, 'atum')

console.log(animaisDoAquario)
