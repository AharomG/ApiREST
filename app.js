'use strict'

let express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = (process.env.PORT || 4000),
    restFul = require('method-override'),
    routes = require('./routes/routers'),
    viewDir = `${__dirname}/views`,
    publicDir = express.static(`${__dirname}/public`),
    app = express();

app
    .set('view engine','pug')
    .set('views', viewDir)
    .set('port',port)
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(restFul("_method"))
    .use(morgan('dev'))
    .use(routes)
    .use(publicDir);

module.exports = app;