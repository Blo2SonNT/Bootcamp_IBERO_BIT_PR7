const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')

conectarDB()
const app = express();
app.use(cors())
app.use(express.json());



app.use('/api', require('./routes/routes'))

app.listen(4000, () => {
    console.log('Servidor ejecutándose en el puerto 4000');
})