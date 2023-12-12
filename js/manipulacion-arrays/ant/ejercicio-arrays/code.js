let arrayElementos = [
    "elemento A",
    "elemento B",
    "elemento C",
]


let formularioHTML = document.querySelector("#formulario")
formularioHTML.addEventListener("submit", (evento) => {
    evento.preventDefault()
    arrayElementos.splice(arrayElementos.indexOf(evento.target.txtBusqueda.value) + 1, 0, evento.target.txtNuevoElemento.value)
    mostrarElementos()
    evento.target.reset()
})


function mostrarElementos() {
    let listaHtml = document.querySelector("#listaElementos")
    listaHtml.innerHTML = ""
    arrayElementos.forEach((palabra, posicion) => {
        listaHtml.innerHTML += `<li class="list-group-item d-flex justify-content-between">
            ${posicion+1}. ${palabra} 
            <div class="d-flex">
                <button class="btn btn-warning fw-bold me-3 btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="alimentarInputEdicion(${posicion})">Editar</button>
                <button class="btn btn-danger fw-bold" onclick="borrarElemento(${posicion})">Borrar</button>
            </div>
        </li>`
    });
}
mostrarElementos()

// function editarValor(posicionDelElemento) {
//     let nuevoValor = prompt("Ingrese el nuevo valor")
//     arrayElementos[posicionDelElemento] = nuevoValor
//     mostrarElementos()
// }

let formularioEdicion = document.querySelector("#formEditar")
formularioEdicion.addEventListener("submit", (e) => {
    e.preventDefault()
    arrayElementos[e.target.posicionAActualizar.value] = e.target.valorNuevo.value
    mostrarElementos()
})

function alimentarInputEdicion(posicion) {
    document.querySelector("#posicionAActualizar").value = posicion
}

function borrarElemento(posicion) {
    arrayElementos.splice(posicion, 1)
    mostrarElementos()
}

document.querySelector("#btnBorrarTodo").addEventListener("click", () => {
    arrayElementos = []
    mostrarElementos()
})