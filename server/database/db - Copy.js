 import mongoose from "mongoose";

 const ConnectToMongo = () => {

    mongoose.connect(process.env.MONGODB_URI_STRING,{useNewUrlParser:true});

    mongoose.connection.on('connected',()=>{
        console.log('Database connected successfully');
    });

    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected successfully');
    });

    mongoose.connection.on('error',()=>{
        console.log('Error while connecting with the database ',error.message);
    });

 }

 export default ConnectToMongo;