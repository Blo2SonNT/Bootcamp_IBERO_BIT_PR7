const express = require('express')
const router = express.Router()
const mascotasController = require('../controllers/mascotaController')
const medicamentosController = require('../controllers/medicamentosController')
const productosController = require('../controllers/productosController')
const usuarioController = require('../controllers/UsuarioController')
const sessionController = require('../controllers/sessionController')


const mdJWT = require('../middleware/jwt')

// ? Rutas mascotas
router.get('/consultar', mascotasController.consultarMascotas);
router.get('/consultarMascota/:mascotaId', mascotasController.consultarUnaMascota);
router.post('/crear', mascotasController.crearMascota)
router.put('/actualizar/:mascotaId', mascotasController.actualizarMascota)
router.delete('/eliminar/:mascotaId', mascotasController.elminarMascota)

// ? Rutas productos
router.get('/consultar-productos', mdJWT.verificarToken, productosController.consultarProductos);
router.get('/consultar-producto/:productoId', productosController.ConsultarUnProducto);
router.post('/crear-producto', productosController.crearProductos)
router.put('/actualizar-producto/:productoId', productosController.actualizarProducto)
router.delete('/eliminar-producto/:productoId', productosController.eliminarProducto)
router.post('/consulta-x-categoria', productosController.consultarPorCategoria)

// ? Rutas X
router.get('consultar/medicamentos', medicamentosController.consultarMedicamentos)
router.post('crear/medicamentos', medicamentosController.crearMedicamento)
router.post('/ingreso', sessionController.genereToken)

// ? Rutas Usuario
router.get('/consultar-usuario', mdJWT.verificarToken, usuarioController.consultarUsuarios);
router.get('/consultar-usuario/:usuarioId', usuarioController.consultarUnUsuario);
router.post('/crear-usuario', usuarioController.crearUsuario)
router.put('/actualizar-usuario/:usuarioId', usuarioController.actualizarUsuario)
router.delete('/eliminar-usuario/:usuarioId', usuarioController.eliminarUsuario)


module.exports = router