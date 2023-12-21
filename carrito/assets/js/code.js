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



document.querySelector('#btnBorrarCarro').addEventListener('click', () => {
    Swal.fire({
        title: "Esta seguro?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, vaciar carrito",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {

            //aquí va su proceso para borrar el carrito 🙃

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
})


//condicionales ternarios


// if(nombre == "pepe"){
//     alert("Hola pepe")
// }else{
//     alert("Fuera de mi pagina")
// }



// let resultado = (nombre == "pepe") ?  alert("Hola pepe") :  alert("Fuera de mi pagina")