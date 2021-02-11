import bodyParser from 'body-parser';
import Server from './clases/server';
import router from './routes/router';
import cors from 'cors';


const server = new Server();

// MIDLEWHARE PARA BODY PARSER - PASAR A OBJETO JAVASCRIPT
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

// CORS
server.app.use( cors({ origin: true, credentials: true}) );

// RUTAS DE SERVICIOS
server.app.use('/', router)



server.start( () => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
})