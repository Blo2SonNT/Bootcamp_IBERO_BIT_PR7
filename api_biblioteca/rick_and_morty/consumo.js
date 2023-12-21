let urlApi = 'https://rickandmortyapi.com/api/character'

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



const obtenerPersonajes = async() => {
    let htmlContenido = document.querySelector("#contenido")
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
    } catch (error) {
        htmlContenido.innerHTML = `
        <div class="alert alert-danger" role="alert">
            Ah ocurrido algo! comunícate con el administrador
        </div>
        `
        console.log(error)
    }
}


obtenerPersonajes()






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