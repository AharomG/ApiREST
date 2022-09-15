'use strict'

let Model = require('../models/model'),
    AppController = () => {};

AppController.getAll = (req,res,next) => {
    Model.getAll((docs)=>{
        if(docs.length === 0){
            res.json(docs);
        }else{
            res.json(docs);
        }
    });
};

AppController.getOne = (req,res,next) => {
    let locals = { };
    locals.ID = req.params.ID;
    Model.getOne(locals, (doc)=>{
        if(doc === null){
            doc = [];
            res.json(doc);
        }else{
            res.json(doc);
        }
    });
};

AppController.save = (req,res,next) => {
    let locals = {
        ID : req.body.ID,
        price : req.body.price,
        description : req.body.description,
        name : req.body.name,
        img : (req.body.img).split(','),
    }
    Model.save(locals,(doc)=>{
        res.redirect('/');
    });
};

AppController.delete = (req,res,next) => {
    let local = { ID: req.body.ID }
    Model.delete(local,(del)=>{
        console.log(del);
        res.redirect('/');
    });
    
};

AppController.deleteForm = (req,res,next) => {
    res.render('del-form');
}

AppController.addForm = (req,res,next) => {
    if(req.params.ID === undefined){
        res.render('add-form');
    }else{
        let local = {ID: req.params.ID}
        Model.getOne(local,(doc)=>{
            local.data = doc;
            res.render('edit-form',local);
        })
    }
};

AppController.error404 = (req,res,next) => {};

module.exports = AppController;