require('dotenv').config()
const app = require("..src/app.js")

// Definir el puerto en el cual nuestro servidor va a correr
let port = 4000


//! FAVOR NO AGREGAR CÓDIGO DEBAJO DE ESTA LINEA
app.listen(port, () => console.log("Servidor corriendo en el puerto", port))