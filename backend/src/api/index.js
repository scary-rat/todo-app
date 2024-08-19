// imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/dbConnection.js";
import { app } from "./app.js";
import router from "./routes/toDoRoute.js";




app.use("/api", router)





// api/hello.js
app.get("/", (req, res) => {
  res.status(200).json({ message: 'Hello from backend!' });
})


app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
