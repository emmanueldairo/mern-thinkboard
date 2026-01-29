import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "../config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();
const PORT = process.env.PORT || 5001;
//const express = require('express');

const app = express();


app.use(cors("http://localhost:5173"));
app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', noteRoutes);

connectDB().then(() => {
   app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    }); 
})
//console.log("Connected to the database");


//mongodb+srv://emmadairo:WQv0phqk6XrBVCH0@cluster0.owfnzub.mongodb.net/?appName=Cluster0
//WQv0phqk6XrBVCH0