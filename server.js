'use strict'

let app = require('./app'),
    port = app.get('port'),
    server = app.listen(port, ()=>{listening(port)});

function listening(port){
    console.log(`App initiated in port: ${port}`);
}