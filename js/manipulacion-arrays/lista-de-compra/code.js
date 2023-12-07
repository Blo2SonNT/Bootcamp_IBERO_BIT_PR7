let arrayElementos = []
if (localStorage.getItem('listaDeCompras') != null) {
    arrayElementos = localStorage.getItem('listaDeCompras');
    arrayElementos = JSON.parse(arrayElementos)
} else {
    arrayElementos = []
}


let formularioHTML = document.querySelector("#formulario")
formularioHTML.addEventListener("submit", (evento) => {
    evento.preventDefault()
    if (evento.target.txtBusqueda.value == '') {
        arrayElementos.push(evento.target.txtNuevoElemento.value)
    } else {
        if (arrayElementos.indexOf(evento.target.txtBusqueda.value) != -1) {
            arrayElementos.splice(arrayElementos.indexOf(evento.target.txtBusqueda.value) + 1, 0, evento.target.txtNuevoElemento.value)
        } else {
            alert("El articulo buscado no existe")
        }
    }

    mostrarElementos()
    evento.target.reset()

    localStorage.setItem('listaDeCompras', JSON.stringify(arrayElementos))
})


function mostrarElementos() {
    let listaHtml = document.querySelector("#listaElementos")
    if (localStorage.getItem('listaDeCompras') != null) {
        listaHtml.innerHTML = ""
        arrayElementos.forEach((palabra, posicion) => {
            listaHtml.innerHTML += `<li class="list-group-item d-flex justify-content-between">
            <input type="checkbox">
            ${posicion+1}. ${palabra} 
            <div class="d-flex">
                <button class="btn btn-warning fw-bold me-3 btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="alimentarInputEdicion(${posicion})">Editar</button>
                <button class="btn btn-danger fw-bold" onclick="borrarElemento(${posicion})">Borrar</button>
            </div>
        </li>`
        });
    } else {
        listaHtml.innerHTML = `<h1>NO HAY ELEMENTOS GUARDADOS</h1>`
    }
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
    localStorage.setItem('listaDeCompras', JSON.stringify(arrayElementos))
    setTimeout(() => {
        mostrarElementos()
    }, 300);
}

document.querySelector("#btnBorrarTodo").addEventListener("click", () => {
    localStorage.clear()
    arrayElementos = []
    mostrarElementos()
})