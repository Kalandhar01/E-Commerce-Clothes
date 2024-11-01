import 'dotenv/config';
import mongoose from "mongoose";

const connectDB = async () =>{

    //check after the connection
    mongoose.connection.on('connected' , ()=> {
        console.log("DB CONNECTED");
    })

    //connect the db 
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

}

export default connectDB;