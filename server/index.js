// Load dotenv
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config({path:'./configuration/config.env'});
const ConnectToMongo = require('./database/db');
const Routes = require('./routes/route');
const app = express();

// database initialize
ConnectToMongo();


app.use(express.json());
PORT = process.env.PORT || 8000;

// app.use(cors); // in case of cross url
//app.use(express.urlencoded({extended:true}));


// Available routes 
app.use('/api/',Routes);

app.listen(PORT, (err) => {
    if (err) console.log(err);

    console.log(`Your Server running at http://localhost:${PORT}`)
})