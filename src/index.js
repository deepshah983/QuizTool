import express from 'express';
import { connection }  from './db/connection.js';
import 'dotenv/config';
import departmentRoute from './routes/department.route.js';

// require('dotenv').config()

const app = express()
app.use(express.json());


const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"Ok"
    })
})

app.use(departmentRoute)

app.listen(port,()=>{
    console.log(`Project run on this port ${port}`)
})