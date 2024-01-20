exports.consultarMascotas = (req, res) => {
    res.send({
        nombre: "Thomas",
        apellido: "Lopez",
        edad: 19
    })
}

exports.elminarMascota = (req, res) => {
    res.send("Estoy borrando algo")
}

exports.actualizarMascota = (req, res) => {
    res.send("Estoy actualizando algo")
}

exports.crearMascota = (req, res) => {
    res.send("Estoy creando algo")
}
