document.querySelector("#inputCantidad").addEventListener("blur", (evento) => {
    let cantidadInputsSolicitados = evento.target.value
    let divInputs = document.querySelector("#listaInputs")
    divInputs.innerHTML = ''
    for (let x = 1; x <= cantidadInputsSolicitados; x++) {
        // divInputs.innerHTML = '<input type="text" class="form-control w-25" placeholder="' + x + '">'
        divInputs.innerHTML += `<input type="text" class="form-control w-25" placeholder="input nro ${x}">`
    }
})