require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken')
const UsuarioModel = require('../models/Usuario.model')

exports.genereToken = async(req, res) => {
    const { correo, clave } = req.body
    const usuario = await UsuarioModel.findOne({ correo })
    if (!usuario) return res.status(401).json({ error: "Credenciales invalidas (correo)" })

    if (usuario.clave !== clave) return res.status(401).json({ error: "Credenciales invalidas (clave)" })

    const payload = {
        id: usuario._id,
        rol: 'admin'
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '1h' })
    return res.status(202).json({ token })
}