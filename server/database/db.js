const  MONGODB_URI_STRING = process.env.MONGODB_URI_STRING;
const mongoose = require('mongoose');
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// 127.0.0.1 => localhost @@@ localhost generating errors in case of db connection sople use 127.0.0.1

const ConnectToMongo =  async () => {

    try {
        await mongoose.connect(MONGODB_URI_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to Mongo Succesfully!')
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = ConnectToMongo;

//  import mongoose from "mongoose";
//  const ConnectToMongo = () => {

//     mongoose.connect(process.env.MONGODB_URI_STRING,{useNewUrlParser:true});

//     mongoose.connection.on('connected',()=>{
//         console.log('Database connected successfully');
//     });

//     mongoose.connection.on('disconnected',()=>{
//         console.log('Database disconnected successfully');
//     });

//     mongoose.connection.on('error',()=>{
//         console.log('Error while connecting with the database ',error.message);
//     });

//  }

//  export default ConnectToMongo;
