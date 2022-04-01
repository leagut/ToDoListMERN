const express = require('express'); //requiere express para crear rutas 
const router = express.Router();

const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

module.exports = router;