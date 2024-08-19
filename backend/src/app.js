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

app.use(cors());

// configure json and set the limit of json file 
//previously we need to use body parser npm package to get the json format now express does it directly
app.use(express.json({ limit: "16kb" }))

// urlencoded is used for decoding the %,$,_,+,%20 type of data that we get from url
// extended for giving more nested objects we need to set extended true eg {extended: true, limits: {limit: {lim: "16kb"}}}
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// to store the files and images in our own server in folder named public
app.use(express.static("public"))

// to store cookies securely in browser of client
app.use(cookieParser())

export { app };