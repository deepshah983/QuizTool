import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Connected Successfully")
}).catch(()=>{
    console.log("Database not get Connected")
})

export default mongoose;