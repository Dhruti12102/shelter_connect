import mongoose from "mongoose";

const uri = "mongodb://127.0.0.1:27017/mernAuth"; // fixed

const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
        });
        console.log("Connection to DB successful");
    } catch (error) {
        console.error("Connection failed:", error.message);
    }
};

export default connectDB;
