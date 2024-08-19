import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/dbConnection.js";
import router from "./routes/toDoRoute.js";

dotenv.config({
    path: './env'
});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Database connection and server start
connectDB()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("MONGO CONNECTION FAILED !!!", error);
        process.exit(1);
    });

// Routes
app.use("/api", router);

// Export app for Vercel
export default app;
