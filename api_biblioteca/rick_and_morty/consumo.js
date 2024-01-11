// let urlApi = 'https://rickandmortyapi.com/api/character'

// let dataSerie = fetch(urlApi)
//     .then(respuestaAPI => respuestaAPI.json())
//     .then(dataRICKMORTY => {
//         console.log(dataRICKMORTY)
//         let htmlContenido = document.querySelector("#contenido")
//         let arrResultados = dataRICKMORTY.results
//         arrResultados.forEach(personaje => {
//             htmlContenido.innerHTML += `
//             <div class="col">
//                 <div class="card">
//                     <img src="${personaje.image}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h5 class="card-title">${personaje.name}</h5>
//                     </div>
//                 </div>
//             </div>
//             `
//         });
//     })



const obtenerPersonajes = async(urlApi = 'https://rickandmortyapi.com/api/character', busqueda = false) => {
    let htmlContenido = document.querySelector("#contenido")
    htmlContenido.innerHTML = ""
    document.querySelector("#divPaginacion").innerHTML = ""
    try {
        let dataSerie = await fetch(urlApi)
        let dataApi = await dataSerie.json()
        console.log(dataApi)
        let arrResultados = dataApi.results
        arrResultados.forEach(personaje => {
            htmlContenido.innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="${personaje.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.name}</h5>
                        </div>
                    </div>
                </div>
                `
        });
        let disabledBtnAnt = (dataApi.info.prev == null) ? 'disabled' : ''
        let disabledBtnSig = (dataApi.info.next == null) ? 'disabled' : ''

        document.querySelector("#divPaginacion").innerHTML = `
            <button class="btn btn-dark" ${disabledBtnAnt} data-url="${dataApi.info.prev}">Anterior</button>
            <button class="btn btn-dark" ${disabledBtnSig} data-url="${dataApi.info.next}">Siguiente</button>
        `
        asignarEventosPaginacion()
    } catch (error) {
        if (!busqueda) {
            htmlContenido.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Ah ocurrido algo! comunícate con el administrador
            </div>
            `
        } else {
            htmlContenido.innerHTML = `
            <div class="alert alert-warning" role="alert">
                No existen coincidencias
            </div>
        `
        }
        console.log(error)
    }
}


obtenerPersonajes()


function asignarEventosPaginacion() {
    let botones = document.querySelectorAll("[data-url]")
    botones.forEach(boton => {
        boton.addEventListener("click", (evento) => {
            obtenerPersonajes(evento.target.dataset.url)
        })
    });
}


document.querySelector("#busqueda").addEventListener("submit", (evento) => {
    evento.preventDefault()
    obtenerPersonajes(`https://rickandmortyapi.com/api/character/?name=${evento.target.txtBusqueda.value}`, true)
})

// console.log("A")
// setTimeout(() => {
//     console.log("B")
// }, 3000);
// console.log("C")




// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let numeroRandom = Math.random() * 5
//         if (numeroRandom > 2) {
//             resolve(`El numero es mayor a 2 ---> ${numeroRandom}`)
//         } else {
//             reject("Ta chiquito, eso dijo ella")
//         }
//     }, 3000);
// })



// async function consumoPromesa() {
//     await promesa.then(
//         (resultado) => { console.log(resultado) },
//         (error) => { console.error(error) }
//     )
//     console.log("A")
//     console.log("B")
// }
// consumoPromesa()