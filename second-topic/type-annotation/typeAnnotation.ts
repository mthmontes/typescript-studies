// ==> Variáveis com type annotation. A vantagem é retornar um erro caso a saída seja diferente.

let nome:string = "Matheus Montes";
console.log(nome);

// ==> Arrays

let animais:string[] = ["Cachorro", "Gato", "Leão"];
console.log(animais);

// ==> Objetos

let carros: {
    nome: string;
    ano: number;
    preco: number
}

carros = { nome: "Corolla", ano: 2023, preco:900.00 }
console.log(carros)

// ==> Funções

const multiplicar = (num1: number, num2:number) => {
    return num1 * num2

}

console.log(multiplicar(10,4))

