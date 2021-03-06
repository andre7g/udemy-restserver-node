require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
//app.use = midlewares - funciones que se disparan siempre que hay peticiones
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json());
app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;
        console.log('Base de datos ONLINE');
    });
app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto:', process.env.PORT);
});