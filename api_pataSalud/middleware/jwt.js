const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'config.env' })

exports.verificarToken = (req, res, next) => {
    if (req.headers.authorization !== undefined) {
        let token = req.headers.authorization
        token = token.split(' ')
            /*
            [0] => bearer
            [1] => werwrwerzcbgfjyertw
            */

        if (!token) {
            return res.status(403).send({ error: "Token de seguridad invalido (no se envio token)" })
        }

        jwt.verify(token[1], process.env.SECRET_KEY_JWT, (err, decoded) => {
            if (err) {
                return res.status(403).send({ error: "Token de seguridad invalido" })
            }
            req.usuario = decoded
            next()
        })
    } else {
        return res.status(403).send({ error: "Token de seguridad no proporcionado" })
    }
}