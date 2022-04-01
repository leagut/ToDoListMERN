const express = require('express'); //requiere express para crear rutas 
const router = express.Router();

router.get('/',(req,res) =>{   // crea una ruta para que al llegar una peticion a la ruta inicial de tipo get se responda 
    res.send('helo world');
});

module.exports = router;