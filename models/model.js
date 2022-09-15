'use strict'

let conn = require('./connection'),
    FoodModel = () => {};

FoodModel.getAll = (cb) => {
    conn
        .find({})
        .exec((err, docs) => {
            if(err) throw err;
            cb(docs);
        });
};

FoodModel.getOne = (search, cb) => {
    conn
        .find(search)
        .exec((err,doc)=>{
            if(err) throw err;
            cb(doc)
        });
};
    
FoodModel.save = (doc,cb) => {
    conn
        .findOne({ ID: doc.ID })
        .exec((err,docs)=>{
            if(err) throw err;
            if(docs === null){
                conn
                    .insertMany([doc],(err,doc)=>{
                        if(err) throw err;
                        cb(doc);
                    });
            }else{
                conn
                    .updateOne({ ID: docs.ID},doc)
                    .exec((err,doc)=>{
                        if(err) throw err;
                        cb(doc);
                    });
            }
        });
};
    
FoodModel.delete = (doc,cb) => {
    conn
        .deleteOne(doc)
        .exec((err,res)=>{
            if(err) throw err;
            cb(res);
        });
};

module.exports = FoodModel;