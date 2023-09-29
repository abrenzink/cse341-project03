const express = require('express');
const dotenv = require('dotenv');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');

const app = express();
dotenv.config();
const port = process.env.PORT;

app.use(bodyParser.json());

mongodb.initDb((err, db) => {
    try {
        app.use('/', require('./routes'));
        app.listen(port, () => {console.log('Db is listening and Node running on port ' + port)});
    }
    catch (err){
        console.log(err);
    }
});