// importamos la aplicación desde el archivo 'app.js'  
const app = require('./app');  

// definimos el puerto en el que el servidor escuchará las solicitudes  
const port = 8080;  

(async () => {  
    console.log('Starting server ...'); 

    // iniciamos el servidor en el puerto especificado  
    app.listen(port, () => {  
        console.log(`Server is running on port ${port}`); 
    });  
})();  