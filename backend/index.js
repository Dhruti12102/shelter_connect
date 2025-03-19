import express from 'express';
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cors from 'cors';
import router from './router/auth-router.js';
import bodyParser from 'body-parser';
dotenv.config();
import connectDB from '../backend/utils/db.js';
connectDB(); // Ensure this is called to establish the connection
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
const Port = process.env.PORT || 3000;
app.use("/api/auth", router);
// Start the server
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});