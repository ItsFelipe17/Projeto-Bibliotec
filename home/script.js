
let nome = "Diogo e Felipe";
let idade = 25;

// CONCATENAÇÃO
console.log("Nome: " + nome + ", idade: " + idade);

//INERPOLAÇÃO
console.log(`Nome: ${nome}, idade: ${idade}`);

console.log(typeof nome)
console.log(typeof idade)

//OPERADORES RELACIONAIS

//Valida igualdade de valor
//"10" == 10 -> true

//Valida igualdade de valor e tipo de dado
//"10" === 10 -> false

//&&
// ||
//!

// let opcao = 2
// switch(opcao){
//case 1: damdmad
//       break;
// }

//Estrutura de repetição
let frutas = ["Maça", "Banana", "Acerola", "Uva"]

console.log(frutas);

frutas.forEach(function(fruta){
    console.log ("Nome: " + fruta);
})

frutas.forEach(fruta => console.log(fruta))