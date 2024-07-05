import express from 'express'

// require('dotenv').config()

const app = express()

const port = 4000

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"Ok"
    })
})

app.listen(4000,()=>{
    console.log(`Project run on this port ${port}`)
})