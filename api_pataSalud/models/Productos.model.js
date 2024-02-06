const mongoose = require('mongoose')

const mascotasSchema = mongoose.Schema({
    precio: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('producto', mascotasSchema)

/*
{

    "img": "urlImagen",
    "precio": 15000,
    "descripcion": "ejemplo"
    
}
*/
