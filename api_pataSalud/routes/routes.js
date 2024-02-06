const express = require('express')
const router = express.Router()
const mascotasController = require('../controllers/mascotaController')
const medicamentosController = require('../controllers/medicamentosController')
const productosController = require('../controllers/productosController')

// ? Rutas mascotas
router.get('/consultar', mascotasController.consultarMascotas);
router.get('/consultarMascota/:mascotaId', mascotasController.consultarUnaMascota);
router.post('/crear', mascotasController.crearMascota)
router.put('/actualizar/:mascotaId', mascotasController.actualizarMascota)
router.delete('/eliminar/:mascotaId', mascotasController.elminarMascota)

// ? Rutas productos
router.get('/consultar-productos', productosController.consultarProductos);
router.get('/consultar-producto/:productoId', productosController.ConsultarUnProducto);
router.post('/crear-producto', productosController.crearProductos)
router.put('/actualizar-producto/:productoId', productosController.actualizarProducto)
router.delete('/eliminar-producto/:productoId', productosController.eliminarProducto)
router.post('/consulta-x-categoria', productosController.consultarPorCategoria)

// ? Rutas X
router.get('consultar/medicamentos', medicamentosController.consultarMedicamentos)
router.post('crear/medicamentos', medicamentosController.crearMedicamento)



module.exports = router
