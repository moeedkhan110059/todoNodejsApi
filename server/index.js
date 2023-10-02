// Load dotenv
const dotenv = require('dotenv');
const express = require('express');
//const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config({path:'./configuration/config.env'});
const ConnectToMongo = require('./database/db');
const Routes = require('./routes/route');
const app = express();
ConnectToMongo();
PORT = process.env.PORT || 8000;
// app.use(cors); // in case of cross url
app.use(express.json());
//app.use(express.urlencoded({extended:true}))
// Available routes 

app.use('/api/',Routes);

// app.use('/api/auth',require('./routes/auth'));
// app.use('/api/notes',require('./routes/notes'));


// app.get('/api/getAllTodo', (req, res) => {
//      res.status(200).json(req.body.data)
// })

app.listen(PORT, (err) => {
    if (err) console.log(err);

    console.log(`Your Server running at http://localhost:${PORT}`)
})