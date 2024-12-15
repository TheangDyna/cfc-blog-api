// Import Express
import { config as loadEnv } from "dotenv";
import express from "express";
import connectDB from "./configs/db.js";

loadEnv();

const app = express();

// Connect to DB
connectDB();

export default app;
