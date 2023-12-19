const mongoose = require('mongoose');
const { db } = require('../config');

const connection = mongoose.connect(`mongodb://${db.host}:${db.port}/${db.database}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error al conectarse a la base de datos:', error.message);
  });

module.exports = connection;
