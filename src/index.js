import express from 'express';
import { connection }  from './db/connection.js';
import 'dotenv/config';

// require('dotenv').config()

const app = express()

const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"Ok"
    })
})

app.listen(port,()=>{
    console.log(`Project run on this port ${port}`)
})