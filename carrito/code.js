let itemsCarrito = [
    { nombre: "Control inalámbrico para PC", precio: 210000, id: 1, cantidad: 3, img: "assets/img/producto1.webp" },
    { nombre: "Teclado retroiluminado RGB multicolor", precio: 382000, id: 2, cantidad: 1, img: "assets/img/producto2.webp" },
    { nombre: "Mouse ergonomico", precio: 90000, id: 3, cantidad: 1, img: "assets/img/producto3.webp" },
]
let opciones = { style: 'decimal' };
let seccionItems = document.querySelector("#itemsCarrito")
let cantidadTotalItems = 0
let totalAPagar = 0
let totalAPagarConDescuento = 0
let descuentoCompra = 0

function recorrerProductos() {
    cantidadTotalItems = 0
    totalAPagar = 0
    totalAPagarConDescuento = 0
    descuentoCompra = 0
    seccionItems.innerHTML = ''
    itemsCarrito.forEach(item => {
        cantidadTotalItems = cantidadTotalItems + item.cantidad
        console.log('cantidadTotalItems:', cantidadTotalItems)
        totalAPagar = totalAPagar + (item.precio * item.cantidad)

        seccionItems.innerHTML += `
            <div class="card my-4">
                <button type="button" class="btn-close botonQuitar" id="tooltip_${item.id}" data-id-eliminar="${item.id}" aria-label="Close" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-custom-class="custom-tooltip" data-bs-title="Eliminar producto"></button>
                <div class="card-body d-flex justify-content-between">
                    <div class="d-flex justify-content-center">
                        <img src="${item.img}" class="imgProducto" alt="">
                        <div class="d-flex justify-content-center align-items-start flex-column ms-4">
                            <h5>${item.nombre}</h5>
                            <h6>$ ${item.precio.toLocaleString('es', opciones)}</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <button type="button" class="btn botonControl botonControlEstilo mx-4" data-accion="restar" data-id-cantidad="h5_${item.id}" data-id="${item.id}">
                            -
                        </button>
                        <h5 id="h5_${item.id}">${item.cantidad}</h5>
                        <button type="button" class="btn botonControl botonControlEstilo mx-4" data-accion="sumar" data-id-cantidad="h5_${item.id}" data-id="${item.id}">
                            +
                        </button>
                    </div>
                </div>
            </div>
        `


    });
    seccionItems.innerHTML += `
            <div class="d-flex justify-content-end">
                <button class="btn btn-danger px-5 py-3 fw-bold" id="btnBorrarCarro">Eliminar carrito</button>
            </div>
    `

    if (cantidadTotalItems == 0) {
        seccionItems.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <strong>Sin productos en el carrito</strong>
        </div>  
        `
    }

    document.querySelector("#cantidadProductos").innerHTML = cantidadTotalItems
    document.querySelector("#precioTotalAPagar").innerHTML = `$ ${totalAPagar.toLocaleString('es', opciones)}`
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

}

recorrerProductos()
asignarEventoSR()

function asignarEventoSR() {
    let botonesSR = document.querySelectorAll("[data-accion]")
    botonesSR.forEach(boton => {
        boton.addEventListener("click", (evento) => {
            let spanCantidad = evento.target.dataset.idCantidad
            let h5Cantidad = document.querySelector("#" + spanCantidad)
            let cantidadActualProducto = h5Cantidad.innerText
            let dataElemnto = itemsCarrito.find(item => item.id == evento.target.dataset.id)
            if (evento.target.dataset.accion == "sumar") {
                cantidadActualProducto = parseInt(cantidadActualProducto) + 1
                cantidadTotalItems = cantidadTotalItems + 1
                h5Cantidad.innerText = cantidadActualProducto
                totalAPagar = totalAPagar + dataElemnto.precio
            } else {
                if (cantidadActualProducto > 1) {
                    cantidadActualProducto = cantidadActualProducto - 1
                    cantidadTotalItems = cantidadTotalItems - 1
                    h5Cantidad.innerText = cantidadActualProducto
                    totalAPagar = totalAPagar - dataElemnto.precio
                }
            }
            document.querySelector("#cantidadProductos").innerHTML = cantidadTotalItems
            document.querySelector("#precioTotalAPagar").innerHTML = `$ ${totalAPagar.toLocaleString('es', opciones)}`
            validarDescuento()
        })
    });
}

let checkboxEnvio = document.querySelectorAll(".chkEnvio")
checkboxEnvio.forEach(chkInput => {
    chkInput.addEventListener("change", (evento) => {
        console.log(evento.target.id)
        if (evento.target.id == "envioPrioritario") {
            totalAPagar = totalAPagar + 5000
            evento.target.setAttribute("data-activo", "true")
        } else {
            let validador = document.querySelector("#envioPrioritario")
            if (validador.dataset.activo == "true") {
                totalAPagar = totalAPagar - 5000
                validador.setAttribute("data-activo", "false")
            }
        }
        document.querySelector("#precioTotalAPagar").innerHTML = `$ ${totalAPagar.toLocaleString('es', opciones)}`
        validarDescuento()
    })
});


function validarDescuento() {
    if (cantidadTotalItems >= 7) {
        totalAPagarConDescuento = totalAPagar * 0.7
        descuentoCompra = totalAPagar * 0.3
        document.querySelector("#precioTotalAPagar").innerHTML = ` <del>$ ${totalAPagar.toLocaleString('es', opciones)}</del> <br> $ ${totalAPagarConDescuento.toLocaleString('es', opciones)}`
        document.querySelector("#totalDescuento").innerHTML = `$ ${descuentoCompra.toLocaleString('es', opciones)}`
    } else {
        descuentoCompra = 0
        document.querySelector("#precioTotalAPagar").innerHTML = `$ ${totalAPagar.toLocaleString('es', opciones)}`
        document.querySelector("#totalDescuento").innerHTML = `$ 0`
    }
}

let optPagoTransferencia = document.querySelector("#pagoTransferencia")
optPagoTransferencia.addEventListener("click", () => {
    location.href = "https://ui.pse.com.co/ui/"
})

let optPagoTC = document.querySelector("#pagoTC")
optPagoTC.addEventListener("click", () => {
    document.querySelector("#formTC").classList.remove("d-none")
})

let btnBorrarTodo = document.querySelector("#btnBorrarCarro")
btnBorrarTodo.addEventListener("click", () => {
    Swal.fire({
        title: "Esta realmente seguro de eliminar todos los productos del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "No, cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector("#precioTotalAPagar").innerHTML = `$ 0`
            document.querySelector("#totalDescuento").innerHTML = `$ 0`
            seccionItems.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <strong>Sin productos en el carrito</strong>
            </div>  
            `
            document.querySelector("#cantidadProductos").innerHTML = 0
            Swal.fire({
                title: "Productos eliminados",
                icon: "success"
            });
        }
    });
})

function asignarEventoBorrar() {
    let btnEliminarProductos = document.querySelectorAll("[data-id-eliminar]")
    btnEliminarProductos.forEach(botonEliminar => {
        botonEliminar.addEventListener('click', (evento) => {
            let idProducto = evento.target.dataset.idEliminar
            let posicionProducto = itemsCarrito.findIndex(item => item.id == idProducto)
            const tooltip = bootstrap.Tooltip.getInstance(`#tooltip_${idProducto}`)
            tooltip.hide()

            itemsCarrito.splice(posicionProducto, 1)
            console.log(itemsCarrito)
            recorrerProductos()
            asignarEventoSR()
            asignarEventoBorrar()

        })
    });
}

asignarEventoBorrar()