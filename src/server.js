
import bodyParser from "body-parser";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import allroute from './routes/index.js'; 

const app = express();
app.use(bodyParser.json());
app.use("/", allroute);

const port = process.env.PORT || 4045;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})

const databaseUrl = process.env.DATABASE_URI;
mongoose.connect(databaseUrl,{useNewUrlParser:true, useUnifiedTopology:true,})
.then(()=>{
    console.log("Database well connected");
})

export default app;