import mongoose from "mongoose";

const acronmySchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description:String,

    
})

const acronmyDb = mongoose.model('acronym',acronmySchema);

export default acronmyDb;