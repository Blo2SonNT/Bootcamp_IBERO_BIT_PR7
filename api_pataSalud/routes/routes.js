const express = require('express')
const router = express.Router()
const mascotasController = require('../controllers/mascotaController')
const medicamentosController = require('../controllers/medicamentosController')

router.get('/consultar', mascotasController.consultarMascotas);
router.get('/consultarMascota/:mascotaId', mascotasController.consultarUnaMascota);
router.post('/crear', mascotasController.crearMascota)
router.put('/actualizar/:mascotaId', mascotasController.actualizarMascota)
router.delete('/eliminar/:mascotaId', mascotasController.elminarMascota)


router.get('consultar/medicamentos', medicamentosController.consultarMedicamentos)
router.post('crear/medicamentos', medicamentosController.crearMedicamento)

module.exports = router
