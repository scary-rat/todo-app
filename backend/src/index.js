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
})


// middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// CORS configuration
app.use(cors({
    origin: process.env.FRONTENDURL,
    credentials: true,
}))



app.use("/api", router)


// database connection vye paxi matra app run garni 
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.on("error", (error) => {
            console.log("Error", error)
            throw error
        })
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MONGO CONNECTION FAILED !!!", error);
        process.exit(1);
    });


