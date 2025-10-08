import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async (params) => {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
      console.log("ConnectionInstance", connectionInstance.connection.host);
      
    } catch (error) {
        console.log("Mongoose connection error", error);
        process.exit(1);
    }
}

export default connectDB;