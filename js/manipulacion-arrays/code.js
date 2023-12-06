//cSpell:disable
let transmilenio = [
    "paula",
    "gabriela",
    "tomas",
    "gustavo"
]

console.log(transmilenio)

transmilenio.push("Santiago", "Carlos", "Juan")
console.log(transmilenio)


transmilenio.pop()
console.log(transmilenio)

transmilenio.unshift("Layhan", "pepe", "fulano", "sutano")
console.log(transmilenio)

transmilenio.shift()
console.log(transmilenio)


console.log(transmilenio.indexOf("adriana"))

transmilenio.splice(transmilenio.indexOf("gabriela") + 1, 0, "ejemplo1", "ejemplo2")
console.log(transmilenio)

// let ejemploTexto = "Hola,mami como,estas"
// let ejemploArray = ejemploTexto.split(",")
// console.log(ejemploArray)


let formulario = document.querySelector("#formularioInput")
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    let nuevoArray = e.target.valorNuevo.value.split(",")
    nuevoArray = nuevoArray.reverse()
    nuevoArray.forEach(textos => {
        transmilenio.splice(transmilenio.indexOf(e.target.valorBuscado.value) + 1, 0, textos)
    })
    console.log(transmilenio)
    listarPasajeros()
})


function listarPasajeros() {
    let olHtml = document.querySelector("#listaPasajeros")
    olHtml.innerHTML = ''
    transmilenio.forEach((pasajero, posicion) => {
        olHtml.innerHTML += `
        <li class='d-flex justify-content-between align-items-center py-1 px-5'>
            ${pasajero} 
            <button class="btn btn-danger btn-sm" onclick="editarElemento(${posicion})">Editar</button>
        </li>`
    });
}


// let ejemplo = ['a', 'b', 'c', 'd', 'e', 'f']
// ejemplo.forEach((letra, posicion) => {
//     console.log(letra, '  ---->  ', posicion)
// });

listarPasajeros()


function editarElemento(posicionDelPasajero) {
    console.log(posicionDelPasajero)
}