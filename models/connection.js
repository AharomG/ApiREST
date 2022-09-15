'use strict'

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    FoodsSchema = new Schema({
        ID: "string",
        price: "string",
        description: "string",
        name: "string",
        img: 'array',
    }, { collection: "food" }),
    conf = require('./db-config.json'),
    FoodModel = mongoose.model('food', FoodsSchema);

mongoose.connect(`mongodb:\/\/${conf.mongo.host}/${conf.mongo.db}`);    

module.exports = FoodModel;