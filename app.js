// importamos Express, un framework que sirve para hacer servidores en Node.js  
const express = require('express');  

// hacemos una instancia de la aplicación Express  
const app = express();  
 
app.use(express.json());  

// definimos una ruta GET en la raíz ('/') que responde con "Hello World!"  
app.get('/', (req, res) => {  
    res.send('Hello World!');  
});  

// exportamos la instancia de la aplicación para ser utilizada en otros archivos  
module.exports = app;  
