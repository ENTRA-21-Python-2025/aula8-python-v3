/** 
 * Arrays e Objetos
 */
var frutas = [
    "maça",
    "banana",
    "laranja",
];

// console.log(typeof frutas)

var pessoa = {
    nome: "Amora",
    idade: 1,
    email: "amora@sememail.com.br",
    senha: 123456,
    deAcordoTermos: false, // camelCase
    // criadoEm: new Date(),
    // "de-acordo-termos": ""
}

// pessoa.test = ""

frutas.push("pêra")

/** 
 * Declarando uma função
 */
// function nomeDaFuncao(valor, indice) {
//     // 
//     // const test = prompt("Informe seu nome")
//     alert("Valor passado: " + valor + " Indice:" + indice)
// }

// nomeDaFuncao("test", 0)

// var novoArray = frutas.map(function(valor, indice) {
//     console.log(indice, valor)
//     return valor + " ta vendo"
// })
// frutas.map(function(valor, indice) {
//     console.log(indice, valor)
//     return valor + " ta vendo"
// })

// console.log(novoArray)

// console.log(pessoa["nome"])
// console.log(pessoa.email)
// console.log(frutas)
// console.log(pessoa.criadoEm)
// console.log(pessoa["de-acordo-termos"])


/** 
 * Capturando elementos
 */

// var containerElemento = document.getElementById("container")
var buttonElemento = document.querySelector("button")
var inputElemento = document.querySelector("input")
var listaElemento = document.querySelector("ul")
// var itemElemento = document.querySelector("li")
var tarefas = []
// buttonElemento.innerHTML = "<span>teste</span>"
// // buttonElemento.innerText = "<span>teste</span>"
// console.log(itemElemento)

buttonElemento.addEventListener("click", function() {
    
    let valorInput = inputElemento.value
    
    tarefas.push(valorInput)

    inputElemento.value = ""

    const itemElemento = document.createElement("li")
    itemElemento.classList.add("list-group-item")
    itemElemento.innerText = valorInput

    listaElemento.appendChild(itemElemento)
    // listaElemento.innerHTML = "<li class='list-group-item'>" + valorInput + "</li>"
    const listaConvertida = JSON.stringify(tarefas)

    localStorage.setItem('tarefas', listaConvertida)
    
})


const listaTarefasStorage = localStorage.getItem("tarefas")

if(listaTarefasStorage) {
    /** @type {string[]} */
    const listaTarefaConvertida = JSON.parse(listaTarefasStorage)
    
    tarefas = listaTarefaConvertida

    listaTarefaConvertida.forEach(function(tarefa) {
        const itemElemento = document.createElement("li")
        itemElemento.classList.add("list-group-item")
        itemElemento.innerText = tarefa

        listaElemento.appendChild(itemElemento)
    })
}