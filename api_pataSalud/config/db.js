const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' })

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO)
            // el objeto de configuración de la conexión no es necesario a partir de node 4.0.0
            /*
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
       */

        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectarDB
