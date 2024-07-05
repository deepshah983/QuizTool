import express from 'express';
import { connection }  from './db/connection.js';
import 'dotenv/config';
import userRoutes from './routes/user.route.js';


// require('dotenv').config()

const app = express();
app.use(express.json());


const port = process.env.PORT || 3000;

app.use('/api/users', userRoutes);

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"Ok"
    })
})

app.listen(port,()=>{
    console.log(`Project run on this port ${port}`)
})