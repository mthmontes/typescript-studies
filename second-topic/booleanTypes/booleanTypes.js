"use strict";
// ==> Boolean(type object) ≠ boolean(type primitive)
let tarefaConcluida = true;
let tarefaPendente = false;
console.log(tarefaConcluida);
console.log(tarefaPendente);
// ==> Exemplo 2
let concluido = false;
if (!concluido) {
    console.log("Tarefa concluída!");
}
else {
    console.log("Tarefa pendente.");
}
