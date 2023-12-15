const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


let botonesControlCantidad = document.querySelectorAll(".botonControl")
botonesControlCantidad.forEach(botoncito => {
    botoncito.addEventListener("click", (evento) => {
        let h5Producto = document.querySelector(`#${evento.target.dataset.idCantidad}`)
        let cantidadActual = h5Producto.innerText
        if (evento.target.dataset.accion == 'restar') {
            if (cantidadActual > 1) {
                cantidadActual = parseInt(cantidadActual) - 1
            }
        } else {
            cantidadActual = parseInt(cantidadActual) + 1
        }
        h5Producto.innerHTML = cantidadActual
    })
});