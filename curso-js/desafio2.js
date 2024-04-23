/* 1) const array1 = ['pipoca', 'strogonoff', 'arroz'];
const array2 = ['batata frita', 'macarrão', 'salada'];

const arrayJunto = array1.concat(array2);

console.log(arrayJunto); 

2) const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parteNumeros = numeros.slice(3, 8);

console.log(parteNumeros); 

3) const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];

frutas.splice(2, 2, 'Kiwi', 'Pêssego');

console.log(frutas); 

4) const menuPrincipal = ['Filé a parmegiana', 'Pallard com Spaghetti', 'Risoto al Funghi'];
const menuSobremesas = ['Petit Gateau', 'Merengue', 'Banoffee'];

const menuCompleto = menuPrincipal.concat(menuSobremesas);

console.log(menuCompleto); 

5) const matriz = [];

const menuPrincipal = ['Filé a parmegiana', 'Pallard com Spaghetti', 'Risoto al Funghi'];
const menuAcompanhamentos = ['batata frita', 'macarrão', 'salada'];
const menuSobremesas = ['Petit Gateau', 'Merengue', 'Banoffee'];

matriz.push(menuPrincipal);
matriz.push(menuAcompanhamentos);
matriz.push(menuSobremesas);

console.log(
    `o elemento escolhido é: ${matriz[1][2]}`
);

matriz[2][1] = 'Torta Holandesa';

console.log(
    `o elemento novo é: ${matriz[2][1]}`
); */