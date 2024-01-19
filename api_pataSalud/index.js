const express = require('express');
const app = express();


app.use('/api', require('./routes/routes'))

app.listen(4000, () => {
    console.log('Servidor ejecutándose en el puerto 4000');
})
