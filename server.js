import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
 
import userRoute from "./server/routes/UserRoutes.js";
import sessionRoute from "./server/routes/SessionRoutes.js";

dotenv.config({path:'./.env'});

const app = express();
app.use(bodyParser.json());

app.use("/freemantor/v1/user",userRoute);
app.use("/freemantor/v1/session",sessionRoute);



app.use('/',(req,res)=>{
    res.status(200).send({
        statu:200,
        message:"this is API do not exist "
    })
})

//port:4040
const port = process.env.PORT;

const databaseUrl=process.env.DATABASE;

mongoose.connect(databaseUrl,
    {useNewUrlParser:true,
     useCreateIndex:true,
     useUnifiedTopology:true,
     useFindAndModify:false}).then(()=>console.log("Database connected succesfully"));
     
     

// app.listen(4040,()=>{
//     console.log('server is running on port 4040');
// })
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})

export default app;