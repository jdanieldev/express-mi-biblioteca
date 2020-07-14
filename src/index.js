const express = require('express');
const validaciones = require('./validaciones');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/libro', validaciones.validar(validaciones.crearLibro), (req, res) => {

  res.json({
    status: 'ok'
  });
});

app.use((error, req, res, next) => {
  res.status(400).json({
    status: 'error',
    message: error.message
  });
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});
