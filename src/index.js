import express from 'express'
import 'dotenv/config'
import mongoose from './db/connection.js'
import { positionRoute } from './routes/position.route.js'

const app = express()

app.use(express.json())

app.use('/api',positionRoute)

const port = process.env.PORT || 5000



app.listen(port,()=>{
    console.log(`Project run on this port ${port}`)
})