const express = require('express')
const router = express.Router()

router.get('/consultar', (req, res) => {
    res.send({
        nombre: "Thomas",
        apellido: "Lopez",
        edad: 19
    });
})

router.post('/crear', (req, res) => {
    res.send("Estoy creando algo")
})

router.put('/actualizar', (req, res) => {
    res.send("Estoy actualizando algo")
})

router.delete('/eliminar', (req, res) => {
    res.send("Estoy borrando algo")
})

module.exports = router
