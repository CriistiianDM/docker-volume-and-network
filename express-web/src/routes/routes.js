//librerias
const { Router  } = require('express');
const { get_asignaturas } = require('../controllers/controllers');


//crear routes
const router = Router();


router.get('/', get_asignaturas);


//404
router.get('*', (req,res) => {
    res.send('404 not found');
});

//exportar
module.exports = router;