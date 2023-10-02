import express  from 'express';
import  configDotenv  from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
configDotenv.config({path:'./configuration/config.env'});
import ConnectToMongo  from "./database/db.js";
import Routes  from "./routes/route.js";

const app = express();

app.use(cors);
//const app.use(express.json());
//const app.use(express.urlencoded({extended:true}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/todos',Routes);

// database connection
ConnectToMongo();

// port initialize 
const PORT = process.env.PORT || 8000;

app.listen(PORT,(err) => {
    if (err) console.log(err);

    console.log(`Your server is running on ${PORT}`)
})
