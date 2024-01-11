const obtenerPokemones = async() => {
    let htmlContenido = document.querySelector("#contenido")
    try {
        let dataPokemones = await fetch('https://pokeapi.co/api/v2/pokemon')
        dataPokemones = await dataPokemones.json()
        let arrPokemones = dataPokemones.results
        const infoPokemones = []

        for (const data of arrPokemones) {
            let info = await obtenerInfoPokemon(data.url)
            infoPokemones.push(info)
        }
        console.log('infoPokemones:', infoPokemones)

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