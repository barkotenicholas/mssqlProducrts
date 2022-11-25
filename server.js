import express from "express";
import dotenv from 'dotenv';
import router from './routes/product.js'
dotenv.config()
const app = express()

app.use(express.json())

app.use('/products',router)

app.listen(process.env.PORT,()=>{
    console.log(`server running at portt ${process.env.PORT}`);
})