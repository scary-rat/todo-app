// imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/dbConnection.js";
import { app } from "./app.js";
import router from "./routes/toDoRoute.js";
console.log("1");
// dot env
dotenv.config({
    path: './env'
});
console.log("2");
// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
console.log("3");
// Route setup
app.use("/api", router);

// Handle database connection and server request
let isConnected = false;
console.log("4");
export default async function handler(req, res) {
    console.log("5");
    if (!isConnected) {
        try {
            console.log("6");
            await connectDB();
            isConnected = true;
            console.log("MongoDB connected");
        } catch (error) {
            console.error("MONGO CONNECTION FAILED !!!", error);
            return res.status(500).json({ message: "Database connection failed" });
        }
    }
    console.log("7");
    // Use Express app to handle the request
    return app(req, res);
}
