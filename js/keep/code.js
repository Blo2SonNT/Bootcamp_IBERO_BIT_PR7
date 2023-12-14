let productosLista, contador

if (localStorage.getItem("contador") == null) {
    contador = 0
    productosLista = []
} else {
    contador = localStorage.getItem("contador")
    productosLista = JSON.parse(localStorage.getItem("productosUsuario"))
}
contador = parseInt(contador)

listaProductos()

document.querySelector("#formulario").addEventListener("submit", (evento) => {
    evento.preventDefault()
    contador = contador + 1
    let itemNuevo = { id: contador, nombre: evento.target.nuevoProducto.value }
    productosLista.push(itemNuevo)
    localStorage.setItem("productosUsuario", JSON.stringify(productosLista))
    localStorage.setItem("contador", contador)
    listaProductos()
    asignarEvento('eliminar')
    asignarEvento('editar')
})

function listaProductos() {
    let ulLista = document.querySelector("#contenido")
    ulLista.innerHTML = ''
    productosLista.forEach(item => {
        ulLista.innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
            <div>${item.nombre}</div>
            <div>
                <i class="fa-solid fa-pencil text-primary mx-2 cursor btn-editar" title="Editar" data-editar="${item.id}"></i>
                <i class="fa-solid fa-trash text-danger mx-2 cursor btn-borrar" title="Eliminar" data-indice="${item.id}"></i>
            </div>
        </li>`
    });
}

asignarEvento('eliminar')
asignarEvento('editar')

function asignarEvento(tipoBoton) {
    if (tipoBoton == 'eliminar') {
        let botonesBorrar = document.querySelectorAll(".btn-borrar")
        botonesBorrar.forEach(boton => {
            boton.addEventListener("click", (evento) => {
                let busqueda = productosLista.findIndex(item => item.id == evento.target.dataset.indice)
                console.log(busqueda);
                productosLista.splice(busqueda, 1)
                localStorage.setItem("productosUsuario", JSON.stringify(productosLista))
                listaProductos()
                asignarEvento('eliminar')
                asignarEvento('editar')
            })
        });
    } else if (tipoBoton == 'editar') {
        let botonesActualizar = document.querySelectorAll(".btn-editar")
        botonesActualizar.forEach(boton => {
            boton.addEventListener("click", (evento) => {
                let inputFormulario = document.querySelector("#nuevoProducto")
                let dataElemnto = productosLista.find(item => item.id == evento.target.dataset.editar)
                inputFormulario.value = dataElemnto.nombre
                document.querySelector("#btnGuardar").classList.add('d-none')
                document.querySelector("#cajaBotones").innerHTML += `<div id="botonesEdicion">
                <button data-id-edicion="${evento.target.dataset.editar}" type="button" class="btn btn-dark fw-bold" id="btnEditar">Modificar</button>
                <button type="button" class="btn btn-danger fw-bold" id="btnCancelar">Cancelar</button>
                </div>
                `
                asignarEvento('cancelar')
                asignarEvento('enviarFormularioEditado')
            })
        });
    } else if (tipoBoton == 'cancelar') {
        document.querySelector("#btnCancelar").addEventListener("click", () => {
            document.querySelector("#botonesEdicion").innerHTML = ''
            document.querySelector("#btnGuardar").classList.remove('d-none')
        })
    } else {
        document.querySelector("#btnEditar").addEventListener("click", (evento) => {
            let inputFormulario = document.querySelector("#nuevoProducto")
            let dataElemnto = productosLista.find(item => item.id == evento.target.dataset.idEdicion)
            dataElemnto.nombre = inputFormulario.value
            let posicionElemento = productosLista.findIndex(item => item.id == evento.target.dataset.editar)
            productosLista[posicionElemento] = dataElemnto
            localStorage.setItem("productosUsuario", JSON.stringify(productosLista))
            listaProductos()
            asignarEvento('eliminar')
            asignarEvento('editar')
            document.querySelector("#botonesEdicion").innerHTML = ''
            document.querySelector("#btnGuardar").classList.remove('d-none')
        })
    }
}


// [
//     {id:1, nota: "pan", precio: 2500},
//     {id:2, nota: "pan", precio: 2500},
//     {id:3, nota: "pan", precio: 2500},
//     {id:4, nota: "pan", precio: 2500}
// ]


// let productosLista = []
// let contador = 0
// document.querySelector("#formulario").addEventListener("submit", (evento) => {
//     evento.preventDefault()

//     productosLista.push()
//     localStorage.setItem(`algo${contador}`, evento.target.nuevoProducto.value)
//     contador++
// })