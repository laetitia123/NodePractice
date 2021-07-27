import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
 
import userRoute from "./server/routes/UserRoutes.js";
dotenv.config({path:'./.env'});

const app = express();
app.use(bodyParser.json());

app.use("/freemantor/v1/user",userRoute);




//port:4040
const databaseUrl=process.env.DATABASE;

mongoose.connect(databaseUrl,
    {useNewUrlParser:true,
     useCreateIndex:true,
     useUnifiedTopology:true,
     useFindAndModify:false}).then(()=>console.log("Database connected succesfully"));
     
     

app.listen(4040,()=>{
    console.log('server is running on port 4040');
})

export default app;