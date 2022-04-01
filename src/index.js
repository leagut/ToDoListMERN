const express = require('express');
const morgan =require('morgan');
const app = express();

//setting
app.set('port',process.env.PORT || 3000); //Sirve para que tome el puerto del servidor de la nube ,sino le dejamos por defecto el 3000

//middlewares (funciones que se ejecutan antes de que lleguen  las rutas)
app.use(morgan('dev'));
app.use(express.json());

//Routes (url de nuestro server)
app.use(require('./routes/task.routes'));


//static files  (archivos estaticos html js y css que iran en la carpeta public)


//starting server
app.listen(app.get('port'), ()=>{
    console.log(`server on ${app.get('port')}`);
});

