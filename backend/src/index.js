// imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/dbConnection.js";
import { app } from "./app.js";
import router from "./routes/toDoRoute.js";

// dot env
dotenv.config({
    path: './env'
});

// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route setup
app.use("/api", router);

// Handle database connection and server request
let isConnected = false;

export default async function handler(req, res) {
    if (!isConnected) {
        try {
            await connectDB();
            isConnected = true;
            console.log("MongoDB connected");
        } catch (error) {
            console.error("MONGO CONNECTION FAILED !!!", error);
            return res.status(500).json({ message: "Database connection failed" });
        }
    }

    // Use Express app to handle the request
    return app(req, res);
}
