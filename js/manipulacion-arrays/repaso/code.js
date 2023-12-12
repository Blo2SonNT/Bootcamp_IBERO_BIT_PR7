let notas = []
let formHtml = document.querySelector('#formulario')
formHtml.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log(evento)
    if (notas.length > 0) {
        if (evento.target.elementoBusqueda.value != '') {
            if (notas.indexOf(evento.target.elementoBusqueda.value) != -1) {
                notas.splice(notas.indexOf(evento.target.elementoBusqueda.value) + 1, 0, evento.target.elementoNuevo.value)
                let ulLista = document.querySelector("#listaDeNotas")
                ulLista.innerHTML = ''
                notas.forEach((elementoArray) => {
                    ulLista.innerHTML += `<li class="list-group-item">${elementoArray}</li>`
                });
            } else {
                alert("elemento no encontrado")
            }
        } else {
            notas.push(evento.target.elementoNuevo.value)
            let ulLista = document.querySelector("#listaDeNotas")
            ulLista.innerHTML = ''
            notas.forEach((elementoArray) => {
                ulLista.innerHTML += `<li class="list-group-item">${elementoArray}</li>`
            });
        }
    } else {
        notas.push(evento.target.elementoNuevo.value)
        let ulLista = document.querySelector("#listaDeNotas")
        ulLista.innerHTML = ''
        notas.forEach((elementoArray) => {
            ulLista.innerHTML += `<li class="list-group-item">${elementoArray}</li>`
        });
    }
})