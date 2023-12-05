// function cambiarImagen(rutaImagen) {
//     let imagen1 = document.querySelector("#imagenZoom")
//     imagen1.src = rutaImagen
// }

// let imagenMini1 = document.querySelector("#imgClick1")

// imagenMini1.addEventListener('click', (evento) => {
//     let imagen1 = document.querySelector("#imagenZoom")
//     imagen1.src = evento.target.src
// })

let imagenes = document.querySelectorAll(".imagenMini")

for (let x = 0; x < imagenes.length; x++) {
    imagenes[x].addEventListener('mouseenter', (eventicoPerron) => {
        let imagen1 = document.querySelector("#imagenZoom")
        imagen1.src = eventicoPerron.target.src
    })
}