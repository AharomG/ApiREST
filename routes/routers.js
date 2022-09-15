'use strict'

let Controller = require('../controllers/controller'),
    express = require('express'),
    router = express.Router();

router
    .get('/', Controller.getAll)
    .get('/search/:ID',Controller.getOne)
    .get('/add',Controller.addForm)
    .get('/update/:ID',Controller.addForm)
    .get('/elim',Controller.deleteForm)
    .post('/',Controller.save)
    .put('/update/:ID',Controller.save)
    .delete('/delete',Controller.delete);

module.exports = router;