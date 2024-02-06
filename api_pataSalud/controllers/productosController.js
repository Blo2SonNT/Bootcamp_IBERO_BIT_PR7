const ProductosModel = require('../models/Productos.model')
exports.consultarProductos = async(req, res) => {
    try {
        let dataProductos = await ProductosModel.find()
        res.json(dataProductos)
    } catch (error) {
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

exports.crearProductos = async(req, res) => {
    try {
        console.log(req.body);
        let nuevoProducto = new ProductosModel(req.body)
        await nuevoProducto.save()
        res.send(nuevoProducto)
        console.log(nuevoProducto)
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}


exports.eliminarProducto = async(req, res) => {
    try {
        let dataProducto = await ProductosModel.findById(req.params.productoId)
        if (!dataProducto) {
            res.status(404).send({ error: "No se ha encontrado la mascota" })
            return
        }
        await ProductosModel.findOneAndDelete({ _id: req.params.productoId })
        res.status(200).send({ msg: "Eliminado correctamente" })
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

exports.actualizarProducto = async(req, res) => {
    try {

        if (req.params.productoId.length == 24) {
            let dataProducto = await ProductosModel.findById(req.params.productoId)

            if (!dataProducto) {
                res.status(404).send({ error: "No se ha encontrado el producto" })
                return
            }
            const { nombre, img, precio, descripcion, categoria } = req.body

            dataProducto.nombre = nombre
            dataProducto.img = img
            dataProducto.precio = precio
            dataProducto.descripcion = descripcion
            dataProducto.categoria = categoria

            dataProducto = await ProductosModel.findOneAndUpdate({ _id: req.params.productoId }, dataProducto, { new: true })
            res.json(dataProducto)
        } else {
            res.status(403).send({ error: "El id proporcionado no es valido" })
        }



    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}

exports.ConsultarUnProducto = async(req, res) => {
    try {
        let dataProducto = await ProductosModel.findById(req.params.productoId)
        if (!dataProducto) {
            res.status(404).send({ error: "No se ha encontrado el producto" })
        } else {
            res.send(dataProducto)
        }
    } catch (error) {
        console.log('error:', error)
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}


exports.consultarPorCategoria = async(req, res) => {
    try {
        let categoriaBusqueda = req.body.categoria
        let dataProductos = await ProductosModel.find({ categoria: categoriaBusqueda })
        res.json(dataProductos)
    } catch (error) {
        res.status(500).send({ error: "Ha ocurrido algo, comuníquese con el administrador" })
    }
}
