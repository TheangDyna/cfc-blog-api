import express from "express";
import { getAllBlogs, getBlogByID } from "../controllers/blogController.js";
const router = express.Router();

router.route("/").get(getAllBlogs);

router.route("/:id").get(getBlogByID);

export const blogRoutes = router;
