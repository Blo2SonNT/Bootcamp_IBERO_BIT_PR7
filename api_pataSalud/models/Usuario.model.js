const mongoose = require('mongoose')

const usuarioModel = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('usuario', usuarioModel)

/*
{

    "nombre": "Pedro pascal",
    "correo": "pedrinchis@correo.com",
    "clave": "clave123"
    
}
*/