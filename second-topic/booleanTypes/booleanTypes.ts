// ==> Boolean(type object) ≠ boolean(type primitive)

let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

// ==> Exemplo 2

let concluido: boolean = false;

if (!concluido) {
    console.log("Tarefa concluída!")
} else {
    console.log("Tarefa pendente.")
}

