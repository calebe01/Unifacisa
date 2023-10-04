let compras = []; //criando um array vazio
compras.push('Abacate'); //Indice 0
compras.push('Areia de gato'); //Indice 1
compras.push('Papel A4');//Indice 2

//Acessando os elementos do array
console.log(compras[0]);
//removendo, a partir do índice
compras.splice(1, 1); 

//Quantos elementos tem no array?
console.log(compras.length);