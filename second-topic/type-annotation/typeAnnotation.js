"use strict";
// ==> Variáveis com type annotation. A vantagem é retornar um erro caso a saída seja diferente.
let nome = "Matheus Montes";
console.log(nome);
// ==> Arrays
let animais = ["Cachorro", "Gato", "Leão"];
console.log(animais);
// ==> Objetos
let carros;
carros = { nome: "Corolla", ano: 2023, preco: 900.00 };
console.log(carros);
// Funções
const multiplicar = (num1, num2) => {
    return num1 * num2;
};
console.log(multiplicar(10, 4));
