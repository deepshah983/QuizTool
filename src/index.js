import express from 'express';
import { connection }  from './db/connection.js';
import 'dotenv/config';
import userRoutes from './routes/user.route.js';

import { positionRoute } from './routes/position.route.js'

const app = express();
app.use(express.json());


app.use(express.json())

app.use('/api/users', userRoutes);

app.use('/api',positionRoute)

const port = process.env.PORT || 5000



app.listen(port,()=>{
    console.log(`Project run on this port ${port}`)
})