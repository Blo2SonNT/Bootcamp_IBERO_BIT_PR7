const MascotasModel = require('../models/Mascotas.model')
exports.consultarMascotas = async(req, res) => {
    try {
        let dataMascotas = await MascotasModel.find()
        res.json(dataMascotas)
    } catch (error) {
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

exports.crearMascota = async(req, res) => {
    try {
        console.log(req.body);
        let nuevaMascota = new MascotasModel(req.body)
        await nuevaMascota.save()
        res.send(nuevaMascota)
        console.log(nuevaMascota)
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}


exports.elminarMascota = async(req, res) => {
    try {
        let dataMascota = await MascotasModel.findById(req.params.mascotaId)
        if (!dataMascota) {
            res.status(404).send({ error: "No se ha encontrado la mascota" })
            return
        }
        await MascotasModel.findOneAndDelete({ _id: req.params.mascotaId })
        res.status(200).send({ msg: "Eliminado correctamente" })
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

exports.actualizarMascota = (req, res) => {
    res.send("Estoy actualizando algo")
}

exports.consultarUnaMascota = async(req, res) => {
    try {
        let dataMascota = await MascotasModel.findById(req.params.mascotaId)
        if (!dataMascota) {
            res.status(404).send({ error: "No se ha encontrado la mascota" })
        } else {
            res.send(dataMascota)
        }
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}
