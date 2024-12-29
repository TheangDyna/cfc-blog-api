import { config as loadEnv } from "dotenv";
import express from "express";
import connectDB from "./configs/db.js";
import { blogRoutes } from "./routes/blogRoutes.js";

loadEnv();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to DB
connectDB();

// routes
app.use("/api/v1/blogs", blogRoutes);

export default app;
