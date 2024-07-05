import mongoose from "mongoose";
import 'dotenv/config';


const connection = mongoose.connect(process.env.MONGO_URI).then(() => console.log("DB connection successful!")).catch(()=> console.log('DB not connected'));

export {connection}