const mongoose = require('mongoose');
async function conectarDB() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/tp1prog3', {
    });
    console.log('Conexión exitosa a la base de datos');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}
module.exports = conectarDB;
