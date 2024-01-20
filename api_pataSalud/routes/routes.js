const express = require('express')
const router = express.Router()
const mascotasController = require('../controllers/mascotaController')

router.get('/consultar', mascotasController.consultarMascotas);
router.post('/crear', mascotasController.crearMascota)
router.put('/actualizar', mascotasController.actualizarMascota)
router.delete('/eliminar', mascotasController.elminarMascota)

module.exports = router
