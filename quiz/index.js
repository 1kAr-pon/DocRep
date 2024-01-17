require('dotenv').config();
const express = require("express");
const corsPolicy = require('cors');
const path = require("path");

const port = process.env.PORT;

const application = express();
application.use(corsPolicy());
application.use(express.json());
application.use(express.static(path.resolve(__dirname, "static")));

const start = async () => {
    try{
        application.listen(port);
        console.log(`App is running...`)
    } catch (ex){
        console.log(`Something go wrong. Ex: ${ex}`);
    }
}

start();
