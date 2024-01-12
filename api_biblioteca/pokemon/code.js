const obtenerPokemones = async(urlAPI = 'https://pokeapi.co/api/v2/pokemon', busqueda = false) => {
    let htmlContenido = document.querySelector("#contenido")
    htmlContenido.innerHTML = ''
    try {
        let infoPokemones
        let dataPokemones = await fetch(urlAPI)
        dataPokemones = await dataPokemones.json()
        if (!busqueda) {
            let arrPokemones = dataPokemones.results
            infoPokemones = []

            for (const data of arrPokemones) {
                let info = await obtenerInfoPokemon(data.url)
                infoPokemones.push(info)
            }
            console.log('infoPokemones:', infoPokemones)
        } else {
            infoPokemones = [dataPokemones]
        }

        infoPokemones.forEach(pokemonn => {
            htmlContenido.innerHTML += `
                <div class="col">
                    <div class="card">
                        <img src="${pokemonn.sprites.other.home.front_default}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${pokemonn.name}</h5>
                        </div>
                    </div>
                </div>
                `
        });

        if (!busqueda) {
            let disabledPREV = (dataPokemones.previous == null) ? 'disabled' : ''
            let disabledNEXT = (dataPokemones.next == null) ? 'disabled' : ''
            document.querySelector("#cajaPaginas").innerHTML = `
                <button class="btn btn-warning fw-bold" type="button" ${disabledPREV} data-url="${dataPokemones.previous}">Anterior</button>
                <button class="btn btn-warning fw-bold" type="button" ${disabledNEXT} data-url="${dataPokemones.next}">Siguiente</button>
            `
            asignarEventos()

        } else {
            document.querySelector("#cajaPaginas").innerHTML = ''
        }

    } catch (error) {
        htmlContenido.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Ah ocurrido algo! comunícate con el administrador
            </div>
        `
    }
}


obtenerPokemones()


async function obtenerInfoPokemon(urlPokemon) {
    try {
        let dataPokemon = await fetch(urlPokemon)
        dataPokemon = await dataPokemon.json()
        return dataPokemon
    } catch (error) {
        console.error("PASO ALGO -> ", error)
    }
}

function asignarEventos() {
    let botones = document.querySelectorAll("[data-url]")
    botones.forEach(boton => {
        boton.addEventListener("click", (evento) => {
            evento.preventDefault()
            let urlConsulta = evento.target.dataset.url
            obtenerPokemones(urlConsulta)
        })
    });
}

document.querySelector("#formularioBusqueda").addEventListener("submit", (evento) => {
    evento.preventDefault()
    if (evento.target.txtBusqueda.value != '') {
        obtenerPokemones(`https://pokeapi.co/api/v2/pokemon/${evento.target.txtBusqueda.value}`, true)
    } else {
        obtenerPokemones()
    }
})