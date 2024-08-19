import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();


// to configure the middle wares we use app.use()
// read documentation for more cors objects
// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
// }))


export { app };
